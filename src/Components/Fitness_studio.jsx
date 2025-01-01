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
    <div>
      <motion.div
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="col-span-1 bg-white rounded-md  cursor-pointer p-6"
      >
        <motion.div>
          {/* adding scrollbar for images */}
          <h2 className="my-2 text-xl font-bold">(Team Project)</h2>
          <Swiper
            layer
            direction={"vertical"}
            slidesPerView={"auto"}
            freeMode={true}
            scrollbar={true}
            mousewheel={true}
            modules={[FreeMode, Scrollbar, Mousewheel]}
            className="mySwiper h-64 hover:scale-105 transition-transform duration-300 hover:my-2"
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
            <p className="my-3">
              <span className="text-lg font-semibold">Fitness Studio</span>{" "}
              (Daily Fitness Tracker Web App)
            </p>
            <p className="text-slate-600 text-xl">Primary technology</p>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-4">
              <img
                src="https://i.ibb.co/Xp0vCQd/kisspng-react-logo-javascript-front-and-back-ends-user-int-5afef575c096e1-8015139215266584217889.png"
                className="h-8 object-cover"
                alt=""
              />
              <img
                src="https://i.ibb.co/q9FWKFT/pngfind-com-pc-master-race-png-1363736.png"
                className="h-8 object-cover"
                alt=""
              />
              <img
                src="https://i.ibb.co/G2rsZZb/pngwing-com-2.png"
                className="h-8 object-cover"
                alt=""
              />
              <img
                src="https://i.ibb.co/9cpxRJ2/pngwing-com-3.png"
                className="h-8 object-cover"
                alt=""
              />
              <img
                src="https://i.ibb.co/VL2f0CW/pngwing-com-1.png"
                className="h-8 object-cover"
                alt=""
              />

              <img
                src="https://i.ibb.co.com/fYCrkX9/jwt-seeklogo.png"
                className="h-8 object-cover"
                alt=""
              />
              <img src={reactQ} className="h-8 object-cover" alt="" />
              <img src={reactR} className="h-8 object-cover" alt="" />
              <img src={tailwind} className="h-8 object-cover" alt="" />
              <img src={github} className="h-8 object-cover" alt="" />
            </div>
          </div>
        </motion.div>
        {isOpen && (
          <motion.div className="lg:col-span-2">
            <h2 className="my-4 text-xl text-secondary font-bold">
              Key Features:
            </h2>
            <ul className="space-y-2 list-disc px-2">
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

            <div className="flex w-full justify-around items-center my-4">
              <a
                href="https://github.com/Jubayer-Ahmed-Sajid/Fitness-Studio-client-side.git"
                className="btn bg-secondary"
              >
                Client Site
              </a>
              <a
                href="https://github.com/Jubayer-Ahmed-Sajid/Fitness-Studio-server-site.git"
                className="btn bg-secondary"
              >
                Server site
              </a>
              <a
                href="https://fitness-studio.surge.sh/"
                className="btn bg-secondary"
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
