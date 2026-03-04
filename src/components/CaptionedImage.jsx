export default function CaptionedImage({ images = [], caption, smallMode = false, constrainWidth = true }) {
let imgClass;
    smallMode ? imgClass = "w-40 lg:w-64 object-cover mx-auto" : imgClass = "h-auto mx-auto object-cover shadow-sm scale-120 lg:scale-100";

let figureClass;
    constrainWidth ? figureClass =  "my-6 flex max-w-6xl mx-auto flex-col gap-3" : figureClass = "my-6 flex flex-col gap-3"


  return (
    <figure className={figureClass}>
      {/* Grid dynamically adjusts: 1 column for 1 image, 2 columns for 2 images */}
      <div 
        className={`grid overflow-hidden gap-4 ${
          images.length === 2 ? "grid-cols-2" : "grid-cols-1"
        }`}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className={imgClass}
          />
        ))}
      </div>
      
      {caption && (
        <figcaption className="px-4 text-center font-sans text-sm lg:text-base text-brand-secondary">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}