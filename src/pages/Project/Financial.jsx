import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    title: "Empowering Rural Entrepreneurs",
    desc: "Training and mentorship for women to start micro-businesses, self-help groups, and cottage industries.",
    img: "/assets/finance1.jpg",
    fallback:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437d2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Skill Development & Income Growth",
    desc: "Hands-on workshops on tailoring, handicrafts, food processing, and sustainable livelihoods.",
    img: "/assets/finance2.jpg",
    fallback:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Financial Literacy for Every Woman",
    desc: "Building awareness of savings, digital banking, and credit management for long-term stability.",
    img: "/assets/finance3.jpg",
    fallback:
      "https://images.unsplash.com/photo-1612831662375-295c1003d3ca?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Leadership & Self-Help Groups",
    desc: "Encouraging collaboration through women-led self-help groups to promote collective growth and resilience.",
    img: "/assets/finance4.jpg",
    fallback:
      "https://images.unsplash.com/photo-1581094794329-c81d3e7b35b0?auto=format&fit=crop&w=1200&q=80",
  },
];

const features = [
  {
    title: "Entrepreneurial Skills",
    desc: "From idea to enterprise — empowering women to launch and sustain small businesses with local resources.",
    icon: "💡",
  },
  {
    title: "Financial Literacy",
    desc: "Workshops on savings, digital payments, budgeting, and responsible credit use to promote smart finances.",
    icon: "📚",
  },
  {
    title: "Self-Help Groups (SHGs)",
    desc: "Creating strong community-based networks where women support each other in savings and growth.",
    icon: "🤝",
  },
  {
    title: "Digital Inclusion",
    desc: "Promoting access to online banking and fintech tools for transparency, control, and independence.",
    icon: "💳",
  },
  {
    title: "Microfinance Access",
    desc: "Linking women entrepreneurs to micro-loans and financial institutions to expand local opportunities.",
    icon: "🏦",
  },
  {
    title: "Community Leadership",
    desc: "Encouraging women to take leadership roles in financial decisions, panchayats, and cooperatives.",
    icon: "🌸",
  },
];

const Financial = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#f1fff5] via-[#e0fff1] to-[#f7fff8] overflow-hidden">
      {/* 🍃 Decorative Background Pattern */}
      <motion.div
        className="absolute inset-0 bg-[url('/assets/leaf-pattern.png')] opacity-[0.05] bg-fixed bg-cover z-0"
        initial={{ backgroundPositionY: 0 }}
        animate={{ backgroundPositionY: "100%" }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      {/* 💰 Header Section */}
      <motion.section
        className="relative z-10 text-center py-24 px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-[#2e7d32] via-[#00c853] to-[#aeea00] bg-clip-text text-transparent drop-shadow-md">
          Financial Independence & Arthik Shakti
        </h1>
        <motion.p
          className="mt-6 text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <span className="font-semibold text-[#2e7d32]">Arthik Shakti</span> is
          an initiative by{" "}
          <span className="font-semibold text-[#009688]">
            Kanya Jagriti Foundation
          </span>{" "}
          to build financially independent, economically confident, and
          entrepreneurially skilled women across Jharkhand’s rural and tribal
          regions.
        </motion.p>
        <motion.p
          className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Women form the backbone of rural economies — yet remain excluded from
          financial systems and decision-making. Arthik Shakti bridges that gap
          through knowledge, confidence, and community empowerment.
        </motion.p>
      </motion.section>

      {/* 🌀 Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        className="w-[92%] md:w-[80%] mx-auto rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.15)] overflow-hidden mb-24"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <motion.div
              className="relative w-full h-[480px] md:h-[600px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src={slide.img}
                onError={(e) => (e.target.src = slide.fallback)}
                alt={slide.title}
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"></div>

              <motion.div
                className="absolute bottom-10 left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-md"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-semibold text-white drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-gray-100 text-sm mt-3 leading-relaxed">
                  {slide.desc}
                </p>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🌸 Info Grid */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 pb-28">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {features.map((item, i) => (
            <motion.div
              key={i}
              className="group relative bg-gradient-to-br from-[#ffffff]/90 via-[#f1fff8]/80 to-[#e6ffe9]/90 border border-[#b9f6ca] backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-700"
              whileHover={{ scale: 1.03 }}
            >
              <div className="p-8 text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-2xl text-[#2e7d32] group-hover:text-[#00c853] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ✨ Floating Rupee Icons */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-6 text-[#00c853] font-bold opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: ["0%", "120%"],
              rotate: [0, 360],
            }}
            transition={{
              duration: 30 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            ₹
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Financial;
