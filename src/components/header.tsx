import {Link} from "react-router-dom";
import Button from "./ui/button.tsx";

export default function Header() {
  return (
    <header>
      <nav className="max-w-screen-xl mx-auto py-3 px-4 flex gap-24 items-center">
        <a href="#" className="font-bold text-2xl">Bandage</a>

        <div className="hidden lg:grow lg:flex items-center justify-between">
          <ul className="flex gap-3">
            <li>
              <Link to="/" className="text-text-second font-semibold">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-text-second font-semibold">About</Link>
            </li>
            <li>
              <Link to="/contact" className="text-text-second font-semibold">Contact</Link>
            </li>
            <li>
              <Link to="/pricing" className="text-text-second font-semibold">Pricing</Link>
            </li>
            <li>
              <Link to="/team" className="text-text-second font-semibold">Team</Link>
            </li>
          </ul>

          <ul className="flex items-center gap-2">
            <li>
              <a href="#"
                 className="inline-flex items-center gap-2 px-4 py-3 text-primary text-sm font-bold transition-colors hover:text-primary-hover">
                Login
              </a>
            </li>
            <li>
              <Button>
                Become a member
                <svg className="size-4" aria-hidden="true" fill="none" strokeWidth={2} stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}