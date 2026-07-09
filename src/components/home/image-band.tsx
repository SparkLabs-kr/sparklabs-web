import Image from 'next/image';

interface ImageBandProps {
  src: string;
  alt: string;
  caption: string;
  monoCaption: string;
}

/**
 * Full-width photo band — grayscale at rest, color on hover (signature interaction).
 * Text sits on a bottom transparent→black gradient for legibility (per brand photo rules).
 */
export function ImageBand({ src, alt, caption, monoCaption }: ImageBandProps) {
  return (
    <div className="photo-hover relative">
      <div className="relative aspect-[4/3] w-full md:aspect-[21/8]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="photo-mono object-cover"
        />
      </div>
      <div className="absolute inset-0 flex items-end bg-gradient-to-b from-transparent from-40% to-black/45">
        <div className="container-narrow flex w-full flex-wrap items-end justify-between gap-5 pb-11">
          <p className="font-display text-[clamp(20px,2.6vw,32px)] font-bold tracking-[-0.03em] text-white">
            {caption}
          </p>
          <span className="font-display text-[11px] uppercase tracking-[0.24em] text-white/70">
            {monoCaption}
          </span>
        </div>
      </div>
    </div>
  );
}
