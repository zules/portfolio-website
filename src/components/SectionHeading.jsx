export default function SectionHeading({ children, className = "" }) {
  return (
    <h2 className={`font-display font-semibold text-3xl text-black mb-2 ${className}`}>
      {children}
    </h2>
  );
}