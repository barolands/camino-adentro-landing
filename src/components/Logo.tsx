const Logo = ({ className = "", size = 64 }: { className?: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Spiral */}
    <defs>
      <linearGradient id="spiralGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" />
        <stop offset="40%" stopColor="#C9A96E" />
        <stop offset="70%" stopColor="#D4B87A" />
        <stop offset="100%" stopColor="currentColor" />
      </linearGradient>
    </defs>
    <path
      d="M50 20
         C65 20, 78 33, 78 50
         C78 64, 68 74, 55 74
         C43 74, 34 65, 34 54
         C34 44, 42 37, 50 37
         C57 37, 62 42, 62 49
         C62 55, 57 59, 52 59
         C47 59, 44 55, 44 51
         C44 47, 47 45, 50 45"
      stroke="url(#spiralGold)"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Subtle sparkles */}
    <circle cx="28" cy="28" r="1" fill="currentColor" opacity="0.3" />
    <circle cx="74" cy="30" r="0.8" fill="currentColor" opacity="0.25" />
    <circle cx="22" cy="55" r="0.6" fill="currentColor" opacity="0.2" />
    <circle cx="80" cy="65" r="0.7" fill="currentColor" opacity="0.2" />
  </svg>
);

export default Logo;
