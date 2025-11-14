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
    title: "Prakriti Raksha — Living in Harmony with Nature",
    desc: "Building ecologically conscious and safety-aware communities where homes are sustainable and people thrive in balance with nature.",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 2,
    title: "Hariyali Sakhi — Tree Plantation Movement",
    desc: "Increasing green cover in rural and tribal areas through community-led plantation drives and youth-led environmental stewardship.",
    img: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 3,
    title: "Surakshit Aangan — Household Safety Awareness",
    desc: "Empowering families with training on fire safety, clean cooking, safe water, and sanitation — creating safer, healthier homes.",
    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80",
  },
];

const Environment = () => {
  return (
    <div className="relative bg-linear-to-b from-emerald-50 via-white to-green-100 overflow-hidden mt-10">
      {/* 🌿 Floating Leaf Pattern */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[url('/assets/leaf-pattern.png')] opacity-5 bg-fixed bg-cover z-0"
        initial={{ backgroundPositionY: 0 }}
        animate={{ backgroundPositionY: "100%" }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      {/* 🌱 Hero Section */}
      <motion.div
        className="relative z-10 text-center py-24"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-extrabold bg-linear-to-r from-emerald-700 via-green-500 to-lime-400 bg-clip-text text-transparent drop-shadow-sm">
          Environment Protection <br />
          <span className="text-3xl text-emerald-700 font-semibold">
            (Prakriti Raksha)
          </span>
        </h1>

        <motion.p
          className="mt-6 text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <span className="font-semibold text-emerald-700">
            Prakriti Raksha
          </span>{" "}
          envisions a future where communities live in harmony with nature, and
          where homes are safe, sustainable, and aware of everyday environmental
          risks. This program engages women and young girls as agents of change,
          believing that healthy people can only thrive in healthy environments.
        </motion.p>
        <motion.p
          className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          It builds ecologically conscious and safety-aware rural and tribal
          communities — starting at the grassroots and expanding outward through
          education, participation, and collective care.
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
                alt={slide.title}
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/1200x800?text=Image+Unavailable")
                }
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

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

      {/* 🌾 Interactive Grid Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8 pb-28 max-w-7xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Hariyali Sakhi */}
        <motion.div
          className="group bg-white/70 backdrop-blur-xl rounded-2xl border border-emerald-100 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-700"
          whileHover={{ scale: 1.03 }}
        >
          <img
            src="https://images.unsplash.com/photo-1524593135777-12ff56baba75?auto=format&fit=crop&w=1200&q=80"
            alt="Hariyali Sakhi"
            className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="p-6">
            <h3 className="font-bold text-2xl text-emerald-700">
              Hariyali Sakhi — Tree Plantation Movement
            </h3>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              Goal: Increase green cover in rural and tribal areas through
              community-led plantation drives.
            </p>
            <ul className="list-disc text-gray-700 text-sm mt-4 pl-4 space-y-1">
              <li>Community tree plantation events</li>
              <li>“One Girl, One Tree” school campaign</li>
              <li>Native & medicinal plant distribution</li>
              <li>Water conservation & afforestation awareness</li>
              <li>Tree guardianship & youth monitoring</li>
            </ul>
          </div>
        </motion.div>

        {/* Surakshit Aangan */}
        <motion.div
          className="group bg-white/70 backdrop-blur-xl rounded-2xl border border-emerald-100 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-700"
          whileHover={{ scale: 1.03 }}
        >
          <img
            src="https://images.unsplash.com/photo-1567346469382-3c9bdb9b2f89?auto=format&fit=crop&w=1200&q=80"
            alt="Surakshit Aangan"
            className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="p-6">
            <h3 className="font-bold text-2xl text-emerald-700">
              Surakshit Aangan — Household Safety Awareness
            </h3>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              Goal: Build safer households through awareness and preventive
              practices.
            </p>
            <ul className="list-disc text-gray-700 text-sm mt-4 pl-4 space-y-1">
              <li>Fire safety & first-aid training</li>
              <li>Safe cooking & LPG/kerosene handling</li>
              <li>Electrical safety & emergency response</li>
              <li>Smoke-free kitchens (improved chulhas)</li>
              <li>Safe drinking water & sanitation practices</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>

      {/* 🍃 Floating Leaves */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
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
