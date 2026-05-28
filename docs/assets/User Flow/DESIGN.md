---
name: Premium Anatine Aesthetic
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c6ab'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#999077'
  outline-variant: '#4d4632'
  surface-tint: '#e9c400'
  primary: '#fff5dc'
  on-primary: '#3a3000'
  primary-container: '#ffd600'
  on-primary-container: '#705d00'
  inverse-primary: '#705d00'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#d8fcff'
  on-tertiary: '#00373a'
  tertiary-container: '#00f0fc'
  on-tertiary-container: '#00696f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe170'
  primary-fixed-dim: '#e9c400'
  on-primary-fixed: '#221b00'
  on-primary-fixed-variant: '#544600'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#70f6ff'
  tertiary-fixed-dim: '#00dce7'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f53'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  duck-yellow-vibrant: '#FFD600'
  duck-yellow-muted: '#E5C100'
  charcoal-surface: '#121212'
  deep-grey: '#1E1E1E'
  stroke-grey: '#2C2C2C'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The visual identity of this design system centers on a "Premium Playful" narrative. It balances the whimsical nature of a duck-themed brand with high-end, sleek e-commerce execution. The personality is confident, modern, and high-energy, targeting a digitally native audience that appreciates clean interfaces with a distinct character.

The design style utilizes **Modern Minimalism** with subtle **Glassmorphism** cues. It relies on deep monochromatic backgrounds to make the vibrant "Duck Yellow" pop, creating a high-contrast environment that feels both sophisticated and energetic. Visual weight is managed through generous whitespace and a strict adherence to a "soft-tech" geometry—where sharp technical precision meets rounded, approachable corners.

## Colors

The palette is anchored by "Duck Yellow," a high-saturation primary color used strategically for calls to action, highlights, and brand reinforcement. This is set against an "Obsidian" backdrop composed of deep blacks and dark charcoal surfaces to ensure maximum "glow" and visual impact.

- **Primary:** The core yellow is reserved for high-priority interactions and key brand elements.
- **Surface Strategy:** We use a tiered dark mode system. The base layer is pure black (#000000), while elevated containers use Charcoal and Deep Grey to create depth without relying on traditional drop shadows.
- **Utility:** High-contrast white is used for primary typography to ensure legibility, while muted greys are used for secondary information to maintain a clean hierarchy.

## Typography

This design system uses a dual-font strategy to balance character and readability. **Plus Jakarta Sans** provides a modern, slightly rounded geometric feel for headlines that echoes the brand's friendly nature. **Inter** is used for body copy and UI labels to ensure clinical legibility and a technical, "sleek" finish.

Hierarchy is established through significant weight shifts. Headlines are bold and tightly tracked for a premium editorial look, while labels utilize uppercase styling and increased letter spacing to provide clear navigation anchors within the dark UI.

## Layout & Spacing

The layout follows a **Fluid Grid** model built on an 8px base unit. This ensures all components scale proportionately and maintain rhythmic alignment.

- **Desktop:** A 12-column grid with wide margins to create a "boutique" feel. Content is often centered or asymmetrical to break the monotony of standard e-commerce layouts.
- **Mobile:** A 4-column grid with tight 16px gutters to maximize screen real estate for product imagery.
- **Rhythm:** We prioritize large vertical gaps (64px+) between sections to allow the brand elements to breathe, reinforcing the premium aesthetic.

## Elevation & Depth

In this dark-themed system, depth is conveyed through **Tonal Layers** rather than heavy shadows. 

1. **Level 0 (Base):** Pure Black (#000000).
2. **Level 1 (Cards/Sections):** Deep Charcoal (#121212).
3. **Level 2 (Modals/Popovers):** Deep Grey (#1E1E1E) with a subtle 1px stroke (#2C2C2C).

Where shadows are necessary for high-intensity overlays, use a large-radius "Ambient Glow"—a soft black shadow with 40% opacity and 32px blur to suggest a gentle lift off the surface. Interactive elements may use a subtle yellow outer glow (5-10% opacity) on hover to indicate activity.

## Shapes

The shape language is defined by "The Perfect Radius." We avoid harsh 90-degree angles to keep the brand approachable, but we also avoid overly bubbly shapes to maintain the "sleek" requirement. 

A standard **0.5rem (8px)** radius is applied to buttons and small inputs. Larger components like product cards and containers utilize **1rem (16px)** to create a softer, more premium framing for photography. Iconography should follow a consistent corner radius of 2px for internal paths to match the container language.

## Components

- **Buttons:** Primary buttons are "Duck Yellow" with black text. They feature a smooth scale transition (0.98x) on click and a subtle brightness increase on hover.
- **Input Fields:** Dark backgrounds (#121212) with a subtle border. On focus, the border transitions to Duck Yellow with a 1px solid stroke.
- **Cards:** Product cards use the Level 1 surface elevation. Images should have a subtle 0.5s zoom-in transition on hover to create a tactile, premium feeling.
- **Chips/Badges:** Small, high-contrast pills. Use yellow backgrounds for "New" or "Sale" items, and dark grey backgrounds for secondary metadata.
- **Transitions:** All state changes (hover, focus, active) must use a **200ms ease-out** curve. This ensures the "smooth transitions" requested, preventing jarring flickers in the high-contrast dark environment.
- **Navigation:** A sticky top bar with a backdrop blur (blur: 10px, opacity: 80% black) to allow content to flow underneath while maintaining legibility.