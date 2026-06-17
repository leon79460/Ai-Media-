'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { motionEase } from './animation/Reveal';

// ✅ Your video is already in /public/ folder
const VIDEO_SRC = '/intro-video.mp4';
const POSTER_IMG = ''; // optional: "/video-poster.jpg"

export default function IntroVideo() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const frameRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [shellVisible, setShellVisible] = useState(false);
  const [shellEntered, setShellEntered] = useState(false);

  // Auto-play muted when section scrolls into view
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => { });
          setPlaying(true);
          setShellVisible(true);
          setShellEntered(true);
        } else {
          video.pause();
          setPlaying(false);
          setShellVisible(false);
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    const section = sectionRef.current;
    if (!frame || !section) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduceMotion) {
      frame.style.setProperty('--intro-video-scale', '1');
      frame.style.setProperty('--intro-video-y', '0px');
      frame.style.setProperty('--intro-video-opacity', '1');
      return;
    }

    let frameId = 0;
    const clamp = value => Math.min(Math.max(value, 0), 1);
    const easeOut = value => 1 - Math.pow(1 - value, 4);

    const updateSize = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const start = viewportHeight * 0.95;
      const end = viewportHeight * 0.05;
      const progress = clamp((start - rect.top) / (start - end));
      const eased = easeOut(progress);
      const scale = 0.82 + eased * 0.18;
      const translateY = (1 - eased) * 28;
      const opacity = 0.88 + eased * 0.12;

      frame.style.setProperty('--intro-video-scale', scale.toFixed(3));
      frame.style.setProperty('--intro-video-y', `${translateY.toFixed(1)}px`);
      frame.style.setProperty('--intro-video-opacity', opacity.toFixed(3));
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateSize);
    };

    updateSize();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const shellAnimate = shellVisible
    ? {
        opacity: 1,
        y: 0,
        transition: { duration: 0.76, ease: motionEase },
      }
    : shellEntered
      ? {
          opacity: 0.35,
          y: 10,
          transition: { duration: 0.28, ease: motionEase },
        }
      : undefined;

  return (
    <section
      id="intro"
      className="intro-video-section"
      style={{ backgroundColor: '#f5f5f5', padding: '90px 65px' }}
    >
      <motion.div
        ref={sectionRef}
        className="intro-video-shell"
        initial={
          shouldReduceMotion
            ? false
            : { opacity: 0, y: 34 }
        }
        animate={
          shouldReduceMotion
            ? { opacity: 1, y: 0 }
            : shellAnimate
        }
        transition={{
          duration: shouldReduceMotion ? 0 : 0.76,
          ease: motionEase,
        }}
        style={{
          width: '100%',
          maxWidth: '100%',
          margin: '0',
        }}
      >
        {/* Video card — asymmetric rounded corners from Figma */}
        <div
          ref={frameRef}
          className="intro-video-frame"
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '2 / 1',
            borderRadius: '8px 54px 8px 54px',
            overflow: 'hidden',
            background: '#050505',
            boxShadow: 'none',
            cursor: 'pointer',
            opacity: 'var(--intro-video-opacity, 0.88)',
            transform:
              'translateY(var(--intro-video-y, 28px)) scale(var(--intro-video-scale, 0.82))',
            transformOrigin: 'center top',
            willChange: 'transform, opacity',
            WebkitMaskImage: '-webkit-radial-gradient(white, black)',
            maskImage: 'radial-gradient(white, black)',
          }}
          onClick={togglePlay}
        >
          {/* The actual video — NO controls attribute = no browser bar */}
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            poster={POSTER_IMG || undefined}
            muted
            loop
            playsInline
            preload="metadata"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              borderRadius: 'inherit',
              filter: 'grayscale(1) contrast(1.08)',
              WebkitMaskImage: '-webkit-radial-gradient(white, black)',
              maskImage: 'radial-gradient(white, black)',
            }}
          />

          {/* Play/Pause overlay — shows briefly on click */}
          {!playing && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0,0,0,0.25)',
                borderRadius: 'inherit',
              }}
            >
              <div
                style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(4px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7-11-7Z" fill="#fff" />
                </svg>
              </div>
            </div>
          )}

          {/* Mute / Unmute button — bottom right corner */}
          <button
            className="intro-video-mute"
            onClick={e => {
              e.stopPropagation();
              toggleMute();
            }}
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: 'rgba(0,0,0,0.55)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              color: '#fff',
              fontSize: '18px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0,
              transform: 'translateY(4px)',
              transition: 'opacity 0.22s ease, transform 0.22s ease, background 0.2s',
              zIndex: 10,
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.8)')
            }
            onMouseLeave={e =>
              (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.55)')
            }
            title={muted ? 'Unmute' : 'Mute'}
            aria-label={muted ? 'Unmute video' : 'Mute video'}
          >
            {muted ? (
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 9v6h4l5 4V5L8 9H4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="m18 9 4 4m0-4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 9v6h4l5 4V5L8 9H4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 9.5a4 4 0 0 1 0 5M19.5 7a7 7 0 0 1 0 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

      </motion.div>
    </section>
  );
}
