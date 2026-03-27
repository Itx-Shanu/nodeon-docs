import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const navItems = [
    { path: "/pdfs/business-profile.pdf", label: "Nodes On Business Profile" },
    { path: "/pdfs/participation-model.pdf", label: "Participation Infrastructure" },
    { path: "/pdfs/incentive-structure.pdf", label: "Incentive Model" },
    { path: "/pdfs/risk-disclaimer.pdf", label: "Risk Disclaimer" },
    { path: "/pdfs/faqs.pdf", label: "FAQs" },
  ];

  // ✅ FIXED FUNCTION
  const handleNavigate = (path: string) => {
    window.open(path, "_blank"); // 👈 OPEN PDF
    setMobileMenuOpen(false);
  };

  return (
    <>
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
                  text-[#111c2d99] hover:text-[#FF7037] hover:bg-[#FF7037]/30 rounded-r-full
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