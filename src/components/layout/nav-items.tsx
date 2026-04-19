'use client';

import { useEffect, useRef, useState } from 'react';
import { Link, usePathname } from '@/i18n/routing';

export interface NavChild {
  href: string;
  label: string;
}

export interface NavItem {
  href: string;
  label: string;
  children?: NavChild[];
}

const TRIGGER_CLASS =
  'inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition hover:bg-surface-subtle hover:text-ink';
const SINGLE_CLASS =
  'rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition hover:bg-surface-subtle hover:text-ink';

export default function NavItems({ items }: { items: NavItem[] }) {
  const [openHref, setOpenHref] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  // Close dropdown whenever the route changes
  useEffect(() => {
    setOpenHref(null);
  }, [pathname]);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenu = (href: string) => {
    clearCloseTimer();
    setOpenHref(href);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    // short delay so moving between trigger and panel doesn't flicker close
    closeTimer.current = setTimeout(() => setOpenHref(null), 120);
  };

  const closeNow = () => {
    clearCloseTimer();
    setOpenHref(null);
  };

  return (
    <nav className="hidden md:flex items-center gap-1">
      {items.map((item) => {
        if (!item.children || item.children.length === 0) {
          return (
            <Link key={item.href} href={item.href} className={SINGLE_CLASS}>
              {item.label}
            </Link>
          );
        }

        const isOpen = openHref === item.href;

        return (
          <div
            key={item.href}
            className="relative"
            onMouseEnter={() => openMenu(item.href)}
            onMouseLeave={scheduleClose}
            onFocus={() => openMenu(item.href)}
            onBlur={(e) => {
              // Close only when focus leaves this menu entirely
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                scheduleClose();
              }
            }}
          >
            <Link
              href={item.href}
              onClick={closeNow}
              className={TRIGGER_CLASS}
              aria-haspopup="menu"
              aria-expanded={isOpen}
            >
              {item.label}
              <svg
                className={`h-3 w-3 transition ${
                  isOpen ? 'rotate-180 text-ink/70' : 'text-ink/40'
                }`}
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 4.5L6 7.5L9 4.5" />
              </svg>
            </Link>
            <div
              className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 transition duration-150 ${
                isOpen
                  ? 'pointer-events-auto visible opacity-100'
                  : 'pointer-events-none invisible opacity-0'
              }`}
            >
              <ul
                role="menu"
                className="min-w-[200px] overflow-hidden rounded-2xl border border-surface-border bg-white py-2 shadow-xl"
              >
                {item.children.map((child) => (
                  <li key={child.href} role="none">
                    <Link
                      href={child.href}
                      role="menuitem"
                      onClick={closeNow}
                      className="block px-4 py-2 text-sm text-ink-soft transition hover:bg-surface-subtle hover:text-ink"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
