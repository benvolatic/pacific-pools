import { motion } from "framer-motion";
import pool1 from "../assets/pool1.jpg";
import HeroImage1 from "../assets/HeroImage1.jpg";
import HeroImage2 from "../assets/HeroImage2.jpg";
import Project1 from "../assets/Project1.jpg";
import Project2 from "../assets/Project2.jpg";
import PoolBBQ from "../assets/portfolio/CompletedPool1BBQ.jpeg";
import PoolJump from "../assets/portfolio/CompletedPool1Jump.jpeg";
import PoolJump2 from "../assets/portfolio/CompletedPool1Jump2.jpeg";
import PoolSwim from "../assets/portfolio/CompletedPool1Swim.jpeg";
import PoolWater1 from "../assets/portfolio/CompletedPool2Waterfeature1.jpeg";
import PoolWater2 from "../assets/portfolio/CompletedPool2Waterfeature2.jpeg";
import PoolWater3 from "../assets/portfolio/CompletedPool2Waterfeature3.jpeg";
import Sidewall from "../assets/portfolio/CompletedSidewall1.jpeg";
import Firepit from "../assets/portfolio/TraditionalPool1Firepit.jpeg";

const dummyImages = [
  HeroImage1,
  HeroImage2,
  pool1,
  Project1,
  Project2,
  PoolBBQ,
  PoolJump,
  PoolJump2,
  PoolSwim,
  PoolWater1,
  PoolWater2,
  PoolWater3,
  Sidewall,
  Firepit,
];

export default function Portfolio() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-10">Our Portfolio</h1>
      <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
