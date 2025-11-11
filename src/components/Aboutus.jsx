import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/About1.webp";

const Aboutus = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="about"
      className="relative py-16 sm:py-20 md:py-24 bg-linear-to-b from-[#fefefe] to-[#f9fafb] overflow-hidden"
    >
      {/* Decorative Glows */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-[#ffb6b6]/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#008080]/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

      {/* ===== Heading ===== */}
      <div className="flex justify-center mb-10">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#008080] leading-snug"
        >
          About Us
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* ===== Image Section ===== */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center md:justify-end"
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 w-full sm:w-[90%] md:w-[85%]"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={aboutImg}
              alt="About Kanya Jagriti Foundation"
              className="w-full h-[250px] sm:h-80 md:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
          </motion.div>
        </motion.div>

        {/* ===== Text Section ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <motion.p
            variants={fadeUp}
            custom={1}
            className="text-base sm:text-lg leading-relaxed text-gray-700 mb-5 sm:mb-6"
          >
            Kanya Jagriti Foundation is a Jharkhand-based non-governmental organization
            devoted to empowering women and girls through education, awareness, and
            opportunity. Our mission is to create a more equitable and inclusive society
            where women can thrive with dignity and independence.
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-base sm:text-lg leading-relaxed text-gray-700"
          >
            We focus on <strong>skill development</strong>,{" "}
            <strong>health awareness</strong>, <strong>legal literacy</strong>, and{" "}
            <strong>education</strong> to help women from underserved communities gain
            confidence and self-reliance. Through our community-driven initiatives, we aim
            to nurture leadership, break social barriers, and inspire lasting transformation.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="mt-8 sm:mt-10">
            <a
              href="/projects"
              className="inline-block px-8 py-3 sm:px-10 sm:py-3.5 rounded-full bg-[#FF7F50] hover:bg-[#ff9269] text-white font-semibold shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              Explore Our Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Aboutus;
