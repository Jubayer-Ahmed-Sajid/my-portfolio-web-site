import {
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import zicraft_hero from "../assets/zicraft_hero.png";
import zicraft_dashboard from "../assets/zicraft_dashboard.jpg";
import zicraft_stories from "../assets/zicraft_stories.png";

const techStack = [
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
];

const ZiCraft_project = ({ Swiper, SwiperSlide, FreeMode, Scrollbar }) => {
  return (
    <div className="portfolio-card flex flex-col justify-between overflow-hidden p-5 sm:p-6 h-full transition-all duration-300 hover:border-white/25 hover:shadow-2xl">
      <div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="portfolio-pill text-xs">Live SaaS Product</span>
          </div>
          <span className="text-xs uppercase tracking-wider text-slate-500">Next.js & Firebase</span>
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
            {[
              { img: zicraft_hero, alt: "ZiCraft landing page" },
              { img: zicraft_dashboard, alt: "ZiCraft review dashboard" },
              { img: zicraft_stories, alt: "ZiCraft short stories view" },
            ].map((item, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={item.img}
                  alt={item.alt}
                  className="h-full w-full object-cover object-top"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Title & Description */}
        <div className="pt-4">
          <p className="text-xl font-bold text-white">ZiCraft — Chinese Vocabulary Platform</p>
          <p className="mt-1.5 text-xs sm:text-sm leading-6 portfolio-muted min-h-[3rem]">
            Live freemium language platform covering 5,334 official 2025 HSK words across HSK 1–6,
            powered by spaced repetition, tone training, and interactive short stories.
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
              <span>Full coverage of 5,334 official 2025 HSK vocabulary words with 503 free words.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c7a36b]" />
              <span>Spaced Repetition System (SRS) review workflow with interactive tone practice.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c7a36b]" />
              <span>Graded reading stories with target vocabulary highlighting and comprehension tests.</span>
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
          href="https://zicraft.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-button inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs"
        >
          <FaExternalLinkAlt className="text-[10px]" /> Live Demo
        </a>
      </div>
    </div>
  );
};

export default ZiCraft_project;

