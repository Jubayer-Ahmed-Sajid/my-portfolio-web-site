import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import banner from "../../../assets/IMG-20240211-WA0025_5-removebg~2[1].png";

const achievementCards = [
  { value: "120+", label: "LeetCode" },
  { value: "330+", label: "Codeforces" },
  { value: "120+", label: "CodeChef" },
  { value: "1443 / 1157", label: "CodeChef max / Codeforces" },
];

const focusAreas = [
  "OOP in C#",
  "Design patterns & principles",
  "MySQL",
  "Networking & OS",
];

const socialLinks = [
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/jobayer-ahmed-sajid",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    link: "https://github.com/Jubayer-Ahmed-Sajid",
  },
];

const Banner = () => {
  const downloadResume = () => {
    const pdfUrl = "resume_of_Jobayer.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume_of_Jobayer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col items-center gap-14 px-6 py-16 lg:flex-row lg:px-8 lg:py-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className="w-full flex-1"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.4em] portfolio-section-label">
          Software Engineer
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Building dependable software with a problem-solving mindset.
        </h1>
        <div className="mt-6 text-xl font-semibold portfolio-accent sm:text-2xl">
          <TypeAnimation
            sequence={[
              "Competitive programmer.",
              1000,
              "C# and ASP.NET MVC builder.",
              1000,
              "OOP, design patterns, and systems fundamentals.",
              1000,
              "Focused on reliability, clarity, and delivery.",
              1000,
            ]}
            wrapper="span"
            speed={55}
            repeat={Infinity}
          />
        </div>
        <p className="mt-6 max-w-2xl text-base leading-8 portfolio-muted sm:text-lg">
          I design and build web applications with a strong focus on algorithmic
          thinking, object-oriented design, and practical system fundamentals.
          My competitive programming routine includes 120+ LeetCode problems,
          330+ Codeforces problems, and 120+ CodeChef problems, with a
          CodeChef rating of 1443 max and Codeforces 1157.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {achievementCards.map((card) => (
            <div
              key={card.label}
              className="portfolio-card-soft p-4 backdrop-blur-sm"
            >
              <p className="text-2xl font-semibold text-white">{card.value}</p>
              <p className="mt-1 text-sm portfolio-muted">{card.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {focusAreas.map((item) => (
            <span
              key={item}
              className="portfolio-pill"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <motion.button
            onClick={downloadResume}
            className="portfolio-button inline-flex items-center justify-center gap-2 px-6 py-3 shadow-lg shadow-black/20"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaDownload /> Download Resume
          </motion.button>
          <motion.a
            href="#myWorks"
            className="portfolio-button-ghost inline-flex items-center justify-center px-6 py-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.a>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <span className="text-sm uppercase tracking-[0.35em] text-slate-500">
            Connect
          </span>
          <div className="flex gap-3 text-xl">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                className="portfolio-card-soft flex h-11 w-11 items-center justify-center text-slate-200 transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                href={social.link}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full flex-1"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative mx-auto max-w-md">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[rgba(199,163,107,0.18)] via-[rgba(143,162,155,0.08)] to-transparent blur-3xl" />
          <div className="portfolio-card relative overflow-hidden p-4 backdrop-blur-xl">
            <img
              src={banner}
              alt="Jobayer Ahmed Sajid portrait"
              className="h-[460px] w-full rounded-[1.5rem] object-cover object-top"
            />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="portfolio-card-soft p-4">
                <p className="text-xs uppercase tracking-[0.35em] portfolio-section-label">
                  Focus
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Problem solving first
                </p>
                <p className="mt-1 text-sm leading-6 portfolio-muted">
                  Algorithms, debugging, and clear reasoning.
                </p>
              </div>
              <div className="portfolio-card-soft p-4">
                <p className="text-xs uppercase tracking-[0.35em] portfolio-section-label">
                  System work
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  ASP.NET MVC inventory app
                </p>
                <p className="mt-1 text-sm leading-6 portfolio-muted">
                  C# OOP, design, data flow, and architecture practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
