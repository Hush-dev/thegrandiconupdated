import { useRef } from 'react';
import { useInView } from 'motion/react';

/**
 * Returns a ref + whether the element has entered the viewport.
 * `once: true` means animation only fires once (no re-trigger on scroll back).
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  return { ref, isInView };
}