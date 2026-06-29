'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { buttonHover, buttonTap } from './animation/Reveal';

const FILL_DURATION = 0.5;

const MotionLink = motion.create(Link);

function getCoverDiameter(width, height, x, y) {
  return Math.ceil(
    2 *
      Math.max(
        Math.hypot(x, y),
        Math.hypot(width - x, y),
        Math.hypot(x, height - y),
        Math.hypot(width - x, height - y)
      )
  );
}

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
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState('');
  const [pressedPath, setPressedPath] = useState('');
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [coverSize, setCoverSize] = useState(0);

  const palette = VARIANTS[variant] || VARIANTS.dark;

  const activeFill = fillColor || palette.fill;
  const activeHoverText = hoverTextColor || palette.hoverText;
  const isHovered = hoveredPath === pathname;
  const isPressed = pressedPath === pathname;
  const showFill = !disabled && (isHovered || isPressed);

  const updateOriginFromEvent = useCallback((e, fromCenter = false) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = fromCenter ? rect.width / 2 : e.clientX - rect.left;
    const y = fromCenter ? rect.height / 2 : e.clientY - rect.top;

    setOrigin({ x, y });
    setCoverSize(getCoverDiameter(rect.width, rect.height, x, y));
  }, []);

  const handlePointerEnter = (e) => {
    if (disabled) return;

    updateOriginFromEvent(e);
    setHoveredPath(pathname);
  };

  const handlePointerLeave = () => {
    setHoveredPath('');
    setPressedPath('');
  };

  const handlePointerDown = (e) => {
    if (disabled || e.button !== 0) return;

    updateOriginFromEvent(e);
    setPressedPath(pathname);
    setHoveredPath(pathname);
  };

  const handlePointerUp = () => {
    setPressedPath('');
  };

  const handleFocus = (e) => {
    if (disabled) return;

    if (e.currentTarget.matches(':focus-visible')) {
      updateOriginFromEvent(e, true);
      setHoveredPath(pathname);
    }
  };

  const handleBlur = () => {
    setPressedPath('');
    setHoveredPath('');
  };

  const handleKeyDown = (e) => {
    if (disabled || e.repeat || (e.key !== ' ' && e.key !== 'Enter')) return;

    if (e.key === ' ') {
      e.preventDefault();
    }

    updateOriginFromEvent(e, true);
    setPressedPath(pathname);
    setHoveredPath(pathname);
  };

  const handleKeyUp = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      setPressedPath('');

      if (!e.currentTarget.matches(':focus-visible')) {
        setHoveredPath('');
      }
    }
  };

  const handleClick = (e) => {
    setHoveredPath('');
    setPressedPath('');
    onClick?.(e);
  };

  let Comp = motion.button;

  const extraProps = {};

  if (as === 'a') {
    Comp = motion.a;
    extraProps.href = href;

    if (target) extraProps.target = target;
    if (rel) extraProps.rel = rel;
  } else if (as === 'link') {
    Comp = MotionLink;
    extraProps.href = href || '/';

    if (target) extraProps.target = target;
  } else {
    extraProps.type = type || 'button';
    extraProps.disabled = disabled;
  }

  const mergedStyle = {
    position: 'relative',
    overflow: 'hidden',
    cursor: disabled ? 'default' : 'pointer',

    ...style,

    // outline: 'none',
    // boxShadow: 'none',
    WebkitTapHighlightColor: 'transparent',
  };

  const resolvedStyle = {
    ...mergedStyle,
    ...(className.includes('footer-submit-button') && showFill
      ? {
          backgroundColor: activeFill,
          color: activeHoverText,
        }
      : {}),
  };

  return (
    <Comp
      className={`origin-btn ${className}`}
      style={resolvedStyle}
      onClick={handleClick}
      onMouseDown={(e) => e.currentTarget.blur()}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      whileHover={disabled || className.includes('footer-submit-button') ? undefined : buttonHover}
      whileTap={disabled ? undefined : buttonTap}
      {...extraProps}
      {...rest}
    >
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
          color: showFill ? activeHoverText : mergedStyle.color || palette.text,
          transition: 'color 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {children}
      </span>
    </Comp>
  );
}
