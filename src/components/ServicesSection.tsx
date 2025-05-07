import { motion } from "framer-motion";
import { FaSwimmingPool, FaRoad, FaWater } from "react-icons/fa";

const services = [
  { icon: <FaSwimmingPool size={40} />, title: "Pools & Spas" },
  { icon: <FaRoad size={40} />, title: "Driveways & Patios" },
  { icon: <FaWater size={40} />, title: "Concrete Sealing" },
];

export default function ServicesSection() {
  return (
    <section className="py-16 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-10"
      >
        Our Services
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            {service.icon}
            <p className="mt-4 text-xl">{service.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
