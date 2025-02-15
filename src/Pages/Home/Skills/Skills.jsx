import { motion } from "framer-motion";
import daisy from "../../../assets/daisyui-seeklogo.png";
import reactD from "../../../assets/react-router-seeklogo.svg";
import reactQ from "../../../assets/react-query-seeklogo.png";
import fireB from "../../../assets/firebase-seeklogo.png";
import gitHub from "../../../assets/github-logo.png";

// Variants for animations
const skillVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5 }
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const Skills = () => {
  return (
    <div id="skills" className="mx-4 lg:mx-auto">
      <h2 className="text-4xl text-white text-center my-8">Skill Sets</h2>

      {/* Animated HR - Triggers Every Time It Enters the Viewport */}
      <motion.hr
        className="w-2/3 mx-auto mt-2 h-[3px] bg-gradient-to-r from-[#FF6B35]/10 via-[#FF6B35]/60 to-[#FF6B35] border-none"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: false }} // Ensures animation triggers every time
        variants={{
          hidden: { scaleX: 0, opacity: 0 },
          visible: { scaleX: 1, opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
        }}
      />

      {/* Expertise Section */}
      <div className="lg:w-1/2 mx-auto mt-8 lg:mt-12">
        <h2 className="text-2xl text-white font-semibold">Expertise</h2>
        <motion.div
          className="grid grid-cols-3 lg:gap-8 gap-4 mx-auto mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: false }} // Allows animation to reset on scroll
          variants={containerVariants}
        >
          {[
            { img: "https://i.ibb.co/Xp0vCQd/kisspng-react-logo.png", name: "React" },
            { img: reactD, name: "React Router Dom" },
            { img: daisy, name: "Daisy UI" },
            { img: "https://i.ibb.co/fYCrkX9/jwt-seeklogo.png", name: "JWT" },
            { img: "https://i.ibb.co/VL2f0CW/pngwing-com-1.png", name: "JavaScript" },
            { img: "https://i.ibb.co/VQYXV8t/pngwing-com-4.png", name: "Tailwind CSS" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-md py-2 flex flex-col items-center hover:scale-105 hover:shadow-xl transition-all"
              variants={skillVariants}
              whileHover={{ scale: 1.1 }}
            >
              <img src={skill.img} className="h-8 lg:h-12 mx-auto object-cover" alt={skill.name} />
              <p className="text-center font-semibold mt-3">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Comfortable Section */}
      <div className="lg:w-1/2 mx-auto mt-4 lg:mt-8">
        <h2 className="text-2xl text-white font-semibold pt-12">Comfortable</h2>
        <motion.div
          className="grid grid-cols-3 lg:gap-8 gap-4 mx-auto mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: false }} // Ensures animation triggers every time
          variants={containerVariants}
        >
          {[
            { img: "https://i.ibb.co/9cpxRJ2/pngwing-com-3.png", name: "MongoDB" },
            { img: "https://i.ibb.co/q9FWKFT/pngfind-com.png", name: "Express" },
            { img: "https://i.ibb.co/G2rsZZb/pngwing-com-2.png", name: "Node" },
            { img: reactQ, name: "React Query" },
            { img: fireB, name: "Firebase" },
            { img: gitHub, name: "GitHub" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-md py-2 flex flex-col items-center hover:scale-105 hover:shadow-xl transition-all"
              variants={skillVariants}
              whileHover={{ scale: 1.1 }}
            >
              <img src={skill.img} className="h-8 lg:h-12 mx-auto object-cover" alt={skill.name} />
              <p className="text-center font-semibold mt-3">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
