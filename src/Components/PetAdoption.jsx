import { useState } from "react";
import pet_1 from "../assets/pet_1.png";
import pet_2 from "../assets/pet_2.png";
import pet_3 from "../assets/pet_3.png";
import pet_4 from "../assets/pet_4.png";
import pet_5 from "../assets/pet_5.png";
import pet_6 from "../assets/pet_6.png";
import pet_7 from "../assets/pet_7.png";
import pet_8 from "../assets/pet_8.png";
import daisy from "../assets/daisyui-seeklogo.png";
import reactQ from "../assets/react-query-seeklogo.png";
import reactR from "../assets/react-router-seeklogo.svg";
import github from "../assets/github-logo.png";
import tailwind from "../assets/tailwind-css-seeklogo.png";
const PetAdoption = ({
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
            <h2 className="portfolio-pill">Personal Project</h2>
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
              <img src={pet_1} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={pet_2} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={pet_3} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={pet_4} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={pet_5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pet_6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pet_7} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pet_8} alt="" />
            </SwiperSlide>
          </Swiper>

          <div className="space-y-4">
            <div className="pt-4">
              <p className="text-2xl font-semibold text-white">Paws and Hearts</p>
              <p className="mt-2 text-sm leading-6 portfolio-muted">
                Pet adoption platform with Firebase auth, donation campaigns,
                and admin controls for content moderation.
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
                  className="h-5 object-cover opacity-90"
                  alt=""
                />
                <p className="mt-1 text-xs text-slate-200">JWT</p>
              </div>
              <div className="portfolio-card-soft flex flex-col items-center justify-center p-3 text-slate-100">
                <img src={reactQ} className="h-5 object-cover opacity-90" alt="" />
                <p className="mt-1 text-xs text-slate-200">React query</p>
              </div>
              <div className="portfolio-card-soft flex flex-col items-center justify-center p-3 text-slate-100">
                <img src={reactR} className="h-5 object-cover opacity-90" alt="" />
                <p className="mt-1 text-xs text-slate-200">React router</p>
              </div>
              <div className="portfolio-card-soft flex flex-col items-center justify-center p-3 text-slate-100">
                <img src={tailwind} className="h-5 object-cover opacity-90" alt="" />
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
                Secure user authentication using Firebase and JWT token-based
                authorization.
              </li>
              <li>
                User dashboard for managing pets, donation campaigns, and
                contributions.
              </li>
              <li>
                Add pets for adoption with detailed information and images.
              </li>
              <li>
                Adopt pets directly through the platform with seamless
                functionality.
              </li>
              <li>
                Create and manage donation campaigns with goals and progress
                tracking.
              </li>
              <li>Browse and contribute to active donation campaigns.</li>
              <li>
                Admin dashboard for managing all user-added content, including
                pets and campaigns.
              </li>
              <li>
                Admin privileges to promote users to admin roles or delete user
                accounts.
              </li>
              <li>
                Monitor all logged-in users and maintain platform integrity.
              </li>
            </ul>

            <div className="flex flex-col md:flex-row gap-4 w-full justify-around items-center my-4">
              <a
                href="https://github.com/Jubayer-Ahmed-Sajid/Pet-adoption-client-site"
                className="portfolio-button inline-flex w-full items-center justify-center md:w-auto"
              >
                Client Site
              </a>
              <a
                href="https://github.com/Jubayer-Ahmed-Sajid/Pet-adoption-server-site"
                className="portfolio-button inline-flex w-full items-center justify-center md:w-auto"
              >
                Server site
              </a>
              <a
                href="https://paws-and-hearts-js.vercel.app"
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

export default PetAdoption;
