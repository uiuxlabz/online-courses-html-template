# Online Courses HTML Template — ECOURSES

A premium, framework-free HTML template for online education platforms and course marketplaces. Built with semantic HTML5, vanilla CSS custom properties, and lightweight vanilla JavaScript. No dependencies, no build step, no bloat.

---

## 📸 Screenshot

![Homepage Preview](screenshot.png)

## Live Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero with search, category grid, featured courses, testimonials, stats counter, CTA |
| About | `about.html` | Mission story, team members, stats row, CTA |
| Courses | `courses.html` | Filterable course catalog with pill-based category toggles |
| Contact | `contact.html` | Contact form with validation, info cards, map placeholder, FAQ teaser, CTA |

---

## Design Distinction — 6 Axis

### 1. Color System
Indigo primary (`#4338CA`) with amber accents (`#F59E0B`) on a charcoal foundation (`#1E1B2E`). Full gray scale from 50 to 800 for UI nuance. Success/error tokens for form feedback. All colors exposed as CSS custom properties on `:root`.

### 2. Typography
Dual-font system: **DM Sans** for headings and UI elements (bold, geometric character), **Inter** for body text (clean, highly legible at small sizes). Fluid type scale using `clamp()` from `0.7rem` to `4.25rem` for seamless responsive scaling without breakpoint jumps.

### 3. Spacing & Layout
8-point spacing grid (`--sp-xs` through `--sp-4xl`) with a `--sp-section` fluid vertical rhythm. Max-width container at `1200px` with auto margins. Grid helpers for 2, 3, 4, and auto-fill columns. Consistent padding/margin tokens throughout every component.

### 4. Component Architecture
BEM-style naming (`block__element--modifier`) applied consistently across all components: nav, hero, cards, badges, progress bars, pills, testimonials, stats, CTA sections, forms, and footer. Each component is self-contained with clear visual boundaries.

### 5. Interaction & Motion
Scroll-triggered reveal animations via IntersectionObserver (`data-reveal` with directional variants: up, left, right, scale). Animated stat counters with cubic ease-out. Hover transforms on cards (`translateY(-6px)`). Smooth nav background transition on scroll with backdrop blur. Pill filter transitions for the course catalog.

### 6. Responsive Strategy
Three-breakpoint system: 980px (tablet), 720px (mobile). Fluid typography and spacing via `clamp()` handle most scaling. Grid columns collapse gracefully. Burger menu with full-screen overlay on mobile. Hero search stacks vertically. Footer grid collapses to single column.

---

## Features

- Zero external dependencies (no frameworks, no libraries)
- Semantic HTML5 with ARIA labels
- CSS custom properties design system (easy to re-theme)
- BEM-methodology class naming
- Scroll-reveal animations (IntersectionObserver)
- Animated stat counters
- Category pill filters (vanilla JS, no page reload)
- Client-side form validation with success/error feedback
- Responsive burger menu with body scroll lock
- Auto-injecting copyright year (`data-year`)
- Smooth nav scroll state (transparent to frosted glass)
- All images served from `assets/img/` (no external image services)

---

## File Structure

```
online-courses-html-template/
├── index.html              # Home page
├── about.html              # About page
├── courses.html            # Course catalog
├── contact.html            # Contact page
├── README.md               # This file
└── assets/
    ├── css/
    │   └── base.css        # Complete design system + all component styles
    ├── js/
    │   └── main.js         # Vanilla JS: nav, filters, forms, counters, reveals
    └── img/
        ├── about.jpg
        ├── blog-1.jpg
        ├── blog-2.jpg
        ├── blog-3.jpg
        ├── blog-80x80.jpg
        ├── carousel-1.jpg
        ├── carousel-2.jpg
        ├── carousel-3.jpg
        ├── cat-1.jpg … cat-8.jpg
        ├── course-1.jpg … course-6.jpg
        ├── page-header.jpg
        ├── registration.jpg
        ├── team-1.jpg … team-4.jpg
        ├── testimonial-1.jpg … testimonial-4.jpg
        └── user.jpg
```

---

## Getting Started

1. Clone or download the folder
2. Open `index.html` in any modern browser — no server required
3. Edit content directly in the HTML files
4. Customize the design system by modifying CSS variables in `assets/css/base.css` (top of file)

---

## Browser Support

Modern evergreen browsers: Chrome, Firefox, Safari, Edge. Uses `IntersectionObserver`, CSS custom properties, `clamp()`, and `backdrop-filter` — all widely supported.

---

Let's Build Something Together :rocket:

<https://tally.so/r/q4q1L9>
