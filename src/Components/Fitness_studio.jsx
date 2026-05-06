import { useState } from "react";
import team_1 from "../assets/team_1.png";
import team_2 from "../assets/team_2.png";
import team_3 from "../assets/team_3.png";
import team_4 from "../assets/team_4.png";
import team_5 from "../assets/team_5.png";
import team_6 from "../assets/team_6.png";
import team_7 from "../assets/team_7.png";
import team_8 from "../assets/team_8.png";
import reactQ from "../assets/react-query-seeklogo.png";
import reactR from "../assets/react-router-seeklogo.svg";
import github from "../assets/github-logo.png";
import tailwind from "../assets/tailwind-css-seeklogo.png";

const Fitness_studio = ({
  motion,
  Swiper,
  SwiperSlide,
  FreeMode,
  Scrollbar,
  Mousewheel,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-slate-100">
      <motion.div
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="portfolio-card cursor-pointer overflow-hidden p-5"
      >
        <motion.div>
          <div className="flex items-center justify-between gap-4">
            <h2 className="portfolio-pill">Team Project</h2>
            <span className="text-xs uppercase tracking-[0.35em] portfolio-muted">
              Click to expand
            </span>
          </div>

          <Swiper
            direction={"vertical"}
            freeMode={{
              sticky: false,
              momentumBounce: false,
            }}
            mousewheel={{
              releaseOnEdges: true,
              forceToAxis: true,
              sensitivity: 1,
              thresholdDelta: 30,
            }}
            scrollbar={{ draggable: true }}
            modules={[FreeMode, Scrollbar, Mousewheel]}
            className="mySwiper mt-5 h-72 overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/20 transition-transform duration-300 hover:scale-[1.01]"
            onReachEnd={(swiper) => {
              swiper.el.classList.add("reached-end");
            }}
            onFromEdge={(swiper) => {
              swiper.el.classList.remove("reached-end");
            }}
          >
            <SwiperSlide layer>
              <img src={team_1} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={team_2} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={team_3} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={team_4} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={team_5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={team_6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={team_7} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={team_8} alt="" />
            </SwiperSlide>
          </Swiper>

          <div className="space-y-4">
            <div className="pt-4">
              <p className="text-2xl font-semibold text-white">Fitness Studio</p>
              <p className="mt-2 text-sm leading-6 portfolio-muted">
                Daily fitness tracker web app with goal setting, activity
                logging, community features, and marketplace flows.
              </p>
            </div>
            <p className="text-xs uppercase tracking-[0.35em] portfolio-section-label">
              Primary technology
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              <div className="portfolio-card-soft flex flex-col items-center justify-center p-3 text-slate-100">
                <img
                  src="https://i.ibb.co/Xp0vCQd/kisspng-react-logo-javascript-front-and-back-ends-user-int-5afef575c096e1-8015139215266584217889.png"
                  className="h-5 object-cover opacity-90"
                  alt=""
                />
                <p className="mt-1 text-xs text-slate-200">React</p>
              </div>
              <div className="portfolio-card-soft flex flex-col items-center justify-center p-3 text-slate-100">
                <img
                  src="https://i.ibb.co/q9FWKFT/pngfind-com-pc-master-race-png-1363736.png"
                  className="h-5 object-cover opacity-90"
                  alt=""
                />
                <p className="mt-1 text-xs text-slate-200">Express</p>
              </div>

              <div className="portfolio-card-soft flex flex-col items-center justify-center p-3 text-slate-100">
                <img
                  src="https://i.ibb.co/G2rsZZb/pngwing-com-2.png"
                  className="h-5 object-cover opacity-90"
                  alt=""
                />
                <p className="mt-1 text-xs text-slate-200">Node</p>
              </div>

              <div className="portfolio-card-soft flex flex-col items-center justify-center p-3 text-slate-100">
                <img
                  src="https://i.ibb.co/9cpxRJ2/pngwing-com-3.png"
                  className="h-5 object-cover opacity-90"
                  alt=""
                />
                <p className="mt-1 text-xs text-slate-200">MongoDB</p>
              </div>

              <div className="portfolio-card-soft flex flex-col items-center justify-center p-3 text-slate-100">
                <img
                  src="https://i.ibb.co.com/fYCrkX9/jwt-seeklogo.png"
                  className="h-8 object-cover opacity-90"
                  alt=""
                />
                <p className="mt-1 text-xs text-slate-200">JWT</p>
              </div>
              <div className="portfolio-card-soft flex flex-col items-center justify-center p-3 text-slate-100">
                <img src={reactQ} className="h-8 object-cover opacity-90" alt="" />
                <p className="mt-1 text-xs text-slate-200">React Query</p>
              </div>
              <div className="portfolio-card-soft flex flex-col items-center justify-center p-3 text-slate-100">
                <img src={reactR} className="h-8 object-cover opacity-90" alt="" />
                <p className="mt-1 text-xs text-slate-200">React router</p>
              </div>
              <div className="portfolio-card-soft flex flex-col items-center justify-center p-3 text-slate-100">
                <img src={tailwind} className="h-8 object-cover opacity-90" alt="" />
                <p className="mt-1 text-xs text-slate-200">Tailwind</p>
              </div>
              <div className="portfolio-card-soft flex flex-col items-center justify-center p-3 text-slate-100">
                <img src={github} className="h-5 object-cover opacity-90" alt="" />
                <p className="mt-1 text-xs text-slate-200">Github</p>
              </div>
            </div>
          </div>

        </motion.div>

        {isOpen && (
          <motion.div className="mt-5 portfolio-card-soft p-5 lg:col-span-2">
            <h2 className="my-4 text-xl font-bold portfolio-accent">
              Key Features:
            </h2>
            <ul className="space-y-2 list-disc px-4 text-sm leading-6 portfolio-muted">
              <li>
                Set personalized fitness goals and track progress effortlessly.
              </li>
              <li>
                Record daily activities and monitor performance towards fitness
                objectives.
              </li>
              <li>
                Sync Fitbit or Strava accounts to import activity data
                seamlessly.
              </li>
              <li>
                Create and publish blog posts to share fitness insights and
                tips.
              </li>
              <li>
                Follow other users to connect with fellow fitness enthusiasts.
              </li>
              <li>
                Engage in real-time conversations with users through chat
                functionality.
              </li>
              <li>
                Buy and sell fitness gear within the integrated marketplace.
              </li>
              <li>
                Join exclusive offline fitness events organized by the
                community.
              </li>
              <li>
                Admin role provides full control over app content for a secure
                user experience.
              </li>
            </ul>

            <div className="flex flex-col md:flex-row gap-4 w-full justify-around items-center my-4">
              <a
                href="https://github.com/Jubayer-Ahmed-Sajid/Fitness-Studio-client-side.git"
                className="portfolio-button inline-flex w-full items-center justify-center md:w-auto"
              >
                Client Site
              </a>
              <a
                href="https://github.com/Jubayer-Ahmed-Sajid/Fitness-Studio-server-site.git"
                className="portfolio-button inline-flex w-full items-center justify-center md:w-auto"
              >
                Server site
              </a>
              <a
                href="https://fitness-studio.surge.sh/"
                className="portfolio-button inline-flex w-full items-center justify-center md:w-auto"
              >
                Live site
              </a>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Fitness_studio;
