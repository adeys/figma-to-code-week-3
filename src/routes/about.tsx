import { Company } from "../components/sections/about/company";
import { Hero } from "../components/sections/about/hero";
import { Problems } from "../components/sections/about/problems";
import { Stats } from "../components/sections/about/stats";
import { Team } from "../components/sections/about/team";
import { Video } from "../components/sections/about/video";
import { WorkWithUs } from "../components/sections/about/work-with-us";

export default function About() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <Problems />
      <Stats />
      <Video />
      <Team />
      <Company />
      <WorkWithUs />
    </main>
  );
}
