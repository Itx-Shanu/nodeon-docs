import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/infrastructure/serverarchitecture", label: "Server Architecture" },
    { path: "/infrastructure/multiregionhosting", label: "Multi Region Hosting" },
    { path: "/infrastructure/validatorsecurity", label: "Validator Security" },
    { path: "/infrastructure/networkperformance", label: "Network Performance" },
    { path: "/infrastructure/monitoringsystem", label: "Monitoring System" },
    { path: "/infrastructure/infrastructurescalability", label: "Infrastructure Scalability" },
    { path: "/infrastructure/infrastructurereliability", label: "Infrastructure Reliability" },

  ];
  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Hamburger Button (Mobile) */}
     
      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-4 top-30 h-[80%] shadow-xl w-72 bg-white rounded-2xl
          border border-black/10 z-40 transform transition-all duration-300
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Arrow Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="absolute -right-4 top-1/2 -translate-y-1/2 
          bg-white border border-gray-200 shadow-md lg:hidden 
          p-2 rounded-full hover:bg-gray-100 transition"
        >
          {mobileMenuOpen ? (
            <ChevronLeft size={18} />
          ) : (
            <ChevronRight size={18} />
          )}
        </button>

        <nav className="py-8 pr-6">
          <div className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`
                  w-full flex items-center gap-3 pl-6 pr-1 py-4 rounded-xl transition
                  ${
                    location.pathname === item.path
                      ? "bg-[#FF7037]/30 text-[#FF7037] rounded-r-full"
                      : "text-[#111c2d99] hover:text-[#FF7037] hover:bg-[#FF7037]/30 rounded-r-full"
                  }
                `}
              >
                <span className="font-bold text-md text-left">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Header;


 
