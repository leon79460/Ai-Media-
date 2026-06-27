'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'motion/react';
import Image from 'next/image';
import { motionEase } from '../animation/Reveal';

function calculateGap(width) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;

  if (width <= minWidth) return minGap;
  if (width >= maxWidth) {
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  }

  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

function getImageState(index, currentIndex, total, bounds) {
  const offset = (index - currentIndex + total) % total;
  const gap = calculateGap(bounds.width);
  const maxStickUp = gap * 0.8;
  const lift = bounds.height ? -(maxStickUp / bounds.height) * 100 : -12;

  if (offset === 0) {
    return {
      x: '0%',
      y: '0%',
      rotateY: 0,
      scale: 1,
      opacity: 1,
      zIndex: total + 1,
    };
  }

  const isNextCard = offset === 1;

  return {
    x: isNextCard ? '20%' : '-20%',
    y: `${lift}%`,
    rotateY: isNextCard ? -15 : 15,
    scale: 0.85,
    opacity: 1,
    zIndex: Math.max(1, total - offset),
  };
}

export function CircularTestimonials({
  testimonials = [],
  autoplay = false,
  colors = {
    name: '#0a0a0a',
    designation: '#64748b',
    testimony: '#334155',
    arrowBackground: '#141414',
    arrowForeground: '#f1f1f7',
    arrowHoverBackground: '#00A6FB',
  },
  fontSizes = {
    name: '32px',
    designation: '18px',
    quote: '18px',
  },
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplayStopped, setAutoplayStopped] = useState(false);
  const [stackBounds, setStackBounds] = useState({ width: 320, height: 400 });
  const containerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3, once: false });

  function handleNext() {
    setAutoplayStopped(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }

  function handlePrev() {
    setAutoplayStopped(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }

  useEffect(() => {
    if (!autoplay || autoplayStopped || !isInView || testimonials.length <= 1) {
      return undefined;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, autoplayStopped, isInView, testimonials.length]);

  useEffect(() => {
    if (currentIndex < testimonials.length) return;
    setCurrentIndex(0);
  }, [currentIndex, testimonials.length]);

  useEffect(() => {
    const node = imageContainerRef.current;
    if (!node) return undefined;

    const updateBounds = () => {
      setStackBounds({
        width: node.offsetWidth || 320,
        height: node.offsetHeight || 400,
      });
    };

    updateBounds();

    const resizeObserver = new ResizeObserver(updateBounds);
    resizeObserver.observe(node);
    window.addEventListener('resize', updateBounds);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateBounds);
    };
  }, []);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];
  const quoteWords = currentTestimonial.quote.split(' ');
  const imageTransition = {
    duration: 0.8,
    ease: motionEase,
  };
  const textTransition = {
    duration: 0.3,
    ease: motionEase,
  };

  return (
    <div
      ref={containerRef}
      className="circular-testimonials flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto gap-16 py-12"
    >
      <div
        ref={imageContainerRef}
        className="circular-testimonials-stack relative w-[320px] h-[400px] flex items-center justify-center flex-shrink-0"
        style={{ perspective: '1000px' }}
      >
        {testimonials.map((testimonial, index) => {
          const imageState = getImageState(
            index,
            currentIndex,
            testimonials.length,
            stackBounds,
          );

          return (
            <motion.div
              key={`${testimonial.name}-${index}`}
              className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl origin-center"
              initial={false}
              animate={imageState}
              transition={imageTransition}
              style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform, opacity',
              }}
            >
              <Image
                src={testimonial.src}
                alt={testimonial.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </motion.div>
          );
        })}
      </div>

      <div className="circular-testimonials-copy flex-1 flex flex-col items-start text-left min-h-[300px] justify-center pl-4 md:pl-12">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={textTransition}
            className="circular-testimonials-text flex flex-col w-full"
            style={{ willChange: 'transform, opacity' }}
          >
            <div className="flex flex-col mb-8">
              <span
                className="font-bold mb-2"
                style={{ color: colors.name, fontSize: fontSizes.name }}
              >
                {currentTestimonial.name}
              </span>
              <span
                className="font-normal"
                style={{ color: colors.designation, fontSize: fontSizes.designation }}
              >
                {currentTestimonial.designation}
              </span>
            </div>

            <p
              className="leading-loose font-normal"
              style={{ color: colors.testimony, fontSize: fontSizes.quote }}
            >
              {quoteWords.map((word, index) => (
                <motion.span
                  key={`${currentTestimonial.name}-${word}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: motionEase,
                    delay: index * 0.02,
                  }}
                  style={{ display: 'inline-block' }}
                >
                  {word}
                  {index < quoteWords.length - 1 ? '\u00a0' : null}
                </motion.span>
              ))}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="circular-testimonials-arrows flex gap-4" style={{ marginTop: 20 }}>
          <button
            onClick={handlePrev}
            className="w-14 h-14 flex items-center justify-center rounded-full transition-colors duration-300 group shadow-md"
            style={{ backgroundColor: colors.arrowBackground, color: colors.arrowForeground }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.arrowHoverBackground)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.arrowBackground)}
            aria-label="Previous testimonial"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform group-hover:-translate-x-1 transition-transform"
              style={{ transitionDuration: '260ms' }}
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="w-14 h-14 flex items-center justify-center rounded-full transition-colors duration-300 group shadow-md"
            style={{ backgroundColor: colors.arrowBackground, color: colors.arrowForeground }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.arrowHoverBackground)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.arrowBackground)}
            aria-label="Next testimonial"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform group-hover:translate-x-1 transition-transform"
              style={{ transitionDuration: '260ms' }}
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
