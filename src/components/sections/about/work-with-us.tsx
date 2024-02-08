import { FunctionComponent } from "react";
import { Button } from "../../ui/button";
import image from "./../../../assets/images/img-1.png";
export const WorkWithUs: FunctionComponent = () => (
  <div className="w-full mx-auto bg-primary-hover text-primary-foreground py-16 lg:py-0 text-center lg:text-left lg:flex items-center justify-between">
    <div className="lg:w-3/5 lg:flex lg:flex-col items-center px-5 md:px-10">
      <div className="space-y-5">
        <h5 className="font-bold">WORK WITH US</h5>
        <h1 className="font-bold text-[40px]">Now Let's grow Yours</h1>
        <p className="text-sm w-4/5 mx-auto lg:mx-0 lg:w-3/5">
          The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the
          20th{" "}
        </p>
        <div>
          <Button variant={"outline"}>Button</Button>
        </div>
      </div>
    </div>
    <div className="hidden lg:block w-2/5">
      <img src={image} alt="" className="w-full" />
    </div>
  </div>
);
