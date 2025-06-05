// PhilosophySection.tsx
"use client";

import { motion } from "framer-motion";
import Mcgrawgrottoleap from "../assets/Mcgrawgrottoleap.jpeg";

export default function PhilosophySection() {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-white text-center px-6"
      style={{ backgroundImage: `url(${Mcgrawgrottoleap})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <motion.div
        className="relative z-10 max-w-3xl bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-[#0D3B66] mb-4">
          Designed for Family, Built for Life
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          At Pacific Northwest Pools and Concrete Design, our mission is simple:
          bring families together by creating custom pool and spa experiences
          that are both functional and unforgettable. Whether you're dreaming of
          a Seattle-style plunge pool or a dramatic grotto with a tree-snag rope
          swing, we tailor every design to fit your lifestyle.
        </p>
      </motion.div>
    </section>
  );
}
