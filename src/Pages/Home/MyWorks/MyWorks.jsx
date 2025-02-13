import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";

import { motion } from "framer-motion";
import Book_Shop from "../../../Components/Book_Shop";
import Fitness_studio from "../../../Components/Fitness_studio";
import PetAdoption from "../../../Components/PetAdoption";
import Library from "../../../Components/Library";
const MyWorks = () => {
  return (
    <div id="myWorks" className="lg:mx-4 mt-12 p-6">
      <h2 className="text-4xl mb-12 text-[#BDC3C7] text-center text-semibold">
        My Works
      </h2>
      <motion.div layout className="grid lg:grid-cols-2 gap-6">
       
        <Fitness_studio
          motion={motion}
          Swiper={Swiper}
          SwiperSlide={SwiperSlide}
          FreeMode={FreeMode}
          Scrollbar={Scrollbar}
          Mousewheel={Mousewheel}
         
        ></Fitness_studio>
       

        <Book_Shop
          motion={motion}
          Swiper={Swiper}
          SwiperSlide={SwiperSlide}
          FreeMode={FreeMode}
          Scrollbar={Scrollbar}
          Mousewheel={Mousewheel}
        ></Book_Shop>

        <PetAdoption
          motion={motion}
          Swiper={Swiper}
          SwiperSlide={SwiperSlide}
          FreeMode={FreeMode}
          Scrollbar={Scrollbar}
          Mousewheel={Mousewheel}
        ></PetAdoption>

        <Library
          motion={motion}
          Swiper={Swiper}
          SwiperSlide={SwiperSlide}
          FreeMode={FreeMode}
          Scrollbar={Scrollbar}
          Mousewheel={Mousewheel}
        ></Library>
      </motion.div>
    </div>
  );
};

export default MyWorks;
