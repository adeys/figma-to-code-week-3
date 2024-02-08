import { FunctionComponent } from "react";
import { Button } from "../../ui/button";
import illustration from "./../../../assets/images/hero1.png";
export const Hero: FunctionComponent = () => {
  return (
    <div className="container flex flex-col lg:flex-row gap-10 items-center text-center pt-10 lg:text-left lg:justify-between">
      <div className="flex flex-col gap-10 lg:gap-8 items-center lg:w-3/5 xl:w-2/5 lg:items-start xl:-translate-y-1/3 lg:-translate-y-1/4">
        <span className="hidden lg:block font-bold text-sm">ABOUT COMPANY</span>
        <h1 className="text-[40px] font-bold lg:text-[58px]">ABOUT US</h1>
        <p className="text-[20px] text-text-second w-4/5">
          <span className="block lg:hidden">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </span>
          <span className="hidden lg:block">
            We know how large objects will act, but things on a small scale
          </span>
        </p>
        <div>
          <Button variant={"large"}>Get Quote Now</Button>
        </div>
      </div>
      <img
        src={illustration}
        className="w-full mt-10 lg:w-3/5 xl:w-3/5 lg:mt-0 lg:translate-x-16 lg:-translate-y-16"
        alt=""
      />
    </div>
  );
};
