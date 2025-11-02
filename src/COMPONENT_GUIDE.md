# Component Guide

## Quick Reference for All Custom Components

### 🎯 Interactive Components

#### MagneticButton
Physics-based button that follows cursor movement
```tsx
<MagneticButton className="bg-black text-white px-8 py-4 rounded-full">
  Click Me
</MagneticButton>
```

#### FloatingCard
3D tilt effect card that responds to mouse position
```tsx
<FloatingCard className="p-8 bg-white rounded-2xl">
  <YourContent />
</FloatingCard>
```

#### AnimatedBadge
Badge with animated icon and hover effects
```tsx
<AnimatedBadge icon={<Sparkles className="w-4 h-4" />}>
  YOUR_LABEL
</AnimatedBadge>
```

---

### ✨ Visual Effects

#### CursorGlow
Multi-layered gradient orb that follows cursor
```tsx
<CursorGlow />
```
*Place at root level - no configuration needed*

#### NoiseTexture
Subtle film grain texture overlay
```tsx
<NoiseTexture />
```
*Place at root level - adds visual depth*

#### ScrollProgress
Holographic gradient progress bar
```tsx
<ScrollProgress />
```
*Shows scroll position at top of page*

#### HeroIllustration
Custom animated SVG with blockchain elements
```tsx
<HeroIllustration />
```
*Self-contained animated illustration*

---

### 📐 Layout Components

#### BentoGrid
Modern bento-box feature grid
```tsx
<BentoGrid />
```
*Displays features in an asymmetric grid*

#### ProcessTimeline
Vertical timeline with animated reveals
```tsx
<ProcessTimeline />
```
*Shows process steps with deliverables*

#### TechStack
Infinite scrolling technology marquee
```tsx
<TechStack />
```
*Horizontal auto-scrolling tech badges*

---

### 🎬 Animation Components

#### ParallaxText
Parallax scrolling wrapper
```tsx
<ParallaxText offset={30}>
  <YourContent />
</ParallaxText>
```
- `offset`: Number - parallax intensity (default: 50)

#### AnimatedCounter
Number counter that animates on scroll
```tsx
<AnimatedCounter value={50} suffix="+" prefix="$" />
```
- `value`: Number - target value
- `suffix`: String - text after number
- `prefix`: String - text before number

#### RevealCard
Scroll-linked reveal animation
```tsx
<RevealCard delay={0.2}>
  <YourCard />
</RevealCard>
```
- `delay`: Number - animation delay in seconds

#### PageTransition
Page transition wrapper
```tsx
<PageTransition>
  <YourPage />
</PageTransition>
```

---

### 📝 Content Components

#### TestimonialCarousel
Auto-rotating testimonial slider
```tsx
<TestimonialCarousel />
```
*Testimonials defined in component file*

#### GradientText
Animated gradient text effect
```tsx
<GradientText className="text-4xl">
  Your Heading
</GradientText>
```

---

## 🎨 Animation Patterns

### Spring Physics
All interactive components use spring physics for natural motion:
```tsx
const spring = useSpring(value, {
  damping: 25,
  stiffness: 200,
  mass: 0.5
});
```

### Scroll Triggers
Components respond to scroll position using Intersection Observer and Motion's scroll hooks:
```tsx
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"]
});
```

### Stagger Delays
Sequential animations use incremental delays:
```tsx
transition={{ delay: index * 0.1 }}
```

---

## 🎯 Best Practices

1. **Performance**: All animations use GPU-accelerated transforms
2. **Accessibility**: Components respect `prefers-reduced-motion`
3. **Composition**: Build complex UIs by composing simple components
4. **TypeScript**: All components are fully typed
5. **Motion**: Use Motion (not Framer Motion) from `motion/react`

---

## 🚀 Usage Tips

### Combining Components
```tsx
<RevealCard>
  <FloatingCard>
    <MagneticButton>
      Combined Effects
    </MagneticButton>
  </FloatingCard>
</RevealCard>
```

### Parallax Sections
```tsx
<ParallaxText offset={20}>
  <motion.h2
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
  >
    Your Heading
  </motion.h2>
</ParallaxText>
```

### Scroll Animations
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Your Content
</motion.div>
```

---

## 📦 Import Path
```tsx
import { ComponentName } from "./components/ComponentName";
// Or use index import:
import { ComponentName } from "./components";
```
