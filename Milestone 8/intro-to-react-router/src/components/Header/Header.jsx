import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h2>Navbar</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/footer">Footer</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
