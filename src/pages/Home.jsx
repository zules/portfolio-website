import SectionHeading from '../components/SectionHeading';
import MyWork from '../components/MyWork';
import FeatureCard from '../components/FeatureCard';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <section className="px-10 pt-10 pb-10 lg:pb-52 lg:pt-32 w-full bg-brand-primary flex flex-col lg:flex-row justify-evenly items-center">

        <div className="rotate-[-11deg] origin-center text-center font-display font-black text-3xl xl:text-6xl leading-tight text-nowrap">
          <h1 className="m-0">
            <span className="text-white">A </span>
            <span className="text-brand-pale">Cyborg’s<br/></span>
            <span className="text-white">UX Engineering<br/>Portfolio!</span>
          </h1>
        </div>

        {/* 2. Hero Image Group */}
        <div className="relative mt-12"> 
          {/* Decorative element hidden from screen readers */}
          <div 
            aria-hidden="true"
            className="relative my-10 w-64 h-52 lg:size-64 bg-brand-splash border-2 border-black" 
          />
          
          {/* Hero Image */}
          <img 
            className="absolute -top-1 -right-2 lg:-right-12 w-64 lg:w-96 max-w-none z-10" 
            src="/images/me_illo_lofi.webp" 
            alt="An illustration of Julia, a woman in a power wheelchair using a Jaco robotic arm and hold a digital stylus."
          />
        </div>

      </section>

<section className="flex flex-col gap-4 px-6 py-9 w-full max-w-2xl mx-auto">
  
<SectionHeading>My mission</SectionHeading>

  <p>
    I strive to improve the everyday lives of people by creating delightful digital experiences.
  </p>

  <div className="flex items-center gap-4">
    {/* Icon Container */}
    <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 text-brand-secondary">
      <span className="material-symbols-outlined !text-[40px]">
        accessible_forward
      </span>
    </div>

    <p>
      As a disabled person, I naturally adapt to barriers and look for innovative solutions.
    </p>
  </div>

</section>

<MyWork />


<section id="about" className="scroll-mt-24 px-6 py-9 bg-brand-light flex flex-col gap-6 w-full max-w-4xl mx-auto text-left">
      
      <SectionHeading>About Me</SectionHeading>

      {/* Profile Image */}
      <div className="flex justify-center">
        <img 
          className="w-44 lg:w-64 object-cover" 
          src="/images/headshot-1.webp" 
          alt="A photo of Julia, a woman in her early 30s who uses a power chair" 
        />
      </div>

      {/* Intro Text */}
      <p className="font-sans text-base leading-relaxed text-black">
        Previously a comics artist, my background in visual storytelling and digital art shapes how I think about clarity, structure, and how systems communicate with the people using them.
      </p>

      {/* Credentials & Skills Grid */}
      <div className="grid grid-cols-2 gap-5 p-0">
        {/* Credentials */}
        <div className="flex flex-col gap-4 items-center">
            <div className="inline-block px-4 py-1 bg-white -skew-x-32 w-fit">
                <h3 className="font-title text-xl lg:text-4xl text-black skew-x-32">
                CREDENTIALS
                </h3>
            </div>
          <p className="font-sans text-xs lg:text-sm text-brand-dark">
            <ul className="list-disc space-y-3 pl-2 list-outside lg:max-w-xs">
                <li>BS User Experience Design (Western Governors University)</li>
                <li>Google UX Design Certificate</li>
                <li>Meta Front End Developer Certificate (in progress)</li>
            </ul>
          </p>
        </div>

        {/* Top Skills */}
        <div className="flex flex-col gap-4 items-center">
            <div className="inline-block px-4 py-1 bg-white -skew-x-32 w-fit">
                <h3 className="font-title text-xl lg:text-4xl text-black skew-x-32">
                TOP SKILLS
                </h3>
            </div>
          <p className="font-sans text-xs lg:text-sm text-brand-dark">
            <ul className="list-disc space-y-3 pl-4 list-outside lg:max-w-xs">
                <li>User Research</li>
                <li>Equity-Focused Design</li>
                <li>Figma</li>
                <li>Written Communication</li>
                <li>AI-Assisted Prototyping</li>
                <li>3D Modeling (Blender)</li>
            </ul>
          </p>
        </div>
      </div>

      <p className="font-sans text-base text-black mt-4">
        I design by adhering to these four qualities of products with great UX:
      </p>

      {/* UX Qualities Cards */}
      <div className="flex flex-col items-center gap-3">
        <FeatureCard icon="trackpad_input" title="Usable" description="functioning without error" />
        <FeatureCard icon="check_circle" title="Useful" description="satisfying a need" />
        <FeatureCard icon="accessibility_new" title="Equitable" description="working for everyone" />
        <FeatureCard icon="cheer" title="Enjoyable" description="bringing delight" />
      </div>

      {/* Fun Facts Section */}
      <div className="flex items-center gap-4 mt-6">
        <p className="flex-1 font-sans text-base text-black">
          When I’m not creating for work, I’m creating for fun. Some of my other favorite things include black coffee, Star Trek, and Pokemon cards.
        </p>
        {/* Placeholder for your future illustration */}
        <div className="w-20 h-20 bg-brand-dark flex-shrink-0 flex items-center justify-center text-white text-xs text-center p-2">
          Future Illustration
        </div>
      </div>

    </section>

    <ContactSection />

    </main>
  )
}