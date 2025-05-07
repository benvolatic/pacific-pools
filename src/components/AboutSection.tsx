import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-16 bg-[#D9D9D9] text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
        <p className="text-lg text-[#333]">
          At Pacific Northwest Pools, we specialize in creating stunning
          backyard spaces. Whether you dream of a luxurious pool, a custom
          patio, or a durable driveway, our experienced team is here to bring
          your vision to life.
        </p>
      </motion.div>
    </section>
  );
}
