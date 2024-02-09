import {FunctionComponent} from "react";
import PageSection from "../page-section";
import CompanyList from "../../company-list.tsx";

export const Company: FunctionComponent = () => (
  <div>
    <PageSection title="Big Companies Are Here" className="bg-[#FAFAFA]">
      <div className="container">
        <p className="text-text-second text-sm text-center w-full">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>

        <CompanyList/>
      </div>
    </PageSection>
  </div>
);
