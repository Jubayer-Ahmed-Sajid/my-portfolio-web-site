import { motion } from "framer-motion";
import { FaBuromobelexperte, FaGraduationCap } from "react-icons/fa";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const ExpAndEdu = () => {
  return (
    <div id="education" className="overflow-hidden mt-8 px-8">
      {/* Heading */}
      <motion.h2
        className="text-white text-3xl font-bold text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }} // Re-triggers when 30% of element is in view
      >
        Education and <span className="text-[#FF6B35]">Experience</span>
      </motion.h2>

      <motion.hr
        className="w-2/3 mt-2 mx-auto h-[3px] bg-gradient-to-r from-[#FF6B35]/10 via-[#FF6B35]/60 to-[#FF6B35] border-none"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      />

      <div className="lg:grid w-full gap-12 grid-cols-2">
        {/* Education Section */}
        <motion.div className="w-full" variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
          <div className="my-12 flex items-center gap-2 justify-center">
            <h2 className="text-2xl text-white font-semibold">Education</h2>
            <FaGraduationCap className="text-4xl text-[#FF6B35]" />
          </div>

          <motion.ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {[
              { year: "2021 - Present", degree: "Bachelor of Chinese Language and Culture", institution: "University Of Dhaka" },
              { year: "2018 - 2020", degree: "Higher Secondary School Certificate", institution: "Government Safar Ali College" },
              { year: "2005 - 2018", degree: "Play Group - Secondary School Certificate", institution: "Bishanandi Hazi Khokan High School" },
            ].map((edu, index) => (
              <motion.li key={index} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
                <div className="timeline-middle ml-4">
                  <FaGraduationCap className="text-3xl text-white mr-2" />
                </div>
                <div className="timeline-start text-white md:text-end mb-10">
                  <h4 className="text-white font-semibold">{edu.year}</h4>
                  <p>{edu.degree}</p>
                  <p>{edu.institution}</p>
                </div>
                <hr />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Experience Section */}
        <motion.div className="w-full" variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
          <div className="my-12 flex items-center gap-2 justify-center">
            <h2 className="text-white text-2xl font-semibold">Experience</h2>
            <FaBuromobelexperte className="text-4xl text-[#FF6B35]" />
          </div>

          <motion.p className="text-white mt-4" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }}>
            I am a dynamic junior MERN stack web developer actively engaged in leveraging
            cutting-edge technologies to deliver impactful web solutions. Over the past
            one and a half years, I have successfully conceived and executed multiple
            projects, showcasing my expertise in the MERN stack. My project portfolio,
            detailed above, demonstrates a commitment to delivering high-quality and
            innovative web applications.
            <br />
            <br />
            While my primary focus lies in frontend technologies, I am actively expanding
            my skill set to encompass backend development, thereby ensuring a
            comprehensive understanding of the entire development stack. This journey
            involves continuous learning and a dedicated effort to hone my proficiency in
            backend technologies within the MERN stack.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default ExpAndEdu;
