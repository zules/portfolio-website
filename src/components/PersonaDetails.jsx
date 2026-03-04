export default function PersonaDetails({
  name,
  age,
  imageSrc,
  imageAlt,
  quote,
  motivations = [],
  frustrations = []
}) {
  return (
    <article className="flex max-w-sm flex-col items-center gap-3 rounded-xl p-1">
      {/* Persona Header */}
      <header className="flex flex-col items-center gap-3">
        <h3 className="font-display text-lg text-brand-primary">{name}</h3>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-30 w-30 rounded-full border border-black object-cover"
        />
        <span className="font-display text-lg text-brand-dark">Age {age}</span>
      </header>

      {/* Quote */}
      <blockquote className="font-handwritten text-black my-0 py-0 lg:text-xl">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Details Container */}
      <div className="flex w-full flex-col gap-2 lg:gap-6">
        
        {/* Motivations */}
        <section className="flex flex-col overflow-hidden rounded-2xl bg-brand-splash px-4 py-2 gap-0 lg:gap-2 shadow-md pb-4 max-w-xs mx-auto">
          <h4 className="font-handwritten text-lg font-bold text-black lg:text-3xl">
            Motivations
          </h4>
          <ul className="list-inside list-disc flex flex-col gap-2 font-sans text-base text-black text-xs lg:text-sm">
            {motivations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Frustrations */}
        <section className="flex flex-col overflow-hidden rounded-2xl bg-brand-secondary px-4 py-2 gap-0 lg:gap-2 shadow-md pb-4">
          <h4 className="font-handwritten text-lg font-bold text-white lg:text-3xl">
            Frustrations
          </h4>
          <ul className="list-inside list-disc flex flex-col gap-2 font-sans text-base text-white text-xs lg:text-sm">
            {frustrations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
        
      </div>
    </article>
  );
}