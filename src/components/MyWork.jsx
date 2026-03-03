import SectionHeading from '../components/SectionHeading';

// 1. Create a quick sub-component for the cards to keep the main section clean
const ProjectCard = ({ title, imageSrc }) => (
  <div className="group flex flex-col gap-2 w-full cursor-pointer">
    {/* Image Container */}
    <div className="relative overflow-hidden border-2 border-brand-splash">
      
      {/* 1. The Overlay: Hidden by default (opacity-0), visible on group hover */}
      <div className="absolute inset-0 bg-brand-splash/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
        <span className="text-black font-display font-bold text-lg uppercase tracking-wider">
          View Project
        </span>
      </div>

      {/* 2. The Image: Scales slightly on hover for extra "pop" */}
      <img 
        className="w-full aspect-video object-cover transition-transform duration-200 group-hover:scale-115" 
        src={imageSrc} 
        alt={`${title} project thumbnail`} 
      />
    </div>

    {/* Project Title */}
    <h3 className="font-display font-medium text-xl text-brand-primary group-hover:underline">
      {title}
    </h3>
  </div>
);

export default function MyWork() {
  return (
    <section id="work" className="px-6 py-6 flex flex-col gap-5 w-full max-w-6xl mx-auto text-left">
      
      {/* Reusing your new SectionHeading component */}
      <SectionHeading>My Work</SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30">
        <ProjectCard 
          title="Closet Helper App" 
          imageSrc="/images/closet-helper-preview.webp" 
        />
        <ProjectCard 
          title="WGU Design Capstone" 
          imageSrc="/images/wgu-capstone-preview.webp" 
        />
        <ProjectCard 
          title="Comic Brick" 
          imageSrc="/images/comic-brick-preview.webp" 
        />
      </div>

    </section>
  );
}