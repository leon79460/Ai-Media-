'use client';
import { useEffect, useRef, useState } from 'react';

// ✅ Your video is already in /public/ folder
const VIDEO_SRC = '/intro-video.mp4';
const POSTER_IMG = ''; // optional: "/video-poster.jpg"

export default function IntroVideo() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const frameRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

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
          section.style.animation = 'revealUp 0.8s ease forwards';
        } else {
          video.pause();
          setPlaying(false);
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
    const easeOut = value => 1 - Math.pow(1 - value, 3);

    const updateSize = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const start = viewportHeight * 0.95;
      const end = viewportHeight * 0.05;
      const progress = clamp((start - rect.top) / (start - end));
      const eased = easeOut(progress);
      const scale = 0.62 + eased * 0.38;
      const translateY = (1 - eased) * 36;
      const opacity = 0.82 + eased * 0.18;

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

  return (
    <section
      id="intro"
      className="intro-video-section"
      style={{ padding: '90px 0' }}
    >
      <div
        ref={sectionRef}
        className="intro-video-shell"
        style={{
          width: '100%',
          maxWidth: '100%',
          margin: '0',
          opacity: 0,
        }}
      >
        {/* Video card — asymmetric rounded corners from Figma */}
        <div
          ref={frameRef}
          className="intro-video-frame"
          style={{
            position: 'relative',
            width: '100%',
            paddingTop: '56.25%' /* 16:9 aspect ratio */,
            borderRadius: '10px',
            overflow: 'hidden',
            background: '#000',
            boxShadow:
              '0 2px 8px rgba(0,0,0,0.08), 0 20px 48px rgba(0,0,0,0.12)',
            cursor: 'pointer',
            opacity: 'var(--intro-video-opacity, 0.78)',
            transform:
              'translateY(var(--intro-video-y, 36px)) scale(var(--intro-video-scale, 0.62))',
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
              borderRadius: '10px',
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
                  fontSize: '28px',
                }}
              >
                ▶
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
              transition: 'background 0.2s',
              zIndex: 10,
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.8)')
            }
            onMouseLeave={e =>
              (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.55)')
            }
            title={muted ? 'Unmute' : 'Mute'}
          >
            {muted ? '🔇' : '🔊'}
          </button>
        </div>

        {/* Small hint text below video */}
        <p
          style={{
            textAlign: 'center',
            marginTop: '16px',
            fontFamily: 'var(--font)',
            fontSize: '13px',
            color: '#888',
            letterSpacing: '0.5px',
          }}
        >
          Click to play · Click 🔇 to unmute
        </p>
      </div>
    </section>
  );
}
