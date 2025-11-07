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
    title: "Tree Plantation Drives",
    desc: "Empowering communities through large-scale plantation efforts in rural and tribal areas of Jharkhand.",
    img: "/assets/environment1.jpg",
    fallback:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Eco-Conscious Living",
    desc: "Encouraging rural families to adopt sustainable household practices that protect both environment and health.",
    img: "/assets/environment2.jpg",
    fallback:
      "https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Safety & Awareness Drives",
    desc: "Promoting safety education to prevent domestic hazards and raise awareness about clean surroundings.",
    img: "/assets/environment3.jpg",
    fallback:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Women as Green Leaders",
    desc: "Training women and girls to lead environmental awareness campaigns in their communities.",
    img: "/assets/environment4.jpg",
    fallback:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80",
  },
];

const Environment = () => {
  return (
    <div className="relative bg-gradient-to-b from-emerald-50 via-white to-green-100 overflow-hidden">
      {/* Floating Leaves Background Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[url('/assets/leaf-pattern.png')] opacity-5 bg-fixed bg-cover z-0"
        initial={{ backgroundPositionY: 0 }}
        animate={{ backgroundPositionY: "100%" }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      {/* 🌿 Animated Heading */}
      <motion.div
        className="relative z-10 text-center py-24"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-emerald-700 via-green-500 to-lime-400 bg-clip-text text-transparent drop-shadow-sm">
          Environment Protection
        </h1>
        <motion.p
          className="mt-6 text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          This program by{" "}
          <span className="font-semibold text-emerald-700">
            Kanya Jagriti Foundation
          </span>{" "}
          is a community-led initiative focused on environmental conservation
          and household safety awareness in rural and tribal Jharkhand. It
          empowers women and girls to lead both eco-protection and safety
          practices — ensuring a healthier planet and safer homes.
        </motion.p>
        <motion.p
          className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Through plantation drives and safety education, the initiative spreads
          ecological awareness and builds a proactive culture of care — reducing
          environmental degradation and domestic risks.
        </motion.p>
      </motion.div>

      {/* 🌀 Swiper Section */}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        className="w-[92%] md:w-[80%] mx-auto rounded-3xl shadow-2xl overflow-hidden mb-24"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <motion.div
              className="relative w-full h-[500px] md:h-[650px]"
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

              {/* Glass Overlay Text Box */}
              <motion.div
                className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 max-w-md"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-semibold text-white drop-shadow-md">
                  {slide.title}
                </h2>
                <p className="text-gray-200 text-sm mt-3 leading-relaxed">
                  {slide.desc}
                </p>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🌱 Interactive Grid Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8 pb-28 max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {slides.map((item) => (
          <motion.div
            key={item.id}
            className="group bg-white/70 backdrop-blur-xl rounded-2xl border border-emerald-100 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-700"
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={item.img}
                onError={(e) => (e.target.src = item.fallback)}
                alt={item.title}
                className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
            </div>
            <div className="p-6 text-center">
              <h3 className="font-bold text-2xl text-emerald-700 group-hover:text-emerald-800 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 🌾 Floating leaf animation layer */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 bg-[url('/assets/leaf.svg')] bg-contain bg-no-repeat opacity-30"
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
              duration: 25 + Math.random() * 10,
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

export default Environment;
