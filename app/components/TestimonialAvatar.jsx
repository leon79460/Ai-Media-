'use client';

import Image from 'next/image';
import { useState } from 'react';

/**
 * Renders a circular avatar that gracefully falls back to an initial letter
 * when the image file is missing or fails to load.
 * Must be a client component to use the onError handler.
 */
export default function TestimonialAvatar({ src, name }) {
  const [broken, setBroken] = useState(false);

  return (
    <span
      className="about-avatar"
      style={{ overflow: 'hidden', flexShrink: 0 }}
    >
      {src && !broken ? (
        <Image
          src={src}
          alt={name}
          width={34}
          height={34}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={() => setBroken(true)}
        />
      ) : (
        name.charAt(0)
      )}
    </span>
  );
}
