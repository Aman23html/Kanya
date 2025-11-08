// src/pages/Financial.jsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import CountUp from "react-countup";
import "swiper/css";
import "swiper/css/pagination";

export default function Financial() {
  const stats = [
    { label: "Women Empowered", value: 4200 },
    { label: "Self Help Groups", value: 180 },
    { label: "Training Sessions", value: 350 },
    { label: "Entrepreneurs Supported", value: 270 },
  ];

  const initiatives = [
    {
      id: "arthik",
      title: "Arthik Shakti — Financial Independence",
      summary:
        "Empowering women to be financially aware, self-reliant, and capable of making independent life choices.",
      activities: [
        "Workshops on budgeting & entrepreneurship",
        "Microfinance & government scheme awareness",
        "Decision-making & financial confidence sessions",
        "Mentorship for rural women entrepreneurs",
      ],
      image:
        "https://images.unsplash.com/photo-1605902711622-cfb43c4437d2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "swavalambi",
      title: "Swavalambi Saheli — Self Help Groups",
      summary:
        "Forming and strengthening women-led SHGs that promote savings, income-generation, and entrepreneurship.",
      activities: [
        "Formation & training of SHGs in rural/tribal areas",
        "Regular savings & group loan systems",
        "Skill-building for income activities (papad making, stitching, goat rearing)",
        "Digital finance & mobile banking awareness",
      ],
      image:
        "https://images.unsplash.com/photo-1581094794329-c81d3e7b35b0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "nari",
      title: "Nari Utthan — Women Leadership Training",
      summary:
        "Building confident women leaders who can manage groups, advocate for rights, and represent their communities effectively.",
      activities: [
        "Leadership & confidence-building workshops",
        "Public speaking & communication training",
        "Group management & record-keeping",
        "Exposure visits & mentorship by women role models",
      ],
      image:
        "https://images.unsplash.com/photo-1612831455544-eca2c9b2dbb4?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1602524203013-5a5e1c14c949?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1573497019533-3c09c1b3e8a0?auto=format&fit=crop&w=1400&q=80",
  ];

  return (
    <div className="w-full overflow-hidden bg-linear-to-b from-[#f0fff5] via-[#e8fff0] to-white text-gray-800 relative">
      <style>{`
        .kenburns { animation: kb 18s ease-in-out infinite alternate; transform-origin: center; }
        @keyframes kb { from { transform: scale(1); } to { transform: scale(1.06); } }

        .flip-3d { perspective: 1400px; }
        .flip-3d-inner { transform-style: preserve-3d; transition: transform 0.7s; height: 400px; }
        .flip-3d:hover .flip-3d-inner { transform: rotateY(180deg); }
        .flip-face { backface-visibility: hidden; position: absolute; inset: 0; border-radius: 1rem; overflow: hidden; }
        .flip-back { transform: rotateY(180deg); }

        .glass-accent {
          background: linear-gradient(135deg, rgba(255,255,255,0.62), rgba(255,255,255,0.12));
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(6px);
        }
      `}</style>

      {/* HERO SECTION */}
      <header className="relative z-10">
        <div className="min-h-[70vh] flex items-center justify-center bg-center bg-cover relative overflow-hidden">
          <motion.div
            className="absolute inset-0 kenburns"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(6,30,20,0.4), rgba(255,255,255,0.05)), url('https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1600&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <motion.div
            className="text-center relative z-10 max-w-3xl px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              Arthik Shakti — Financial Empowerment
            </h1>
            <p className="mt-4 text-lg md:text-xl text-emerald-50 font-medium">
              “Earn. Lead. Rise.” — Empowering women through financial literacy,
              collective strength, and leadership.
            </p>
          </motion.div>
        </div>
      </header>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="glass-accent rounded-2xl p-6 text-center shadow-md"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-3xl font-extrabold text-[#1b5e20]">
                <CountUp end={s.value} duration={2.5} separator="," />
              </div>
              <div className="mt-2 text-sm text-gray-700">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CORE INITIATIVES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 relative z-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#14532d] text-center mb-10"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Core Initiatives
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((it, idx) => (
            <motion.article
              key={it.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="relative"
            >
              <div className="flip-3d w-full h-[400px] relative">
                <div className="flip-3d-inner w-full h-full relative">
                  {/* FRONT */}
                  <div className="flip-face bg-white flex flex-col h-full">
                    <div className="h-48 w-full overflow-hidden">
                      <img
                        src={it.image}
                        alt={it.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5 flex flex-col justify-center flex-1">
                      <h3 className="text-lg font-semibold text-[#0b663c] mb-2 leading-snug">
                        {it.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {it.summary}
                      </p>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="flip-face flip-back bg-linear-to-br from-emerald-700 to-teal-600 text-white flex flex-col justify-center h-full p-5">
                    <h4 className="text-lg font-semibold mb-3">
                      Key Activities
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
                      {it.activities.map((a, j) => (
                        <li key={j}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 bg-linear-to-b from-[#f7fff7] to-[#e8fff0]">
        <div className="w-full px-4">
          <motion.h3
            className="text-3xl font-bold text-[#14532d] text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Glimpses — Arthik Shakti in Action
          </motion.h3>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
            }}
          >
            {gallery.map((src, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  className="relative h-72 md:h-80 rounded-xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/70 backdrop-blur-md py-2 px-3 rounded-lg text-sm font-semibold text-[#0b663c] shadow">
                    Initiative #{i + 1}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-linear-to-b from-emerald-700 to-teal-600 text-white">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Join the Movement
        </motion.h2>
        <p className="max-w-xl mx-auto mb-8 text-emerald-100">
          Help women turn potential into prosperity — building a financially
          independent and inclusive India.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white text-emerald-700 font-bold px-8 py-3 rounded-full shadow-lg"
        >
          Get Involved
        </motion.button>
      </section>
    </div>
  );
}
