import { useState } from "react";
import ModalForm from "./ModalForm"; // make sure the path matches!
import { Link } from "react-router-dom";
import HeroImage1 from "../assets/HeroImage1.jpg";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${HeroImage1})` }}
    >
      <div className="absolute inset-0 bg-black/50" /> {/* dark overlay */}
      <div className="relative text-center text-white p-6">
        <h1 className="text-5xl font-bold mb-6">Design Your Dream Backyard</h1>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Custom Pools, Patios, and Concrete Work Built for a Lifetime of
          Memories.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-white text-[#0D3B66] font-bold px-6 py-3 rounded hover:bg-gray-200"
            onClick={() => setIsModalOpen(true)}
          >
            Get Free Quote
          </button>
          <Link
            to="/portfolio"
            className="border border-white px-6 py-3 rounded hover:bg-white hover:text-[#0D3B66]"
          >
            See Our Work
          </Link>
        </div>
      </div>
      <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
