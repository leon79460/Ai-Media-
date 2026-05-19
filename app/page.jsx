// ============================================================
// app/page.jsx — COMPLETE HOME PAGE (all 10 sections)
//
// SECTION ORDER (top → bottom):
//   1. Navbar        — fixed nav bar
//   2. Hero          — big hero with sphere
//   3. IntroVideo    — intro video (your Intro video.mp4)  ← NEW
//   4. Process       — "One system. Built to compound."
//   5. Features      — Design, Dev, Marketing, Content 2×2
//   6. BeforeAfter   — draggable before/after slider
//   7. Pricing       — 3 plans with monthly/yearly toggle
//   8. Blogs         — latest blog posts
//   9. WhyUs         — AI Media vs Others comparison       ← NEW
//  10. Footer        — bottom footer
// ============================================================

'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroVideo from './components/IntroVideo';
import Process from './components/Process';
import Features from './components/Features';
import BeforeAfter from './components/BeforeAfter';
import Pricing from './components/Pricing';
import Blogs from './components/Blogs';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <IntroVideo />
      <Process />
      <Features />
      <BeforeAfter />
      <Pricing />
      <Blogs />
      <WhyUs />
      <Footer />
    </>
  );
}
