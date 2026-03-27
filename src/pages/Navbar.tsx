import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import Logo from "../../src/assets/logo.png"

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: "Introduction", path: "/intro" },
  { label: "Platform", path: "/platform" },
  { label: "Validators Infrastructure", path: "/validators" },
  { label: "Infrastructure", path: "/Infrastructure" },
  { label: "Architecture Monitoring", path: "/architecture" },
  { label: "Resources", path: "/resources" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-2">
      <div className="flex items-center justify-between bg-white/95 backdrop-blur-sm rounded-full px-6 md:px-12 py-3 shadow-lg border border-gray-100">
        
        {/* Logo */}
        <Link to="/" className="text-lg md:text-xl font-bold text-gray-800">
         <img src={Logo} alt="Logo" className="max-w-22" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-0">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="px-4 py-2 lg:text-sm xl:text-lg text-gray-600 rounded-full hover:text-amber-500 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="mt-2 bg-white rounded-2xl shadow-lg border border-gray-100 p-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-left px-4 py-2 text-gray-600 rounded-lg  hover:bg-amber-50 hover:text-amber-500 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}