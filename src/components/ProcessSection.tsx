// ProcessSection.tsx
"use client";

import { motion } from "framer-motion";
import Covingtonservice13 from "../assets/Covingtonservice13.jpg";
import Redmonddig2 from "../assets/Redmonddig2.jpeg";

export default function ProcessSection() {
  return (
    <section className="bg-[#f8f9fa] py-20 px-6 text-center relative overflow-hidden">
      <img
        src={Covingtonservice13}
        alt="Left pool photo"
        className="absolute top-1/2 left-4 w-1/4 max-w-xs transform -translate-y-1/2 rounded shadow-lg hidden lg:block"
      />
      <img
        src={Redmonddig2}
        alt="Right pool photo"
        className="absolute top-1/2 right-4 w-1/4 max-w-xs transform -translate-y-1/2 rotate-90 rounded shadow-lg hidden lg:block"
      />

      <motion.h2
        className="text-4xl font-bold mb-6 text-[#0D3B66]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        A Process That Puts Your Family First
      </motion.h2>
      <motion.div
        className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6 relative z-10"
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
