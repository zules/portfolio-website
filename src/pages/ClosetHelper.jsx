import PersonaCard from '../components/PersonaCard';
import PageTitle from '../components/PageTitle';
import ProjectDetails from '../components/ProjectDetails';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';
import CaptionedImage from '../components/CaptionedImage';
import PersonaDetails from '../components/PersonaDetails';
import ContactSection from '../components/ContactSection';

export default function ClosetHelper() {

  const closetHelperDetails = [
    { 
      label: "Project", 
      value: "A clothes tracking app designed for users with mobility disabilities." 
    },
    { 
      label: "My Role", 
      value: "Lead designer and researcher" 
    },
    { 
      label: "Dates", 
      value: "November 2025 - February 2026 (ongoing)" 
    },
  ];

  const competitors = [
    {
      id: 1,
      strengths: "Exhaustive features; active development",
      weaknesses: "Possible feature bloat; only available on Apple app store",
    },
    {
      id: 2,
      strengths: "Outfit picker with 3 options for tiers is smooth",
      weaknesses: "Gamification (achievements, challenges) is annoying; confusing user flow for creating outfit",
    },
    {
      id: 3,
      strengths: "Really intuitive navigation and IA",
      weaknesses: "QOL features put behind paywall; can’t upload item without entering brand name",
    },
    {
      id: 4,
      strengths: "Straightforward, not cluttered",
      weaknesses: "Some buttons and features seem broken; calendar scheduling features are hidden",
    },
  ];

  return (
    <>
    <main>
      <PageTitle title="Closet Helper" id="top" />


    <figure className="flex w-full items-center justify-center bg-brand-splash py-10">
      <img 
        src="/images/carousel-hifi-mockup.webp" 
        alt="Closet Helper mobile app interface mockup showing the carousel feature" 
        className="h-auto w-72 object-contain drop-shadow-2xl" 
      />
    </figure>

<section className="mx-auto w-full max-w-md">
      <ProjectDetails items={closetHelperDetails} />
    </section>

<div class="flex flex-col mx-auto max-w-6xl gap-4 lg:flex-row">
      <PersonaCard 
        name="Charlie" 
        image="/images/persona-charlie.webp"
      >
        <p>Charlie is a writer who has quadriplegia. They need a caregiver's help getting dressed every morning while they remain in bed.</p>
        <p>Because their closet is not accessible to them during this process, picking an outfit is difficult. They must rely on memory of what clothes they have available.</p>
        <p>Often, Charlie just lets their caregiver pick something for them. Charlie usually ends up wearing something that is easy for the caregiver rather than something Charlie really wants to wear.</p>
      </PersonaCard>

    <section className="w-full bg-brand-light p-6 md:p-10 lg:my-auto h-fit">
<SectionHeading>Background</SectionHeading>
          
        
        <div className="flex flex-col py-2 gap-6 font-sans text-base leading-relaxed text-black">
          <p>
            In Course 7 of Google’s UX Design certificate, we were prompted to create a design “for social good.” I decided to create an app for the disability community.
          </p>
          <p>
            First, I wanted to see if other disabled people commonly ran into a problem I’ve faced: clothes! Getting dressed in the morning isn’t easy when you can’t stand up and look through your closet.
          </p>
          <p>
            After informally asking my peers whether they might want a wardrobe tracking app, I received enough interest to move forward with proper research.
          </p>
        </div>

    </section>
    </div>

<section className="max-w-6xl mx-auto mt-10 lg:mt-24 px-2">
    <SectionHeading>Competitive Audit</SectionHeading>
    <p className="mt-4">Other wardrobe tracking apps already existed. I downloaded and investigated the most popular ones to better understand the market.</p>

    <div className="mx-auto max-w-2xl overflow-x-auto border border-brand-dark/20 shadow-sm my-4 lg:my-16">

      <table className="table-fixed w-full border-collapse text-left font-sans text-base text-black">
        
        {/* Table Header */}
        <thead>
          <tr className="divide-x divide-brand-dark/20 border-b border-brand-dark/20 text-center font-display text-sm lg:text-xl">
            <th scope="col" className="w-12 lg:w-40 bg-brand-light p-3 font-semibold">
              App
            </th>
            <th scope="col" className="w-1/2 bg-brand-splash/30 p-3 font-semibold">
              Strengths
            </th>
            <th scope="col" className="w-1/2 bg-brand-pale p-3 font-semibold">
              Weaknesses
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-brand-dark/20">
          {competitors.map((app) => (
            <tr 
              key={app.id} 
              className="divide-x divide-brand-dark/20 transition-colors hover:bg-brand-light/50"
            >
              <td className="p-1 text-center font-display text-xl font-medium text-brand-secondary">
                {app.id}
              </td>
              <td className="p-1 align-top text-xs">
                {app.strengths}
              </td>
              <td className="p-1 align-top text-xs">
                {app.weaknesses}
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
          <p>I took notes on opportunities for improvement and decided that my best chance of breaking into the competitive market was to use equity-focused design: I would design for the disabled user first.</p>



    </section>

<section>
        <div className="flex w-full items-center justify-center bg-brand-secondary px-4 py-8 my-10 lg:my-24 lg:h-60">
  <h2 className="font-handwritten text-5xl lg:text-7xl text-white">
    But how?
  </h2>
</div>

<div className="max-w-6xl mx-auto px-4 space-y-4">
<p>Here’s an insight I possessed already from my own lived experience: disabled users might have difficulty using a basic wardrobe tracking app because it might be hard for them to take photos of their clothes.</p>
<p>If you can’t reach into your closet and pull out a piece of clothing, how are you going to get it into the app?</p>

<FeatureCard icon="brightness_alert" title="Problem" description="How can a user who can’t easily pull out clothes from their closet document their clothing in an app?" />

<h2 className="text-center text-2xl lg:text-5xl font-handwritten pt-10 pb-5 lg:pb-10">My most feasible ideas</h2>


<svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 300 110" 
  class="w-64 lg:w-3xl mx-auto text-slate-900 px-4"
  fill="none" 
  stroke="currentColor" 
  stroke-width="8" 
  stroke-linecap="butt" 
  stroke-linejoin="round"
  aria-labelledby="branch-arrow-title"
>
  <path d="M 150 10 V 45 C 150 60, 80 50, 50 60 C 25 70, 25 80, 15 95" />
  
  <path d="M 150 45 C 150 60, 220 50, 250 60 C 275 70, 275 80, 285 95" />
  
  <path d="M 5 75 L 15 95 L 35 90" />
  
  <path d="M 295 75 L 285 95 L 265 90" />
  <title id="branch-arrow-title">Branching arrow showing two possible paths</title>
</svg>

<ul className="flex w-full items-start justify-center gap-6 lg:gap-24 px-4 py-4 lg:max-w-5xl mx-auto">
  <li className="flex-1 font-sans text-sm lg:text-lg text-brand-dark">
    Instead of taking photos, the user inputs their clothing through a system of icons and nicknames.
  </li>
  <li className="flex-1 font-sans text-sm lg:text-lg text-brand-dark">
    <strong className="font-display font-bold text-brand-secondary">OR</strong> the app has a “Helper Mode” which allows for easy collaboration with the user’s caregiver for taking photos.
  </li>
</ul>
<p>With this in mind, it was time to begin discovery research.</p>
</div>
</section>

<section className="max-w-6xl mx-auto pt-20 px-2">
<SectionHeading>Discovery Research</SectionHeading>

<div className="max-w-3xl mx-auto py-3 lg:py-6 px-2">
  <h3 className="text-brand-primary text-xl font-display pt-4">Goals</h3>
  <ul className="list-disc space-y-3 pl-1 list-inside px-4 mx-auto mt-3 mb-8">
    <li>To determine the MVP feature set for a disability-friendly wardrobe app</li>
<li>To discover insights about how disabled people currently manage their wardrobe</li>
<li>To create a list of frustrations that might be realistic to tackle with my app</li>
  </ul>
<p>I was able to get 32 people with mobility disabilities to participate in my 22-question survey.</p>
</div>

</section>
<section>
<div className="flex w-full flex-col bg-brand-secondary px-4 pt-16 pb-8 lg:px-60">
  <h2 className="mb-6 font-display text-2xl text-white">
    Notable Results
  </h2>

  <ul className="mb-6 grid w-full grid-cols-2 gap-4 max-w-2xl mx-auto">
    <li className="rounded-lg bg-brand-light p-3 leading-tight font-handwritten text-lg lg:text-2xl">
      <span>Only <strong className="font-bold">4 out of 32</strong> rated their closet as accessible to them.</span>
    </li>
    <li className="rounded-lg bg-brand-light p-3 leading-tight font-handwritten text-lg lg:text-2xl">
      <span><strong className="font-bold">50%</strong> lose track of their clothing often or very often.</span>
    </li>
    <li className="rounded-lg bg-brand-light p-3 leading-tight font-handwritten text-lg lg:text-2xl">
      <span>Only <strong className="font-bold">28%</strong> wanted to input clothing with a system of icons.</span>
    </li>
    <li className="rounded-lg bg-brand-light p-3 leading-tight font-handwritten text-lg lg:text-2xl">
      <span><strong className="font-bold">77%</strong> were receptive toward using caregiver assistance to add clothes to the app.</span>
    </li>
  </ul>

  <p className="mb-6 font-sans text-sm lg:text-lg leading-relaxed text-brand-light max-w-6xl mx-auto">
    While the quantitative results pointed toward “Helper Mode” instead of the icon system, one participant provided an insight that showed why photos are almost always going to work better for these users:
  </p>

  {/* Quote Block */}
  <div className="mb-6 flex flex-col gap-6 bg-brand-dark px-2 py-5 inset-shadow-sm/90 inset-shadow-black">
  <div className="flex flex-col lg:flex-row gap-6 items-center lg:px-8">
      <FeatureCard icon="quiz" title="Question" description="If it enabled you to more easily add and organize your clothes independently, would you consider using a system of ICONS AND NAMES in the app to represent each piece of clothing?" />
    
    <blockquote className="text-center font-handwritten text-xl lg:text-3xl font-bold leading-snug text-white">
      “No, I show assistants photos so they can locate [the piece of clothing].”
    </blockquote>
    </div>
  </div>

  <p className="font-sans text-sm lg:text-lg leading-relaxed text-brand-light max-w-6xl mx-auto">
    That clarity allowed me to decide the path forward, but there were still a lot of data to analyze and draw insights from.
  </p>
</div>

</section>

<section>

<CaptionedImage 
  images={[
    { 
      src: "/images/grouped-empathy-maps.webp", 
      alt: "A collection of 32 empathy maps grouped together in clumps with labels like 'frustrated director,' 'closet exile,' and 'style sacrificer'" 
    }
  ]}
  caption="I created empathy maps for each participant then grouped them together to discover user personas."
/>
<div className="mx-auto w-fit">
      <PersonaCard 
        name="Jackie" 
        image="/images/persona-jackie.webp"
      >
        <p>Jackie is a billing manager at a hospital. She has muscular dystrophy and utilizes a team of caregivers to assist her with daily activities, including dressing, retrieving clothes, and doing laundry.</p>
        <p>Jackie has an organized wardrobe and knows exactly what she wants to wear each day, but regularly, the outfit she wants cannot be found. This is because the caregivers tend to put clothes away in different places instead of following her system.</p>
      </PersonaCard></div>

<div className="max-w-6xl mx-auto px-2 w-fit"><SectionHeading>Persona Details</SectionHeading></div>
<div className="flex w-full justify-center gap-2 px-2 pb-8 lg:gap-20">
  
      <PersonaDetails 
  name="Charlie"
  age={44}
  imageSrc="/images/persona-charlie.webp"
  imageAlt="Illustrated portrait of Charlie"
  quote="I end up wearing the same old things, because I can't access the clothes in my closet, and my caregivers are usually in a rush."
  motivations={[
    "To wear more of their clothes that they cannot usually remember",
    "To feel happy with the style of their outfit"
  ]}
  frustrations={[
    "When they can't go through their clothes because their closet is inaccessible",
    "When they don't know their clothing options when choosing an outfit"
  ]}
/>

      <PersonaDetails 
  name="Jackie"
  age={51}
  imageSrc="/images/persona-jackie.webp"
  imageAlt="Illustrated portrait of Jackie"
  quote="Sometimes I want to wear a certain blouse, but my caregiver, Heather, can't find where it is because my other caregiver, Tammy, who is off-duty, was the one who did laundry last, and she didn't hang it up where we expected it to be."
  motivations={[
    "To have more control over where her clothes are put away",
    "To maintain independence and autonomy"
  ]}
  frustrations={[
    "When caregivers don’t put clothes back in their proper place",
    "When she wants a specific outfit, but it can’t be found even though Jackie knows it’s clean"
  ]}
/>
</div>

</section>

<section>
  <div className="max-w-6xl mx-auto px-2 mt-10">
    <SectionHeading>Building the Prototype</SectionHeading>
  <p>After using my collected research to determine an MVP, I created a diagram to map out the main user flows.</p>
  </div>

<CaptionedImage 
  images={[
    { 
      src: "/images/user-flow-diagram.webp", 
      alt: "A flow chart with many nodes grouped into sections titled after the app's screens" 
    }
  ]}
  caption="The main user flows were: onboarding, add clothes, and plan outfit. The dashboard, settings, and tracker pages were also planned."
/>

<div className="flex flex-col justify-center items-center lg:flex-row lg:bg-brand-pale lg:gap-10">
<aside className="my-8 flex flex-col border border-black bg-brand-light mx-2 max-w-lg">
  <div className="px-5 py-4">
    <h3 className="mb-3 font-display text-xl text-brand-primary">
      But what is &ldquo;Helper Mode&rdquo;?
    </h3>
    
    <div className="flex flex-col gap-4 font-sans text-base text-black">
      <p>
        In the previous survey, I asked participants in an open-ended way what &ldquo;Helper Mode&rdquo; might look like. One person said:
      </p>
      
      <blockquote className="font-handwritten text-xl leading-tight">
        &ldquo;Adding someone to &lsquo;my closet&rsquo; so they could add stuff for me from their phone.&rdquo;
      </blockquote>
      
      <p>
        This was a great idea, but how would it work? Did I need to create two apps: a user app and a helper app? How would the apps interface?
      </p>
      
      <p>
        When I get stuck, I often explain the problem to AI so that we can brainstorm. In this case, the AI let me know I was overthinking it. We just need one app, syncing data through the cloud, with user permissions. I could simulate this in the upcoming usability study to see if users liked it (spoiler: they loved it).
      </p>
    </div>
  </div>
</aside>
<div className="bg-brand-pale flex flex-col px-4 py-10 text-sm lg:max-w-sm">
<h3 className="mb-3 font-display text-xl text-brand-primary">
    Other Accessibility Features
  </h3>
  
  <p className="mb-4 font-sans text-black">
    These weren&rsquo;t random ideas; they emerged from my research.
  </p>
  
  <ul className="ml-6 flex flex-col gap-3 list-outside list-disc font-sans text-black">
    <li>
      AI photo enhance to ensure the digital items are a good replacement for the physical items users can&rsquo;t easily access
    </li>
    <li>
      &ldquo;Extra scroll mode&rdquo; in settings that allows users to scroll buttons at the top of the screen all the way down for easy reach
    </li>
  </ul></div>

</div>

<div className="max-w-6xl mx-auto px-4 mt-10">
<p>I built the mid-fidelity prototype using an AI assisted workflow where I described the features, the AI built them, and I tested them while describing needed tweaks.</p>
</div>

<div className="flex flex-col lg:flex-row max-w-6xl items-center justify-center mx-auto lg:pl-40">
<CaptionedImage 
  images={[
    { 
      src: "/images/additems-prototype.webp", 
      alt: "A prototype of a phone screen titled 'add items' showing an interface for taking photos and categorizing clothes" 
    }
  ]}
  caption="The prototype emulated a phone screen on desktop devices."
  smallMode={true}
/>

<div className="flex w-full justify-center py-8">
  <a 
    href="https://closethelperprototype.netlify.app/?closet=preloaded" 
    target="_blank" 
    rel="noopener noreferrer"
    className="font-display text-xl lg:text-3xl font-bold text-brand-primary underline decoration-2 hover:opacity-60 transition-opacity focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
  >
    Live Link to Prototype
    {/* Screen-reader-only text to announce the new tab behavior */}
    <span className="sr-only"> (opens in a new tab)</span>
  </a>
</div>
</div>

</section>

<section className="max-w-6xl mx-auto pt-20 px-2">
<SectionHeading>Usability Study</SectionHeading>
<p className="py-4 text-sm">I recruited 12 participants at zero monetary cost for the following unmoderated study:</p>

<div className="max-w-3xl mx-auto py-3 lg:py-6 px-2">
    
  <h3 className="text-brand-primary text-xl font-display pt-4">Goals</h3>

  <ul className="list-disc space-y-3 pl-6 list-outside pr-4 mx-auto mt-3 mb-8 text-sm lg:text-base">
    <li>To evaluate the prototype for usability issues</li>
<li>To understand if users can complete each main user flow</li>
<li>To understand if users want to use this app with its current feature set</li>
<li>To understand if any features should be removed from the MVP</li>
  </ul>

</div>

<section className="mx-auto flex text-sm lg:text-lg w-full max-w-6xl flex-col bg-brand-secondary px-6 py-10 shadow-md lg:px-30 lg:rounded-[40px]">
  <h3 className="mb-6 font-display text-2xl lg:text-4xl text-white">Results</h3>
  
  <div className="flex flex-col lg:flex-row lg:gap-10 lg:items-end">
  <div className="flex-1">
  <p className="mb-4 font-sans text-brand-light">
    Participants were given 9 tasks and asked if they were able to complete them. Outcomes included:
  </p>
  
  {/* First Stats List */}
  <ul className="mb-8 flex w-full flex-col text-xl lg:text-3xl gap-2 lg:gap-4 rounded-sm bg-brand-pale p-4 lg:p-8 max-w-sm">
    <li className="font-handwritten text-brand-secondary">
      25% struggled with the labels feature.
    </li>
    <li className="text-right font-handwritten text-brand-primary">
      92% successfully planned an outfit.
    </li>
    <li className="font-handwritten text-brand-secondary">
      36% could not find the AI enhance feature.
    </li>
    <li className="text-right font-handwritten text-brand-primary">
      100% moved clothes from dirty to clean.
    </li>
  </ul>
  </div>

  <div className="flex-1">
  <p className="mb-4 font-sans text-brand-light">
    The Likert scale results were very encouraging.
  </p>

  {/* Second Stats List */}
  <ul className="mb-8 flex w-full flex-col text-xl lg:text-3xl gap-2 lg:gap-4 rounded-sm bg-brand-pale p-4 lg:p-8 max-w-sm">
    <li className="font-handwritten text-brand-secondary">
      83% agreed the app was easy to use.
    </li>
    <li className="text-right font-handwritten text-brand-primary">
      75% agreed the app was fun to use.
    </li>
    <li className="font-handwritten text-brand-secondary">
      0% agreed that the app was too complicated.
    </li>
  </ul>
  </div>
  </div>


  <p className="font-sans text-brand-light w-full text-center">
    I analyzed the qualitative feedback with an affinity diagram.
  </p>
</section>

<div className="flex flex-col lg:flex-row lg:gap-4 items-center">
<CaptionedImage 
  images={[
    { 
      src: "/images/usability-study-affinity-map.webp", 
      alt: "A collection of sticky notes arranged into thematic clumps, showing a high volume of qualitative data" 
    }
  ]}
  caption="8 out of 9 users directly replied that they would use this app. 7 of them showed enthusiasm in their answer."
/>


<div className="flex justify-center py-2 px-4">
  <figure className="mx-auto flex flex-col items-center gap-6 bg-brand-dark px-6 py-8 h-fit inset-shadow-sm/90 inset-shadow-black">
    <blockquote className="text-center font-handwritten text-2xl font-bold leading-relaxed text-white">
      &ldquo;[The app is] another step to freedom [...] This will greatly help me.&rdquo;
    </blockquote>
    <figcaption className="text-center font-sans text-base text-white">
      &mdash; Participant 1
    </figcaption>
  </figure>
</div></div>
</section>
<section>

<div className="flex flex-col lg:flex-row lg:gap-4 items-start lg:mr-10 lg:ml-50 my-20">

<div className="flex justify-center py-2 px-4 lg:mt-20 max-w-xs">
<p>While there was a lot of reason to be excited about the results, the study uncovered some issues that needed to be addressed. I put them into a problem severity matrix in order to decide my next steps.</p>
</div>
<div className="w-full lg:w-1/2">
<CaptionedImage 
  images={[
    { 
      src: "/images/problem-severity-matrix.webp", 
      alt: "A spreadsheet with 16 rows of data that has been analyzed and color coded" 
    }
  ]}
  caption="I organized the issues by priority, frequency, and evaluated them for feasibility. Only one issue was determined to be a critical usability issue."
/></div>
<div className="self-end space-y-4 p-2">
<h3 className="text-brand-primary text-xl font-display pt-4">Top Problems</h3>

      <FeatureCard icon="apparel" title="Plan Outfit" description="Users might not understand the intended way to tell the app they’re “finished” with an outfit so the app can categorize the items as dirty." />
      <FeatureCard icon="label" title="Labels" description="Some users found the labels feature hard to understand and use." />
      <FeatureCard icon="add_diamond" title="Adding Items" description="The app auto-saves an item to their closet after the user categorizes it, but some users expressed uncertainty about whether the item was saved." />

</div>
</div>

<CaptionedImage 
  images={[
    { 
      src: "/images/hifi-wireframes.webp", 
      alt: "Paper sketches of possible UI elements for the app exploring different layouts and components" 
    },
    { 
      src: "/images/hifi-wireframes-2.webp", 
      alt: "More rough paper sketches of possible UI elements and layouts"
    }
  ]}
  caption="Brainstorming solutions with paper wireframes."
/>

</section>

<section>

  <div className="max-w-6xl mx-auto px-2 mt-10 lg:mt-40">
    <SectionHeading>High Fidelity Mockups</SectionHeading>
  </div>
  <CaptionedImage 
  images={[
    { 
      src: "/images/hifi-mocks-spread.webp", 
      alt: "A spread of high fidelity app screens with the titles Add Items, Outfits, Create Outfit, Carousel, and Add Labels" 
    }
  ]}
  caption="This iteration separates the “Plan Outfit” screen into two to make the intended flow more understandable."
  constrainWidth= {false}
/>


  
<section className="mx-auto w-full max-w-3xl px-2 py-8">
  {/* The Dictator Grid: Forces exactly two equal columns */}
  <div className="grid grid-cols-2 gap-4 md:gap-8">
    
    {/* BEFORE */}
    <figure className="flex h-full flex-col items-center justify-between gap-3">
      <h3 className="text-center font-display text-xl uppercase text-brand-primary">
        Before
      </h3>
      <img 
        className="h-[87%] object-contain drop-shadow-md" 
        src="/images/createoutfit-prototype.webp" 
        alt="Low-fidelity prototype of the outfit planning screen" 
      />
      <figcaption className="text-center font-sans text-base text-black">
        The prototype
      </figcaption>
    </figure>

    {/* AFTER */}
    <figure className="flex h-full flex-col items-center justify-between gap-3">
      <h3 className="text-center font-display text-xl uppercase text-brand-primary">
        After
      </h3>
      <img 
        className="h-auto w-full object-contain drop-shadow-md" 
        src="/images/createoutfit-hifi-mockup.webp" 
        alt="High-fidelity mockup of the final outfit creation screen" 
      />
      <figcaption className="text-center font-sans text-base text-black">
        Hi-fi mockup
      </figcaption>
    </figure>

  </div>


</section>

</section>

<section className="max-w-6xl mx-auto py-10 px-2">
<SectionHeading>Next Steps...</SectionHeading>
<p className="py-4">I currently plan to develop a beta version of the app and run a final round of usability testing before launching it for widespread availability.</p>
<p className="py-4">I think the beauty of this design is that it will meaningfully impact the lives of disabled users while simultaneously being useful to anyone who wants a quality wardrobe tracking app. That’s the curb cut effect in action!</p>
</section>
</main>
<footer>
    <ContactSection />

    </footer>
    </>
  )
}