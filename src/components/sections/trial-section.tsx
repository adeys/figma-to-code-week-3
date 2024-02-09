import PageSection from "./page-section.tsx";
import Button from "../ui/button.tsx";
import {InstagramIcon, TwitterIcon} from "../icons.tsx";

import facebookLogoUrl from '../../assets/images/logos/facebook.svg'
import linkedinLogoUrl from '../../assets/images/logos/linkedin.svg'

export default function TrialSection() {
  return (
    <PageSection
      title="Start your 14 days free trial"
      subtitle="Met minim Mollie non desert Alamo est sit cliquey dolor met sent. RELIT official consequent."
      className="container"
    >
      <div className="text-center mt-8 space-y-8">
        <Button>
          Try it free now
        </Button>

        <div className="block space-x-8 text-center">
          <a href="#" className="text-primary transition-colors hover:text-primary-hover">
            <TwitterIcon className="inline-block size-8"/>
            <span className="sr-only">Twitter Link</span>
          </a>

          <a href="#" className="inline-block align-middle text-primary transition-colors hover:text-primary-hover">
            <img src={facebookLogoUrl} alt="Facebook Logo Url" className="size-8 inline-block"/>
            <span className="sr-only">Facebook Link</span>
          </a>
          <a href="#" className="transition-colors hover:text-text-second">
            <InstagramIcon className="inline-block size-8"/>
            <span className="sr-only">Instagram Link</span>
          </a>
          <a href="#" className="text-primary transition-colors hover:text-primary-hover">
            <img src={linkedinLogoUrl} alt="Linkedin Logo Url" className="size-8 inline-block"/>
            <span className="sr-only">Linkedin Link</span>
          </a>

        </div>
      </div>
    </PageSection>
  )
}