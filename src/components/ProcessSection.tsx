"use client";

import { motion } from "framer-motion";

export default function ProcessSection() {
  return (
    <section className="bg-[#f8f9fa] py-20 px-6 text-center">
      <motion.h2
        className="text-4xl font-bold mb-6 text-[#0D3B66]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        A Process That Puts Your Family First
      </motion.h2>
      <motion.div
        className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <p>
          When you meet with Julio and Layne, they’ll take time to understand
          your family’s unique needs and preferences. We don’t believe in
          one-size-fits-all solutions.
        </p>
        <p>
          Instead, we return to the drawing board and craft a custom
          ¼-inch-scale clay model — a hands-on way for the entire family to
          visualize the project. Unlike confusing CAD drawings, this tactile
          process brings clarity, excitement, and full-family involvement.
        </p>
        <p>
          We’ll revise and rebuild the model as many times as needed — until
          it’s the perfect fit.
        </p>
      </motion.div>
    </section>
  );
}
