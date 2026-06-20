'use client';

import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import 'lenis/dist/lenis.css';
import "./globals.css";
import LenisProvider from "./components/LenisProvider";
import ScrollEffects from "./components/ScrollEffects";

const GA_MEASUREMENT_ID = 'G-KWDT0F3N2Y';

const pageVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2, ease: [0.33, 1, 0.68, 1] },
  },
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <html lang="en">
      <body
        className="m-0 bg-[#f5f5f5] p-0 antialiased"
        suppressHydrationWarning
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <LenisProvider />
        <ScrollEffects />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            variants={shouldReduceMotion ? undefined : pageVariants}
            initial={shouldReduceMotion ? false : 'hidden'}
            animate="visible"
            exit={shouldReduceMotion ? undefined : 'exit'}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
