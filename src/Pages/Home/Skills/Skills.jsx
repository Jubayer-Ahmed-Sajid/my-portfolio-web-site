import { motion } from "framer-motion";

const competencyGroups = [
  {
    title: "Problem solving",
    summary: "LeetCode, Codeforces, CodeChef",
    items: [
      "Algorithm design and complexity analysis",
      "Debugging under pressure and optimizing solutions",
      "Consistent practice across competitive platforms",
    ],
  },
  {
    title: "Object-oriented design",
    summary: "C# OOP, design patterns, design principles",
    items: [
      "Encapsulation, inheritance, polymorphism, and abstraction",
      "Writing reusable code with clean responsibilities",
      "Studied commonly used design principles and patterns",
    ],
  },
  {
    title: "Backend and data",
    summary: "ASP.NET MVC, MySQL, inventory workflows",
    items: [
      "Built an inventory management system in ASP.NET MVC",
      "Relational thinking and practical database usage",
      "CRUD flows, validations, and structured data handling",
    ],
  },
  {
    title: "Systems fundamentals",
    summary: "Networking, operating systems, Git",
    items: [
      "Client-server communication and request flow",
      "Operating system basics that help with practical debugging",
      "Version control hygiene and delivery discipline",
    ],
  },
  {
    title: "Web delivery",
    summary: "React, Node.js, Express, Tailwind",
    items: [
      "Turn ideas into clean user interfaces and working products",
      "Component-driven development and API integration",
      "Responsive layouts with a careful UI finish",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] portfolio-section-label">
          Core competencies
        </p>
        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Skills organized around engineering discipline.
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
          My toolkit is structured around the way I solve problems: understand the
          constraints, choose the right abstraction, and implement cleanly.
        </p>
      </div>

      <div className="mt-12 rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 text-slate-300 shadow-2xl shadow-slate-950/40">
        <p className="text-lg leading-8">
          The tools change, but the discipline stays the same. I care about
          reasoning, correctness, and code that can grow without losing clarity.
        </p>
      </div>

      <motion.div
        className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: false }}
        variants={containerVariants}
      >
        {competencyGroups.map((group) => (
          <motion.div
            key={group.title}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            variants={cardVariants}
            whileHover={{ y: -4 }}
          >
            <p className="text-xs uppercase tracking-[0.35em] portfolio-section-label">
              {group.title}
            </p>
            <p className="mt-3 text-lg font-semibold text-white">
              {group.summary}
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c7a36b]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
