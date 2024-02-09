import logo1 from "../assets/images/logos/logo1.png";
import logo2 from "../assets/images/logos/logo2.png";
import logo3 from "../assets/images/logos/logo3.png";
import logo4 from "../assets/images/logos/logo4.png";
import logo5 from "../assets/images/logos/logo5.png";
import logo6 from "../assets/images/logos/logo6.png";

export default function CompanyList() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 container gap-10 lg:gap-5 items-center py-16 lg:py-24">
      <img src={logo1} className="w-3/5 mx-auto" alt="Company 1"/>
      <img src={logo2} className="w-3/5 mx-auto" alt="Company 2"/>
      <img src={logo3} className="w-3/5 mx-auto" alt="Company 3"/>
      <img src={logo4} className="w-3/5 mx-auto" alt="Company 4"/>
      <img src={logo5} className="w-3/5 mx-auto" alt="Company 5"/>
      <img src={logo6} className="w-3/5 mx-auto" alt="Company 6"/>
    </div>
  )

}