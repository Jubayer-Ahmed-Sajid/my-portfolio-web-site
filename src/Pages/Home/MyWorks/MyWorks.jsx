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
          The mix below includes user-facing web apps and a featured inventory
          management system that reflects my focus on architecture and problem
          decomposition.
        </p>
      </div>

      <motion.div
        className="portfolio-card mt-12 overflow-hidden p-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] portfolio-section-label">
              Featured system
            </p>
            <h3 className="mt-3 text-3xl font-semibold text-white">
              Inventory Management System
            </h3>
            <p className="mt-4 portfolio-muted">
              Built in ASP.NET MVC architecture with C# OOP to manage inventory
              workflows, structure the data layer, and practice a maintainable
              codebase.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["ASP.NET MVC", "C# OOP", "Database workflows", "Architecture"].map((item) => (
              <span
                key={item}
                className="portfolio-pill"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Problem decomposition",
            "CRUD workflows",
            "Layered design",
            "Business logic",
          ].map((item) => (
            <div
              key={item}
              className="portfolio-card-soft px-4 py-3 text-sm portfolio-muted"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        layout
        className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0, once: false }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, ease: "easeOut" },
          },
        }}
      >
        {[Fitness_studio, Book_Shop, PetAdoption, Library].map((Component, index) => (
          <motion.div
            key={index}
            className="portfolio-card overflow-hidden p-2"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
            }}
          >
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
    </section>
  );
};

export default MyWorks;
