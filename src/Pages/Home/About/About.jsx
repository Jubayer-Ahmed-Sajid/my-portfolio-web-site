import { motion } from "framer-motion";

const engineeringHighlights = [
  {
    title: "Competitive programming",
    value: "570+ problems",
    detail: "120+ LeetCode, 330+ Codeforces, and 120+ CodeChef solutions.",
  },
  {
    title: "Computer science foundations",
    value: "OOP, DB, OS",
    detail: "Design patterns, design principles, networking, and MySQL.",
  },
  {
    title: "Applied software design",
    value: "C# + ASP.NET MVC",
    detail: "Built an inventory management system with layered architecture.",
  },
];

const studyAreas = [
  "Object-oriented programming in C#",
  "Design patterns and design principles",
  "MySQL and data modeling",
  "Networking fundamentals",
  "Operating systems",
  "ASP.NET MVC architecture",
];

const About = () => {
  return (
    <motion.section
      id="about"
      className="mx-auto max-w-7xl px-6 py-16 lg:py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] portfolio-section-label">
          About
        </p>
        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Engineering profile built on problem solving.
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
          I am a software engineer who enjoys turning uncertain requirements into
          reliable software. My approach combines competitive programming, clean
          object-oriented design, and practical system fundamentals so I can
          reason about code, data, and architecture with the same discipline.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 p-4 shadow-2xl shadow-slate-950/40"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://i.ibb.co/mV7fNncK/rear-view-programmer-working-all-night-long-min.jpg"
            alt="Programming at Night"
            className="h-full w-full rounded-[1.5rem] object-cover"
          />
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
              What I optimize for
            </p>
            <p className="mt-2 text-lg font-semibold text-white">
              Clear problem decomposition and maintainable code.
            </p>
          </div>
        </motion.div>

        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            {engineeringHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <p className="text-xs uppercase tracking-[0.35em] portfolio-section-label">
                  {item.title}
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  {item.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-white">
              What I study deeply
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {studyAreas.map((item) => (
                <span
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;