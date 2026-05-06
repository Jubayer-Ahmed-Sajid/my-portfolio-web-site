import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { MdLocationOn, MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lzgtoes",
        "template_ipthqvd",
        form.current,
        "5UJTYFKudy-2MtPvP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contacts" className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] portfolio-section-label">
          Contact
        </p>
        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Open to engineering roles and focused project work.
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
          If you need someone who can solve problems, reason about systems, and
          build dependable web software, send me a message.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-2xl shadow-slate-950/40"
          variants={{
            hidden: { opacity: 0, x: -36 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-white">Contact details</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            I’m open to software engineering opportunities, problem-solving
            discussions, and collaborations that care about clarity.
          </p>
          <div className="mt-6 space-y-5 text-slate-300">
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-3xl portfolio-accent" />
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                  WhatsApp
                </p>
                <p className="mt-1">+8801843278491</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MdOutlineMailOutline className="text-3xl portfolio-accent" />
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                  Email
                </p>
                <p className="mt-1">sajid661aca@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MdLocationOn className="text-3xl portfolio-accent" />
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                  Location
                </p>
                <p className="mt-1">
                  Dhaka-1000, Hajji Muhammad Mohssin Hall,
                  <br /> University of Dhaka
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-2xl shadow-slate-950/40"
          ref={form}
          onSubmit={sendEmail}
          variants={{
            hidden: { opacity: 0, x: 36 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-white">Send a message</h3>
          <div className="mt-6 space-y-4">
            <label className="block text-sm font-medium text-slate-300">
              Name
              <input
                type="text"
                name="user_name"
                placeholder="Type your name"
                className="mt-2 input input-bordered w-full border-slate-700 bg-slate-900/70 text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
              />
            </label>
            <label className="block text-sm font-medium text-slate-300">
              Email
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                className="mt-2 input input-bordered w-full border-slate-700 bg-slate-900/70 text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
              />
            </label>
            <label className="block text-sm font-medium text-slate-300">
              Message
              <textarea
                name="message"
                placeholder="Tell me about your project or role"
                className="mt-2 textarea textarea-bordered h-36 w-full border-slate-700 bg-slate-900/70 text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
              />
            </label>
            <input
              className="portfolio-button mt-2 w-full border-none text-slate-950 transition-transform"
              type="submit"
              value="Send Message"
            />
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
