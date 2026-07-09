'use client';

import { useEffect, useRef, type ElementType, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Wrapper element, defaults to div */
  as?: ElementType;
}

/**
 * Fade-up on first scroll into view (brand-standard entrance used across v5 pages).
 * Falls back to visible immediately when reduced motion is preferred.
 */
export function Reveal({ children, className, as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('in');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className ?? ''}`}>
      {children}
    </Tag>
  );
}
