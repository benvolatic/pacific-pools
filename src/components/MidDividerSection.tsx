import { motion } from "framer-motion";

export default function MidDividerSection() {
  return (
    <section className="py-20 bg-black flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Placeholder for your future animated logo */}
        <p className="text-white text-4xl font-semibold">
          Pacific Northwest Pools
        </p>
      </motion.div>
    </section>
  );
}
