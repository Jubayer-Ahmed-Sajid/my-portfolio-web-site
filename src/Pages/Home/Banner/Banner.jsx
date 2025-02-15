import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import banner from "../../../assets/IMG-20240211-WA0025_5-removebg~2[1].png";

const Banner = () => {
  // Download resume function
  const downloadResume = () => {
    const pdfUrl = "resume_001.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume_001.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      className="hero overflow-hidden px-6 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      
    >
      <div className="hero-content w-full items-center flex-col lg:justify-between lg:flex-row-reverse">
        <motion.div
          className="lg:w-1/2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={banner}
            className="lg:h-[400px] md:h-[340px] h-[230px] md:w-auto lg:w-auto w-[230px] border-dotted border-[4px] border-[#6A0572] object-cover rounded-full bg-black shadow-2xl md:pr-4"
          />
          <motion.div
            className="flex gap-4 md:gap-6 items-center text-2xl md:text-4xl my-6 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {[{
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/jobayer-ahmed-sajid"
            }, {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/jubayer.ahmed.sajid"
            }, {
              icon: <FaGithub />,
              link: "https://github.com/Jubayer-Ahmed-Sajid"
            }].map((social, index) => (
              <a
                key={index}
                className="hover:scale-110 p-1 rounded-md text-white bg-gradient-to-r from-[#FF6B35] to-[#6A0572] hover:from-[#6A0572] hover:to-[#FF6B35] group"
                href={social.link}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.7 }}
                >
                  {social.icon}
                </motion.div>
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="md:text-2xl mb-4 text-slate-200">MERN Stack Developer,</h3>
          <h1 className="text-2xl md:text-5xl text-white mb-2 font-bold">
            Hello, <br /> I am Jobayer Ahmed Sajid!
          </h1>
          <TypeAnimation
            sequence={[
              "Unleashing Digital Excellence.",
              1000,
              "Crafting Tomorrow, Today.",
              1000,
              "Connect, Create, Captivate.",
              1000,
              "Transforming Vision into Reality",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-xl font-semibold text-[#FF6B35] [text-shadow:_2px_8px_8px_rgba(0_0_0_/_0.5)] mb-4"
            repeat={Infinity}
          />
          <p className="text-white my-2 md:w-3/4">
            Creating dynamic, scalable web applications with expertise in the MERN stack—MongoDB, Express, React, and Node.js. I focus on delivering seamless user experiences, efficient backend solutions, and responsive designs tailored to meet diverse project needs.
          </p>
          <motion.button
            onClick={downloadResume}
            className="flex gap-2 items-center bg-gradient-to-r from-[#FF6B35] to-[#6A0572] text-white p-3 rounded-md font-semibold mt-2 border-none hover:from-[#6A0572] hover:to-[#FF6B35] transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaDownload /> Download Resume
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
