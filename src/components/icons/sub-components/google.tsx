type FacebookProps = {
  className?: string;
};

export function GoogleIcon({ className }: FacebookProps) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.08 1.08-2.77 2.26-5.78 2.26-4.64 0-8.26-3.74-8.26-8.38s3.62-8.38 8.26-8.38c2.5 0 4.4.98 5.74 2.26l2.31-2.31C18.9 1.5 16.4 0 12.48 0 5.87 0 .31 5.39.31 12s5.56 12 12.17 12c3.57 0 6.26-1.17 8.36-3.36 2.16-2.16 2.84-5.21 2.84-7.67 0-.76-.05-1.46-.17-2。05H12。48z"
      />
    </svg>
  );
}
