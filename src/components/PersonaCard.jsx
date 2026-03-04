export default function PersonaCard({ name, image, children }) {
  return (
    <div className="border-[8px] border-brand-primary rounded-xl bg-white p-4 max-w-lg mx-2 shadow-sm my-8">

      <h4 className="text-center text-brand-primary font-display text-lg mb-4">
        Example User
      </h4>

      <img 
        src={image} 
        alt={`Illustrated portrait of ${name}`} 
        className="w-40 h-40 mx-auto rounded-full border border-black object-cover" 
      />
      <h3 className="font-handwritten text-4xl text-center mt-6 mb-4 text-black">
        Meet {name}.
      </h3>

      <div className="font-sans text-sm text-black space-y-4 leading-relaxed">
        {children}
      </div>

    </div>
  );
}