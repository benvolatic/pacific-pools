import { motion } from "framer-motion";
import pool1 from "../assets/pool1.jpg";
import HeroImage1 from "../assets/HeroImage1.jpg";
import HeroImage2 from "../assets/HeroImage2.jpg";
import Project1 from "../assets/Project1.jpg";
import Project2 from "../assets/Project2.jpg";

const dummyImages = [HeroImage1, HeroImage2, pool1, Project1, Project2];

export default function Portfolio() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-10">Our Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyImages.map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={src}
              alt={`Pool ${index + 1}`}
              className="object-cover w-full h-64"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
