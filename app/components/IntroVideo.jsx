'use client';
import { useEffect, useRef, useState } from 'react';
import { ContainerScroll } from './ContainerScroll';

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
      className="intro-video-section"
      ref={sectionRef}
      style={{ backgroundColor: '#f5f5f5' }}
    >
      <ContainerScroll titleComponent={<></>}>
        <div
          className="intro-video-frame relative w-full h-full overflow-hidden bg-[#050505] cursor-pointer"
          onClick={togglePlay}
          style={{
            WebkitMaskImage: '-webkit-radial-gradient(white, black)',
            maskImage: 'radial-gradient(white, black)',
            borderRadius: 'inherit'
          }}
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
              zIndex: 10,
              transition: 'background 0.2s',
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
      </ContainerScroll>
    </section>
  );
}
