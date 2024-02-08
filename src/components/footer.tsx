import Logo from "./logo.tsx";
import {FacebookIcon, InstagramIcon, TwitterIcon} from "./icons.tsx";
import {ComponentPropsWithoutRef} from "react";
import Button from "./button.tsx";

const footerNav = [
  {
    title: "Company Info",
    links: ["About Us", "Carrier", "We are hiring", "Blog"]
  },
  {
    title: "Legal",
    links: ["About Us", "Carrier", "We are hiring", "Blog"]
  },
  {
    title: "Features",
    links: ["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"]
  },
  {
    title: "Resources",
    links: ["IOS & Android", "Watch a Demo", "Customers", "API"]
  },
];

function NavSection({title, links, children, className}: ComponentPropsWithoutRef<'div'> & {
  title: string,
  links?: string[]
}) {
  return (
    <div className={[`space-y-4`, className || ''].join(' ')}>
      <h3 className="text-text-primary text-lg font-bold">{title}</h3>

      {links && (
        <ul className="space-y-2">
          {links?.map((link, idx) => (
            <li key={idx}>
              <a href="#" className="text-text-second text-lg font-semibold">{link}</a>
            </li>
          ))}
        </ul>
      )}

      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="w-full max-w-screen-xl mx-auto py-3 px-8 lg:px-0">
        <div
          className="flex flex-col md:flex-row gap-3 w-full lg:items-center lg:justify-between py-16 border-b border-gray-300">
          <Logo/>

          <div className="space-x-6">
            <a href="#" className="text-primary transition-colors hover:text-primary-hover">
              <FacebookIcon className="inline-block size-6"/>
              <span className="sr-only">Facebook Link</span>
            </a>
            <a href="#" className="text-primary transition-colors hover:text-primary-hover">
              <InstagramIcon className="inline-block size-6"/>
              <span className="sr-only">Instagram Link</span>
            </a>
            <a href="#" className="text-primary transition-colors hover:text-primary-hover">
              <TwitterIcon className="inline-block size-6"/>
              <span className="sr-only">Twitter Link</span>
            </a>
          </div>
        </div>

        <div className="flex gap-6 justify-between flex-wrap py-12">
          {footerNav.map((section, idx) => (
            <NavSection
              key={idx}
              title={section.title}
              links={section.links}
              className="w-full lg:w-auto"
            />
          ))}

          <NavSection title="Get In Touch">
            <form action="#" method="post">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <div className="flex w-full">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="shrink p-6 bg-background-light-gray-2 text-background-foreground font-semibold border border-gray-300 rounded-md rounded-r-none transition-colors "
                    required
                  />

                  <Button className="shrink rounded-l-none !p-6 !text-base" type="submit">
                    Subscribe
                  </Button>
                </div>
                <p className="text-background-light-gray-2-foreground font-semibold mt-2">Lore imp sum dolor Amit</p>

              </div>
            </form>
          </NavSection>
        </div>
      </div>

      <div className="bg-background-light-gray-2 text-background-light-gray-2-foreground">
        <div className="max-w-screen-xl mx-auto py-4 lg:py-6 px-6 lg:px-0">
          <p className=" font-bold text-lg text-center lg:text-left">Made with ❤️ by Finland &copy; All Rights
            Reserved</p>
        </div>
      </div>
    </footer>
  );
}
