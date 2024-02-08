import { FunctionComponent } from "react";
import image from "./../../../assets/images/media bg-cover.png";
export const Video: FunctionComponent = () => {
  return (
    <div className="container pt-16 lg:pt-32">
      <div className="relative rounded-xl lg:rounded-3xl overflow-hidden">
        <img src={image} alt="" className="w-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 lg:scale-150 cursor-pointer hover:bg-primary-hover transition-colors bg-primary rounded-full w-12 h-12 flex items-center justify-center">
          <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_5503_17)">
              <path
                d="M11.6364 8.04738L2.34348 13.5966C1.55483 14.067 0.542725 13.4974 0.542725 12.549V1.45057C0.542725 0.503659 1.55337 -0.0674942 2.34348 0.404458L11.6364 5.95366C11.8158 6.05906 11.965 6.21141 12.0687 6.39526C12.1724 6.57911 12.227 6.78793 12.227 7.00052C12.227 7.21312 12.1724 7.42193 12.0687 7.60578C11.965 7.78963 11.8158 7.94199 11.6364 8.04738V8.04738Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_5503_17">
                <rect width="11.6843" height="14.1442" fill="white" transform="translate(0.727295 0.112305)" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};
