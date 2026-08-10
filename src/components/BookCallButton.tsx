export default function BookCallButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      data-cal-namespace="30min"
      data-cal-link="covenant-ademola/30min"
      data-cal-config='{"layout":"month_view","theme":"light"}'
      className={className}
    >
      {children}
    </button>
  );
}
