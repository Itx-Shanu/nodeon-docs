import { Mail, Send, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" mt-20 bg-linear-to-t from-[#FF7037]/30 to-[#FFCB3C]/0 text-sm text-gray-700">
      {/* Top Row */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-2 md:px-6 py-4">
          {/* Left Icons */}
          <div className="flex  items-center gap-5 text-orange-500">
            <button className="hover:scale-110 transition">
              <X size={18} />
            </button>

            <button className="bg-orange-400 text-white p-2 rounded-full hover:scale-110 transition">
              <Send size={16} />
            </button>

            <button className="border border-orange-400 p-2 rounded hover:scale-110 transition">
              <Mail size={16} />
            </button>
          </div>

          {/* Right Button */}
          <div>
            <button className="flex items-center gap-2 border border-gray-500 rounded-full px-1 md:px-4 py-2 text-xs tracking-wide">
              <span className="w-4 h-4 rounded-full bg-linear-to-r from-orange-400 to-yellow-400"></span>
              ALL SERVICES ONLINE
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 opacity-50"></div>

        {/* Bottom Row */}
        <div className="flex items-center justify-between px-6 py-3 text-xs tracking-widest text-gray-600">
          <span>©2026</span>
          <span className="text-center flex-1">ALL RIGHTS RESERVED</span>
          <span className="text-right">NodesOn</span>
        </div>
      </div>
    </footer>
  );
}
