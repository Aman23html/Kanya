// src/pages/Donate.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import test from "../assets/test.png";

const purposes = [
  { title: "Girl Child Education", desc: "Help a girl receive quality education.", color: "from-[#fef6e4] to-[#fff]" },
  { title: "Women Empowerment", desc: "Support skill training & self-reliance programs.", color: "from-[#e6faf6] to-[#fff]" },
  { title: "Tribal Welfare", desc: "Preserve culture & uplift tribal communities.", color: "from-[#fefce8] to-[#fff]" },
];

const Donate = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#e6faf6] via-[#f0fdfa] to-white min-h-screen">
      {/* Animated Gradient Blobs */}
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 left-0 w-[25rem] h-[25rem] bg-gradient-to-tr from-[#99f6e4] to-[#a7f3d0] blur-[120px] opacity-40 rounded-full"
      />
      <motion.div
        animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-tr from-[#c7f9cc] to-[#e0f7fa] blur-[150px] opacity-50 rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl sm:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#006a6a] to-[#00c9a7] mb-16"
        >
          Choose a Cause to Support
        </motion.h1>

        {/* Purpose Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {purposes.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`p-8 rounded-3xl bg-gradient-to-br ${p.color} shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.25)] transition-all`}
            >
              <img src={test} alt={p.title} className="rounded-2xl mb-6 shadow-md" />
              <h3 className="text-2xl font-semibold text-[#004f4f] mb-3">{p.title}</h3>
              <p className="text-gray-700 mb-6">{p.desc}</p>
              <button
                onClick={() => navigate("/donerdata", { state: { purpose: p.title } })}
                className="bg-gradient-to-r from-[#00c9a7] to-[#00bfa6] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-[0_0_20px_#00c9a7]"
              >
                Donate Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Donate;
