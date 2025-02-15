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
      <h2 className="text-4xl mb-12 text-white text-center text-semibold">
        My Works
        <hr className="w-2/3 mt-2 mx-auto h-[3px] bg-gradient-to-r from-[#FF6B35]/10 via-[#FF6B35]/60 to-[#FF6B35] border-none" />
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
