import { FunctionComponent } from "react";
import PageSection from "../page-section";
import img1 from "./../../../assets/images/medias/media.png";
import img2 from "./../../../assets/images/medias/media-1.png";
import img3 from "./../../../assets/images/medias/media-2.png";
import TeamMemberCard from "../../team-member-card";
export const Team: FunctionComponent = () => (
  <div className="container">
    <PageSection title="Meet Our Team">
      <p className="text-text-second text-sm text-center">
        Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian
        mechanics{" "}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 container gap-5 py-16 lg:py-32">
        <TeamMemberCard name="Username" profession="Profession" pictureUrl={img1} />
        <TeamMemberCard name="Username" profession="Profession" pictureUrl={img2} />
        <TeamMemberCard name="Username" profession="Profession" pictureUrl={img3} />
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 container gap-5 items-center py-16 lg:py-32">
        <img src={logo1} className="w-full" alt="" />
        <img src={logo2} className="w-full" alt="" />
        <img src={logo3} className="w-full" alt="" />
        <img src={logo4} className="w-full" alt="" />
        <img src={logo5} className="w-full" alt="" />
        <img src={logo6} className="w-full" alt="" />
      </div> */}
    </PageSection>
  </div>
);
