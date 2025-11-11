// src/pages/Mother.jsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import CountUp from "react-countup";
import "swiper/css";
import "swiper/css/pagination";

export default function Mother() {
  const stats = [
    { label: "Mothers Supported", value: 5200 },
    { label: "Health Camps Held", value: 310 },
    { label: "Counseling Sessions", value: 890 },
    { label: "Communities Reached", value: 85 },
  ];

  const initiatives = [
    {
      id: "health",
      title: "Physical & Reproductive Health",
      summary:
        "Improving maternal health through check-ups, nutrition support, and preventive care awareness.",
      activities: [
        "Regular medical and nutrition check-ups",
        "Awareness on reproductive and postpartum care",
        "Workshops on hygiene, anemia, and fitness",
        "Mobile health camps in remote areas",
      ],
      img: "https://images.unsplash.com/photo-1600959907703-125ba1374a12?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "mental",
      title: "Emotional & Mental Well-being",
      summary:
        "Creating safe spaces for emotional expression, peer bonding, and mental wellness for mothers.",
      activities: [
        "One-on-one and group counseling sessions",
        "Peer-led emotional support circles",
        "Stress management & mindfulness workshops",
        "Music, art, and play therapy for mothers",
      ],
      img: "https://images.unsplash.com/photo-1576765607924-b7b66bde7bc1?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "awareness",
      title: "Awareness & Empowerment",
      summary:
        "Empowering mothers through rights awareness, menopause education, and community leadership.",
      activities: [
        "Awareness on maternal rights & long-term health",
        "Sessions on menopause & self-care",
        "Community leadership and advocacy training",
        "Celebrating mothers through wellness festivals",
      ],
      img: "https://images.unsplash.com/photo-1602872023893-2f84a9a6c1e3?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1576765976271-3f7a72a8e38f?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1602524812146-7b6bba2f9e4b?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=1400&q=80",
  ];

  return (
    <div className="w-full overflow-hidden bg-linear-to-b from-[#f9fff9] via-[#f0fff5] to-white text-gray-800 relative">
      <style>{`
        .kenburns { animation: kb 20s ease-in-out infinite alternate; transform-origin: center; }
        @keyframes kb { from { transform: scale(1); } to { transform: scale(1.07); } }

        .flip-3d { perspective: 1200px; }
        .flip-3d-inner { transform-style: preserve-3d; transition: transform 0.8s ease; height: 100%; }
        .flip-3d:hover .flip-3d-inner { transform: rotateY(180deg); }
        .flip-face { backface-visibility: hidden; position: absolute; inset: 0; }
        .flip-back { transform: rotateY(180deg); }

        .glass-card {
          background: linear-linear(135deg, rgba(255,255,255,0.65), rgba(255,255,255,0.15));
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
        }
      `}</style>

      {/* HERO */}
      <header className="relative z-10">
        <div className="min-h-[70vh] flex items-center justify-center bg-center bg-cover relative overflow-hidden">
          <motion.div
            className="absolute inset-0 kenburns"
            style={{
              backgroundImage:
                "linear-linear(180deg, rgba(10,30,10,0.5), rgba(255,255,255,0.08)), url('https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80')",
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
              Matri Sneha — Mothers’ Wellness Care
            </h1>
            <p className="mt-4 text-lg md:text-xl text-emerald-50 font-medium">
              “When a mother thrives, a generation rises.”
            </p>
          </motion.div>
        </div>
      </header>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="glass-card rounded-2xl p-6 text-center shadow-md"
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

      {/* INITIATIVES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#155724] text-center mb-10"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Core Initiatives
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {initiatives.map((it, idx) => (
            <motion.article
              key={it.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="relative h-[420px]"
            >
              <div className="flip-3d h-full">
                <div className="flip-3d-inner relative rounded-3xl shadow-xl h-full">
                  {/* FRONT */}
                  <div className="flip-face bg-white rounded-3xl overflow-hidden flex flex-col h-full">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={it.img}
                        alt={it.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-[#0b663c] mb-2">
                          {it.title}
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{it.summary}</p>
                      </div>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="flip-face flip-back bg-linear-to-br from-emerald-700 to-teal-600 text-white rounded-3xl p-6 flex flex-col justify-center">
                    <h4 className="text-xl font-semibold mb-3">Key Activities:</h4>
                    <ul className="list-disc list-inside space-y-2 text-sm">
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
      <section className="py-12 bg-linear-to-b from-[#f7fff7] to-[#e8fff0]">
        <div className="w-full px-4">
          <motion.h3
            className="text-3xl font-bold text-[#14532d] text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Glimpses — Matri Sneha in Action
          </motion.h3>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3800, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            spaceBetween={16}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 1.6 },
              1024: { slidesPerView: 2.8 },
            }}
          >
            {gallery.map((src, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  className="relative h-72 md:h-80 rounded-xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-4 bg-white/70 backdrop-blur-md py-2 px-3 rounded-lg text-sm font-semibold text-[#0b663c] shadow">
                    Wellness Activity #{i + 1}
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
          Support Mothers, Strengthen Generations
        </motion.h2>
        <p className="max-w-xl mx-auto mb-8 text-emerald-100">
          Join hands to care for those who nurture the world — every mother deserves wellness, dignity, and love.
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
