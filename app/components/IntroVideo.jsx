'use client';
import { useEffect, useRef, useState } from 'react';

// ✅ Your video is already in /public/ folder
const VIDEO_SRC = '/intro-video.mp4';
const POSTER_IMG = ''; // optional: "/video-poster.jpg"

export default function IntroVideo() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
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
      style={{ backgroundColor: '#f5f5f5', padding: '80px 40px' }}
    >
      <div
        ref={sectionRef}
        style={{ maxWidth: 'var(--max-width)', margin: '0 auto', opacity: 0 }}
      >
        {/* Video card — asymmetric rounded corners from Figma */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            paddingTop: '56.25%' /* 16:9 aspect ratio */,
            borderRadius: '10px 100px 10px 100px',
            overflow: 'hidden',
            background: '#000',
            boxShadow:
              '0 2px 8px rgba(0,0,0,0.08), 0 20px 48px rgba(0,0,0,0.12)',
            cursor: 'pointer',
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
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
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
