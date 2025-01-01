import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
    });
  }, []);
  return (
    <div className="">
      <h1 className="text-3xl text-center before:lg:text-4xl my-8 font-bold text-[#BDC3C7]">
        Personal Details
      </h1>
      <div className="shadow-xl flex items-baseline rounded-xl py-6 mx-4 px-4 border-[2px] border-white border-1">
        
        
          <div className="py-4 space-y-2 w-full text-[#ECF0F1] mx-auto">
            <p>
              Hello, I am Jobayer Ahmed Sajid, an aspiring MERN stack web
              developer with a strong knack for problem-solving and creating
              impactful solutions. I hail from Dhaka, Bangladesh, and I am
              currently pursuing a bachelor's degree in Chinese Language and
              Culture at the University of Dhaka.
            </p>
            <p>
              Although my academic background is in Chinese language studies, my
              true passion lies in web development. This passion drives me to
              craft seamless, user-centric web applications that transform ideas
              into dynamic visual representations.
            </p>
            <p>
              I am enthusiastic about collaborating on innovative projects and
              contributing my technical skills to bring your vision to life.
              Whether you need a responsive website, an interactive application,
              or a complete web solution, I am ready to deliver with dedication
              and creativity.
            </p>
            Let’s connect and work together to build something exceptional!
          </div>
        </div>
      </div>
  
  );
};

export default About;
