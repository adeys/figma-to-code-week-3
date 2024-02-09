import {cn} from "../lib/utils.ts";
import {Button} from "./ui/button.tsx";

export default function PricingCard({planName, price, featured = false}: {
  planName: string;
  price: number,
  featured?: boolean
}) {
  return (
    <div className={cn(
      "bg-white w-full border border-primary lg:rounded-lg p-10 flex flex-col items-center self-end", {'bg-background-dark text-background-dark-foreground py-16': featured})}>
      <h3 className="text-xl uppercase font-bold">{planName}</h3>
      <p
        className={cn("text-text-second font-bold mt-4 py-4 max-w-[16ch] text-center", {'text-background-dark-foreground': featured})}>
        Organize across all apps by hand
      </p>

      <div className="flex gap-2 items-center py-4">
        <span className="block text-4xl text-primary font-bold">{price}</span>

        <div>
          <span className="block text-primary text-xl font-bold">$</span>
          <span className="block text-primary font-bold">Per Month</span>
        </div>
      </div>

      <ul className="space-y-4 mt-4">
        {(new Array(3)).fill(0).map((_, idx) => (
          <li key={idx} className="flex gap-4 items-center">
            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" width="32" height="32" rx="16" fill="#2DC071"/>
              <g clipPath="url(#clip0_2872_10010)">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z"
                      fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_2872_10010">
                  <rect width="16" height="11" fill="white" transform="translate(8.5 10)"/>
                </clipPath>
              </defs>
            </svg>

            <span className="font-bold">Unlimited product updates</span>
          </li>
        ))}
        <li className="flex gap-4 items-center">
          <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" width="32" height="32" rx="16" fill="#BDBDBD"/>
            <g clipPath="url(#clip0_2872_10030)">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z"
                    fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_2872_10030">
                <rect width="16" height="11" fill="white" transform="translate(8.5 10)"/>
              </clipPath>
            </defs>
          </svg>

          <span className="font-bold">1GB Cloud Storage</span>
        </li>
        <li className="flex gap-4 items-center">
          <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" width="32" height="32" rx="16" fill="#BDBDBD"/>
            <g clipPath="url(#clip0_2872_10030)">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M24.7957 10.2043C24.8604 10.269 24.9118 10.3457 24.9469 10.4302C24.9819 10.5147 25 10.6053 25 10.6968C25 10.7883 24.9819 10.8789 24.9469 10.9634C24.9118 11.0479 24.8604 11.1246 24.7957 11.1893L15.0578 20.9271C14.9932 20.9919 14.9164 21.0433 14.8319 21.0783C14.7474 21.1134 14.6568 21.1314 14.5654 21.1314C14.4739 21.1314 14.3833 21.1134 14.2988 21.0783C14.2143 21.0433 14.1375 20.9919 14.0729 20.9271L9.20398 16.0582C9.07337 15.9276 9 15.7504 9 15.5657C9 15.381 9.07337 15.2039 9.20398 15.0733C9.33459 14.9427 9.51173 14.8693 9.69644 14.8693C9.88115 14.8693 10.0583 14.9427 10.1889 15.0733L14.5654 19.4511L23.8107 10.2043C23.8754 10.1396 23.9521 10.0882 24.0366 10.0531C24.1211 10.018 24.2117 10 24.3032 10C24.3947 10 24.4853 10.018 24.5698 10.0531C24.6543 10.0882 24.731 10.1396 24.7957 10.2043Z"
                    fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_2872_10030">
                <rect width="16" height="11" fill="white" transform="translate(8.5 10)"/>
              </clipPath>
            </defs>
          </svg>

          <span className="font-bold">Email and community support</span>
        </li>
      </ul>

      <div className="mt-8 w-full">
        <Button variant={price !== 0 ? 'default' : 'dark'} className="w-full">Try for free</Button>
      </div>
    </div>
  );
}