"use client";

import AlanFountains from "../assets/Alanfountains.jpeg";
import GuestHouse15 from "../assets/GuestHouse-15.jpeg";
import CovingtonProject from "../assets/Covingtonproject.jpeg";
import CovingtonService from "../assets/Covingtonservice.jpg";
import CovingtonService3 from "../assets/Covingtonservice3.jpg";
import HeroImage from "../assets/HeroImage2.jpg";

const features = [
  {
    title: "Natural Rock Waterfalls",
    image: AlanFountains,
    description:
      "Our signature waterfalls blend into sculpted rockscapes that bring movement, sound, and visual depth to your backyard. Designed to mimic nature, engineered to last.",
  },
  {
    title: "Waterslides & Hidden Grottos",
    image: CovingtonService,
    description:
      "Custom-molded slides, secret caves, and recessed grotto spaces offer playful and luxurious additions to your custom pool design.",
  },
  {
    title: "Swim-Up Bars & Entertaining Spaces",
    image: GuestHouse15,
    description:
      "Build your pool around the party. Swim-up counters, integrated bar seating, and LED-lit lounging areas make every pool day unforgettable.",
  },
  {
    title: "Jump Zones & Boulder Edges",
    image: CovingtonService3,
    description:
      "Elevated rock platforms, integrated diving zones, and boulder-lined perimeters add both visual interest and family-friendly fun.",
  },
  {
    title: "Custom Fire & Lighting Features",
    image: CovingtonProject,
    description:
      "From gas fire bowls to in-water LED uplighting, we bring your pool to life after sunset with dramatic custom lighting systems.",
  },
];

export default function CustomPools() {
  return (
    <div className="flex flex-col items-center px-4 py-12 bg-white text-[#0D3B66]">
      {/* Hero Image + Title */}
      <div
        className="w-full h-72 bg-cover bg-center rounded-xl mb-12"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="w-full h-full bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg text-center">
            Custom Pools, Built to Flow with Nature
          </h1>
        </div>
      </div>

      {/* Intro Blurb */}
      <div className="max-w-3xl text-center mb-16">
        <p className="text-lg leading-relaxed">
          At Pacific Northwest Pools, we specialize in sculpted rock pool
          systems that feel natural, timeless, and alive. From excavation to
          final finish, every detail is hand-crafted to blend seamlessly with
          your landscape. Our process includes complete design, build, plumbing,
          and finishing — fully custom, fully turn-key.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
        {features.map((feature, i) => (
          <div
            key={i}
            className="rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-gray-50"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-[#0D3B66]">
                {feature.title}
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
