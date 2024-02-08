import { FunctionComponent } from "react";

export const Problems: FunctionComponent = () => {
  return (
    <div className="container py-32 lg:py-0 lg:pb-16">
      <div className="px-3 flex flex-col gap-16 lg:flex-row lg:items-center">
        <div className="flex flex-col gap-8 text-center lg:text-left lg:w-2/5">
          <h3 className="text-text-danger text-sm">Problems trying</h3>
          <p className="font-bold text-2xl">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </p>
        </div>
        <p className="text-sm text-text-second lg:w-3/5">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>
    </div>
  );
};
