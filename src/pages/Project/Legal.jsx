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
    title: "Legal Awareness Camps",
    desc: "Empowering rural and tribal women by spreading awareness about rights, safety laws, and legal aid resources.",
    img: "/assets/legal1.jpg",
    fallback:
      "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Gender Sensitization Drives",
    desc: "Fostering equality and mutual respect through dialogue, education, and awareness programs in local communities.",
    img: "/assets/legal2.jpg",
    fallback:
      "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Safety & Rights Advocacy",
    desc: "Equipping women and girls to report injustice confidently and access legal protection with dignity.",
    img: "/assets/legal3.jpg",
    fallback:
      "https://images.unsplash.com/photo-1555374018-13a8994ab246?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Direct Legal Support",
    desc: "Connecting victims with legal experts and counselors for free consultations and justice-oriented solutions.",
    img: "/assets/legal4.jpg",
    fallback:
      "https://images.unsplash.com/photo-1555374018-13a8994ab246?auto=format&fit=crop&w=1200&q=80",
  },
];

const Legal = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#e9fdf5] via-[#f5fff9] to-[#e6f6ef] overflow-hidden">
      {/* 🌿 Subtle Pattern Overlay */}
      <motion.div
        className="absolute inset-0 bg-[url('/assets/leaf-pattern.png')] opacity-[0.05] bg-fixed bg-cover z-0"
        initial={{ backgroundPositionY: 0 }}
        animate={{ backgroundPositionY: "100%" }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      {/* 🌱 Header Section */}
      <motion.section
        className="relative z-10 text-center py-24 px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-[#1b5e20] via-[#00bfa5] to-[#81c784] bg-clip-text text-transparent drop-shadow-sm">
          Legal Empowerment & Justice
        </h1>
        <motion.p
          className="mt-6 text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <span className="font-semibold text-[#00695c]">
            Women’s Justice & Empowerment
          </span>{" "}
          is a core initiative of{" "}
          <span className="font-semibold text-[#2e7d32]">
            Kanya Jagriti Foundation
          </span>{" "}
          — building equality through awareness, rights education, and
          sensitization.
        </motion.p>
        <motion.p
          className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          True empowerment starts with clarity and courage.{" "}
          <span className="font-semibold text-[#00796b]">
            Nari Nyay Sashaktikaran
          </span>{" "}
          helps women understand and exercise their rights confidently.
        </motion.p>
      </motion.section>

      {/* 🌾 Swiper Carousel */}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Glass Info Box */}
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
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {slides.map((item) => (
            <motion.div
              key={item.id}
              className="group relative bg-gradient-to-br from-[#ffffff]/90 via-[#f0fff4]/70 to-[#e0f7fa]/80 border border-[#c8e6c9] backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-700"
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  onError={(e) => (e.target.src = item.fallback)}
                  alt={item.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-2xl text-[#1b5e20] group-hover:text-[#00bfa5] transition-colors">
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

      {/* 🌼 Floating Icons */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 bg-[url('/assets/leaf.svg')] bg-contain bg-no-repeat opacity-20"
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
              duration: 28 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Legal;
