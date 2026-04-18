'use client';

import { Link, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';

interface SubnavItem {
  href: string;
  label: string;
}

export function SubnavClient({ items }: { items: SubnavItem[] }) {
  const pathname = usePathname();

  // A "parent" tab is any tab whose href is a prefix of at least one other
  // tab's href (e.g. "/newsroom" is parent of "/newsroom/press").
  // Parent tabs should only be active on exact match; non-parent tabs use a
  // prefix match so descendant routes keep the tab highlighted.
  const isParentTab = (href: string) =>
    items.some(
      (other) => other.href !== href && other.href.startsWith(href + '/')
    );

  return (
    <nav className="flex items-center gap-1 overflow-x-auto py-3 text-sm">
      {items.map((item) => {
        const active = isParentTab(item.href)
          ? pathname === item.href
          : pathname === item.href || pathname.startsWith(item.href + '/');
        return (
          <Link
            key={item.href}
            href={item.href as any}
            className={cn(
              'shrink-0 rounded-full px-4 py-2 font-medium transition',
              active
                ? 'bg-ink text-white'
                : 'text-ink-soft hover:bg-surface-subtle hover:text-ink'
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
