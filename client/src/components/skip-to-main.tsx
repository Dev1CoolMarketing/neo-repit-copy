type SkipToMainProps = {
  targetId?: string;
  label?: string;
};

export function SkipToMain({
  targetId = "main-content",
  label = "Skip to main content",
}: SkipToMainProps) {
  return (
    <a href={`#${targetId}`} className="skip-link">
      {label}
    </a>
  );
}

export default SkipToMain;
