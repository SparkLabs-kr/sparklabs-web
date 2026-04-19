'use client';

import { Link } from '@/i18n/routing';

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

export default function NavItems({ items }: { items: NavItem[] }) {
  return (
    <nav className="hidden md:flex items-center gap-1">
      {items.map((item) =>
        item.children && item.children.length > 0 ? (
          <div key={item.href} className="group relative">
            <Link
              href={item.href}
              className={TRIGGER_CLASS}
              aria-haspopup="menu"
            >
              {item.label}
              <svg
                className="h-3 w-3 text-ink/40 transition group-hover:text-ink/70"
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
            {/* Hover bridge + dropdown */}
            <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 focus-within:pointer-events-auto focus-within:visible focus-within:opacity-100">
              <ul
                role="menu"
                className="min-w-[200px] overflow-hidden rounded-2xl border border-surface-border bg-white py-2 shadow-xl"
              >
                {item.children.map((child) => (
                  <li key={child.href} role="none">
                    <Link
                      href={child.href}
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-ink-soft transition hover:bg-surface-subtle hover:text-ink"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition hover:bg-surface-subtle hover:text-ink"
          >
            {item.label}
          </Link>
        )
      )}
    </nav>
  );
}
