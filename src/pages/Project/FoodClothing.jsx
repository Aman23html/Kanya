// src/pages/FoodClothing.jsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import CountUp from "react-countup";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import food5 from "../../assets/cm.webp";
import Food from "../../assets/nutrition.webp";
import cloth from "../../assets/Cloth.webp";
import food1 from "../../assets/Food/F1.webp";
import food2 from "../../assets/Food/F2.webp";
import food3 from "../../assets/Food/F3.webp";
import food4 from "../../assets/Food/F4.webp";

// ---------------- DATA -----------------

const programs = [
  {
    id: "annapurna",
    title: "Food & Nutritional Care — Annapurna Seva",
    objective:
      "Provide nutritious meals and address food insecurity among marginalized women and girls.",
    activities: [
      "Community kitchen services for daily meals",
      "Nutrition kits for pregnant & lactating women",
      "Distribution of dry rations to needy families",
      "Festival & emergency food relief drives",
      "Nutrition education & awareness sessions",
    ],
    img:Food,
    color: "from-green-50 to-green-100",
    icon: "🍲",
  },
  {
    id: "mahila",
    title: "Clothes Distribution — Mahila Samman",
    objective: "Ensure access to clean & season-appropriate clothing for women and girls in need.",
    activities: [
      "Seasonal clothing drives (summer / winter)",
      "Distribution of school uniforms for girls",
      "Innerwear & hygiene garment kits",
      "Sarees and traditional wear for adult women",
      "Festival-based clothing distribution (Diwali, Eid)",
    ],
    img:cloth,
    color: "from-emerald-50 to-emerald-100",
    icon: "🧥",
  },
  {
    id: "ashraya",
    title: "Shelter Care — Ashraya",
    objective: "Offer safe, secure shelter to women and girls in crisis situations.",
    activities: [
      "Emergency shelter homes for abandoned/homeless women",
      "Short-term safe houses for survivors of violence",
      "Transitional homes for girls pursuing education/training",
      "Access to hygiene, meals & basic facilities",
      "Legal & emotional support for rehabilitation",
    ],
    img: food1,
    color: "from-emerald-100 to-teal-100",
    icon: "🏠",
  },
  {
    id: "swasthya",
    title: "Medical Assistance — Swasthya Sahayata",
    objective: "Provide timely medical help and health awareness to underserved women.",
    activities: [
      "Free health check-up & diagnostic camps",
      "Distribution of medicines & supplements (iron, calcium)",
      "Gynaecological & reproductive health support",
      "Referrals & funding for critical treatments",
      "Health education workshops on hygiene & menstruation",
    ],
    img: food5,
    color: "from-teal-50 to-cyan-50",
    icon: "🩺",
  },
];

const stats = [
  { label: "Meals served / month", value: 4200 },
  { label: "Families assisted", value: 980 },
  { label: "Medical camps / year", value: 24 },
  { label: "Shelter nights provided", value: 3600 },
];

// ---------------- COMPONENT -----------------

export default function FoodClothing() {
  // Minimal SVG shapes used for particles (Style B)
  const svgShapes = [
    // simple leaf
    (size, color) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M3 21s6-4 10-8 8-10 8-10-6 2-10 6S3 21 3 21z" fill={color} opacity="0.95" />
      </svg>
    ),
    // small wheat-like grain
    (size, color) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M6 4c4 2 9 7 10 12" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 5.5l-1.5-1.5M8.5 7.5l-1.2-1.2M10.5 9.5l-1-1M12.5 11.5l-0.8-0.8" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    // tiny grain / seed
    (size, color) => (
      <svg width={size} height={size} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <ellipse cx="6" cy="6" rx="5" ry="3" fill={color} opacity="0.95" />
      </svg>
    ),
    // petal
    (size, color) => (
      <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M12 2c3 1 6 4 8 8s-3 7-6 9-6 1-8-2 2-11 6-15z" fill={color} opacity="0.95"/>
      </svg>
    ),
  ];

  // helper to pick random shape and color
  const randomShape = (i) => {
    const size = 12 + Math.round(Math.random() * 26);
    const palette = [
      "rgba(255,255,255,0.95)",      // soft white (subtle)
      "rgba(245,255,240,0.95)",      // pale green-beige
      "rgba(235,248,230,0.95)",      // very pale mint
      "rgba(255,250,245,0.95)",      // warm off-white
    ];
    const color = palette[i % palette.length];
    const shapeFn = svgShapes[i % svgShapes.length];
    return { size, color, shapeFn };
  };

  return (
    <div className="w-full overflow-hidden text-gray-800 relative mt-10">

      {/* FIXED CSS */}
      <style>{`
        .kenburns { 
          animation: kbZoom 20s ease-in-out infinite alternate;
          transform-origin: center;
        }
        @keyframes kbZoom {
          from { transform: scale(1); }
          to { transform: scale(1.06); }
        }

          /* Flip Card */
        .flip-3d { perspective: 1200px; }
        .flip-3d-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 1s cubic-bezier(.2,.9,.2,1), box-shadow 0.35s;
          transform-style: preserve-3d;
          border-radius: 20px;
        }
        .flip-3d:hover .flip-3d-inner {
          transform: rotateY(180deg) scale(1.03);
          box-shadow: 0 20px 48px rgba(4, 75, 43, 0.18);
        }
        .flip-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          left: 0;
          top: 0;
          border-radius: 20px;
        }
        .flip-back {
          transform: rotateY(180deg);
          display: flex;
          align-items: stretch;
        }

        .glass-accent {
          background: rgba(255,255,255,0.45);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.25);
        }

        /* Minimal SVG particle styles (hero only) */
        .fc-svg-particle {
          position: absolute;
          pointer-events: none;
          z-index: 15;
          will-change: transform, opacity;
          filter: drop-shadow(0 6px 10px rgba(0,0,0,0.06));
          opacity: 0.95;
        }

        /* subtle float easing for particles */
        @keyframes fcFloat {
          0% { transform: translateY(-8vh) translateX(0) rotate(0deg) scale(0.96); opacity: 0.0; }
          10% { opacity: 0.85; }
          50% { transform: translateY(50vh) translateX(12px) rotate(180deg) scale(1); opacity: 1; }
          100% { transform: translateY(110vh) translateX(-8px) rotate(360deg) scale(0.98); opacity: 0.4; }
        }
      `}</style>

      {/* ---------------- HERO ---------------- */}
      <header className="relative z-10 mt-20">
        <div className="min-h-[72vh] flex items-center justify-center relative overflow-hidden">

          {/* BACKGROUND IMAGE + OVERLAY */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.06 }}
            transition={{ duration: 30, repeat: Infinity, repeatType: "mirror" }}
            style={{
              backgroundImage:
                `linear-gradient(180deg, rgba(6,30,20,0.48), rgba(0,0,0,0.28)), url(${food2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <motion.div
            className="absolute inset-0"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{
              background:
                "linear-gradient(120deg, rgba(40,100,50,0.25), rgba(160,220,130,0.15))",
              mixBlendMode: "overlay",
            }}
          />

          {/* ---------------- HERO-ONLY PARTICLES (Style B: minimal SVG shapes)  */}
          <div aria-hidden className="absolute inset-0 pointer-events-none z-20">
            {[...Array(16)].map((_, i) => {
              const { size, color, shapeFn } = randomShape(i);
              const left = Math.random() * 100;
              const delay = Math.random() * 5;
              const duration = 10 + Math.random() * 14;

              // Use inline SVG JSX returned by shapeFn
              const svgElement = shapeFn(size, color);

              return (
                <motion.div
                  key={i}
                  className="fc-svg-particle"
                  style={{
                    left: `${left}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    transform: `translateY(-20vh) translateX(0)`,
                  }}
                  initial={{ y: -40, opacity: 0, rotate: Math.random() * 40 - 20 }}
                  animate={{ y: "110vh", opacity: [0, 0.9, 0.3], rotate: Math.random() * 360 - 180 }}
                  transition={{
                    duration,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay,
                  }}
                >
                  {/* center the svg */}
                  <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {svgElement}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* HERO CONTENT */}
           <div className="max-w-5xl mx-auto text-center px-6 py-20 relative z-10">
                      <motion.h1
                       className="text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]"
                       initial={{ opacity: 0, y: -30 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 1 }}
                     >
                       Food, Clothing, Shelter & Medical Help
                     </motion.h1>
                     
                     <motion.p
                       className="mt-6 text-lg md:text-xl text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] max-w-3xl mx-auto"
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       transition={{ delay: 0.5 }}
                     >
                       <span className="font-semibold text-yellow-200"> Jeevan Aadhar</span> —
                      Supporting women and girls with dignity, safety, and essential care.
                     </motion.p>
                     
                     <p className="text-lg italic mt-3 text-gray-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                       “When you empower a girl, you empower generations.”
                     </p>
          
                      
                     
                    </div>
        </div>
      </header>

      {/* ---------------- STATS ---------------- */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-12 relative z-20 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/80 backdrop-blur-md border border-emerald-100 rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all"
            >
              <div className="text-3xl font-extrabold text-[#1b5e20]">
                <CountUp end={s.value} duration={2.4} separator="," />
              </div>
              <div className="mt-2 text-sm text-gray-700">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- INITIATIVES ---------------- */}
      <section id="programs" className="max-w-7xl mx-auto px-6 md:px-12 py-20">
                    <motion.h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-12">
                      Program Pillars & Initiatives
                    </motion.h2>
            
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                      {programs.map((p) => (
                        <div key={p.id} className="flip-3d h-[440px]">
                          <div className="flip-3d-inner">
                            {/* FRONT */}
                            <div className="flip-face bg-white/90 backdrop-blur-md border border-emerald-100 rounded-3xl overflow-hidden flex flex-col">
                              <img
                                src={p.img}
                                alt={p.title}
                                className="w-full h-48 object-cover"
                              />
                              <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold text-emerald-700">
                                  {p.title}
                                </h3>
                                <p className="mt-2 text-gray-700 text-sm flex-grow">
                                  {p.objective}
                                </p>
                                <div className="mt-4 text-emerald-600 text-sm font-semibold">
                                  Hover to see activities →
                                </div>
                              </div>
                            </div>
            
                            {/* BACK */}
                            <div className="flip-face flip-back bg-gradient-to-br from-emerald-700 to-teal-600 rounded-3xl p-5 flex flex-col justify-center shadow-inner">
                              <h4 className="text-lg font-bold text-white mb-3 text-center">
                                Activities
                              </h4>
                              <ul className="space-y-1 text-white  text-sm text-center">
                                {p.activities.map((act, i) => (
                                  <li key={i}>• {act}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                            <motion.div
  className="w-[800px] mx-auto bg-white/80 backdrop-blur-md border border-emerald-200 rounded-3xl p-10 shadow-lg "
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h3 className="text-3xl font-extrabold text-emerald-800 text-center mb-4">
    About Food, Clothing & Shelter Support
  </h3>

  <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
    Our Food, Clothing & Shelter initiative ensures that vulnerable individuals 
    and families receive essential nourishment, basic attire, and safe living 
    conditions—laying the foundation for a dignified and stable life.
  </p>

  {/* CORE SUPPORT FEATURES */}
  <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-6 shadow-sm max-w-3xl mx-auto mt-6">
    <h4 className="text-xl font-semibold text-emerald-800 text-center mb-3">
      Core Support Features
    </h4>

    <ul className="space-y-2 text-gray-700 text-[15px] leading-relaxed">
      <li className="flex gap-2">
        <span className="text-emerald-600">•</span>
        Nutritious meals provided to ensure health and daily energy needs.
      </li>
      <li className="flex gap-2">
        <span className="text-emerald-600">•</span>
        Distribution of essential clothing for comfort and protection.
      </li>
      <li className="flex gap-2">
        <span className="text-emerald-600">•</span>
        Assistance with safe shelter, warm bedding, and basic living essentials.
      </li>
      <li className="flex gap-2">
        <span className="text-emerald-600">•</span>
        Focus on hygiene, warmth, and well-being for individuals and families.
      </li>
      <li className="flex gap-2">
        <span className="text-emerald-600">•</span>
        Support that restores dignity and creates a foundation for a better future.
      </li>
    </ul>
  </div>
</motion.div>
                      </div>

</section>


   {/* ---------------- GALLERY ---------------- */}
<section className="py-16 bg-gradient-to-b from-[#f7fff7] to-[#e8fff0]">
  <div className="px-4 md:px-8">

    <h3 className="text-3xl font-bold text-[#14532d] text-center mb-10">
      Glimpses — Jeevan Aadhar in Action
    </h3>

    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop={true}
      spaceBetween={20}
      slidesPerView={1.1}
      breakpoints={{
        640: { slidesPerView: 1.5 },
        1024: { slidesPerView: 2.2 },
        1280: { slidesPerView: 3 },
      }}
      className="pb-10"
    >
      {[
        food1,
        food2,
        food3,
        food4,
        food5,
      ].map((src, i) => (
        <SwiperSlide key={i}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl bg-white"
          >
            <img
              src={src}
              alt={`Activity ${i + 1}`}
              className="w-full h-full object-cover "
              loading="lazy"
            />

            <div className="absolute bottom-4 left-4 bg-white/85 backdrop-blur-sm 
                            px-3 py-1 rounded text-sm font-semibold text-[#0b663c] shadow">
              Field Activity #{i + 1}
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>


      {/* ---------------- CTA ---------------- */}
      <section className="py-12 bg-gradient-to-r from-[#dff7e6] to-[#e8fff0]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-[#0b663c]">Support Jeevan Aadhar</h4>
            <p className="text-gray-700">
              Join hands to provide care, dignity, and empowerment.
            </p>
          </div>

          <div className="flex gap-3">
            <a href="/donate" className="px-6 py-3 rounded-full bg-[#0b663c] text-white font-semibold">
              Donate
            </a>
            <a href="/contact" className="px-6 py-3 rounded-full border border-[#0b663c] text-[#0b663c] bg-white">
              Volunteer / Partner
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
