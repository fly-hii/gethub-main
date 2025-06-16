import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
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
			colors: {
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				tummytales: {
					cream: '#f8f5e6',
					pink: '#f8d7da',
					blue: '#cfe2ff',
					purple: '#e2d9f3',
					green: '#d1e7dd',
					yellow: '#fff3cd',
					gray: '#e2e3e5',
					dark: '#333333',
				},
				peach: {
					50: '#fef7f0',
					100: '#fdeee1',
					200: '#fadac2',
					300: '#f6c29e',
					400: '#f1a278',
					500: '#ec8b5e',
					600: '#dc6c3a',
					700: '#b85532',
					800: '#934530',
					900: '#773b2c',
				},
				lavender: {
					50: '#f8f6ff',
					100: '#f1ecff',
					200: '#e6dcff',
					300: '#d2bfff',
					400: '#b898ff',
					500: '#9c6bff',
					600: '#8b42ff',
					700: '#7c2eff',
					800: '#6a26cc',
					900: '#5921a3',
				},
				'baby-pink': {
					50: '#fef7f3',
					100: '#fdeee5',
					200: '#fbd9c9',
					300: '#f7bfa3',
					400: '#f19b7d',
					500: '#ea7a5e',
					600: '#d85a47',
					700: '#b5453a',
					800: '#923a34',
					900: '#78332f',
				},
				'baby-blue': {
					50: '#f0f9ff',
					100: '#e0f2fe',
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e',
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				handwriting: ['Indie Flower', 'cursive'],
			},
			backgroundImage: {
				'notebook': "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\"><rect width=\"100\" height=\"100\" fill=\"%23f8f5e6\" /><line x1=\"0\" y1=\"0\" x2=\"100\" y2=\"0\" stroke=\"%23d0d0d0\" stroke-width=\"1\"/><line x1=\"0\" y1=\"25\" x2=\"100\" y2=\"25\" stroke=\"%23d0d0d0\" stroke-width=\"1\"/><line x1=\"0\" y1=\"50\" x2=\"100\" y2=\"50\" stroke=\"%23d0d0d0\" stroke-width=\"1\"/><line x1=\"0\" y1=\"75\" x2=\"100\" y2=\"75\" stroke=\"%23d0d0d0\" stroke-width=\"1\"/><line x1=\"0\" y1=\"100\" x2=\"100\" y2=\"100\" stroke=\"%23d0d0d0\" stroke-width=\"1\"/><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"100\" stroke=\"%23d0d0d0\" stroke-width=\"1\"/><line x1=\"25\" y1=\"0\" x2=\"25\" y2=\"100\" stroke=\"%23d0d0d0\" stroke-width=\"1\"/><line x1=\"50\" y1=\"0\" x2=\"50\" y2=\"100\" stroke=\"%23d0d0d0\" stroke-width=\"1\"/><line x1=\"75\" y1=\"0\" x2=\"75\" y2=\"100\" stroke=\"%23d0d0d0\" stroke-width=\"1\"/><line x1=\"100\" y1=\"0\" x2=\"100\" y2=\"100\" stroke=\"%23d0d0d0\" stroke-width=\"1\"/></svg>')",
				'baby-gradient': 'linear-gradient(135deg, #fef7f3 0%, #f0f9ff 100%)',
				'baby-gradient-reverse': 'linear-gradient(135deg, #f0f9ff 0%, #fef7f3 100%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
