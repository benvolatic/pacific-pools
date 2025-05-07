import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="py-16 bg-[#0D3B66] text-white text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8">
          Schedule your free estimate today and bring your dream project to
          life.
        </p>
        <button className="bg-white text-[#0D3B66] px-8 py-3 rounded font-bold">
          Contact Us
        </button>
      </motion.div>
    </section>
  );
}
