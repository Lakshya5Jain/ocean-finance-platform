import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
			padding: {
				DEFAULT: '80px',
				sm: '20px',
				md: '40px',
				lg: '80px',
			},
			screens: {
				'2xl': '1440px'
			}
		},
		extend: {
			fontFamily: {
				'montserrat': ['Montserrat', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
				'space-grotesk': ['Space Grotesk', 'sans-serif'],
				'orbitron': ['Orbitron', 'sans-serif'],
			},
			colors: {
				// Deep Ocean Brand Colors
				'deep-navy': '#052C60',
				'bright-azure': '#2C7EF4',
				'soft-gray': '#E5E7EB',
				'near-black': '#0B0E28',
				'light-text': '#F9FAFB',
				
							// Gradient colors - using only specified brand colors
			'gradient-start': '#2C7EF4',
			'gradient-mid': '#1B5FCE',  // Darker shade of bright-azure
			'gradient-end': '#052C60',  // Deep navy
				
				// Existing shadcn colors
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#052C60',
					foreground: '#ffffff'
				},
				secondary: {
					DEFAULT: '#2C7EF4',
					foreground: '#ffffff'
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
			spacing: {
				'section-y': '100px',
				'gutter': '80px',
			},
			borderRadius: {
				lg: '12px',
				md: '8px',
				sm: '4px'
			},
			fontSize: {
				'display-xl': ['96px', { lineHeight: '1.1', letterSpacing: '0.5px' }],
				'display-lg': ['72px', { lineHeight: '1.1', letterSpacing: '0.5px' }],
				'display-md': ['48px', { lineHeight: '1.1', letterSpacing: '0.5px' }],
				'body': ['18px', { lineHeight: '1.6' }],
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
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'gradient-flow': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.12s ease-out',
				'gradient-flow': 'gradient-flow 6s ease-in-out infinite',
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
