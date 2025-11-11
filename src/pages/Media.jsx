import React from "react";
import { motion } from "framer-motion";
import test from "../assets/test.png"; // replace with your actual images or 3D renders

const mediaData = [
  {
    title: "Young Girls Empowerment",
    desc: "Nurturing, educating, and empowering adolescent girls and young women across rural Jharkhand.",
    images: [test, test, test],
    color: "from-[#fef6e4] to-[#fff]",
  },
  {
    title: "Tribal Girl Children Care",
    desc: "Preserving culture while offering education, nutrition, and empowerment for tribal girl children.",
    images: [test, test, test],
    color: "from-[#e6faf6] to-[#fff]",
  },
  {
    title: "Financial Independence",
    desc: "Building confident, entrepreneurially skilled women through Arthik Shakti.",
    images: [test, test, test],
    color: "from-[#fefce8] to-[#fff]",
  },
];

const Media = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#e6faf6] via-[#f0fdfa] to-white">
      {/* ===== Animated linear Background Layers ===== */}
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-linear-to-tr from-[#99f6e4] to-[#a7f3d0] blur-[120px] opacity-40 rounded-full"
      />
      <motion.div
        animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[36rem] h-[36rem] bg-linear-to-tr from-[#c7f9cc] to-[#e0f7fa] blur-[150px] opacity-50 rounded-full"
      />

      {/* ===== Hero Section (Top Visual Intro) ===== */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-28 px-8">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-linear-to-r from-[#006a6a] to-[#00c9a7] drop-shadow-lg">
            Empowering <span className="text-[#00bfa6]">Communities</span> Through Compassion & Change
          </h1>
          <p className="text-gray-700 text-lg mt-6 max-w-xl leading-relaxed">
            Discover how technology and compassion unite — each initiative tells a story of courage,
            empowerment, and purpose.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-linear-to-r from-[#00c9a7] to-[#00bfa6] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-[0_0_25px_#00c9a7] transition-all duration-500"
          >
            Explore Media
          </motion.button>
        </motion.div>

        {/* Right Visual Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          whileHover={{ rotateY: 10, rotateX: -5, scale: 1.02 }}
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
        >
          <div className="relative">
            <img
              src={test}
              alt="3D visual"
              className="w-[480px] h-auto rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.2)] object-cover"
            />
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute inset-0 bg-linear-to-tr from-[#00bfa6]/30 to-transparent rounded-[2rem]"
            />
          </div>
        </motion.div>
      </div>

      {/* ===== Media Section (Cards + Gallery) ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-32 space-y-28">
        {mediaData.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`rounded-[2.5rem] p-12 bg-linear-to-br ${section.color} shadow-[0_15px_50px_-10px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_70px_-10px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-700`}
          >
            {/* Title */}
            <div className="text-center mb-10">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#004f4f] mb-3 tracking-wide">
                {section.title}
              </h3>
              <p className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
                {section.desc}
              </p>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {section.images.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.06,
                    rotateX: -3,
                    rotateY: 3,
                    boxShadow: "0px 20px 40px rgba(0,0,0,0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="relative group rounded-2xl overflow-hidden bg-white/40 border border-white/40 shadow-lg"
                >
                  <img
                    src={img}
                    alt="project"
                    className="w-full h-72 object-cover transform group-hover:scale-110 transition-all duration-[1200ms]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center transition-all duration-700">
                    <p className="text-white text-sm sm:text-base mb-6 px-4 text-center tracking-wide">
                      Empowering lives through action and awareness.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Media;
