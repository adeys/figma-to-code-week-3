import PageHeader from "../components/sections/page-header.tsx";
import CompanyList from "../components/company-list.tsx";
import TrialSection from "../components/sections/trial-section.tsx";
import PageSection from "../components/sections/page-section.tsx";
import {ReactElement} from "react";
import PricingSection from "../components/sections/pricing/pricing.tsx";

export default function Pricing() {
    return (
      <>
        <PageHeader
          title="Pricing"
          headline="Simple Pricing"
          breadcrumbs={['Home', 'Pricing']}
        />

        <PricingSection/>

        <PageSection
          titleElement={<h2 className="font-semibold text-2xl capitalize text-center">Trusted By Over 4000 Big
            Companies</h2> as ReactElement}
          className="bg-background-light-gray-2"
        >
          <CompanyList/>
        </PageSection>

        <PageSection
          title="Pricing FAQs"
          subtitleElement={<p className="max-w-md mx-auto text-lg font-semibold text-text-second">Problems trying to
            resolve the conflict between the two major realms of Classical physics</p>}>

          <div className="max-w-screen-xl mx-auto py-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {[
                'Work better together',
                'OpenType features a Variable fonts',
                'Start working faster today',
                'Work at the speed of thought.',
                'The Fastest way to organize',
                'The Fastest way to navigate'
              ].map((title, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-6 lg:p-4">
                    <div className="hidden md:block">
                      <svg className="size-8 text-primary" fill="none" strokeWidth={1.5} stroke="currentColor"
                           viewBox="0 0 24 24"
                           xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                      </svg>

                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-6 lg:mb-2">{title}</h3>
                      <p className="font-semibold text-text-second">
                        Met minim Mollie non desert Alamo est sit cliquey
                        dolor do met sent. RELIT official consequent door ENIM
                        RELIT Mollie. Excitation venial consequent sent
                        nostrum met.
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>

            <p className="text-2xl text-text-second text-center font-medium py-14">Haven’t got your answer? Contact our
              support</p>
          </div>

        </PageSection>

        <TrialSection/>
      </>
    );
}