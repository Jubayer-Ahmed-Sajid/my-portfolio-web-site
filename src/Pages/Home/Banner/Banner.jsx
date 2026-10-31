import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodeforces, SiLeetcode, SiCodechef } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import banner from "../../../assets/IMG-20240211-WA0025_5-removebg_2_1_-removebg-preview.png";

const achievementCards = [
  {
    value: "150+",
    label: "LeetCode",
    link: "https://leetcode.com/",
    icon: <SiLeetcode className="text-[#FFA116]" />,
  },
  {
    value: "330+",
    label: "Codeforces",
    link: "https://codeforces.com/profile/Jubayer-Ahmed-Sajid",
    icon: <SiCodeforces className="text-[#1F8ACB]" />,
  },
  {
    value: "120+",
    label: "CodeChef",
    link: "https://www.codechef.com/",
    icon: <SiCodechef className="text-[#5B4638]" />,
  },
  {
    value: "1443 / 1157",
    label: "CodeChef / CF rating",
    link: "https://codeforces.com/profile/Jubayer-Ahmed-Sajid",
  },
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
  {
    icon: <SiCodeforces />,
    label: "Codeforces",
    link: "https://codeforces.com/profile/Jubayer-Ahmed-Sajid",
  },
  {
    icon: <SiLeetcode />,
    label: "LeetCode",
    link: "https://leetcode.com/",
  },
];

const Banner = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume_of_Jobayer.pdf";
    link.download = "resume_of_Jobayer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col items-center justify-center gap-10 px-6 py-8 sm:py-12 lg:flex-row lg:gap-14 lg:px-8 lg:py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Cover Photo: Visible near top on mobile, right column on desktop */}
      <motion.div
        className="w-full order-1 lg:order-2 lg:w-[380px] shrink-0"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative mx-auto max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[rgba(199,163,107,0.22)] via-[rgba(143,162,155,0.12)] to-transparent blur-2xl" />
          <div className="portfolio-card relative overflow-hidden p-3.5 backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[1.35rem] bg-slate-900/60">
              <img
                src={banner}
                alt="Jobayer Ahmed Sajid portrait"
                className="h-[320px] sm:h-[360px] lg:h-[390px] w-full object-cover object-top transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent p-4 pt-10">
                <p className="text-base font-bold text-white">Jobayer Ahmed Sajid</p>
                <p className="text-xs font-medium text-[#c7a36b]">
                  Software Engineer • Full-Stack & CP
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs">
              <span className="text-slate-400">Shipped</span>
              <span className="font-semibold text-white">ZiCraft (5,334 HSK Words)</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Text Content */}
      <motion.div
        className="w-full flex-1 order-2 lg:order-1"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <p className="text-xs font-semibold uppercase tracking-[0.35em] portfolio-section-label">
            Available for Engineering Roles
          </p>
        </div>

        <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-5xl">
          Building dependable software with a problem-solving mindset.
        </h1>

        <div className="mt-4 text-lg font-semibold portfolio-accent sm:text-xl">
          <TypeAnimation
            sequence={[
              "Competitive programmer (600+ solved).",
              1000,
              "Shipped ZiCraft, live freemium HSK learning platform.",
              1000,
              "Full-stack MERN & Next.js builder.",
              1000,
              "OOP in C#, design patterns, & layered architecture.",
              1000,
              "Focused on reliability, correctness, & delivery.",
              1000,
            ]}
            wrapper="span"
            speed={55}
            repeat={Infinity}
          />
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-7 portfolio-muted sm:text-base">
          I design and build web software with a strong foundation in algorithmic thinking,
          object-oriented design, and practical system fundamentals. Combining my background
          in linguistics with engineering, I shipped <strong>ZiCraft</strong>, a live HSK vocabulary
          platform serving thousands of learners.
        </p>

        {/* Achievement Badges */}
        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {achievementCards.map((card) => {
            const Content = (
              <div className="portfolio-card-soft p-3 backdrop-blur-sm transition-transform hover:-translate-y-0.5">
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-white">{card.value}</p>
                  {card.icon && <span className="text-lg">{card.icon}</span>}
                </div>
                <p className="mt-0.5 text-xs portfolio-muted">{card.label}</p>
              </div>
            );

            return card.link ? (
              <a
                key={card.label}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${card.label} profile`}
                className="block"
              >
                {Content}
              </a>
            ) : (
              <div key={card.label}>{Content}</div>
            );
          })}
        </div>

        {/* Focus Areas */}
        <div className="mt-5 flex flex-wrap gap-2">
          {focusAreas.map((item) => (
            <span
              key={item}
              className="portfolio-pill text-xs py-1 px-3"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Action Buttons & Socials */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.button
              onClick={downloadResume}
              className="portfolio-button inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm shadow-lg shadow-black/20"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaDownload /> Download Resume
            </motion.button>
            <motion.a
              href="#myWorks"
              className="portfolio-button-ghost inline-flex items-center justify-center px-5 py-2.5 text-sm"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>
          </div>

          <div className="flex items-center gap-2 sm:ml-4 pt-2 sm:pt-0 border-t sm:border-t-0 sm:border-l border-white/10 sm:pl-4">
            <span className="text-xs uppercase tracking-wider text-slate-500 mr-1">
              Links
            </span>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                className="portfolio-card-soft flex h-9 w-9 items-center justify-center text-slate-200 transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
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
    </motion.div>
  );
};

export default Banner;
