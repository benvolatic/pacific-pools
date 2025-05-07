import { motion } from "framer-motion";
import HeroImage2 from "../assets/HeroImage2.jpg";
import Project1 from "../assets/Project1.jpg";
import Project2 from "../assets/Project2.jpg";

const projects = [
  {
    title: "Custom Pools",
    description:
      "Design and build luxurious custom pools tailored to your vision.",
    image: HeroImage2,
  },
  {
    title: "Waterfalls and Rock Features",
    description: "Natural-stone designs to create stunning backyard escapes.",
    image: Project1,
  },
  {
    title: "Elegant Hardscaping",
    description:
      "Patios, walkways, and entertainment areas with luxury finishes.",
    image: Project2,
  },
];

export default function FeaturedProjectsSection() {
  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Specialties
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
