import {ComponentProps} from "react";
import {FacebookIcon, InstagramIcon, TwitterIcon} from "./icons.tsx";

export default function TeamMemberCard({pictureUrl, name, profession}: ComponentProps<'div'> & {
  pictureUrl: string,
  name: string,
  profession: string
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="overflow-hidden h-full">
        <img
          src={pictureUrl}
          alt={`${name}'s picture`}
          className="w-full h-full  object-cover transition-transform cursor-pointer duration-500 ease-out hover:scale-125"
        />
      </div>
      <div className="space-y-3 text-center">
        <p className="font-bold">{name}</p>
        <p className="text-text-second text-sm font-bold">{profession}</p>
        <div className="space-x-6 text-center">
          <a href="#" className="text-primary transition-colors hover:text-primary-hover">
            <FacebookIcon className="inline-block size-6"/>
            <span className="sr-only">Facebook Profile Link</span>
          </a>
          <a href="#" className="text-primary transition-colors hover:text-primary-hover">
            <InstagramIcon className="inline-block size-6"/>
            <span className="sr-only">Instagram Profile Link</span>
          </a>
          <a href="#" className="text-primary transition-colors hover:text-primary-hover">
            <TwitterIcon className="inline-block size-6"/>
            <span className="sr-only">Twitter Profile Link</span>
          </a>
        </div>
      </div>
    </div>
  )
}