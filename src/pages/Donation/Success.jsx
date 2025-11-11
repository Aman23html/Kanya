// src/pages/Success.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#e6faf6] via-[#f0fdfa] to-white text-center px-6">
      <motion.div
        animate={{ scale: [0.8, 1.1, 1] }}
        transition={{ duration: 0.8 }}
        className="w-24 h-24 bg-gradient-to-r from-[#00c9a7] to-[#00bfa6] rounded-full flex items-center justify-center shadow-xl"
      >
        <span className="text-white text-5xl font-bold">✓</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl font-bold text-[#004f4f] mt-8"
      >
        Thank You for Your Generosity!
      </motion.h2>

      <p className="text-gray-700 mt-4 mb-10 max-w-lg">
        Your contribution helps us continue empowering girls and women across rural Jharkhand.
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => navigate("/donate")}
        className="bg-gradient-to-r from-[#00c9a7] to-[#00bfa6] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-[0_0_25px_#00c9a7]"
      >
        Back to Donate
      </motion.button>
    </section>
  );
};

export default Success;
