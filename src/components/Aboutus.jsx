import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/About1.webp"; // 🖼️ Add your about section image here

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
    <section id="about" className="py-20 sm:py-24 bg-[#f9fafb] relative overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#ffb6b6]/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#008080]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* ===== Text Section ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold text-[#008080] mb-5"
          >
            About Us
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="text-base sm:text-lg leading-relaxed text-gray-700 mb-5"
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
            We focus on <strong>skill development</strong>, <strong>health awareness</strong>,{" "}
            <strong>legal literacy</strong>, and <strong>education</strong> to help women
            from underserved communities gain confidence and self-reliance. Through our
            community-driven initiatives, we aim to nurture leadership, break social
            barriers, and inspire lasting transformation.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-8"
          >
            <a
              href="/projects"
              className="inline-block px-8 py-3 rounded-full bg-[#FF7F50] hover:bg-[#ff9269] text-white font-semibold shadow-md transition-transform duration-300 hover:scale-105"
            >
              Explore Our Work
            </a>
          </motion.div>
        </motion.div>

        {/* ===== Image Section with Subtle Animation ===== */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={aboutImg}
              alt="About Kanya Jagriti Foundation"
              className="w-full h-[380px] object-cover"
            />
            {/* Overlay Glow */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Aboutus;
