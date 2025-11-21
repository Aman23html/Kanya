// src/pages/TribalGirl.jsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import CountUp from "react-countup";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Edu from "../../assets/TribleEdu.webp";
import Nut from "../../assets/Triblenut.webp";
import Triblehero from "../../assets/Trible/Triblehero.webp";
import Trible1 from "../../assets/Trible/Trible1.webp";
import Trible2 from "../../assets/Trible/Trible2.webp"; 
import Trible3 from "../../assets/Trible/Trible3.webp"; 
import Trible4 from "../../assets/Trible/Trible4.webp"; 
import Trible5 from "../../assets/Trible/Trible5.webp"; 
import Trible6 from "../../assets/Trible/Trible6.webp"; 
import Trible7 from "../../assets/Trible/Trible7.webp"; 


const stats = [
  { label: "Girls enrolled", value: 1240 },
  { label: "Meals / month", value: 7200 },
  { label: "Scholarships awarded", value: 86 },
  { label: "Health camps / year", value: 18 },
];

const programs = [
  {
    id: "vanyashree",
    title: "Vanyashree Vidya — Education",
    objective:
      "Holistic & bilingual learning, bridge courses, uniforms, and mentorship for tribal girls.",
    activities: [
      "Enrollment drives & school linkages",
      "Bridge courses for out-of-school girls",
      "Bilingual curriculum (tribal + regional languages)",
      "Uniforms, books & learning kits",
      "Scholarships & mentorship for higher education",
    ],
    img: Edu,
   
  },
  {
    id: "poshan",
    title: "Poshan Vatika — Nutrition",
    objective:
      "Daily balanced meals, growth monitoring, kitchen gardens and supplements for better health.",
    activities: [
      "Daily nutritious meals & snacks",
      "Growth monitoring & BMI tracking",
      "Local kitchen gardens & school meals",
      "Iron/calcium supplementation drives",
      "Nutrition education & cooking workshops",
    ],
    img: Nut,
 
  },
  {
    id: "sanskriti",
    title: "Sanskriti — Cultural Preservation",
    objective:
      "Celebrating tribal art, dance & language to strengthen identity alongside learning.",
    activities: [
      "Cultural workshops & performances",
      "Local-history learning modules",
      "Craft training for livelihoods",
      "Festivals that center girls' heritage",
    ],
    img: Trible5,
    
  },
];

export default function TribalGirl() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#f1fff6] via-[#e6fff0] to-white text-gray-800 mt-10">
      <style>{`
        /* Tribal Rune Particle System (Donghua Glow) */
.tg-particle {
  position: absolute;
  pointer-events: none;
  opacity: 0.85;
  filter: drop-shadow(0 0 6px rgba(16, 185, 129, 0.65));
  animation: tgRunePulse 4.5s ease-in-out infinite alternate;
  z-index: 2;
}

/* Magical glowing pulse */
@keyframes tgRunePulse {
  0% {
    transform: scale(0.92) rotate(0deg);
    filter: drop-shadow(0 0 4px rgba(16, 185, 129, 0.45))
            drop-shadow(0 0 6px rgba(5, 150, 105, 0.35));
    opacity: 0.65;
  }
  50% {
    transform: scale(1) rotate(4deg);
    filter: drop-shadow(0 0 10px rgba(16, 185, 129, 0.85))
            drop-shadow(0 0 14px rgba(5, 150, 105, 0.75));
    opacity: 1;
  }
  100% {
    transform: scale(1.08) rotate(-4deg);
    filter: drop-shadow(0 0 16px rgba(16, 185, 129, 1))
            drop-shadow(0 0 22px rgba(5, 150, 105, 0.9));
    opacity: 0.8;
  }
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

        /* Swiper pagination (match YoungGirl style but tribal greens) */
        .swiper-pagination-bullet {
          background: rgba(255,255,255,0.85) !important;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin: 0 6px !important;
          transition: all 0.35s ease;
          box-shadow: 0 0 4px rgba(0,0,0,0.08);
        }
        .swiper-pagination-bullet-active {
          background: #064e3b !important;
          transform: scale(1.36);
          box-shadow: 0 0 12px rgba(6,78,59,0.28);
        }
        .swiper-pagination { bottom: 10px !important; }

        /* Ken Burns for gallery */
        .kenburns {
          transform-origin: center;
          animation: tgKb 18s ease-in-out infinite alternate;
        }
        @keyframes tgKb {
          from { transform: scale(1) translateY(0); }
          to { transform: scale(1.06) translateY(-1.6%); }
        }

        /* glass accent used in stats */
        .glass-accent {
          background: linear-gradient(135deg, rgba(255,255,255,0.78), rgba(255,255,255,0.08));
          border: 1px solid rgba(6,78,59,0.06);
          backdrop-filter: blur(6px);
        }

        /* small utilities */
        .tribal-halo {
          box-shadow: 0 10px 60px rgba(6,78,59,0.08), inset 0 1px 0 rgba(255,255,255,0.06);
        }
      `}</style>

     {/* Falling Tribal Runes (Donghua-style) */}
<div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
  {[...Array(20)].map((_, i) => {
    const size = 18 + Math.random() * 28;
    const duration = 10 + Math.random() * 22;
    const left = Math.random() * 100;

    // Rune symbol set (tribal-style)
    const runes = ["ᚠ", "ᚨ", "ᛉ", "ᛟ", "ᛞ", "ᚾ", "ᚲ", "ᛚ", "✦", "✧", "ᛃ"];
    const symbol = runes[Math.floor(Math.random() * runes.length)];

    const colors = [
      "rgba(16,185,129,0.85)",
      "rgba(5,150,105,0.75)",
      "rgba(4,120,87,0.80)",
      "rgba(6,95,70,0.65)",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
      <motion.span
        key={i}
        className="absolute flex items-center justify-center select-none text-white font-extrabold tracking-wide"
        style={{
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          color: `${color}`,
          textShadow: `0 0 ${size * 0.8}px ${color}`,
          fontSize: `${size}px`,
          opacity: 0.8,
        }}
        initial={{
          y: -200 - Math.random() * 260,
          x: Math.random() * 40 - 20,
          opacity: 0,
          scale: 0.6 + Math.random() * 0.5,
          rotate: Math.random() * 360,
        }}
        animate={{
          y: "110vh",
          x: [
            left,
            left + (Math.random() * 20 - 10),
            left + (Math.random() * 30 - 15),
          ],
          opacity: [0.15, 0.9, 0.25],
          rotate: [
            0,
            Math.random() > 0.5 ? 360 : -360,
            Math.random() > 0.5 ? 180 : -180,
          ],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 5,
        }}
      >
        {symbol}
      </motion.span>
    );
  })}
</div>


      {/* HERO */}
      <header className="relative z-10 top-25">
        <div className="min-h-[74vh] flex items-center justify-center relative">
          <motion.div
            className="absolute inset-0 tribal-halo"
            animate={{ scale: [1, 1.045, 1] }}
            transition={{ duration: 38, repeat: Infinity, ease: "easeInOut" }}
            style={{
              backgroundImage:
                `linear-gradient(180deg, rgba(6,78,59,0.48), rgba(255,255,255,0.06)), url(${Triblehero})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.95) contrast(0.98)",
            }}
          />
          <div className="max-w-5xl mx-auto text-center px-6 py-20 relative z-10">
            <motion.h1
             className="text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]"
             initial={{ opacity: 0, y: -30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}
           >
             Tribal Girl Care
           </motion.h1>
           
           <motion.p
             className="mt-6 text-lg md:text-xl text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] max-w-3xl mx-auto"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
           >
             <span className="font-semibold text-yellow-200"> Kanya Jagriti</span> —
             urturing education, nutrition & cultural pride for tribal girls.
           </motion.p>
           
           <p className="text-lg italic mt-3 text-gray-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
             “When you empower a girl, you empower generations.”
           </p>

            
           
          </div>
        </div>
      </header>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white/80 backdrop-blur-md border border-emerald-100 rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all"
            >
              <div className="text-4xl font-extrabold text-[#065f46]">
                <CountUp end={s.value} duration={2.6} separator="," />
              </div>
              <div className="mt-2 text-sm text-gray-700 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
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
  className="w-[1200px] mx-auto bg-white/80 backdrop-blur-md border border-emerald-200 rounded-3xl p-10 shadow-lg"
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h3 className="text-3xl font-extrabold text-emerald-800 text-center mb-4 w-[600px] mx-auto">
    About Tribal Girl Care
  </h3>

  <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
    Tribal Girl Care supports the education, health, cultural identity, and 
    confidence of tribal girls—helping them grow with dignity, strength, and equal opportunities through community-based empowerment.
  </p>

  {/* SKILLS & CHARACTERISTICS */}
  <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-6 shadow-sm max-w-3xl mx-auto mt-6">
    <h4 className="text-xl font-semibold text-emerald-800 text-center mb-3">
      Skills & Characteristics
    </h4>

    <ul className="space-y-2 text-gray-700 text-[15px] leading-relaxed">
      <li className="flex gap-2">
        <span className="text-emerald-600">•</span>
        Strong, resilient, and deeply connected to nature and culture.
      </li>
      <li className="flex gap-2">
        <span className="text-emerald-600">•</span>
        Adaptive, hardworking, and community-oriented.
      </li>
      <li className="flex gap-2">
        <span className="text-emerald-600">•</span>
        Curious learners who embrace new opportunities with courage.
      </li>
      <li className="flex gap-2">
        <span className="text-emerald-600">•</span>
        Creative, skillful, and capable contributors to family and society.
      </li>
      <li className="flex gap-2">
        <span className="text-emerald-600">•</span>
        Natural leaders when supported with guidance and education.
      </li>
    </ul>
  </div>
</motion.div>


      </div>
      
            </section>

      {/* GALLERY */}
      <section className="py-16 bg-gradient-to-b from-[#f7fff7] to-[#e8fff0]">
        <div className="px-4 md:px-8">
          <motion.h3
            className="text-3xl font-bold text-[#065f46] text-center mb-10"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Glimpses — Tribal Girl Care
          </motion.h3>

          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            autoplay={{ delay: 3800, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            spaceBetween={24}
            slidesPerView={1.05}
            breakpoints={{
              640: { slidesPerView: 1.4, spaceBetween: 20 },
              1024: { slidesPerView: 2.4, spaceBetween: 24 },
              1280: { slidesPerView: 3.1, spaceBetween: 28 },
            }}
          >
            {[
              Trible1,
              Trible2,
              Trible3,
              Trible4,
              Trible5,
              Trible6,
              Trible7,
            ].map((src, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  className="relative h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.03 }}
                >
                  <img src={src} alt="" className="w-full h-full object-cover kenburns" loading="lazy" />
                  <div className="absolute bottom-4 left-4 bg-white/75 backdrop-blur-md py-2 px-3 rounded-lg text-sm font-semibold text-[#064e3b] shadow">
                    Field Activity #{i + 1}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="py-12 bg-gradient-to-r from-[#dff7e6] to-[#e8fff0]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-[#064e3b]">Support Tribal Girl Care</h4>
            <p className="text-gray-700">
              Join hands to support education, nutrition and cultural pride for tribal girls.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="/donate"
              className="px-6 py-3 rounded-full bg-[#065f46] text-white font-semibold hover:bg-[#064e3b]"
            >
              Donate
            </a>
            <a
              href="/contact"
              className="px-6 py-3 rounded-full border border-[#065f46] text-[#065f46] bg-white hover:bg-[#f0fff5]"
            >
              Volunteer / Partner
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
