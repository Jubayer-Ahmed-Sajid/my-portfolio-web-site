import {
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiJsonwebtokens,
  SiReactquery,
  SiReactrouter,
  SiTailwindcss,
  SiDaisyui,
  SiGithub,
} from "react-icons/si";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import library_1 from "../assets/library_1.png";
import library_2 from "../assets/library_2.png";
import library_3 from "../assets/library_3.png";
import library_4 from "../assets/library_4.png";
import library_5 from "../assets/library_5.png";
import library_6 from "../assets/library_6.png";

const techStack = [
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Express", icon: <SiExpress className="text-white" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#5FA04E]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "JWT", icon: <SiJsonwebtokens className="text-[#D63AFF]" /> },
  { name: "React Query", icon: <SiReactquery className="text-[#FF4154]" /> },
  { name: "React Router", icon: <SiReactrouter className="text-[#CA4245]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "DaisyUI", icon: <SiDaisyui className="text-[#1AD1A5]" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
];

const Library = ({ Swiper, SwiperSlide, FreeMode, Scrollbar }) => {
  return (
    <div className="portfolio-card flex flex-col justify-between overflow-hidden p-5 sm:p-6 h-full transition-all duration-300 hover:border-white/25 hover:shadow-2xl">
      <div>
        <div className="flex items-center justify-between gap-4">
          <span className="portfolio-pill text-xs">Personal Project</span>
          <span className="text-xs uppercase tracking-wider text-slate-500">MERN Stack</span>
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
            {[library_1, library_2, library_3, library_4, library_5, library_6].map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img}
                  alt={`Shelf Stream screenshot ${idx + 1}`}
                  className="h-full w-full object-cover object-top"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Title & Description */}
        <div className="pt-4">
          <p className="text-xl font-bold text-white">Shelf Stream</p>
          <p className="mt-1.5 text-xs sm:text-sm leading-6 portfolio-muted min-h-[3rem]">
            Book circulation and library management web application with real-time inventory
            tracking, automated return workflows, and an administrative catalog suite.
          </p>
        </div>

        {/* Key Features List */}
        <div className="mt-3.5 rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
          <p className="text-xs font-semibold uppercase tracking-wider portfolio-section-label">
            Key Features
          </p>
          <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c7a36b]" />
              <span>Borrow books with automated return dates and real-time stock reduction.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c7a36b]" />
              <span>One-click return workflow that automatically restores inventory numbers.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c7a36b]" />
              <span>Admin dashboard to add, update, remove, and monitor book circulation history.</span>
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
          href="https://assignment-11-3e9b0.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-button inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs"
        >
          <FaExternalLinkAlt className="text-[10px]" /> Live Demo
        </a>
        <a
          href="https://github.com/Jubayer-Ahmed-Sajid/Library-management-client-site"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-button-ghost inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs"
        >
          <FaCode /> Client Code
        </a>
        <a
          href="https://github.com/Jubayer-Ahmed-Sajid/Library-management-server-site"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-button-ghost inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs"
        >
          <FaCode /> Server Code
        </a>
      </div>
    </div>
  );
};

export default Library;
