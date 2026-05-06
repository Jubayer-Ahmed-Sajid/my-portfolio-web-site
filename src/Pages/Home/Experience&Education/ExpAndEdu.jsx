import { motion } from "framer-motion";
import { FaCode, FaGraduationCap } from "react-icons/fa";

const education = [
  {
    year: "2021 - Present",
    degree: "Bachelor of Chinese Language and Culture",
    institution: "University Of Dhaka",
  },
  {
    year: "2018 - 2020",
    degree: "Higher Secondary School Certificate",
    institution: "Government Safar Ali College",
  },
  {
    year: "2005 - 2018",
    degree: "Play Group - Secondary School Certificate",
    institution: "Bishanandi Hazi Khokan High School",
  },
];

const engineeringMilestones = [
  {
    title: "Competitive programming",
    detail:
      "Solved 120+ LeetCode, 330+ Codeforces, and 120+ CodeChef problems to sharpen problem decomposition.",
  },
  {
    title: "Object-oriented programming",
    detail:
      "Studied OOP properly in C# along with design patterns and design principles.",
  },
  {
    title: "Systems fundamentals",
    detail:
      "Covered MySQL, networking, and operating systems to build stronger system intuition.",
  },
  {
    title: "Applied architecture",
    detail:
      "Built an inventory management system in ASP.NET MVC architecture.",
  },
];

const ExpAndEdu = () => {
  return (
    <section id="education" className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] portfolio-section-label">
          Education & foundation
        </p>
        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Technical depth that supports the engineering work.
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
          My background combines formal education with a deliberate effort to
          study the foundations that make software robust: data structures,
          design, databases, networking, and operating systems.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <motion.div
          className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-2xl shadow-slate-950/40"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="flex items-center justify-center gap-3">
            <h3 className="text-2xl font-semibold text-white">Education</h3>
            <FaGraduationCap className="text-3xl portfolio-accent" />
          </div>

          <div className="mt-8 space-y-4">
            {education.map((item) => (
              <div
                key={item.year}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <p className="text-sm font-semibold portfolio-accent">{item.year}</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  {item.degree}
                </p>
                <p className="mt-1 text-sm text-slate-300">{item.institution}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-2xl shadow-slate-950/40"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="flex items-center justify-center gap-3">
            <h3 className="text-2xl font-semibold text-white">Engineering growth</h3>
            <FaCode className="text-3xl portfolio-accent" />
          </div>

          <div className="mt-8 space-y-4">
            {engineeringMilestones.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <p className="text-sm font-semibold portfolio-accent">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpAndEdu;
