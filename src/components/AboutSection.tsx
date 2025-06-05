"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <motion.h2
        className="text-4xl font-bold mb-6 text-[#0D3B66]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Meet the Founders: Julio Castillo & Layne McNair
      </motion.h2>
      <motion.div
        className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <p>
          Julio and Layne are lifelong friends who have worked side by side in
          the pool and concrete industry for over 15 years. Trained by some of
          the most respected professionals in the field, they launched Pacific
          Northwest Pools and Concrete Design with a shared passion for
          craftsmanship, creativity, and meaningful customer relationships.
        </p>
        <p>
          From sleek modern tile and coping to elaborate rock grottos and
          natural water features, they bring your backyard to life with stunning
          design and functional beauty.
        </p>
        <p>
          At Pacific Northwest Pools and Concrete Design, we don’t just build
          pools — we build experiences. Our team includes expert concrete
          artisans who have created everything from zoo exhibits to
          hand-sculpted backyard waterfalls.
        </p>
        <p className="font-semibold text-[#0D3B66]">
          Whether your style is wild or minimal, we’ll bring your dream to life
          — with honesty, artistry, and care.
        </p>
      </motion.div>
    </section>
  );
}
