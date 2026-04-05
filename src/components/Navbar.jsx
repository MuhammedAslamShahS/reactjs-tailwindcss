import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full h-16 flex justify-between items-center px-8">
      <h1 className="text-2xl font-semibold">Newwesterlund</h1>

      <ul className="flex gap-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;