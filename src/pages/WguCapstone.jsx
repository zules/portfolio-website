import PersonaCard from '../components/PersonaCard';
import PageTitle from '../components/PageTitle';
import ProjectDetails from '../components/ProjectDetails';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';
import CaptionedImage from '../components/CaptionedImage';
import PersonaDetails from '../components/PersonaDetails';
import ContactSection from '../components/ContactSection';

export default function WguCapstone() {

  const wguCapstoneDetails = [
    { 
      label: "Project", 
      value: "Creating a design for the app version of the Experiential Learning Platform" 
    },
    { 
      label: "My Role", 
      value: "Designer and researcher" 
    },
    { 
      label: "Dates", 
      value: "September 2025 - October 2025" 
    },
  ];


  return (
    <>
    <main id="top" className="scroll-mt-24">
      <PageTitle title="WGU Design Capstone" />
    <figure className="flex w-full items-center justify-center bg-brand-splash py-10">
      <img 
        src="/images/wgu-capstone-preview.webp" 
        alt="" 
        className="w-full max-w-6xl object-contain drop-shadow-2xl" 
      />
    </figure>

<section className="mx-auto w-full max-w-md">
      <ProjectDetails items={wguCapstoneDetails} />
    </section>

<div className="py-30 max-w-4xl mx-auto px-4">
<SectionHeading>Notice</SectionHeading>
<p>The full case study is still under construction. For now, here are some assorted images from the project. Apologies that alt text has not been added to them yet. Currently best viewed on desktop.</p>
</div>

<section className="divide-y space-y-20 mb-40">
<div>
<CaptionedImage 
  images={[
    { 
      src: "/images/wgu-final-wireframes.webp", 
      alt: "" 
    }
  ]}
  caption="My final design, based on usability study results"
/>
</div>

<div>
<CaptionedImage 
  images={[
    { 
      src: "/images/wgu-persona.webp", 
      alt: "" 
    }
  ]}
  caption="The persona I created from user research."
/>
</div>

<div>
<CaptionedImage 
  images={[
    { 
      src: "/images/wgu-empathy-map.webp", 
      alt: "" 
    }
  ]}
  caption="An empathy map describing the persona."
/>
</div>

<div>
<CaptionedImage 
  images={[
    { 
      src: "/images/wgu-journey-map.webp", 
      alt: "" 
    }
  ]}
  caption="An example user's journey on the current mobile website."
/>
</div>

<div>
<CaptionedImage 
  images={[
    { 
      src: "/images/wgu-sketches-1.webp", 
      alt: "" 
    },
    { 
      src: "/images/wgu-sketches-2.webp", 
      alt: "" 
    }
  ]}
  caption="Some sketches while working on the final design."
/>
</div>

</section>

</main>

<footer>
    <ContactSection />

    </footer>
    </>
  )
}