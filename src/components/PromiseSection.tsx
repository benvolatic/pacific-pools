import { motion } from "framer-motion";

const promises = [
  {
    title: "Hand-Finished",
    description: "Every project detailed by hand for a flawless finish.",
  },
  {
    title: "Innovation",
    description: "Creative designs that bring your vision to life.",
  },
  {
    title: "Free Quotes",
    description: "No-obligation project estimates tailored to your needs.",
  },
  {
    title: "Quality",
    description: "Top materials, expert workmanship, guaranteed durability.",
  },
];

export default function PromiseSection() {
  return (
    <section className="py-20 bg-[#f8f9fa] text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-12"
      >
        Our Promise
      </motion.h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {promises.map((promise, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-4">{promise.title}</h3>
            <p className="text-gray-700">{promise.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
