import { motion } from "framer-motion";
import pool1 from "../assets/pool1.jpg";
import HeroImage1 from "../assets/HeroImage1.jpg";
import HeroImage2 from "../assets/HeroImage2.jpg";
import Project1 from "../assets/Project1.jpg";
import Project2 from "../assets/Project2.jpg";
import PoolBBQ from "../assets/CompletedPool1BBQ.jpeg";
import PoolJump from "../assets/CompletedPool1Jump.jpeg";
import PoolJump2 from "../assets/CompletedPool1Jump2.jpeg";
import PoolSwim from "../assets/CompletedPool1Swim.jpeg";
import PoolWater1 from "../assets/CompletedPool2WaterslideWaterfeature1.jpeg";
import PoolWater2 from "../assets/CompletedPool2WaterslideWaterfeature2.jpeg";
import PoolWater3 from "../assets/CompletedPool2WaterslideWaterfeature3.jpeg";
import Sidewall from "../assets/CompletedSidewall1.jpeg";
import Firepit from "../assets/TraditionalPool1Firepit.jpeg";
import TraditionalSpa1 from "../assets/TraditionalSpa1.jpeg";
import TraditionalSpa2 from "../assets/TraditionalSpa2.jpeg";
import TraditionalSpa3 from "../assets/TraditionalSpa3.jpeg";
import TraditionalSpa4 from "../assets/TraditionalSpa4.jpeg";

import TraditionalSpa6 from "../assets/TraditionalSpa6Waterfeature.jpeg";
import TraditionalSpa7 from "../assets/TraditionalSpa7.jpeg";
import TraditionalSpa8 from "../assets/TraditionalSpa8Waterfall.jpeg";
import WallpaperWaterfall1 from "../assets/WallpaperWaterfall1.jpeg";
import WallpaperWaterfall2 from "../assets/WallpaperWaterfall2.jpeg";

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
  TraditionalSpa1,
  TraditionalSpa2,
  TraditionalSpa3,
  TraditionalSpa4,
  TraditionalSpa6,
  TraditionalSpa7,
  TraditionalSpa8,
  WallpaperWaterfall1,
  WallpaperWaterfall2,
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
