export default function FeatureCard ({ icon, title, description }) {
    return (
  <div className="w-full max-w-xs flex items-center gap-5 px-3 py-1 bg-white border border-brand-pale rounded-lg shadow-md shadow-xl/30 shadow-brand-splash">
    {/* Icon Placeholder using Material Symbols */}
    <div className="flex flex-shrink-0 items-center justify-center w-12 h-12 text-brand-dark">
      <span className="material-symbols-outlined !text-3xl">
        {icon}
      </span>
    </div>
    <div className="flex flex-col text-left">
      <h4 className="font-display font-bold text-base text-brand-secondary uppercase">
        {title}
      </h4>
      <p className="font-sans text-sm text-black">
        {description}
      </p>
    </div>
  </div>
    )
}