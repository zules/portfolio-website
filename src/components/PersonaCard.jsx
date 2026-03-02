export default function PersonaCard({ name, image, children }) {
  return (
    <div className="border-[12px] border-brand-primary rounded-xl bg-white p-6 max-w-sm mx-auto shadow-sm">

      <h4 className="text-center text-brand-primary font-display text-xl mb-4">
        Example User
      </h4>

      <img 
        src={image} 
        alt={`Avatar of ${name}`} 
        className="w-40 h-40 mx-auto rounded-full border border-black object-cover" 
      />
      <h3 className="font-handwritten text-6xl text-center mt-6 mb-4 text-black">
        Meet {name}.
      </h3>

      <div className="font-sans text-black space-y-4 leading-relaxed">
        {children}
      </div>

    </div>
  );
}