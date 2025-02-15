import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";
import { motion } from "framer-motion";
import Book_Shop from "../../../Components/Book_Shop";
import Fitness_studio from "../../../Components/Fitness_studio";
import PetAdoption from "../../../Components/PetAdoption";
import Library from "../../../Components/Library";

const hrVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { 
    scaleX: 1, 
    opacity: 1, 
    transition: { duration: 1, ease: "easeInOut" }
  },
};

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { staggerChildren: 0.3, ease: "easeOut" } 
  },
};

const MyWorks = () => {
  return (
    <div id="myWorks" className="lg:mx-4 mt-12 p-6">
      <h2 className="text-4xl mb-6 text-white text-center font-semibold">
        My Works
      </h2>

      {/* Animated HR - Triggers Every Time It Enters the Viewport */}
      <motion.hr
        className="w-2/3 mx-auto h-[3px] bg-gradient-to-r from-[#FF6B35]/10 via-[#FF6B35]/60 to-[#FF6B35] border-none"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: false }} // This makes sure it animates every time
        variants={hrVariants}
      />

      {/* Projects Grid */}
      <motion.div 
        layout 
        className="grid lg:grid-cols-2 gap-6 mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: false }} // Makes it animate every time it enters the viewport
        variants={containerVariants}
      >
        {[Fitness_studio, Book_Shop, PetAdoption, Library].map((Component, index) => (
          <motion.div key={index} variants={containerVariants}>
            <Component 
              motion={motion}
              Swiper={Swiper}
              SwiperSlide={SwiperSlide}
              FreeMode={FreeMode}
              Scrollbar={Scrollbar}
              Mousewheel={Mousewheel}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MyWorks;
