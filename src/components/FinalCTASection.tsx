import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FinalCTASection() {
  return (
    <section className="bg-[#0D3B66] text-white py-20 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto"
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
