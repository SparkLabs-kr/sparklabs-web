import Image from 'next/image';

interface SparkLogoProps {
  variant?: 'dark' | 'light';
  className?: string;
  /** height in px (used to preserve aspect ratio ~3.57:1) */
  height?: number;
}

/**
 * Official SparkLabs wordmark + spark burst logo.
 * `variant="dark"` renders the black logo (use on light backgrounds).
 * `variant="light"` renders the white logo (use on dark backgrounds).
 */
export function SparkLogo({
  variant = 'dark',
  className,
  height = 28,
}: SparkLogoProps) {
  const src =
    variant === 'light'
      ? '/brand/sparklabs-logo-white.png'
      : '/brand/sparklabs-logo-black.png';
  // Source aspect ratio: 1663 x 466 ≈ 3.57:1
  const width = Math.round(height * (1663 / 466));

  return (
    <Image
      src={src}
      alt="SparkLabs"
      width={width}
      height={height}
      priority
      sizes={`${width}px`}
      className={className}
    />
  );
}
