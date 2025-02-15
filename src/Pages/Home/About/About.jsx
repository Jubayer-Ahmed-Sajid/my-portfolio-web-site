import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const { top, bottom } = aboutSection.getBoundingClientRect();
        setIsSticky(top < 100 && bottom > window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden"
    >
      <h2 className="text-4xl text-center mb-2 font-bold text-white">About Me</h2>
      <motion.hr
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        className="w-2/3 mx-auto h-[3px] bg-gradient-to-r from-[#FF6B35]/10 via-[#FF6B35]/60 to-[#FF6B35] border-none"
      />
      <section
        id="about"
        className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`lg:sticky top-24 transition-all duration-300 ${isSticky ? "lg:top-24" : ""}`}
        >
          <img
            src="https://i.ibb.co/mV7fNncK/rear-view-programmer-working-all-night-long-min.jpg"
            alt="Programming at Night"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.div
          className="text-white space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-300">
            I am a passionate{" "}
            <span className="text-[#FF6B35] font-semibold">Full-Stack Web Developer</span>{" "}
            and{" "}
            <span className="text-[#FF6B35] font-semibold">Competitive Programmer</span>{" "}
            with expertise in building scalable web applications and solving complex algorithmic challenges.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-[#FF6B35]">💻 Programming Skills</h3>
            <ul className="space-y-3">
              {[
                "Full-Stack Development: MERN Stack (MongoDB, Express.js, React.js, Node.js)",
                "Frontend: React.js, Next.js, Tailwind CSS, Redux",
                "Backend: Node.js, Express.js, JWT Authentication, API Development",
                "Database: MongoDB (Mongoose)",
                "Programming & DSA: C++, JavaScript (Solving problems on Codeforces & CodeChef)",
                "Tools & Deployment: Git, GitHub, Vercel, Firebase, Stripe Integration",
              ].map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-[#FF6B35] text-2xl">✔</span>
                  <p>{skill}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;