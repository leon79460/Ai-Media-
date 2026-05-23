import BeforeAfter from './components/BeforeAfter';
import Blogs from './blog/components/Blogs';
import Features from './components/Services';
import Footer from './components/Footer';
import Hero from './components/Hero';
import IntroVideo from './components/IntroVideo';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Process from './components/Process';
import WhyUs from './components/WhyUs';

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
