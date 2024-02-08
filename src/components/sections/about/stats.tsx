import { FunctionComponent } from "react";

export const Stats: FunctionComponent = () => {
  return (
    <div className="container py-10 grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-24 lg:gap-8">
      <div className="text-center flex flex-col items-center gap-3">
        <h1 className="font-bold text-[58px]">15K</h1>
        <span className="font-bold text-text-second">Happy Customers</span>
      </div>
      <div className="text-center flex flex-col items-center gap-3">
        <h1 className="font-bold text-[58px]">150K</h1>
        <span className="font-bold text-text-second">Monthly Visitors</span>
      </div>
      <div className="text-center flex flex-col items-center gap-3">
        <h1 className="font-bold text-[58px]">15</h1>
        <span className="font-bold text-text-second">Countries Worldwide</span>
      </div>
      <div className="text-center flex flex-col items-center gap-3">
        <h1 className="font-bold text-[58px]">100+</h1>
        <span className="font-bold text-text-second">Top Partners</span>
      </div>
    </div>
  );
};
