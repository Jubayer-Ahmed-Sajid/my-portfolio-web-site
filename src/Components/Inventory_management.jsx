import {
  SiCsharp,
  SiDotnet,
  SiPostgresql,
  SiRender,
  SiGithub,
} from "react-icons/si";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import inventory_1 from "../assets/inventory_1.png";

const techStack = [
  { name: "C#", icon: <SiCsharp className="text-[#239120]" /> },
  { name: "ASP.NET MVC", icon: <SiDotnet className="text-[#512BD4]" /> },
  { name: ".NET", icon: <SiDotnet className="text-[#512BD4]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
  { name: "Render", icon: <SiRender className="text-white" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
];

const Inventory_management = ({ Swiper, SwiperSlide, FreeMode, Scrollbar }) => {
  return (
    <div className="portfolio-card flex flex-col justify-between overflow-hidden p-5 sm:p-6 h-full transition-all duration-300 hover:border-white/25 hover:shadow-2xl">
      <div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="portfolio-pill text-xs">Backend & Architecture</span>
          </div>
          <span className="text-xs uppercase tracking-wider text-slate-500">ASP.NET MVC</span>
        </div>

        {/* Screenshot Carousel */}
        <div className="mt-4">
          <Swiper
            direction="horizontal"
            spaceBetween={10}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            modules={[FreeMode, Scrollbar]}
            className="mySwiper h-48 sm:h-52 overflow-hidden rounded-2xl border border-white/10 bg-black/40"
          >
            <SwiperSlide>
              <img
                src={inventory_1}
                alt="Inventory Management System workspace dashboard"
                className="h-full w-full object-cover object-top"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Title & Description */}
        <div className="pt-4">
          <p className="text-xl font-bold text-white">Inventory Management System</p>
          <p className="mt-1.5 text-xs sm:text-sm leading-6 portfolio-muted min-h-[3rem]">
            Enterprise inventory workspace built with C# OOP and layered ASP.NET MVC architecture,
            providing item catalog controls, stock level monitoring, and transactional workflows.
          </p>
        </div>

        {/* Key Features List */}
        <div className="mt-3.5 rounded-xl border border-white/5 bg-white/[0.02] p-3">
          <p className="text-xs font-semibold uppercase tracking-wider portfolio-section-label">
            Key Features
          </p>
          <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c7a36b]" />
              <span>Catalog management with item details, categories, supplier tracking, and search.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c7a36b]" />
              <span>Real-time stock monitoring with units on hand, out-of-stock indicators, and transactions.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c7a36b]" />
              <span>Layered architecture with business logic separation, data modeling, and clean controllers.</span>
            </li>
          </ul>
        </div>

        {/* Primary Tech Badges */}
        <div className="mt-4">
          <p className="text-xs uppercase tracking-wider text-slate-400">
            Technologies
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-200"
              >
                <span className="text-sm">{tech.icon}</span>
                <span>{tech.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2.5 items-center mt-5 pt-4 border-t border-white/10">
        <a
          href="https://inventorymanagementsystem-cx5y.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-button inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs"
        >
          <FaExternalLinkAlt className="text-[10px]" /> Live Demo
        </a>
        <a
          href="https://github.com/Jubayer-Ahmed-Sajid"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-button-ghost inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs"
        >
          <FaGithub /> Source Code
        </a>
      </div>
    </div>
  );
};

export default Inventory_management;

