// AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import Sauerseattleplungepool from "../assets/Sauerseattleplungepool.jpg";

export default function AboutSection() {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-white text-center px-6"
      style={{ backgroundImage: `url(${Sauerseattleplungepool})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <motion.div
        className="relative z-10 max-w-4xl bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-[#0D3B66] mb-4">
          Meet the Founders: Julio Castillo & Layne McNair
        </h2>
        <div className="text-lg text-gray-800 leading-relaxed space-y-4">
          <p>
            Julio and Layne are lifelong friends who have worked side by side in
            the pool and concrete industry for over 15 years. Trained by some of
            the most respected professionals in the field, they launched Pacific
            Northwest Pools and Concrete Design with a shared passion for
            craftsmanship, creativity, and meaningful customer relationships.
          </p>
          <p>
            From sleek modern tile and coping to elaborate rock grottos and
            natural water features, they bring your backyard to life with
            stunning design and functional beauty.
          </p>
          <p>
            At Pacific Northwest Pools and Concrete Design, we don’t just build
            pools — we build experiences. Our team includes expert concrete
            artisans who have created everything from zoo exhibits to
            hand-sculpted backyard waterfalls.
          </p>
          <p className="font-semibold text-[#0D3B66]">
            Whether your style is wild or minimal, we’ll bring your dream to
            life — with honesty, artistry, and care.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
