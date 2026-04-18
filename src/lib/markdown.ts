/**
 * Lightweight Markdown → HTML renderer.
 *
 * Zero-dependency renderer covering the subset of Markdown used in
 * /content/*.mdx seed files: headings, paragraphs, bold/italic, inline
 * links, blockquotes, unordered and ordered lists, and code. Not a full
 * CommonMark implementation — it's intentionally narrow so we don't pull
 * in another npm dep for a corporate site with mostly editorial content.
 */

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderInline(raw: string): string {
  let s = escapeHtml(raw);
  // Bold **text**
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  // Italic *text*
  s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>');
  // Inline code `code`
  s = s.replace(
    /`([^`]+)`/g,
    '<code class="rounded bg-surface-subtle px-1.5 py-0.5 text-[0.9em]">$1</code>'
  );
  // Links [text](url)
  s = s.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-brand-blue underline underline-offset-2 hover:text-ink" target="_blank" rel="noopener noreferrer">$1</a>'
  );
  return s;
}

export function renderMarkdown(md: string): string {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const out: string[] = [];
  let i = 0;

  const flushParagraph = (buf: string[]) => {
    if (buf.length === 0) return;
    out.push(
      `<p class="my-5 leading-[1.8] text-ink-soft">${renderInline(
        buf.join(' ').trim()
      )}</p>`
    );
    buf.length = 0;
  };

  let paragraphBuf: string[] = [];

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Blank line → paragraph break
    if (trimmed === '') {
      flushParagraph(paragraphBuf);
      i++;
      continue;
    }

    // Headings
    const heading = /^(#{1,6})\s+(.*)$/.exec(trimmed);
    if (heading) {
      flushParagraph(paragraphBuf);
      const level = heading[1].length;
      const text = renderInline(heading[2]);
      const sizeClass =
        level === 1
          ? 'mt-10 mb-4 text-3xl font-semibold text-ink'
          : level === 2
            ? 'mt-10 mb-3 text-2xl font-semibold text-ink'
            : level === 3
              ? 'mt-8 mb-2 text-xl font-semibold text-ink'
              : 'mt-6 mb-2 text-lg font-semibold text-ink';
      out.push(`<h${level} class="${sizeClass}">${text}</h${level}>`);
      i++;
      continue;
    }

    // Unordered list
    if (/^[-*+]\s+/.test(trimmed)) {
      flushParagraph(paragraphBuf);
      const items: string[] = [];
      while (i < lines.length && /^[-*+]\s+/.test(lines[i].trim())) {
        const content = lines[i].trim().replace(/^[-*+]\s+/, '');
        items.push(`<li class="my-1.5">${renderInline(content)}</li>`);
        i++;
      }
      out.push(
        `<ul class="my-5 ml-6 list-disc space-y-1 text-ink-soft">${items.join(
          ''
        )}</ul>`
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s+/.test(trimmed)) {
      flushParagraph(paragraphBuf);
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        const content = lines[i].trim().replace(/^\d+\.\s+/, '');
        items.push(`<li class="my-1.5">${renderInline(content)}</li>`);
        i++;
      }
      out.push(
        `<ol class="my-5 ml-6 list-decimal space-y-1 text-ink-soft">${items.join(
          ''
        )}</ol>`
      );
      continue;
    }

    // Blockquote
    if (/^>\s?/.test(trimmed)) {
      flushParagraph(paragraphBuf);
      const buf: string[] = [];
      while (i < lines.length && /^>\s?/.test(lines[i].trim())) {
        buf.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      out.push(
        `<blockquote class="my-6 border-l-4 border-spark-yellow bg-surface-subtle px-5 py-3 text-ink-soft italic">${renderInline(
          buf.join(' ')
        )}</blockquote>`
      );
      continue;
    }

    // Horizontal rule
    if (/^---+$/.test(trimmed)) {
      flushParagraph(paragraphBuf);
      out.push('<hr class="my-10 border-t border-surface-border" />');
      i++;
      continue;
    }

    // Default: accumulate as paragraph
    paragraphBuf.push(trimmed);
    i++;
  }

  flushParagraph(paragraphBuf);
  return out.join('\n');
}
