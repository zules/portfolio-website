export default function FeatureCard({ icon, title, description }) {
  return (
    <article className="flex mx-auto w-full max-w-sm items-center gap-4 rounded-xl border border-brand-pale bg-white p-4 shadow-md shadow-brand-splash/20">
      <div 
        className="flex h-12 w-12 shrink-0 items-center justify-center text-brand-dark"
        aria-hidden="true"
      >
        <span className="material-symbols-outlined text-3xl">
          {icon}
        </span>
      </div>
      
      <div className="flex flex-col">
        <h3 className="font-display text-base font-bold uppercase text-brand-secondary">
          {title}
        </h3>
        <p className="font-sans text-sm text-black">
          {description}
        </p>
      </div>
    </article>
  );
}