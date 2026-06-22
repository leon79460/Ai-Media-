'use client';

import Link from 'next/link';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { buttonHover, buttonTap } from './animation/Reveal';

const FILL_DURATION = 0.5;
const FILL_EASE = [0.16, 1, 0.3, 1];

/**
 * Hoist motion.create(Link) outside the component so React sees a stable component
 * reference. Otherwise, it remounts every render, breaking animations.
 */
const MotionLink = motion.create(Link);

/**
 * Compute the diameter of the smallest circle centred at (x, y)
 * that fully covers a rectangle of the given width × height.
 */
function getCoverDiameter(width, height, x, y) {
  return Math.ceil(
    2 *
      Math.max(
        Math.hypot(x, y),
        Math.hypot(width - x, y),
        Math.hypot(x, height - y),
        Math.hypot(width - x, height - y),
      ),
  );
}

/**
 * VARIANT PALETTE — maps variant names to { fill, text, hoverText }
 *
 *  fill      → colour of the expanding circle
 *  text      → default text colour (only used when no `style.color` override)
 *  hoverText → text colour while the fill is visible
 */
const VARIANTS = {
  dark: {
    fill: '#f5f5f5',
    text: '#f5f5f5',
    hoverText: '#050505',
  },
  light: {
    fill: '#050505',
    text: '#060606',
    hoverText: '#f5f5f5',
  },
  ghost: {
    fill: '#050505',
    text: '#060606',
    hoverText: '#f5f5f5',
  },
  'outline-light': {
    fill: '#f5f5f5',
    text: '#f5f5f5',
    hoverText: '#050505',
  },
  custom: {
    fill: '#f5f5f5',
    text: 'inherit',
    hoverText: '#050505',
  },
};

/**
 * OriginButton
 *
 * A button (or link) with a radial-fill hover effect. A circle expands from
 * the pointer's entry point (or from the centre on keyboard focus), filling the
 * button with a contrasting colour while the text inverts.
 *
 * Props
 * ─────
 * variant        "dark" | "light" | "ghost" | "outline-light" | "custom"
 * as             "button" | "a" | "link" (Next.js Link)  — default "button"
 * href           required when as="a" or as="link"
 * fillColor      override the radial fill colour
 * hoverTextColor override the text colour when hovered
 * className      extra class names
 * style          inline style object (merged with base variant styles)
 * children       button content
 * …rest          forwarded to the underlying element
 */
export default function OriginButton({
  variant = 'dark',
  as = 'button',
  href,
  target,
  rel,
  fillColor,
  hoverTextColor,
  className = '',
  style = {},
  children,
  onClick,
  type,
  disabled = false,
  ...rest
}) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [coverSize, setCoverSize] = useState(0);

  const palette = VARIANTS[variant] || VARIANTS.dark;
  const activeFill = fillColor || palette.fill;
  const activeHoverText = hoverTextColor || palette.hoverText;

  const showFill = !disabled && (hovered || pressed);

  /* ── Pointer helpers ── */
  const updateOriginFromEvent = useCallback((e, fromCenter = false) => {
    const rect = e.currentTarget.getBoundingClientRect();
    let x, y;
    if (fromCenter) {
      x = rect.width / 2;
      y = rect.height / 2;
    } else {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }
    setOrigin({ x, y });
    setCoverSize(getCoverDiameter(rect.width, rect.height, x, y));
  }, []);

  /* ── Event handlers ── */
  const handlePointerEnter = (e) => {
    if (disabled) return;
    updateOriginFromEvent(e);
    setHovered(true);
  };

  const handlePointerLeave = () => {
    setHovered(false);
    setPressed(false);
  };

  const handlePointerDown = (e) => {
    if (disabled || e.button !== 0) return;
    updateOriginFromEvent(e);
    setPressed(true);
    setHovered(true);
  };

  const handlePointerUp = () => {
    setPressed(false);
  };

  const handleFocus = (e) => {
    if (disabled) return;
    if (e.currentTarget.matches(':focus-visible')) {
      updateOriginFromEvent(e, true);
      setHovered(true);
    }
  };

  const handleBlur = () => {
    setPressed(false);
    setHovered(false);
  };

  const handleKeyDown = (e) => {
    if (disabled || e.repeat || (e.key !== ' ' && e.key !== 'Enter')) return;
    if (e.key === ' ') e.preventDefault();
    updateOriginFromEvent(e, true);
    setPressed(true);
    setHovered(true);
  };

  const handleKeyUp = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      setPressed(false);
      if (!e.currentTarget.matches(':focus-visible')) {
        setHovered(false);
      }
    }
  };

  /* ── Determine the wrapper element ── */
  let Comp = motion.button;
  const extraProps = {};

  if (as === 'a') {
    Comp = motion.a;
    extraProps.href = href;
    if (target) extraProps.target = target;
    if (rel) extraProps.rel = rel;
  } else if (as === 'link') {
    Comp = MotionLink; // stable reference — never re-mounts
    extraProps.href = href || '/';
    if (target) extraProps.target = target;
  } else {
    extraProps.type = type || 'button';
    extraProps.disabled = disabled;
  }

  /* ── Merged style ── */
  const mergedStyle = {
    position: 'relative',
    overflow: 'hidden',
    cursor: disabled ? 'default' : 'pointer',
    ...style,
  };

  const fillTransition = { duration: FILL_DURATION, ease: FILL_EASE };

  return (
    <Comp
      className={`origin-btn ${className}`}
      style={mergedStyle}
      onClick={onClick}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      whileHover={disabled ? undefined : buttonHover}
      whileTap={disabled ? undefined : buttonTap}
      {...extraProps}
      {...rest}
    >
      {/* Radial fill circle — using pure CSS for bulletproof animation */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          left: `${origin.x}px`,
          top: `${origin.y}px`,
          width: coverSize ? `${coverSize}px` : 0,
          height: coverSize ? `${coverSize}px` : 0,
          marginLeft: coverSize ? `-${coverSize / 2}px` : 0,
          marginTop: coverSize ? `-${coverSize / 2}px` : 0,
          borderRadius: '50%',
          background: activeFill,
          pointerEvents: 'none',
          zIndex: 0,
          transform: `scale(${showFill && coverSize > 0 ? 1 : 0})`,
          transition: `transform ${FILL_DURATION}s cubic-bezier(0.16, 1, 0.3, 1)`,
        }}
      />

      {/* Content — above the fill */}
      <span
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          width: '100%',
          height: '100%',
          color: showFill ? activeHoverText : (style.color || palette.text),
          transition: 'color 0.3s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {children}
      </span>
    </Comp>
  );
}
