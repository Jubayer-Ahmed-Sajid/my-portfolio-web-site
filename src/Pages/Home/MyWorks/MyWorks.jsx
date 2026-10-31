import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { FreeMode, Scrollbar } from "swiper/modules";

import ZiCraft_project from "../../../Components/ZiCraft_project";
import Inventory_management from "../../../Components/Inventory_management";
import Book_Shop from "../../../Components/Book_Shop";
import Fitness_studio from "../../../Components/Fitness_studio";
import PetAdoption from "../../../Components/PetAdoption";
import Library from "../../../Components/Library";

const MyWorks = () => {
  return (
    <section id="myWorks" className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] portfolio-section-label">
          Selected projects
        </p>
        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Work that shows product delivery and system thinking.
        </h2>
        <p className="mt-5 text-base leading-8 portfolio-muted sm:text-lg">
          A uniform collection of live SaaS products, enterprise systems architecture, and full-stack web applications.
          Each project demonstrates end-to-end delivery, clean architecture, and problem-solving rigor.
        </p>
      </div>

      {/* Uniform Project Cards Grid (2 columns on desktop) */}
      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ZiCraft_project
          Swiper={Swiper}
          SwiperSlide={SwiperSlide}
          FreeMode={FreeMode}
          Scrollbar={Scrollbar}
        />
        <Inventory_management
          Swiper={Swiper}
          SwiperSlide={SwiperSlide}
          FreeMode={FreeMode}
          Scrollbar={Scrollbar}
        />
        <Book_Shop
          Swiper={Swiper}
          SwiperSlide={SwiperSlide}
          FreeMode={FreeMode}
          Scrollbar={Scrollbar}
        />
        <Fitness_studio
          Swiper={Swiper}
          SwiperSlide={SwiperSlide}
          FreeMode={FreeMode}
          Scrollbar={Scrollbar}
        />
        <PetAdoption
          Swiper={Swiper}
          SwiperSlide={SwiperSlide}
          FreeMode={FreeMode}
          Scrollbar={Scrollbar}
        />
        <Library
          Swiper={Swiper}
          SwiperSlide={SwiperSlide}
          FreeMode={FreeMode}
          Scrollbar={Scrollbar}
        />
      </div>
    </section>
  );
};

export default MyWorks;
