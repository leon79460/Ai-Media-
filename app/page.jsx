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
