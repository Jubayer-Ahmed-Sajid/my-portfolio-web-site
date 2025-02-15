import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { MdLocationOn, MdOutlineMailOutline } from "react-icons/md";

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
    <div id="contacts" className="overflow-hidden py-8">
      {/* Heading */}
      <motion.h2
        className="text-white text-3xl text-center"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        Contact
      </motion.h2>

      <motion.hr
        className="w-2/3 mt-2 mb-8 mx-auto h-[3px] bg-gradient-to-r from-[#FF6B35]/10 via-[#FF6B35]/60 to-[#FF6B35] border-none"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      />

      <motion.div
        className="px-6 mx-4 py-8 rounded-xl lg:flex items-center justify-around"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        {/* Contact Info */}
        <motion.div
          className="text-white lg:w-1/2 space-y-5"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            Contact Info
          </h2>
          <div className="flex gap-2 items-center">
            <FaWhatsapp className="text-[#FF6B35] text-3xl" />
            <p>+8801843278491</p>
          </div>
          <div className="flex gap-2 items-center">
            <MdOutlineMailOutline className="text-[#FF6B35] text-3xl" />
            <p>sajid661aca@gmail.com</p>
          </div>
          <div className="flex gap-2 items-center">
            <MdLocationOn className="text-[#FF6B35] text-3xl" />
            <p>
              Dhaka-1000, Hajji Muhammad Mohssin Hall,
              <br /> University of Dhaka
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="lg:w-1/2"
          ref={form}
          onSubmit={sendEmail}
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-white lg:mt-0 mt-6 mb-4">
            Send Message
          </h2>
          <label className="text-white">Name</label>
          <br />
          <input
            type="text"
            name="user_name"
            placeholder="Type your Name"
            className="bg-white input mb-2 input-bordered w-full"
          />
          <br />
          <label className="text-white">Email</label>
          <br />
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email"
            className="input mb-2 bg-white input-bordered w-full"
          />
          <br />
          <label className="text-white">Message</label>
          <br />
          <textarea
            name="message"
            placeholder="Enter your Message"
            className="textarea bg-white mb-2 w-full"
          />
          <br />
          <input
            className="btn text-white bg-gradient-to-r from-[#FF6B35] to-[#6A0572] hover:from-[#6A0572] hover:to-[#FF6B35] transition-all duration-300 border-none px-8 w-full"
            type="submit"
            value="Send"
          />
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
