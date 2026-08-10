type IconProps = { className?: string };

export function IconAutomation({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="5" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="19" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="5" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.2 6.8 16.8 11.3M16.8 12.7 7.2 17.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconAgent({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v6A2.5 2.5 0 0 1 17.5 15H10l-4 4v-4H6.5A2.5 2.5 0 0 1 4 12.5v-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="9" cy="9.5" r="1" fill="currentColor" />
      <circle cx="12" cy="9.5" r="1" fill="currentColor" />
      <circle cx="15" cy="9.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function IconApi({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="4" width="7" height="7" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="13" width="7" height="7" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 7.5h4a2 2 0 0 1 2 2V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconBuild({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3.5" y="5" width="17" height="14" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 9h17" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="6" cy="7" r="0.6" fill="currentColor" />
      <circle cx="8" cy="7" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function IconCoach({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7 11v4.5c0 1 2.2 2.5 5 2.5s5-1.5 5-2.5V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
