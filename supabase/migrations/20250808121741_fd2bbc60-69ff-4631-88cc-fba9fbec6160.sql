-- Ensure pgcrypto is available for gen_random_uuid
create extension if not exists pgcrypto;

-- Contact messages table
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  page_path text,
  user_agent text,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

-- Allow anonymous inserts (public contact form)
create policy "Anyone can insert contact messages"
  on public.contact_messages
  for insert
  to anon
  with check (true);

-- Note: No SELECT/UPDATE/DELETE policies added so data is not publicly readable or modifiable.