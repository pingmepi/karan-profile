# Portfolio Website Migration Plan: CSR → Hybrid SSR (Next.js)

## Executive Summary

This document outlines the complete migration strategy for converting the portfolio website from:
- **Current:** Vite + React (Client-Side Rendering)
- **Target:** Next.js 14+ (Hybrid SSR/CSR)

### Key Goals
1. Migrate to Next.js App Router with SSR for static content pages
2. Remove all Supabase dependencies
3. Replace contact form with Resend email API
4. Migrate photography images to local `/public/assets/photography/`
5. Preserve all existing routes and SEO metadata

---

## Phase 1: Analysis & Inventory

### Current Route Structure

| Route | Current File | SSR/CSR | Status |
|-------|-------------|---------|--------|
| `/` | `src/pages/Index.tsx` | SSR | Pending |
| `/projects` | `src/pages/Projects.tsx` | SSR | Pending |
| `/case-studies` | `src/pages/CaseStudies.tsx` | SSR | Pending |
| `/case-studies/:id` | `src/pages/CaseStudyDetail.tsx` | SSR | Pending |
| `/not-work` | `src/pages/NotWork.tsx` | SSR | Pending |
| `/photography` | `src/pages/Photography.tsx` | SSR | Pending |
| `/contact` | `src/pages/Contact.tsx` | CSR (form) | Pending |
| `*` | `src/pages/NotFound.tsx` | SSR | Pending |

### Supabase Dependencies Inventory

#### 1. Contact Form Submissions (Database)
- **File:** `src/pages/Contact.tsx`
- **Action:** Inserts into `contact_messages` table
- **Current Code:**
```typescript
const { error } = await supabase.from('contact_messages').insert({
  name, email, message, page_path, user_agent
});
```
- **Replacement:** Next.js API Route → Resend email to `kmandalam@gmail.com`

#### 2. Photography Images (Storage)
- **File:** `src/hooks/usePhotographyImages.ts`
- **Action:** Lists files from `photography` bucket, generates public URLs
- **Current Code:**
```typescript
const { data: files } = await supabase.storage.from('photography').list('');
supabase.storage.from('photography').getPublicUrl(file.name);
```
- **Replacement:** Static local images in `/public/assets/photography/` with manifest JSON

#### 3. Supabase Client & Types
- **Files:**
  - `src/integrations/supabase/client.ts` - Supabase client initialization
  - `src/integrations/supabase/types.ts` - Database type definitions
- **Action:** Complete removal

#### 4. Supabase Migrations & Config
- **Files:**
  - `supabase/config.toml` - Project configuration
  - `supabase/migrations/20250806124955_*.sql` - Storage bucket policies
  - `supabase/migrations/20250808121741_*.sql` - Contact messages table
- **Action:** Complete removal

### Files Consuming Supabase

| File | Supabase Usage | Replacement |
|------|---------------|-------------|
| `src/pages/Contact.tsx` | Database insert | Resend API route |
| `src/hooks/usePhotographyImages.ts` | Storage list/getPublicUrl | Local images + manifest |
| `src/pages/NotWork.tsx` | Uses `usePhotographyImages` hook | Update to local photos hook |
| `src/pages/Photography.tsx` | Uses `usePhotographyImages` hook | Update to local photos hook |

---

## Phase 2: Pre-Migration Preparation

### 2.1 Photography Images Setup
> **Note:** Supabase project is inaccessible. Images will be uploaded manually later.

- [ ] Create `/public/assets/photography/` directory structure
- [ ] Create placeholder `photos-manifest.json` with empty array
- [ ] Add `.gitkeep` to photography folder
- [ ] **POST-MIGRATION:** Upload images to `/public/assets/photography/`
- [ ] **POST-MIGRATION:** Update `photos-manifest.json` with actual image metadata

### 2.2 Create Backup
- [ ] Git branch for current working state (`pre-nextjs-migration`)
- [ ] Document all environment variables

### 2.3 Environment Variables Setup
```env
# Add to .env.local (local development)
# Add to Vercel Environment Variables (production)
RESEND_API_KEY=re_xxxxxxxx  # To be added later
```

### 2.4 Dependency Analysis
```json
// Dependencies to KEEP
"@radix-ui/*", "class-variance-authority", "clsx", "lucide-react",
"tailwind-merge", "tailwindcss-animate", "zod", "react-hook-form",
"sonner", "next-themes", "cmdk", "date-fns"

// Dependencies to REMOVE
"@supabase/supabase-js", "react-router-dom", "@tanstack/react-query",
"@vitejs/plugin-react-swc", "vite", "lovable-tagger"

// Dependencies to ADD
"next", "resend"
```

---

## Phase 3: Next.js Project Setup

### 3.1 Initialize Next.js App
```bash
npx create-next-app@latest karan-profile-next --typescript --tailwind --eslint --app --src-dir
```

### 3.2 Directory Structure
```
├── app/
│   ├── layout.tsx           # Root layout (Navigation, providers)
│   ├── page.tsx             # Home (/)
│   ├── projects/
│   │   └── page.tsx         # Projects list
│   ├── case-studies/
│   │   ├── page.tsx         # Case studies list
│   │   └── [id]/
│   │       └── page.tsx     # Dynamic case study
│   ├── not-work/
│   │   └── page.tsx
│   ├── photography/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx         # Contact form (client component)
│   ├── not-found.tsx        # 404 page
│   └── api/
│       └── contact/
│           └── route.ts     # Resend email endpoint
├── components/
│   ├── navigation.tsx
│   ├── ui/                  # shadcn components (copied)
│   └── ...
├── lib/
│   ├── utils.ts
│   └── photos.ts            # Local photos manifest reader
├── public/
│   └── assets/
│       ├── photography/     # Local photography images
│       └── ...
└── data/
    ├── photos-manifest.json
    └── case-studies.ts      # Static case study data
```

---

## Phase 4: File-by-File Migration

### 4.1 Core Configuration Files

| Current File | Next.js Equivalent | Changes Required |
|--------------|-------------------|------------------|
| `index.html` | `app/layout.tsx` | Move meta tags, fonts to layout |
| `vite.config.ts` | `next.config.js` | Complete rewrite |
| `tailwind.config.ts` | `tailwind.config.ts` | Minor path updates |
| `src/index.css` | `app/globals.css` | Copy as-is |
| `src/main.tsx` | (not needed) | Removed |
| `src/App.tsx` | `app/layout.tsx` | Providers moved to layout |
| `components.json` | `components.json` | Update paths for app router |

### 4.2 Page Components Migration

#### Home Page (`/`)
- **Source:** `src/pages/Index.tsx`
- **Target:** `app/page.tsx`
- **Type:** Server Component
- **Changes:**
  - Remove `import { Link } from 'react-router-dom'` → `import Link from 'next/link'`
  - Replace `<Seo>` component with Next.js metadata export
  - Mark as server component (default)

#### Projects Page (`/projects`)
- **Source:** `src/pages/Projects.tsx`
- **Target:** `app/projects/page.tsx`
- **Type:** Server Component
- **Changes:**
  - Replace React Router hooks with Next.js navigation
  - `useNavigate()` → `useRouter()` from `next/navigation`
  - Static metadata export

#### Case Studies List (`/case-studies`)
- **Source:** `src/pages/CaseStudies.tsx`
- **Target:** `app/case-studies/page.tsx`
- **Type:** Server Component
- **Changes:**
  - Move case studies data to `data/case-studies.ts`
  - Static metadata export

#### Case Study Detail (`/case-studies/:id`)
- **Source:** `src/pages/CaseStudyDetail.tsx`
- **Target:** `app/case-studies/[id]/page.tsx`
- **Type:** Server Component
- **Changes:**
  - `useParams()` → props from `params`
  - `useNavigate()` → `useRouter()`
  - Dynamic metadata with `generateMetadata()`
  - Use `generateStaticParams()` for static generation

#### Not Work Page (`/not-work`)
- **Source:** `src/pages/NotWork.tsx`
- **Target:** `app/not-work/page.tsx`
- **Type:** Hybrid (Server + Client)
- **Changes:**
  - Replace `usePhotographyImages` hook with local photos
  - Photo grid can be client component for interactivity

#### Photography Page (`/photography`)
- **Source:** `src/pages/Photography.tsx`
- **Target:** `app/photography/page.tsx`
- **Type:** Hybrid
- **Changes:**
  - Same as Not Work page

#### Contact Page (`/contact`)
- **Source:** `src/pages/Contact.tsx`
- **Target:** `app/contact/page.tsx`
- **Type:** Client Component
- **Changes:**
  - Add `'use client'` directive
  - Replace Supabase insert with fetch to `/api/contact`
  - Keep form state management

#### 404 Page
- **Source:** `src/pages/NotFound.tsx`
- **Target:** `app/not-found.tsx`
- **Type:** Server Component

### 4.3 Component Migration

| Component | Changes |
|-----------|---------|
| `Navigation.tsx` | Replace `NavLink` with Next.js `Link` + `usePathname()` |
| `Seo.tsx` | Replace with Next.js metadata API |
| `ui/*` | Keep as-is (shadcn components) |

### 4.4 Hooks Migration

| Hook | Current | Target |
|------|---------|--------|
| `usePhotographyImages.ts` | Supabase storage | Local manifest reader |


---

## Phase 5: Supabase Replacement Implementations

### 5.1 Contact Form → Resend Email

**API Route:** `app/api/contact/route.ts`

```typescript
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// RESEND_API_KEY must be set in environment variables
// Local: .env.local | Production: Vercel Environment Variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Portfolio Contact <contact@yourdomain.com>',
      to: 'kmandalam@gmail.com',
      subject: `New Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
```

**Client Component Update:**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitting(true);

  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  });

  if (res.ok) {
    toast.success("Message sent!");
    setName(""); setEmail(""); setMessage("");
  } else {
    toast.error("Something went wrong.");
  }
  setSubmitting(false);
};
```

### 5.2 Photography Images → Local Static

**Photos Manifest:** `data/photos-manifest.json`

```json
[
  {
    "id": "1",
    "name": "landscape_landscape_mountains.jpg",
    "url": "/assets/photography/landscape_landscape_mountains.jpg",
    "category": "Landscape",
    "aspect": "landscape"
  },
  // ... more photos
]
```

**Local Photos Hook:** `lib/photos.ts`

```typescript
import photosManifest from '@/data/photos-manifest.json';

export interface Photo {
  id: string;
  name: string;
  url: string;
  category: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export function getPhotos(): Photo[] {
  return photosManifest as Photo[];
}
```

**Server Component Usage:**
```typescript
import { getPhotos } from '@/lib/photos';

export default function NotWorkPage() {
  const photos = getPhotos();
  return <PhotoGrid photos={photos} />;
}
```

---

## Phase 6: SEO & Metadata Migration

### 6.1 Next.js Metadata Pattern

**Static Metadata (most pages):**
```typescript
// app/projects/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects – Karan Mandalam',
  description: 'AI-native product initiatives...',
  openGraph: {
    title: 'Projects – Karan Mandalam',
    description: 'AI-native product initiatives...',
    images: ['/assets/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pingmepi',
    images: ['/assets/og-image.png'],
  },
};
```

**Dynamic Metadata (case study detail):**
```typescript
// app/case-studies/[id]/page.tsx
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const caseStudy = getCaseStudyById(params.id);
  return {
    title: `${caseStudy.title} – Karan Mandalam`,
    description: caseStudy.overview.slice(0, 160),
  };
}
```

### 6.2 Root Layout Metadata

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://karanmandalam.com'),
  title: {
    default: 'Karan Mandalam – AI Product Leader',
    template: '%s | Karan Mandalam',
  },
  icons: {
    icon: [
      { url: '/assets/favicon-32x32.png', sizes: '32x32' },
      { url: '/assets/favicon-16x16.png', sizes: '16x16' },
    ],
    apple: '/assets/apple-touch-icon.png',
  },
  manifest: '/assets/manifest.webmanifest',
};
```



---

## Phase 7: Files to Delete

### Supabase-Related Files (Remove Completely)
- [ ] `src/integrations/supabase/client.ts`
- [ ] `src/integrations/supabase/types.ts`
- [ ] `supabase/config.toml`
- [ ] `supabase/migrations/20250806124955_62fa8631-1d64-4350-9e25-e9f58a2495ee.sql`
- [ ] `supabase/migrations/20250808121741_fd2bbc60-69ff-4631-88cc-fba9fbec6160.sql`
- [ ] Entire `supabase/` directory
- [ ] Entire `src/integrations/` directory

### Vite-Related Files (Remove Completely)
- [ ] `vite.config.ts`
- [ ] `index.html` (replaced by Next.js)
- [ ] `src/main.tsx`
- [ ] `src/App.tsx` (logic moves to layout.tsx)
- [ ] `src/App.css`
- [ ] `src/vite-env.d.ts`

### React Router (Remove Dependency)
- Package: `react-router-dom`
- All `NavLink`, `Link`, `useNavigate`, `useParams`, `BrowserRouter`, `Routes`, `Route` imports

---

## Phase 8: Environment Variables

### Current (Supabase) - TO BE REMOVED
```env
# No longer needed - Supabase project is inaccessible
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

### New (Resend) - TO BE ADDED
```env
# Required for contact form email delivery
# Add to .env.local for local development
# Add to Vercel Environment Variables for production
RESEND_API_KEY=re_xxxxxxxx
```

### Setup Instructions
1. Create `.env.local` file in project root (gitignored)
2. Add `RESEND_API_KEY=your_key_here`
3. In Vercel Dashboard → Project Settings → Environment Variables
4. Add `RESEND_API_KEY` with production key

---

## Phase 9: Testing Checklist

### Navigation & Routing
- [ ] All routes accessible: `/`, `/projects`, `/case-studies`, `/case-studies/*`, `/not-work`, `/photography`, `/contact`
- [ ] Navigation links work correctly
- [ ] Active state highlighting works
- [ ] Mobile menu opens/closes
- [ ] Logo links to home

### SEO & Metadata
- [ ] Page titles update per page
- [ ] Meta descriptions present
- [ ] Canonical URLs correct
- [ ] OG images render in social previews
- [ ] Twitter cards work
- [ ] JSON-LD structured data (if used)
- [ ] robots.txt accessible

### Design & Styling
- [ ] Dark theme applies correctly
- [ ] Tailwind classes work
- [ ] Custom CSS variables work
- [ ] Glass card effects render
- [ ] Hover animations work
- [ ] Responsive breakpoints (mobile/tablet/desktop)
- [ ] Fonts load correctly (Inter, Playfair Display)

### Forms & Interactivity
- [ ] Contact form submits successfully
- [ ] Email received at `kmandalam@gmail.com`
- [ ] Form validation works
- [ ] Toast notifications appear
- [ ] Loading states display

### Photography
- [ ] Images load from local directory
- [ ] Grid layout renders correctly
- [ ] Aspect ratios preserved
- [ ] Lazy loading works

### Case Studies
- [ ] List page shows all case studies
- [ ] Detail pages load correctly
- [ ] Accordion/expandable sections work
- [ ] Back navigation works

### Performance
- [ ] Pages load under 3s
- [ ] No console errors
- [ ] Images optimized (Next.js Image component)
- [ ] Lighthouse score maintained

---

## Phase 10: Rollback Strategy

### If Migration Fails

1. **Git Revert:**
   ```bash
   git checkout pre-nextjs-migration
   git push origin main --force  # Use with caution
   ```

2. **Supabase Restoration:**
   - Supabase project remains untouched during migration
   - Can restore environment variables and deploy original code

3. **DNS/Hosting:**
   - Keep Vercel deployment on standby
   - Can point domain back to original deployment

### Gradual Rollout
- Deploy to preview URL first
- Test all functionality before domain switch
- Keep old deployment live for 48 hours after switch

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Broken routes | Medium | High | Comprehensive route testing |
| SEO ranking drop | Low | Medium | Proper redirects, same URLs |
| Contact form failure | Medium | High | Test Resend in staging first |
| Styling differences | Low | Medium | Visual regression testing |
| Photography missing | Low | Medium | Verify all images downloaded |
| Build failures | Medium | Medium | Type checking before deploy |


---

## Appendix A: Supabase Features Summary

### Complete List of Supabase-Dependent Features

| Feature | Type | Current Implementation | Files Affected | Replacement |
|---------|------|----------------------|----------------|-------------|
| Contact Form Submission | Database Insert | `supabase.from('contact_messages').insert()` | `src/pages/Contact.tsx` | Resend API `/api/contact` |
| Photography Image List | Storage List | `supabase.storage.from('photography').list()` | `src/hooks/usePhotographyImages.ts` | Local JSON manifest |
| Photography Image URLs | Storage Public URL | `supabase.storage.from('photography').getPublicUrl()` | `src/hooks/usePhotographyImages.ts` | Local `/public/assets/photography/` |

### Database Tables in Use

| Table | Purpose | Fields | RLS Policies |
|-------|---------|--------|--------------|
| `contact_messages` | Store contact form submissions | `id`, `name`, `email`, `message`, `page_path`, `user_agent`, `created_at` | Anonymous insert only |

### Storage Buckets in Use

| Bucket | Purpose | Access | File Types |
|--------|---------|--------|------------|
| `photography` | Store photography images | Public read, authenticated write | `.jpg`, `.png`, `.webp` |

---

## Appendix B: Estimated Timeline

| Phase | Task | Duration | Dependencies |
|-------|------|----------|--------------|
| 2 | Pre-Migration Prep | 1 hour | None |
| 3 | Next.js Setup | 2 hours | Phase 2 |
| 4 | Page Migration | 4-6 hours | Phase 3 |
| 5 | Supabase Replacement | 2 hours | Phase 4 |
| 6 | SEO Migration | 1 hour | Phase 4 |
| 7 | Cleanup | 30 mins | Phase 5, 6 |
| 8 | Environment Variables | 15 mins | Phase 5 |
| 9 | Testing | 2-3 hours | Phase 7, 8 |
| 10 | Deployment | 1 hour | Phase 9 |

**Total Estimated Time:** 13-17 hours (spread across 2-3 days recommended)

---

## Appendix C: Commands Quick Reference

### Project Setup
```bash
# Create Next.js project
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --no-import-alias

# Install dependencies
npm install resend sonner lucide-react class-variance-authority clsx tailwind-merge @radix-ui/react-slot

# Install shadcn-ui
npx shadcn@latest init
npx shadcn@latest add button card badge accordion toast
```

### Migration Commands
```bash
# Create backup branch
git checkout -b pre-nextjs-migration
git push origin pre-nextjs-migration

# Download Supabase images (manual or use CLI)
# supabase storage download photography --output public/assets/photography/

# Remove old dependencies
npm uninstall @supabase/supabase-js react-router-dom @tanstack/react-query vite @vitejs/plugin-react-swc lovable-tagger

# Build and test
npm run build
npm run start
```

### Cleanup Commands
```bash
# Remove old files
rm -rf supabase/
rm -rf src/integrations/
rm vite.config.ts index.html src/main.tsx src/App.tsx src/App.css src/vite-env.d.ts
rm src/hooks/usePhotographyImages.ts
```

---

## Appendix D: Next.js Navigation Component

```typescript
// components/navigation.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Not Work', path: '/not-work' },
  { name: 'Contact', path: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-semibold text-foreground hover:text-primary transition-smooth">
            Karan
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.slice(1).map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  pathname === item.path ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {/* Mobile menu content... */}
    </nav>
  );
}
```

---

## Related Documents

- [Migration Tracker](./MIGRATION_TRACKER.md) - Live tracking of migration progress
- [README.md](../README.md) - Project documentation

---

## Post-Migration Tasks (To Complete After Refactor)

> **Add these items to the summary doc once the refactor is done:**

### Required Manual Steps
- [ ] **Upload Photography Images:** Add images to `/public/assets/photography/`
- [ ] **Update Photos Manifest:** Edit `data/photos-manifest.json` with actual image metadata
- [ ] **Add Resend API Key:** Add `RESEND_API_KEY` to Vercel Environment Variables
- [ ] **Test Contact Form:** Verify emails are received at `kmandalam@gmail.com`
- [ ] **Verify All Images Load:** Check photography pages display correctly

### Image Naming Convention
Photography images should follow this naming pattern:
```
{category}_{aspect}_{description}.{ext}

Examples:
- landscape_landscape_mountains.jpg
- street_portrait_citynight.jpg
- travel_square_temple.jpg

Categories: landscape, street, travel, portrait, etc.
Aspects: portrait, landscape, square
```

### Photos Manifest Format
```json
[
  {
    "id": "1",
    "name": "landscape_landscape_mountains.jpg",
    "url": "/assets/photography/landscape_landscape_mountains.jpg",
    "category": "Landscape",
    "aspect": "landscape"
  }
]
```