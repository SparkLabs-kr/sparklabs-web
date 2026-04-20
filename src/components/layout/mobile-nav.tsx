'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, usePathname } from '@/i18n/routing';
import type { NavItem } from './nav-items';

interface Props {
  items: NavItem[];
  applyLabel: string;
}

export default function MobileNav({ items, applyLabel }: Props) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [expandedHref, setExpandedHref] = useState<string | null>(null);
  const pathname = usePathname();

  // Portal target is only available after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu whenever the route changes
  useEffect(() => {
    setOpen(false);
    setExpandedHref(null);
  }, [pathname]);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setExpandedHref(null);
  };

  const drawer = (
    <div
      id="mobile-nav-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="사이트 메뉴"
      className="md:hidden fixed inset-0 z-[100] flex flex-col bg-white"
    >
      {/* Drawer header */}
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-surface-border/70 px-6">
        <span className="text-sm font-semibold uppercase tracking-wider text-ink/70">
          Menu
        </span>
        <button
          type="button"
          aria-label="메뉴 닫기"
          onClick={close}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-surface-subtle"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Scrollable nav list */}
      <nav className="flex-1 overflow-y-auto px-6 py-6">
        <ul className="space-y-1">
          {items.map((item) => {
            const hasChildren = !!item.children && item.children.length > 0;
            const isExpanded = expandedHref === item.href;

            return (
              <li key={item.href}>
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    onClick={close}
                    className="flex-1 rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-surface-subtle"
                  >
                    {item.label}
                  </Link>
                  {hasChildren && (
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedHref(isExpanded ? null : item.href)
                      }
                      aria-expanded={isExpanded}
                      aria-label={`${item.label} 하위 메뉴`}
                      className="ml-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-ink-soft hover:bg-surface-subtle"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  )}
                </div>

                {hasChildren && isExpanded && (
                  <ul className="mt-1 space-y-1 pl-3">
                    {item.children!.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={close}
                          className="block rounded-xl px-4 py-2.5 text-sm text-ink-soft hover:bg-surface-subtle hover:text-ink"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-8 border-t border-surface-border pt-6">
          <Link
            href="/apply"
            onClick={close}
            className="btn-primary w-full justify-center"
          >
            {applyLabel}
          </Link>
        </div>
      </nav>
    </div>
  );

  return (
    <>
      {/* Hamburger button — only visible below md */}
      <button
        type="button"
        aria-label="메뉴 열기"
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        onClick={() => setOpen(true)}
        className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-surface-subtle"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Portal the drawer to body so it escapes the header's backdrop-filter containing block */}
      {open && mounted && createPortal(drawer, document.body)}
    </>
  );
}
