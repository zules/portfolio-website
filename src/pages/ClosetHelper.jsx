import PersonaCard from '../components/PersonaCard';

export default function ClosetHelper() {

  return (
    <>
      <h1>
        Test
      </h1>
      <PersonaCard 
        name="Charlie" 
        image="/images/persona-charlie.webp"
      >
        <p>Charlie is a writer who has quadriplegia. They need a caregiver's help getting dressed every morning while they remain in bed.</p>
        <p>Because their closet is not accessible to them during this process, picking an outfit is difficult. They must rely on memory of what clothes they have available.</p>
        <p>Often, Charlie just lets their caregiver pick something for them. Charlie usually ends up wearing something that is easy for the caregiver rather than something Charlie really wants to wear.</p>
      </PersonaCard>
    </>
  )
}