import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="max-w-screen-xl mx-auto py-3 flex justify-between items-center">
          <a href="#">Bandage</a>

          <ul className="flex gap-2">
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/about">About</Link>
              </li>
              <li>
                  <Link to="/contact">Contact</Link>
              </li>
              <li>
                  <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                  <Link to="/team">Team</Link>
              </li>
          </ul>
      </nav>
    </header>
  );
}