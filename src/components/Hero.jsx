import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import hero1 from "../assets/Hero1.webp";
import hero2 from "../assets/Hero2.webp";
import hero3 from "../assets/Hero3.webp";

const Hero = () => {
  const [amount, setAmount] = useState("");
  const presetAmounts = [500, 1000, 2000, 5000, 7000, 10000];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.9, ease: "easeOut" },
    }),
  };

  return (
    <>
      <style>{`
        @keyframes smoothZoom {
          0% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.06) translate(1%, 1%); }
          100% { transform: scale(1) translate(0, 0); }
        }
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.7 !important;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #00b3a4 !important;
          transform: scale(1.2);
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: #fff !important;
          transition: all 0.3s ease;
          text-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          color: #00b3a4 !important;
          transform: scale(1.1);
        }
      `}</style>

      {/* ===== Hero Section ===== */}
      <section className="relative h-screen w-full overflow-hidden select-none">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          loop
          grabCursor={true}
          speed={1200}
          pagination={{ clickable: true }}
          navigation={true}
          effect="fade"
          className="h-full w-full z-0"
        >
          {[hero1, hero2, hero3].map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="h-full w-full bg-cover bg-center animate-[smoothZoom_20s_ease-in-out_infinite]"
                style={{
                  backgroundImage: `url(${img})`,
                  filter: "brightness(0.85) contrast(1.05)",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/30 to-black/70 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-linear(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0.4)_100%)] z-10 pointer-events-none" />

        {/* ===== Text Layer ===== */}
        <motion.div
          initial="hidden"
          animate="show"
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-6"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
          >
            KANYA JAGRITI FOUNDATION
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-4 text-lg sm:text-xl md:text-2xl italic text-[#ffe8ee] drop-shadow-md"
          >
            “Breaking Barriers, Building Dreams…”
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-10 flex flex-wrap justify-center gap-5"
          >
            <Link
              to="/donate"
              className="px-8 py-3 rounded-full bg-[#00b3a4] hover:bg-[#009688] text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105"
            >
              Donate Now
            </Link>
            <a
              href="#about"
              className="px-8 py-3 rounded-full border border-white/70 hover:bg-white hover:text-[#006666] font-semibold transition duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>

        {/* ===== Donation Box Overlay ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 px-8 py-6 w-[90%] sm:w-[75%] md:w-[60%] z-30"
        >
          <h3 className="text-xl md:text-2xl font-bold text-[#007c7c] mb-4 text-left">
            Food Relief Fund
          </h3>
          <div className="flex flex-wrap gap-3 justify-between items-center">
            <div className="flex flex-wrap gap-3 grow">
              {presetAmounts.map((val) => (
                <button
                  key={val}
                  onClick={() => setAmount(val)}
                  className={`px-4 py-2 rounded-lg border text-sm font-semibold transition-all ${
                    amount === val
                      ? "bg-[#00b3a4] text-white border-[#00b3a4]"
                      : "bg-gray-100 text-gray-800 border-gray-200 hover:bg-[#e0f7f5]"
                  }`}
                >
                  ₹{val}
                </button>
              ))}
              <input
                type="number"
                placeholder="Custom Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm w-36 focus:outline-none focus:border-[#00b3a4]"
              />
            </div>

            <Link
              to="/donate"
              className="px-8 py-2.5 rounded-lg bg-[#00b3a4] text-white font-semibold hover:bg-[#009688] transition-all shadow-md"
            >
              Donate
            </Link>
          </div>
        </motion.div>

        {/* ===== Ambient Floating Lights ===== */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="absolute w-32 h-32 bg-[#ff9ab5]/25 rounded-full blur-3xl"
            animate={{
              x: ["0%", "40%", "0%"],
              y: ["0%", "25%", "0%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-40 h-40 bg-[#ffd8a1]/25 rounded-full blur-3xl"
            animate={{
              x: ["0%", "-30%", "0%"],
              y: ["0%", "-25%", "0%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 24,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
