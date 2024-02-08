import PageHeader from "../components/sections/page-header.tsx";
import PageSection from "../components/sections/page-section.tsx";
import TeamMemberCard from "../components/team-member-card.tsx";
import TrialSection from "../components/sections/trial-section.tsx";

const teamHeroPictures = Object.values(import.meta.glob('../assets/images/medias/team-hero-*.{jpg,png}', {
  eager: true,
  as: 'url'
}))
const teamMembers = Object.values(import.meta.glob('../assets/images/medias/team-member-*.{jpg,png}', {
  eager: true,
  as: 'url'
}))

export default function Team() {
    return (
      <>
        <PageHeader
          title="What We Do"
          headline="Innovation tailored for you"
          breadcrumbs={['Home', 'Team']}
        >
          <div className="grid grid-rows-2 grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 lg:gap-y-3 ">
            {teamHeroPictures.map((picture, idx) => (
              <img
                key={idx}
                src={picture} alt={`Team Hero Picture ${idx + 1}`}
                className={[
                  `w-full object-cover object-center lg:aspect-square`,
                  idx === 0 ? 'row-span-2 col-span-2' : '',
                  idx === 2 ? 'lg:row-start-2 lg:col-start-3 lg:col-end-4' : '',
                ].join(' ')}/>
            ))}
          </div>
        </PageHeader>

        <PageSection title="Meet Our Team" className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-24 my-24">
            {teamMembers.map((memberPicture, idx) => (
              <TeamMemberCard
                key={idx}
                pictureUrl={memberPicture}
                name="Username"
                profession="Profession"
              />
            ))}
          </div>
        </PageSection>

        <TrialSection/>
      </>
    )
}