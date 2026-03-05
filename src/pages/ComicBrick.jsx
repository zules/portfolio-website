import PersonaCard from '../components/PersonaCard';
import PageTitle from '../components/PageTitle';
import ProjectDetails from '../components/ProjectDetails';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';
import CaptionedImage from '../components/CaptionedImage';
import PersonaDetails from '../components/PersonaDetails';
import ContactSection from '../components/ContactSection';

export default function ComicBrick() {

  const comicBrickDetails = [
    { 
      label: "Project", 
      value: "Publishing a physical volume of my webcomic" 
    },
    { 
      label: "My Role", 
      value: "Artist, designer, publisher" 
    },
    { 
      label: "Dates", 
      value: "May 2022 - May 2023" 
    },
  ];


  return (
    <>
    <main id="top" className="scroll-mt-24">
      <PageTitle title="The Comic Brick" />
    <figure className="flex w-full items-center justify-center bg-brand-splash py-10">
      <img 
        src="/images/comic-brick-preview.webp" 
        alt="" 
        className="w-full max-w-6xl object-contain drop-shadow-2xl" 
      />
    </figure>

<section className="mx-auto w-full max-w-md">
      <ProjectDetails items={comicBrickDetails} />
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
      src: "/images/brick-first-proofs.webp", 
      alt: "" 
    }
  ]}
  caption="The first two proof copies of the book I ordered, showing the product's size and why it is called a comic 'brick'."
/>
</div>

<div>
<CaptionedImage 
  images={[
    { 
      src: "/images/brick-chapter-two-cover.webp", 
      alt: "" 
    }
  ]}
  caption="Some interior pages."
/>
</div>

<div>
<CaptionedImage 
  images={[
    { 
      src: "/images/brick-page.webp", 
      alt: "" 
    }
  ]}
  caption="A page which had its art extended in order to utilize full page bleed."
/>
</div>

<div>
<CaptionedImage 
  images={[
    { 
      src: "/images/brick-stacked-pages.webp", 
      alt: "" 
    }
  ]}
  caption="Some of the pages inside the book layout program I used, Scribus."
/>
</div>

<div>
<CaptionedImage 
  images={[
    { 
      src: "/images/brick-chapter-five-cover.webp", 
      alt: "" 
    }
  ]}
  caption="More pages from inside the book."
/>
</div>

<div>
<CaptionedImage 
  images={[
    { 
      src: "/images/brick-and-me.webp", 
      alt: "" 
    }
  ]}
  caption="Me and one of the final proof copies. The book had three rounds of revisions."
/>
</div>

<div>
<CaptionedImage 
  images={[
    { 
      src: "/images/brick-reviews.webp", 
      alt: "" 
    }
  ]}
  caption="I didn't sell many copies, but it has stellar reviews on Amazon and Barnes & Noble online."
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