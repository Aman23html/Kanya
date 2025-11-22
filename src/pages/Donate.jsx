// src/pages/Donate.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import test from "../assets/test.png";
import glimpse3 from "../assets/Younggirl/Young3.webp";
import Mother3 from "../assets/Mother/Mother3.webp";
import Trible3 from "../assets/Trible/Trible3.webp"; 
import Vol2 from "../assets/Voluenteer/Vol2.webp";
import Legal3 from "../assets/Legal/Legal3.webp";
import food3 from "../assets/Food/F3.webp";
import Finance4 from "../assets/Finance/Finance4.webp";
import Env4 from "../assets/Environment/Env4.webp";

const purposes = [
  {
    title: "Young Girls Empowerment",
    desc: "Enable life skills, self-confidence, and leadership in young girls.",
    img: glimpse3
  },
  {
    title: "Tribal Girl Children Care",
    desc: "Support care and opportunities for tribal girl children.",
    img: Trible3
  },
  {
    title: "Food, Clothing, Shelter & Medical Help",
    desc: "Provide basic needs and medical help for those in need.",
    img: food3
  },
  {
    title: "Environment Protection",
    desc: "Promote sustainable environmental actions and eco-friendly programs.",
    img: Env4
  },
  {
    title: "Legal Help",
    desc: "Free legal aid for vulnerable individuals facing injustice.",
    img: Legal3
  },
  {
    title: "Financial Independence",
    desc: "Help women and families achieve financial self-reliance through training.",  
    img: Finance4
  },
  {
    title: "Volunteer Engagement Program",
    desc: "Join hands in social work and development initiatives as a volunteer.",
    img: Vol2
  },
  {
    title: "Mothers’ Wellness Care",
    desc: "Care for the well-being and health of mothers in need.",
    img: Mother3
  }
];

const cardVariants = {
  offscreen: { opacity: 0, y: 50, scale: 0.95 },
  onscreen: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", bounce: 0.25, duration: 1 }
  }
};

const Donate = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 overflow-hidden mt-30 sm:mt-20 lg:mt-10">
      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-6 left-6 w-56 h-56 sm:w-72 sm:h-72 bg-emerald-200/40 blur-[90px] sm:blur-[110px] rounded-full opacity-70"
      />

      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-6 right-6 w-60 h-60 sm:w-80 sm:h-80 bg-teal-300/40 blur-[100px] sm:blur-[120px] rounded-full opacity-70"
      />

      {/* Header Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-teal-700 via-emerald-600 to-green-500 bg-clip-text text-transparent drop-shadow-sm"
        >
          Support a Cause
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-center text-gray-700 mt-4 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto px-3"
        >
          Choose a program close to your heart and empower lives with your contribution.
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 mt-14 pb-20 px-4 sm:px-0">
          {purposes.map((p, i) => (
            <motion.div
              key={i}
              className="relative bg-white shadow-lg rounded-3xl p-5 sm:p-6 border border-teal-100 backdrop-blur-xl transition-all hover:shadow-2xl hover:-translate-y-2 duration-300"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={p.img}
                alt={p.title}
                className="rounded-xl h-32 sm:h-36 w-full object-cover shadow-md mb-4"
              />

              <h3 className="text-lg sm:text-xl font-semibold text-teal-700 mb-2 text-center">
                {p.title}
              </h3>

              <p className="text-gray-700 text-sm leading-snug text-center min-h-[50px] sm:min-h-[60px] px-1">
                {p.desc}
              </p>

              <motion.button
                onClick={() => navigate("/donerdata", { state: { purpose: p.title } })}
                whileHover={{ scale: 1.07 }}
                className="mt-6 w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2 sm:py-2.5 rounded-full font-semibold tracking-wide shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                Donate Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Donate;
