"use client";

import { motion } from "framer-motion";
import Nesbitproject from "../assets/Nesbitproject.jpeg";

export default function ProcessSection() {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-white text-center px-6"
      style={{ backgroundImage: `url(${Nesbitproject})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <motion.div
        className="relative z-10 max-w-3xl bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-[#0D3B66] mb-4">
          A Process That Puts Your Family First
        </h2>
        <div className="text-lg text-gray-800 leading-relaxed space-y-4">
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
        </div>
      </motion.div>
    </section>
  );
}
}
