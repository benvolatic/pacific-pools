import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ModalForm from "../components/ModalForm";

import HeroImage1 from "../assets/HeroImage1.jpg";
import HeroImage2 from "../assets/HeroImage2.jpg";
import Project1 from "../assets/Project1.jpg";
import Project2 from "../assets/Project2.jpg";

const images = [HeroImage1, HeroImage2, Project1, Project2];

export default function Service() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Slideshow */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          alt="Pool Project Background"
        />
      ))}

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Foreground Content */}
      <div className="relative p-8 z-10 text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">Pool Maintenance Services</h1>
          <p className="text-lg mb-10 max-w-2xl mx-auto text-[#ddd]">
            Keep your pool clean, efficient, and beautiful all year round with
            our expert maintenance services. From weekly cleaning to seasonal
            repairs, we're here to protect your investment and keep your
            backyard ready for fun.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.9 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-3 gap-8 mt-12"
        >
          <div className="bg-[#f8f9fa]/90 rounded-lg shadow-md p-6 text-center text-black">
            <h2 className="text-2xl font-semibold mb-4">Pool Cleaning</h2>
            <p>
              Regular skimming, vacuuming, brushing, and debris removal to keep
              your water crystal clear.
            </p>
          </div>
          <div className="bg-[#f8f9fa]/90 rounded-lg shadow-md p-6 text-center text-black">
            <h2 className="text-2xl font-semibold mb-4">Equipment Checks</h2>
            <p>
              Inspection and servicing of pumps, filters, heaters, and lighting
              to keep your pool equipment running smoothly.
            </p>
          </div>
          <div className="bg-[#f8f9fa]/90 rounded-lg shadow-md p-6 text-center text-black">
            <h2 className="text-2xl font-semibold mb-4">Water Balancing</h2>
            <p>
              Testing and balancing your pool’s chemical levels for safe,
              healthy swimming water.
            </p>
          </div>
        </motion.div>

        {/* CTA Button at the Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mt-16"
        >
          <button
            className="bg-[#0D3B66] hover:bg-[#3B9DD4] text-white font-bold py-4 px-10 rounded text-xl transition"
            onClick={() => setIsModalOpen(true)}
          >
            Request Service
          </button>
        </motion.div>

        {/* Modal Form */}
        <ModalForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
}
