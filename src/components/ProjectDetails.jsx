export default function ProjectDetails ({ items }) {
  // Add a fallback just in case the component is called without data
  if (!items || items.length === 0) return null;

  return (
    <dl className="flex w-full flex-col px-3">
      {items.map((item, index) => (
        <div key={index} className="flex items-baseline gap-4 py-3">
          <dt className="w-24 shrink-0 text-right font-display text-xl text-brand-secondary leading-tight">
            {item.label}
          </dt>

          <dd className="flex-1 font-sans text-base text-sm text-black self-start">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}