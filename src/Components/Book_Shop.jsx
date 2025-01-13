import { useState } from "react";
import book_1 from "../assets/book_1.png";
import book_2 from "../assets/book_2.png";
import book_3 from "../assets/book_3.png";
import book_4 from "../assets/book_4.png";
import book_5 from "../assets/book_5.png";
import daisy from "../assets/daisyui-seeklogo.png";
import reactQ from "../assets/react-query-seeklogo.png";
import reactR from "../assets/react-router-seeklogo.svg";
import github from "../assets/github-logo.png";
import tailwind from "../assets/tailwind-css-seeklogo.png";
const Book_Shop = ({
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
              <img src={book_1} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={book_2} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={book_3} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={book_4} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={book_5} alt="" />
            </SwiperSlide>
          </Swiper>
          <div className="space-y-4">
            <p className="my-3">
              <span className="text-lg font-semibold">Books Corner</span> (Book
              Buy Selling Web App)
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
              <img src={daisy} className="h-5 object-cover" alt="" />
                <p className="text-sm mt-1">DaisyUI</p>
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
                Buyers can browse a wide selection of books and make secure
                purchases.
              </li>
              <li>
                Buyers can add books to a cart for immediate purchase or to a
                wishlist for future reference.
              </li>
              <li>
                Sellers can add new books to the catalog, including book details
                such as title, author, price, and description.
              </li>
              <li>
                Sellers can view all their added books in a personalized
                dashboard and can manage those books.
              </li>
              <li>
                Admins have full control over the platform, managing all user
                accounts, including buyers and sellers.
              </li>
              <li>
                Secure user authentication and authorization implemented using
                JWT (JSON Web Token).
              </li>
              <li>
                Responsive design ensures compatibility and usability across all
                devices, including desktops, tablets, and mobile phones.
              </li>
            </ul>

            <div className="flex flex-col md:flex-row gap-4 w-full justify-around items-center my-4">
              <a
                href="https://github.com/Jubayer-Ahmed-Sajid/my-book-shop-client-side"
                className="btn md:w-auto w-full border-none text-gray-900 bg-secondary"
              >
                Client Site
              </a>

              <a
                href="https://github.com/Jubayer-Ahmed-Sajid/my-book-shop-server-side"
                className="btn md:w-auto w-full border-none text-gray-900 bg-secondary"
              >
                Server site
              </a>

              <a
                href="https://book-shop-jp-project.vercel.app/"
                className="btn md:w-auto w-full text-gray-900 border-none bg-secondary"
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

export default Book_Shop;
