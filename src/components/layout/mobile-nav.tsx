'use client';

import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, usePathname } from '@/i18n/routing';
import type { NavItem } from './nav-items';

interface Props {
  items: NavItem[];
  applyLabel: string;
}

export default function MobileNav({ items, applyLabel }: Props) {
  const [open, setOpen] = useState(false);
  const [expandedHref, setExpandedHref] = useState<string | null>(null);
  const pathname = usePathname();

  // Close menu whenever the route changes
  useEffect(() => {
    setOpen(false);
    setExpandedHref(null);
  }, [pathname]);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-surface-subtle"
      >
        {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
      </button>

      {open && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          className="md:hidden fixed inset-x-0 top-16 bottom-0 z-30 overflow-y-auto bg-white"
        >
          <nav className="container-narrow py-6">
            <ul className="space-y-1">
              {items.map((item) => {
                const hasChildren = !!item.children && item.children.length > 0;
                const isExpanded = expandedHref === item.href;

                return (
                  <li key={item.href}>
                    <div className="flex items-center">
                      <Link
                        href={item.href}
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
                          aria-label={`${item.label} 하위 메뉴 열기`}
                          className="ml-1 inline-flex h-11 w-11 items-center justify-center rounded-xl text-ink-soft hover:bg-surface-subtle"
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
              <Link href="/apply" className="btn-primary w-full justify-center">
                {applyLabel}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
