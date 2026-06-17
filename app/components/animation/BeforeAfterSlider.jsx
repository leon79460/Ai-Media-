'use client';

import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Before',
  afterAlt = 'After',
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const wrapRef = useRef(null);

  const updateFromClientX = useCallback((clientX) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(clamp(pct, 2, 98));
  }, []);

  const handlePointerDown = (event) => {
    event.preventDefault();
    event.currentTarget.setPointerCapture?.(event.pointerId);
    setIsDragging(true);
    updateFromClientX(event.clientX);
  };

  const handlePointerMove = (event) => {
    if (!isDragging) return;
    updateFromClientX(event.clientX);
  };

  const stopDragging = () => setIsDragging(false);

  const handleKeyDown = (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    setSliderPos((value) =>
      clamp(value + (event.key === 'ArrowRight' ? 4 : -4), 2, 98),
    );
  };

  return (
    <div
      ref={wrapRef}
      className={`before-after-slider${isDragging ? ' is-dragging' : ''}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      onKeyDown={handleKeyDown}
      role="slider"
      tabIndex={0}
      aria-label="Before and after image comparison"
      aria-valuemin={2}
      aria-valuemax={98}
      aria-valuenow={Math.round(sliderPos)}
      aria-valuetext={`${Math.round(sliderPos)} percent before`}
      style={{
        '--before-after-pos': `${sliderPos}%`,
      }}
    >
      <Image
        src={afterSrc}
        alt={afterAlt}
        draggable={false}
        fill
        sizes="(max-width: 768px) 100vw, 1200px"
        priority={false}
        style={{
          objectFit: 'cover',
          objectPosition: 'bottom',
          borderRadius: '8px',
        }}
      />

      <div className="before-after-clip">
        <div className="before-after-before-image">
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            draggable={false}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            style={{
              objectFit: 'cover',
              borderRadius: '8px 0 0 8px',
            }}
          />
        </div>
      </div>

      <div className="before-after-divider" aria-hidden="true" />

      <div
        className="before-after-handle"
        aria-hidden="true"
      >
        <span />
      </div>

      <div className="before-after-label-anchor is-before">
        <span
          className="before-after-label"
          aria-hidden="true"
        >
          Before
        </span>
      </div>
      <div className="before-after-label-anchor is-after">
        <span
          className="before-after-label"
          aria-hidden="true"
        >
          After
        </span>
      </div>
    </div>
  );
}
