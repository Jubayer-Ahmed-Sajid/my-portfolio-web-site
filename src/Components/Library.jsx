import { useState } from "react";
import library_1 from "../assets/library_1.png";
import library_2 from "../assets/library_2.png";
import library_3 from "../assets/library_3.png";
import library_4 from "../assets/library_4.png";
import library_5 from "../assets/library_5.png";
import library_6 from "../assets/library_6.png";
import daisy from '../assets/daisyui-seeklogo.png'
import reactQ from '../assets/react-query-seeklogo.png'
import reactR from '../assets/react-router-seeklogo.svg'
import github from '../assets/github-logo.png'
import tailwind from '../assets/tailwind-css-seeklogo.png'

const Library = ({
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
              <img src={library_1} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={library_2} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={library_3} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={library_4} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={library_5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={library_6} alt="" />
            </SwiperSlide>
          </Swiper>
          <div className="space-y-4">
                      <p className="my-3">
                        <span className="text-lg font-semibold">Shelf Stream</span>{" "}
                        (Book borrow and Returning Web App)
                      </p>
                      <p className="text-slate-600 text-xl">Primary technology</p>
                      <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8">
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
                       
                        <img src="https://i.ibb.co.com/fYCrkX9/jwt-seeklogo.png" className="h-8 object-cover" alt="" />
                        <img src={tailwind} className="h-8 object-cover" alt="" />
                        <img src={daisy} className="h-8 object-cover" alt="" />
                        
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
                Borrow books by providing a return date, username, and email.
              </li>
              <li>Decrease in available book quantity upon borrowing.</li>
              <li>View a list of borrowed books with their details.</li>
              <li>
                Return books using a simple return button, increasing available
                book quantity.
              </li>
              <li>Admin dashboard to add, update, and remove books.</li>
              <li>
                Admin can view the list of logged-in users and their borrowing
                history.
              </li>
            </ul>

            <div className="flex w-full justify-around items-center my-4">
              <a
                href="https://github.com/Jubayer-Ahmed-Sajid/Library-management-server-site.git"
                className="btn bg-secondary"
              >
                Server site
              </a>
              <a
                href="https://github.com/Jubayer-Ahmed-Sajid/Library-management-client-site.git"
                className="btn bg-secondary"
              >
                Client Site
              </a>
              <a
                href="https://assignment-11-3e9b0.web.app/"
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

export default Library;
