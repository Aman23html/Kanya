// src/pages/Bill.jsx
import React from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import qr from "../../assets/qr.png"; // replace with actual QR image

const Bill = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const donorData = location.state?.donorData;

  if (!donorData) {
    return <div className="text-center py-20 text-gray-600">No donation data found.</div>;
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#e6faf6] via-[#f0fdfa] to-white min-h-screen flex items-center justify-center py-20 px-6">
      {/* Gradient background layers */}
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

      {/* Summary Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-10 max-w-2xl w-full text-center"
      >
        <h2 className="text-3xl font-bold text-[#004f4f] mb-8">Donation Summary</h2>

        <div className="space-y-4 text-gray-700 text-left mb-10">
          {Object.entries(donorData).map(([key, val]) => (
            <p key={key}>
              <span className="font-semibold capitalize">{key}:</span> {val || "—"}
            </p>
          ))}
        </div>

        <div className="flex flex-col items-center mb-10">
          <img
            src={qr}
            alt="Payment QR"
            className="w-48 h-48 rounded-2xl shadow-lg hover:shadow-[0_0_25px_#00c9a7] transition-all duration-500"
          />
          <p className="mt-4 text-gray-600">Scan this QR to pay ₹{donorData.amount}</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/success")}
          className="bg-gradient-to-r from-[#00c9a7] to-[#00bfa6] text-white py-3 px-10 rounded-full font-semibold shadow-lg hover:shadow-[0_0_25px_#00c9a7]"
        >
          Pay Now
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Bill;
