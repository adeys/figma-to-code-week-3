import { FunctionComponent } from "react";
import PageSection from "../page-section";
import logo1 from "./../../../assets/images/logos/logo1.png";
import logo2 from "./../../../assets/images/logos/logo2.png";
import logo3 from "./../../../assets/images/logos/logo3.png";
import logo4 from "./../../../assets/images/logos/logo4.png";
import logo5 from "./../../../assets/images/logos/logo5.png";
import logo6 from "./../../../assets/images/logos/logo6.png";

export const Company: FunctionComponent = () => (
  <div>
    <PageSection title="Big Companies Are Here" className="bg-[#FAFAFA]">
      <div className="container">
        <p className="text-text-second text-sm text-center w-full">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 container gap-16 lg:gap-5 items-center py-16 lg:py-32">
          <img src={logo1} className="w-3/5 mx-auto" alt="" />
          <img src={logo2} className="w-3/5 mx-auto" alt="" />
          <img src={logo3} className="w-3/5 mx-auto" alt="" />
          <img src={logo4} className="w-3/5 mx-auto" alt="" />
          <img src={logo5} className="w-3/5 mx-auto" alt="" />
          <img src={logo6} className="w-3/5 mx-auto" alt="" />
        </div>
      </div>
    </PageSection>
  </div>
);
