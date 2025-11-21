// src/pages/FoodClothing.jsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import CountUp from "react-countup";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Heroimg from "../../assets/cm.webp";
import Food from "../../assets/nutrition.webp";
import cloth from "../../assets/Cloth.webp";

// ---------------- DATA -----------------

const initiatives = [
  {
    id: "annapurna",
    title: "Food & Nutritional Care — Annapurna Seva",
    goal:
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
    goal: "Ensure access to clean & season-appropriate clothing for women and girls in need.",
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
    goal: "Offer safe, secure shelter to women and girls in crisis situations.",
    activities: [
      "Emergency shelter homes for abandoned/homeless women",
      "Short-term safe houses for survivors of violence",
      "Transitional homes for girls pursuing education/training",
      "Access to hygiene, meals & basic facilities",
      "Legal & emotional support for rehabilitation",
    ],
    img: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&fit=crop&w=1400&q=80",
    color: "from-emerald-100 to-teal-100",
    icon: "🏠",
  },
  {
    id: "swasthya",
    title: "Medical Assistance — Swasthya Sahayata",
    goal: "Provide timely medical help and health awareness to underserved women.",
    activities: [
      "Free health check-up & diagnostic camps",
      "Distribution of medicines & supplements (iron, calcium)",
      "Gynaecological & reproductive health support",
      "Referrals & funding for critical treatments",
      "Health education workshops on hygiene & menstruation",
    ],
    img: "https://images.unsplash.com/photo-1576765607924-b25b11fce8f1?auto=format&fit=crop&w=1400&q=80",
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

        .flip-3d { perspective: 1400px; }
        .flip-3d-inner { 
          transform-style: preserve-3d; 
          transition: transform 0.8s;
        }
        .flip-3d:hover .flip-3d-inner {
          transform: rotateY(180deg);
        }
        .flip-face { 
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-back {
          transform: rotateY(180deg);
        }

        .glass-accent {
          background: rgba(255,255,255,0.45);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.25);
        }
      `}</style>

      {/* ---------------- HERO ---------------- */}
      <header className="relative z-10">
        <div className="min-h-[72vh] flex items-center justify-center relative overflow-hidden">

          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.06 }}
            transition={{ duration: 30, repeat: Infinity, repeatType: "mirror" }}
            style={{
              backgroundImage:
                `linear-gradient(180deg, rgba(6,30,20,0.48), rgba(0,0,0,0.28)), url(${Heroimg})`,
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

          <motion.div
            className="max-w-5xl mx-auto text-center px-6 py-20 relative z-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              Jeevan Aadhar
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/95 max-w-3xl mx-auto">
              Food, Clothing, Shelter & Medical Help — ensuring dignity and care for women and girls.
            </p>

          </motion.div>
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
              className="glass-accent rounded-2xl p-6 text-center shadow-md"
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
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-1">
        <h2 className="text-3xl md:text-4xl font-bold text-[#155724] text-center mb-10">
          Program Pillars & Actions
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {initiatives.map((it, idx) => (
            <motion.article
              key={it.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="relative"
            >
              <div className="flip-3d rounded-3xl overflow-hidden shadow-xl">
                <div className="flip-3d-inner min-h-[420px]">

                  {/* FRONT */}
                  <div className="flip-face flip-front bg-white rounded-3xl">
                    <div className="w-full h-40 md:h-44">
                      <img
                        src={it.img}
                        alt={it.title}
                        className="w-full h-full object-cover kenburns"
                        loading="lazy"
                      />
                    </div>

                    <div className={`p-6 bg-gradient-to-br ${it.color}`}>
                    
                      <h3 className="text-xl font-semibold text-[#0b663c]">
                        {it.title}
                      </h3>
                      <p className="mt-2 text-gray-700 text-sm">{it.goal}</p>

                      <ul className="mt-4 space-y-2">
                        {it.activities.slice(0, 4).map((a, ai) => (
                          <li key={ai} className="flex gap-2 text-gray-700 text-sm">
                            <span className="text-green-600">•</span> {a}
                          </li>
                        ))}
                      </ul>

                      <button className="mt-4 px-4 py-2 rounded-full bg-[#0b663c] text-white text-sm">
                        View activities →
                      </button>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="flip-face flip-back absolute inset-0 bg-linear-to-b from-emerald-700 to-teal-600 p-6 rounded-3xl overflow-auto">
                    <div className="flex gap-4">
                      <div className="text-2xl">{it.icon}</div>
                      <div>
                        <h3 className="text-1xl font-semibold text-white">
                          {it.title}
                        </h3>
                        <p className="text-green-400">{it.goal}</p>
                      </div>
                    </div>

                    <h5 className="mt-4 font-semibold">How we do it</h5>
                    <ul className="mt-2 space-y-2">
                      {it.activities.map((act, ai) => (
                        <li key={ai} className="text-white px-3 py-2 rounded">
                          {ai + 1}. {act}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex gap-3">
                      <a href={`/programs/${it.id}`} className="px-4 py-2 rounded-full bg-[#0b663c] text-white">
                        More
                      </a>
                      <a href="/volunteer" className="px-4 py-2 rounded-full border border-[#0b663c] text-[#0b663c] bg-white">
                        Join
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              
            </motion.article>
          ))}
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
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600",
        "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?q=80&w=1600",
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1600",
        "https://images.unsplash.com/photo-1529680459049-bf0340fa0755?q=80&w=1600",
        "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1600",
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
