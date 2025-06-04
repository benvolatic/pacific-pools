import { motion } from "framer-motion";
import { useState } from "react";

// Import only existing images
import Sauerseattleplungepool from "../assets/Sauerseattleplungepool.jpg";
import Sammamishproject from "../assets/Sammamishproject.jpeg";
import Sammamishmodern from "../assets/Sammamishmodern.jpeg";
import Redondospa4 from "../assets/Redondospa4.jpg";
import Redondospa3 from "../assets/Redondospa3.jpg";
import Redondospa2 from "../assets/Redondospa2.jpg";
import Redondospa from "../assets/Redondospa.jpg";
import Redmondprojectdrontview from "../assets/Redmondprojectdrontview.jpg";
import Redmondmodern from "../assets/Redmondmodern.jpeg";
import Redmonddig3 from "../assets/Redmonddig3.jpeg";
import Redmonddig2 from "../assets/Redmonddig2.jpeg";
import Redmonddig from "../assets/Redmonddig.jpeg";
import RedmondProject from "../assets/Redmond project.jpeg";
import Ravensdaleproject from "../assets/Ravensdaleproject.jpeg";
import Rafusemassagerfountain from "../assets/Rafusemassagerfountain.jpeg";
import Rafusemassager from "../assets/Rafusemassager.jpeg";
import Rafuse1 from "../assets/Rafuse1.jpeg";
import Outdoorkitchen from "../assets/Outdoorkitchen.jpeg";
import Osborneproject2 from "../assets/Osborneproject2.jpeg";
import Osbornegrotto3 from "../assets/Osbornegrotto3.jpeg";
import Osbornegrotto2 from "../assets/Osbornegrotto2.jpeg";
import Osbornegrotto from "../assets/Osbornegrotto.jpeg";
import Osbornegirls from "../assets/Osbornegirls.jpeg";
import Northseattleproject from "../assets/Northseattleproject.png";
import Nesbitproject from "../assets/Nesbitproject.jpeg";
import Mylesproject from "../assets/Mylesproject.webp";
import Modernwwaterfall from "../assets/Modernwwaterfall.jpeg";
import Modernfountains from "../assets/Modernfountains.webp";
import Middletonnight from "../assets/Middletonnight.jpeg";
import Mercerislandproject2 from "../assets/Mercerislandproject2.jpg";
import Mercerislandproject from "../assets/Mercerislandproject.jpeg";
import Mercerislandmodern from "../assets/Mercerislandmodern.jpeg";
import Medina from "../assets/Medina.jpeg";
import Mcgrawsquirtgun from "../assets/Mcgrawsquirtgun.jpeg";
import Mcgrawslide4 from "../assets/Mcgrawslide4.jpeg";
import Mcgrawslide2 from "../assets/Mcgrawslide2.jpeg";
import Mcgrawslide from "../assets/Mcgrawslide.jpeg";
import Mcgrawproject1 from "../assets/Mcgrawproject1.jpeg";
import Mcgrawkiddos2 from "../assets/Mcgrawkiddos2.jpeg";
import Mcgrawkiddos from "../assets/Mcgrawkiddos.jpeg";
import Mcgrawjump5 from "../assets/Mcgrawjump5.jpeg";
import Mcgrawjump4 from "../assets/Mcgrawjump4.jpeg";
import Mcgrawjump3 from "../assets/Mcgrawjump3.jpeg";
import Mcgrawjump2 from "../assets/Mcgrawjump2.jpeg";
import Mcgrawjump from "../assets/Mcgrawjump.jpeg";
import Mcgrawgrottoleap from "../assets/Mcgrawgrottoleap.jpeg";
import Mcgrawfiretopbar from "../assets/Mcgrawfiretopbar.jpeg";
import Mcgrawfirepit2 from "../assets/Mcgrawfirepit2.jpeg";
import Mcgrawfirepit from "../assets/Mcgrawfirepit.jpeg";
import Mcgrawfamilyswim from "../assets/Mcgrawfamilyswim.jpeg";
import Mcgrawbubblersbeach from "../assets/Mcgrawbubblersbeach.jpeg";
import Mcgrawbeach2 from "../assets/Mcgrawbeach2.jpeg";
import Mcgrawbeach from "../assets/Mcgrawbeach.jpeg";
import Mcgraw5 from "../assets/Mcgraw5.jpeg";
import Mcgraw3 from "../assets/Mcgraw3.jpeg";
import Mcgraw2 from "../assets/Mcgraw2.jpeg";
import McgrawSplash from "../assets/Mcgraw splash.jpeg";
import Jump2 from "../assets/jump2_A91W9055.jpeg";
import Johnsonlaminarfountains from "../assets/Johnsonlaminarfountains.jpg";
import JohnsonPool1 from "../assets/Johnson pool 1.jpeg";
import Infitityfire from "../assets/Infitityfire.webp";
import GuestHouse17 from "../assets/GuestHouse-17.jpeg";
import GuestHouse15 from "../assets/GuestHouse-15.jpeg";
import Golfcourseproject from "../assets/Golfcourseproject.jpeg";
import Davisproject8 from "../assets/Davisproject8.jpg";
import Davisproject7 from "../assets/Davisproject7.jpg";
import Davisproject6 from "../assets/Davisproject6.jpg";
import Davisproject5 from "../assets/Davisproject5.jpg";
import Davisproject from "../assets/Davisproject.jpeg";
import Covingtonservice14 from "../assets/Covingtonservice14.jpg";
import Covingtonservice13 from "../assets/Covingtonservice13.jpg";
import Covingtonservice12 from "../assets/Covingtonservice12.jpg";
import Covingtonservice11 from "../assets/Covingtonservice11.jpg";
import Covingtonservice10 from "../assets/Covingtonservice10.jpg";
import Covingtonservice9 from "../assets/Covingtonservice9.jpg";
import Covingtonservice8 from "../assets/Covingtonservice8.jpg";
import Covingtonservice7 from "../assets/Covingtonservice7.jpg";
import Covingtonservice6 from "../assets/Covingtonservice6.jpg";
import Covingtonservice5 from "../assets/Covingtonservice5.jpg";
import Covingtonservice4 from "../assets/Covingtonservice4.jpg";
import Covingtonservice3 from "../assets/Covingtonservice3.jpg";
import Covingtonservice2 from "../assets/Covingtonservice2.jpg";
import Covingtonservice from "../assets/Covingtonservice.jpg";
import Covingtonprojectfountains from "../assets/Covingtonprojectfountains.jpeg";
import Covingtonproject from "../assets/Covingtonproject.jpeg";
import Camposproject from "../assets/Camposproject.jpg";
import Bremertonspa from "../assets/Bremertonspa.jpeg";
import Bealesproject from "../assets/Bealesproject.jpeg";
import Barringer6 from "../assets/Barringer6.jpg";
import Barringer5 from "../assets/Barringer5.jpg";
import Barringer4 from "../assets/Barringer4.jpg";
import Barringer3 from "../assets/Barringer3.jpg";
import Barringer2 from "../assets/Barringer2.jpg";
import Barringer1 from "../assets/Barringer1.jpg";
import Alanproject from "../assets/Alanproject.jpeg";
import Alanfountainsgrotto from "../assets/Alanfountainsgrotto.jpeg";
import Alanfountains from "../assets/Alanfountains.jpeg";
import Abottproject2 from "../assets/Abottproject2.jpeg";

const dummyImages = [
  // Only include images that exist
  Sauerseattleplungepool,
  Sammamishproject,
  Sammamishmodern,
  Redondospa4,
  Redondospa3,
  Redondospa2,
  Redondospa,
  Redmondprojectdrontview,
  Redmondmodern,
  Redmonddig3,
  Redmonddig2,
  Redmonddig,
  RedmondProject,
  Ravensdaleproject,
  Rafusemassagerfountain,
  Rafusemassager,
  Rafuse1,
  Outdoorkitchen,
  Osborneproject2,
  Osbornegrotto3,
  Osbornegrotto2,
  Osbornegrotto,
  Osbornegirls,
  Northseattleproject,
  Nesbitproject,
  Mylesproject,
  Modernwwaterfall,
  Modernfountains,
  Middletonnight,
  Mercerislandproject2,
  Mercerislandproject,
  Mercerislandmodern,
  Medina,
  Mcgrawsquirtgun,
  Mcgrawslide4,
  Mcgrawslide2,
  Mcgrawslide,
  Mcgrawproject1,
  Mcgrawkiddos2,
  Mcgrawkiddos,
  Mcgrawjump5,
  Mcgrawjump4,
  Mcgrawjump3,
  Mcgrawjump2,
  Mcgrawjump,
  Mcgrawgrottoleap,
  Mcgrawfiretopbar,
  Mcgrawfirepit2,
  Mcgrawfirepit,
  Mcgrawfamilyswim,
  Mcgrawbubblersbeach,
  Mcgrawbeach2,
  Mcgrawbeach,
  Mcgraw5,
  Mcgraw3,
  Mcgraw2,
  McgrawSplash,
  Jump2,
  Johnsonlaminarfountains,
  JohnsonPool1,
  Infitityfire,
  GuestHouse17,
  GuestHouse15,
  Golfcourseproject,
  Davisproject8,
  Davisproject7,
  Davisproject6,
  Davisproject5,
  Davisproject,
  Covingtonservice14,
  Covingtonservice13,
  Covingtonservice12,
  Covingtonservice11,
  Covingtonservice10,
  Covingtonservice9,
  Covingtonservice8,
  Covingtonservice7,
  Covingtonservice6,
  Covingtonservice5,
  Covingtonservice4,
  Covingtonservice3,
  Covingtonservice2,
  Covingtonservice,
  Covingtonprojectfountains,
  Covingtonproject,
  Camposproject,
  Bremertonspa,
  Bealesproject,
  Barringer6,
  Barringer5,
  Barringer4,
  Barringer3,
  Barringer2,
  Barringer1,
  Alanproject,
  Alanfountainsgrotto,
  Alanfountains,
  Abottproject2,
];

const ITEMS_PER_PAGE = 9;

export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dummyImages.length / ITEMS_PER_PAGE);

  const getCurrentPageImages = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return dummyImages.slice(startIndex, endIndex);
  };

  // ✅ Arrow key + escape handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen || currentIndex === null) return;

      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) =>
          prev! < dummyImages.length - 1 ? prev! + 1 : 0
        );
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) =>
          prev! > 0 ? prev! - 1 : dummyImages.length - 1
        );
      } else if (e.key === "Escape") {
        setModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, currentIndex]);

  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-10">Our Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {getCurrentPageImages().map((src, index) => {
          const actualIndex = (currentPage - 1) * ITEMS_PER_PAGE + index;
          return (
            <motion.div
              key={actualIndex}
              className="overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={src}
                alt={`Pool ${actualIndex + 1}`}
                className="w-full h-auto rounded-md cursor-pointer"
                onClick={() => {
                  setCurrentIndex(actualIndex);
                  setModalOpen(true);
                }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center items-center space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#0D3B66] text-white hover:bg-[#0D3B66]/80"
          }`}
        >
          Previous
        </button>
        <span className="text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#0D3B66] text-white hover:bg-[#0D3B66]/80"
          }`}
        >
          Next
        </button>
      </div>

      {/* Modal Viewer */}
      {modalOpen && currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-6 text-white text-3xl"
            onClick={() => setModalOpen(false)}
          >
            &times;
          </button>

          <button
            className="absolute left-4 text-white text-4xl"
            onClick={() =>
              setCurrentIndex((prev) =>
                prev! > 0 ? prev! - 1 : dummyImages.length - 1
              )
            }
          >
            &#8592;
          </button>

          <img
            src={dummyImages[currentIndex]}
            alt={`Modal ${currentIndex}`}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />

          <button
            className="absolute right-4 text-white text-4xl"
            onClick={() =>
              setCurrentIndex((prev) =>
                prev! < dummyImages.length - 1 ? prev! + 1 : 0
              )
            }
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
}
