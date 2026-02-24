import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/components/**/*.{ts,tsx}",
		"./src/app/**/*.{ts,tsx}",
		"./src/lib/**/*.{ts,tsx}",
		"./src/hooks/**/*.{ts,tsx}",
		"./src/data/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			/* ── Kinetic Geometry Typography ── */
			fontFamily: {
				display: ['var(--font-syne)', 'sans-serif'],
				body: ['var(--font-dm-sans)', 'sans-serif'],
				mono: ['var(--font-jetbrains-mono)', 'monospace'],
				/* keep shadcn defaults working */
				sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
			},

			/* ── Bauhaus Color Palette ── */
			colors: {
				gallery: '#F2F0E9',
				ink: '#121212',
				klein: '#002FA7',
				signal: '#FF2400',
				bauhaus: '#FFD700',
				/* shadcn semantic tokens (CSS vars) */
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},

			/* ── Brutal Box Shadows ── */
			boxShadow: {
				'brutal': '8px 8px 0px 0px #121212',
				'brutal-hover': '4px 4px 0px 0px #121212',
				'brutal-klein': '8px 8px 0px 0px #002FA7',
				'brutal-klein-hover': '4px 4px 0px 0px #002FA7',
				'brutal-bauhaus': '8px 8px 0px 0px #FFD700',
			},

			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				none: '0px',
			},

			/* ── Animations ── */
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
