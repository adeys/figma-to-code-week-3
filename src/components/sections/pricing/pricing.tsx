import PageSection from "../page-section.tsx";
import {Switch} from "../../ui/switch.tsx";
import PricingCard from "../../pricing-card.tsx";

export default function PricingSection() {
  return (
    <PageSection
      title="Pricing"
      subtitle="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
      className="bg-background-light-gray-2"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="py-12 flex flex-wrap items-center gap-3 justify-center">
          <span className="font-bold">Monthly</span>
          <Switch/>
          <span className="font-bold">Yearly</span>

          <span className="text-primary font-bold bg-primary/40 px-5 py-3 rounded-full text-sm">
              Save 25%
            </span>
        </div>

        <div className="flex flex-col gap-4 p-6 lg:flex-row lg:gap-0 justify-center">
          <PricingCard planName="Free" price={0}/>
          <PricingCard planName="Standard" price={9.99} featured={true}/>
          <PricingCard planName="Premium" price={19.99}/>
        </div>
      </div>
    </PageSection>
  )
}