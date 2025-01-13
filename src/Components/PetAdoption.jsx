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
    <div>
      <motion.div
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="col-span-1 bg-white rounded-md  cursor-pointer p-6"
      >
        <motion.div>
          {/* adding scrollbar for images */}
          <h2 className="my-2 text-xl font-bold">(Personal Project)</h2>
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
            <p className="my-3">
              <span className="text-lg font-semibold">Paws and Hearts</span>{" "}
              (Pet Adoption Web App)
            </p>
            <p className="text-slate-600 text-xl">Primary technology</p>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
              <div className="bg-white p-2 rounded-md shadow-lg flex flex-col items-center justify-center">
                <img
                  src="https://i.ibb.co/Xp0vCQd/kisspng-react-logo-javascript-front-and-back-ends-user-int-5afef575c096e1-8015139215266584217889.png"
                  className="h-5 object-cover"
                  alt=""
                />
                <p className="text-sm mt-1">React</p>
              </div>

              <div className="bg-white p-2 rounded-md shadow-lg flex flex-col items-center justify-center">
                <img
                  src="https://i.ibb.co/q9FWKFT/pngfind-com-pc-master-race-png-1363736.png"
                  className="h-5 object-cover"
                  alt=""
                />
                <p className="text-sm mt-1">Express</p>
              </div>
              <div className="bg-white p-2 rounded-md shadow-lg flex flex-col items-center justify-center">
                <img
                  src="https://i.ibb.co/G2rsZZb/pngwing-com-2.png"
                  className="h-5 object-cover"
                  alt=""
                />
                <p className="text-sm mt-1">Node</p>
              </div>
              <div className="bg-white p-2 rounded-md shadow-lg flex flex-col items-center justify-center">
                <img
                  src="https://i.ibb.co/9cpxRJ2/pngwing-com-3.png"
                  className="h-5 object-cover"
                  alt=""
                />
                <p className="text-sm mt-1">MongoDB</p>
              </div>

              <div className="bg-white p-2 rounded-md shadow-lg flex flex-col items-center justify-center">
                <img
                  src="https://i.ibb.co.com/fYCrkX9/jwt-seeklogo.png"
                  className="h-5 object-cover"
                  alt=""
                />
                <p className="text-sm mt-1">JWT</p>
              </div>
              <div className="bg-white p-2 rounded-md shadow-lg flex flex-col items-center justify-center">
                <img src={reactQ} className="h-5 object-cover" alt="" />
                <p className="text-sm mt-1">React query</p>
              </div>
              <div className="bg-white p-2 rounded-md shadow-lg flex flex-col items-center justify-center">
                <img src={reactR} className="h-5 object-cover" alt="" />
                <p className="text-sm mt-1">React router</p>
              </div>
              <div className="bg-white p-2 rounded-md shadow-lg flex flex-col items-center justify-center">
                <img src={tailwind} className="h-5 object-cover" alt="" />
                <p className="text-sm mt-1">Tailwind</p>
              </div>

              <div className="bg-white p-2 rounded-md shadow-lg flex flex-col items-center justify-center">
                <img src={github} className="h-5 object-cover" alt="" />
                <p className="text-sm mt-1">Github</p>
              </div>
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
                className="btn md:w-auto w-full border-none text-gray-900 bg-secondary"
              >
                Client Site
              </a>
              <a
                href="https://github.com/Jubayer-Ahmed-Sajid/Pet-adoption-server-site"
                className="btn md:w-auto w-full border-none text-gray-900 bg-secondary"
              >
                Server site
              </a>
              <a
                href="https://paws-and-hearts-js.vercel.app"
                className="btn md:w-auto w-full border-none text-gray-900 bg-secondary"
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
