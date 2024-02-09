import {Link} from "react-router-dom";
import {Button} from "./ui/button";
import {useState} from "react";
import Logo from "./logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-[#F6F6F6] lg:bg-background lg:h-[91px] lg:flex items-center">
      <nav className="container py-6 px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <Logo/>
          <div className="lg:flex hidden w-[calc(100%-187px)] items-center justify-between">
            <ul className="flex pl-6 gap-5 items-center text-sm font-bold text-text-second">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <div className="flex gap-10 items-center">
              <Link to="/" className="font-bold text-sm text-primary hover:text-primary-hover">
                Login
              </Link>
              <Button>
                <span>Become a member</span>
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2865_4110)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 5C0 4.81059 0.079009 4.62895 0.219646 4.49502C0.360282 4.36108 0.551026 4.28584 0.749916 4.28584H9.43845L6.21831 1.22068C6.07749 1.08658 5.99838 0.904705 5.99838 0.715059C5.99838 0.525414 6.07749 0.343536 6.21831 0.209436C6.35912 0.0753365 6.5501 0 6.74925 0C6.94839 0 7.13937 0.0753365 7.28019 0.209436L11.7797 4.49438C11.8495 4.56072 11.9049 4.63952 11.9427 4.72629C11.9805 4.81305 12 4.90606 12 5C12 5.09394 11.9805 5.18695 11.9427 5.27371C11.9049 5.36048 11.8495 5.43928 11.7797 5.50562L7.28019 9.79056C7.13937 9.92466 6.94839 10 6.74925 10C6.5501 10 6.35912 9.92466 6.21831 9.79056C6.07749 9.65646 5.99838 9.47459 5.99838 9.28494C5.99838 9.0953 6.07749 8.91342 6.21831 8.77932L9.43845 5.71416H0.749916C0.551026 5.71416 0.360282 5.63892 0.219646 5.50499C0.079009 5.37106 0 5.18941 0 5Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2865_4110">
                      <rect width="12" height="10" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Button>
            </div>
          </div>
          <div className="flex gap-6 items-end lg:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2865_4133)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.1901 15.478L23.6458 21.9337C23.8727 22.1608 24.0001 22.4687 24 22.7897C23.9999 23.1107 23.8723 23.4185 23.6452 23.6455C23.4181 23.8724 23.1102 23.9998 22.7892 23.9997C22.4682 23.9996 22.1604 23.8719 21.9335 23.6449L15.4778 17.1892C13.5479 18.6839 11.1211 19.3873 8.69104 19.1563C6.26097 18.9253 4.01018 17.7772 2.39656 15.9455C0.782936 14.1139 -0.0723147 11.7364 0.00479537 9.29658C0.0819054 6.85677 1.08558 4.53797 2.81165 2.81191C4.53771 1.08584 6.85651 0.0821649 9.29632 0.00505477C11.7361 -0.0720553 14.1137 0.783195 15.9453 2.39682C17.7769 4.01044 18.925 6.26123 19.156 8.6913C19.387 11.1214 18.6836 13.5482 17.1889 15.478H17.1901ZM9.60045 16.7992C11.5099 16.7992 13.3412 16.0406 14.6914 14.6904C16.0416 13.3402 16.8001 11.509 16.8001 9.59951C16.8001 7.69004 16.0416 5.85877 14.6914 4.50857C13.3412 3.15838 11.5099 2.39984 9.60045 2.39984C7.69098 2.39984 5.85971 3.15838 4.50951 4.50857C3.15932 5.85877 2.40078 7.69004 2.40078 9.59951C2.40078 11.509 3.15932 13.3402 4.50951 14.6904C5.85971 16.0406 7.69098 16.7992 9.60045 16.7992Z"
                  fill="#737373"
                />
              </g>
              <defs>
                <clipPath id="clip0_2865_4133">
                  <rect width="24" height="23.9997" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2865_4135)">
                <path
                  d="M7.9999 22.4002C8.88356 22.4002 9.5999 21.6838 9.5999 20.8002C9.5999 19.9165 8.88356 19.2002 7.9999 19.2002C7.11625 19.2002 6.3999 19.9165 6.3999 20.8002C6.3999 21.6838 7.11625 22.4002 7.9999 22.4002Z"
                  fill="#737373"
                />
                <path
                  d="M19.2001 22.4002C20.0838 22.4002 20.8001 21.6838 20.8001 20.8002C20.8001 19.9165 20.0838 19.2002 19.2001 19.2002C18.3164 19.2002 17.6001 19.9165 17.6001 20.8002C17.6001 21.6838 18.3164 22.4002 19.2001 22.4002Z"
                  fill="#737373"
                />
                <path
                  d="M22.4 4.00016H4.656L4 0.640163C3.9626 0.456742 3.86206 0.292245 3.71589 0.175305C3.56971 0.0583653 3.38716 -0.00361159 3.2 0.000162751H0V1.60016H2.544L5.6 16.9602C5.6374 17.1436 5.73794 17.3081 5.88411 17.425C6.03029 17.542 6.21284 17.6039 6.4 17.6002H20.8V16.0002H7.056L6.4 12.8002H20.8C20.9849 12.8047 21.1657 12.745 21.3116 12.6312C21.4574 12.5174 21.5594 12.3566 21.6 12.1762L23.2 4.97616C23.2268 4.85746 23.2262 4.73421 23.1982 4.61579C23.1702 4.49737 23.1155 4.38689 23.0384 4.29278C22.9612 4.19867 22.8636 4.12339 22.753 4.07268C22.6424 4.02198 22.5217 3.99717 22.4 4.00016ZM20.16 11.2002H6.096L4.976 5.60016H21.4L20.16 11.2002Z"
                  fill="#737373"
                />
              </g>
              <defs>
                <clipPath id="clip0_2865_4135">
                  <rect width="24" height="22.4002" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="24"
              height="14"
              viewBox="0 0 24 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <path
                d="M0.571533 0H23.4287V2.28571H0.571533V0ZM6.28582 5.71429H23.4287V8H6.28582V5.71429ZM13.4287 11.4286H23.4287V13.7143H13.4287V11.4286Z"
                fill="#737373"
              />
            </svg>
          </div>
        </div>
        {isOpen && (
          <ul className="flex flex-col py-16 gap-7 items-center text-[30px] font-medium text-text-second">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
