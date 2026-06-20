'use client';

import { useInView } from 'motion/react';
import { useEffect, useState } from 'react';

export const ANIMATION_VIEWPORT_AMOUNT = 0.22;
export const ANIMATION_TALL_VIEWPORT_AMOUNT = 0.22;

const TALL_ELEMENT_GUTTER = 0.08;
const MIN_TALL_ELEMENT_AMOUNT = 0.15;

function getSafeViewportAmount(node, preferredAmount) {
  if (typeof window === 'undefined' || !node) return preferredAmount;

  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const elementHeight = node.getBoundingClientRect().height;

  if (!viewportHeight || !elementHeight) return preferredAmount;
  if (elementHeight <= viewportHeight * 0.95) return preferredAmount;

  const maxVisibleRatio = viewportHeight / elementHeight;
  if (maxVisibleRatio >= preferredAmount) return preferredAmount;

  return Math.max(
    MIN_TALL_ELEMENT_AMOUNT,
    Math.min(
      preferredAmount,
      ANIMATION_TALL_VIEWPORT_AMOUNT,
      maxVisibleRatio - TALL_ELEMENT_GUTTER,
    ),
  );
}

export function useDelayedInView(
  ref,
  { amount = ANIMATION_VIEWPORT_AMOUNT, once = true } = {},
) {
  const [resolvedAmount, setResolvedAmount] = useState(amount);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      setResolvedAmount(amount);
      return undefined;
    }

    const updateAmount = () => {
      setResolvedAmount(getSafeViewportAmount(node, amount));
    };

    updateAmount();

    const resizeObserver =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(updateAmount)
        : null;

    resizeObserver?.observe(node);
    window.addEventListener('resize', updateAmount);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', updateAmount);
    };
  }, [amount, ref]);

  return useInView(ref, { amount: resolvedAmount, once });
}
