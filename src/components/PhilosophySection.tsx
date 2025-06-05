"use client";

import { motion } from "framer-motion";

export default function PhilosophySection() {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <motion.h2
        className="text-4xl font-bold mb-6 text-[#0D3B66]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Designed for Family, Built for Life
      </motion.h2>
      <motion.p
        className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        At Pacific Northwest Pools and Concrete Design, our mission is simple:
        bring families together by creating custom pool and spa experiences that
        are both functional and unforgettable. Whether you're dreaming of a
        Seattle-style plunge pool or a dramatic grotto with a tree-snag rope
        swing, we tailor every design to fit your lifestyle.
      </motion.p>
    </section>
  );
}
