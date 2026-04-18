export function SparkLogo({ className }: { className?: string }) {
  // Radial spark mark — placeholder SVG inspired by the brand logo burst.
  // Swap for the official SVG when the asset is available at /public/brand/sparklabs-mark.svg
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="5" fill="#1E5BFF" />
      <g stroke="#1E5BFF" strokeWidth="2.4" strokeLinecap="round">
        <path d="M24 4 V12" stroke="#F97A1F" />
        <path d="M24 36 V44" stroke="#2FB574" />
        <path d="M4 24 H12" stroke="#F2C94C" />
        <path d="M36 24 H44" stroke="#E74F8E" />
        <path d="M10 10 L15 15" stroke="#2AA5B8" />
        <path d="M33 33 L38 38" stroke="#7B5CFF" />
        <path d="M10 38 L15 33" stroke="#E64545" />
        <path d="M33 15 L38 10" stroke="#1E5BFF" />
      </g>
    </svg>
  );
}
