import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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

  const handleDonateClick = () => {
    // Navigate to DonorData page with donation purpose and amount
    navigate("/donerdata", { state: { purpose: "Food Relief Fund", amount } });
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
      <section className="relative min-h-[90vh] sm:min-h-screen w-full overflow-hidden select-none">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          loop
          grabCursor
          speed={1200}
          pagination={{ clickable: true }}
          navigation
          className="h-full w-full z-0"
        >
          {[hero1, hero2, hero3].map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-screen w-full">
                <img
                  src={img}
                  alt={`hero-${i}`}
                  className="object-cover w-full h-full animate-[smoothZoom_20s_ease-in-out_infinite]"
                  style={{ filter: "brightness(0.85) contrast(1.05)" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80 z-10" />

        {/* ===== Text Layer ===== */}
        <motion.div
          initial="hidden"
          animate="show"
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4 sm:px-6 md:px-12"
        >
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] max-w-5xl"
          >
            KANYA JAGRITI FOUNDATION
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl italic text-[#ffe8ee] drop-shadow-md max-w-2xl"
          >
            “Breaking Barriers, Building Dreams…”
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-5"
          >
            <Link
              to="/donate"
              className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#00b3a4] hover:bg-[#009688] text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105"
            >
              Donate Now
            </Link>
            <a
              href="#about"
              className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-white/70 hover:bg-white hover:text-[#006666] font-semibold transition duration-300"
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
          className="absolute bottom-2 sm:bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 px-4 sm:px-6 md:px-8 py-5 sm:py-6 w-[92%] sm:w-[80%] md:w-[60%] z-30"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#007c7c] mb-3 sm:mb-4 text-left">
            Food Relief Fund
          </h3>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 justify-between items-center">
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start grow">
              {presetAmounts
                .slice(0, window.innerWidth < 640 ? 3 : 6)
                .map((val) => (
                  <button
                    key={val}
                    onClick={() => setAmount(val)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border text-sm sm:text-base font-semibold transition-all ${
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
                placeholder="Custom"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-gray-300 text-gray-700 text-sm sm:text-base w-28 sm:w-36 focus:outline-none focus:border-[#00b3a4]"
              />
            </div>

            <button
              onClick={handleDonateClick}
              className="px-6 sm:px-8 py-2 sm:py-2.5 rounded-lg bg-[#00b3a4] text-white font-semibold hover:bg-[#009688] transition-all shadow-md"
            >
              Donate
            </button>
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
            className="absolute w-24 sm:w-32 h-24 sm:h-32 bg-[#ff9ab5]/25 rounded-full blur-3xl"
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
            className="absolute bottom-0 right-0 w-28 sm:w-40 h-28 sm:h-40 bg-[#ffd8a1]/25 rounded-full blur-3xl"
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
