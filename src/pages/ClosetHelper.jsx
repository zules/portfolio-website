import PersonaCard from '../components/PersonaCard';
import PageTitle from '../components/PageTitle';
import ProjectDetails from '../components/ProjectDetails';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';

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
  <h3 className="text-brand-primary text-xl font-diplay pt-4">Goals</h3>
  <ul className="list-disc space-y-3 pl-1 list-inside px-4 mx-auto mt-3 mb-8">
    <li>To determine the MVP feature set for a disability-friendly wardrobe app</li>
<li>To discover insights about how disabled people currently manage their wardrobe</li>
<li>To create a list of frustrations that might be realistic to tackle with my app</li>
  </ul>
<p>I was able to get 32 people with mobility disabilities to participate in my 22-question survey.</p>
</div>

</section>
<section>
<div className="flex w-full flex-col bg-brand-secondary px-4 py-8 lg:px-60">
  <h2 className="mb-6 font-display text-2xl text-white">
    Notable Results
  </h2>

  <ul className="mb-6 grid w-full grid-cols-2 gap-4 max-w-2xl mx-auto">
    <li className="rounded-lg bg-brand-light p-3 leading-tight font-handwritten text-lg">
      <span>Only <strong className="font-bold">4 out of 32</strong> rated their closet as accessible to them.</span>
    </li>
    <li className="rounded-lg bg-brand-light p-3 leading-tight font-handwritten text-lg">
      <span><strong className="font-bold">50%</strong> lose track of their clothing often or very often.</span>
    </li>
    <li className="rounded-lg bg-brand-light p-3 leading-tight font-handwritten text-lg">
      <span>Only <strong className="font-bold">28%</strong> wanted to input clothing with a system of icons.</span>
    </li>
    <li className="rounded-lg bg-brand-light p-3 leading-tight font-handwritten text-lg">
      <span><strong className="font-bold">77%</strong> were receptive toward using caregiver assistance to add clothes to the app.</span>
    </li>
  </ul>

  <p className="mb-6 font-sans text-sm lg:text-lg leading-relaxed text-brand-light">
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

  <p className="font-sans text-sm lg:text-lg leading-relaxed text-brand-light">
    That clarity allowed me to decide the path forward, but there were still a lot of data to analyze and draw insights from.
  </p>
</div>

</section>

    </>
  )
}