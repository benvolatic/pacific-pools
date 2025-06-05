// FinalCTASection.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Middletonnight from "../assets/Middletonnight.jpeg";

export default function FinalCTASection() {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white text-center px-6"
      style={{ backgroundImage: `url(${Middletonnight})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl"
      >
        <h2 className="text-4xl font-bold mb-6">
          Transform Your Backyard Dreams Into Reality
        </h2>
        <p className="mb-10 text-lg">
          Book your free consultation today and start designing your dream pool
          or patio.
        </p>
        <Link to="/contact">
          <button className="bg-[#7B6F61] hover:bg-[#a4978a] font-bold px-8 py-4 rounded-full transition transform hover:scale-105">
            Get Started →
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
