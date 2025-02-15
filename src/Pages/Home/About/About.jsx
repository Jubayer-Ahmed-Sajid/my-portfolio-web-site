import { div } from "framer-motion/client";
import { useState, useEffect } from "react";

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
    <div>
      <h2 className="text-4xl text-center mb-2 font-bold text-white">About Me</h2>
      <hr className="w-2/3 mx-auto h-[3px] bg-gradient-to-r from-[#FF6B35]/10 via-[#FF6B35]/60 to-[#FF6B35] border-none" />
      <section
        id="about"
        className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Side: Image */}
        <div
          className={`lg:sticky top-24 transition-all duration-300 ${
            isSticky ? "lg:top-24" : ""
          }`}
        >
          <img
            src="https://i.ibb.co.com/mV7fNncK/rear-view-programmer-working-all-night-long-min.jpg"
            alt="Programming at Night"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side: About Me */}
        <div className="text-white space-y-6">
          <p className="text-lg text-gray-300">
            I am a passionate{" "}
            <span className="text-[#FF6B35] font-semibold">
              Full-Stack Web Developer
            </span>{" "}
            and{" "}
            <span className="text-[#FF6B35] font-semibold">
              Competitive Programmer
            </span>{" "}
            with expertise in building scalable web applications and solving
            complex algorithmic challenges.
          </p>

          {/* Skills Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#FF6B35]">
              💻 Programming Skills
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-[#FF6B35] text-2xl">✔</span>
                <p>
                  <strong>Full-Stack Development:</strong> MERN Stack (MongoDB,
                  Express.js, React.js, Node.js)
                </p>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FF6B35] text-2xl">✔</span>
                <p>
                  <strong>Frontend:</strong> React.js, Next.js, Tailwind CSS,
                  Redux
                </p>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FF6B35] text-2xl">✔</span>
                <p>
                  <strong>Backend:</strong> Node.js, Express.js, JWT
                  Authentication, API Development
                </p>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FF6B35] text-2xl">✔</span>
                <p>
                  <strong>Database:</strong> MongoDB (Mongoose)
                </p>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FF6B35] text-2xl">✔</span>
                <p>
                  <strong>Programming & DSA:</strong> C++, JavaScript (Solving
                  problems on Codeforces & CodeChef)
                </p>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FF6B35] text-2xl">✔</span>
                <p>
                  <strong>Tools & Deployment:</strong> Git, GitHub, Vercel,
                  Firebase, Stripe Integration
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
