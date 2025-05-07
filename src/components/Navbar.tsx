import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#0D3B66] text-white p-4 flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <div className="text-2xl font-bold">Pacific Northwest Pools</div>

        {/* Phone + Email Row */}
        <div className="flex space-x-4 mt-2 text-sm text-blue-200">
          <a href="tel:4253369310" className="hover:underline">
            (425) 336-9310
          </a>
          <span>|</span>
          <a href="mailto:pacificpools@example.com" className="hover:underline">
            pacificpools@example.com
          </a>
        </div>
      </div>

      {/* Nav Links */}
      <div className="space-x-6 mt-4 md:mt-0 flex items-center">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/custom-pools" className="hover:underline">
          Custom Pools
        </Link>
        <Link to="/service" className="hover:underline">
          Service
        </Link>
        <Link to="/portfolio" className="hover:underline">
          Portfolio
        </Link>

        {/* Contact Button */}
        <Link to="/contact">
          <button className="bg-[#7B6F61] hover:bg-[#a4978a] text-white font-bold py-2 px-5 rounded-full transition transform hover:scale-105 animate-pulse">
            Contact Us →
          </button>
        </Link>
      </div>
    </nav>
  );
}
