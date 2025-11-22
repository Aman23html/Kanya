import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Mother1 from "../../assets/Mother/Mother1.webp";
import Mother2 from "../../assets/Mother/Mother2.webp";
import Mother3 from "../../assets/Mother/Mother3.webp";
import Mother4 from "../../assets/Mother/Mother4.webp";
import Finance5 from "../../assets/Finance/Finance5.webp";

// Images from your snippet
const heroImage = Mother2;
const healthImg = "https://images.unsplash.com/photo-1600959907703-125ba1374a12?auto=format&fit=crop&w=1400&q=80";
const mentalImg = "https://images.unsplash.com/photo-1576765607924-b7b66bde7bc1?auto=format&fit=crop&w=1400&q=80";
const awarenessImg = "https://images.unsplash.com/photo-1602872023893-2f84a9a6c1e3?auto=format&fit=crop&w=1400&q=80";

const galleryImages = [
  Mother1,
  Mother2,
  Mother3,
  Mother4,
];

export default function Mother() {
  // Custom Slider State
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: "Mothers Supported", value: "5,200+" },
    { label: "Health Camps Held", value: "310" },
    { label: "Counseling Sessions", value: "890" },
    { label: "Communities Reached", value: "85" },
  ];

  const initiatives = [
    {
      id: "health",
      title: "Physical & Reproductive Health",
      summary: "Improving maternal health through check-ups, nutrition support, and preventive care awareness.",
      activities: [
        "Regular medical & nutrition check-ups",
        "Reproductive & postpartum care",
        "Workshops on hygiene & anemia",
        "Mobile health camps in remote areas",
      ],
      img: Mother1,
    },
    {
      id: "mental",
      title: "Emotional & Mental Well-being",
      summary: "Creating safe spaces for emotional expression, peer bonding, and mental wellness for mothers.",
      activities: [
        "One-on-one & group counseling",
        "Peer-led emotional support circles",
        "Stress management workshops",
        "Art & music therapy for mothers",
      ],
      img: Mother2,
    },
    {
      id: "awareness",
      title: "Awareness & Empowerment",
      summary: "Empowering mothers through rights awareness, menopause education, and community leadership.",
      activities: [
        "Maternal rights awareness",
        "Menopause & self-care sessions",
        "Community advocacy training",
        "Wellness festivals for mothers",
      ],
      img: Finance5,
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#f0fff4] via-[#ecfdf5] to-white text-gray-800 mt-10">
      <style>{`
        /* Floating Particles */
        .particle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.2;
          background: radial-gradient(circle, rgba(34,197,94,0.5), rgba(16,185,129,0.1));
          filter: blur(1px);
        }

        /* Flip Card Enhanced */
        .flip-3d {
          perspective: 1200px;
        }
        .flip-3d-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.9s ease, box-shadow 0.4s ease;
          transform-style: preserve-3d;
          border-radius: 24px;
        }
        .flip-3d:hover .flip-3d-inner {
          transform: rotateY(180deg) scale(1.04);
          box-shadow: 0 18px 40px rgba(0,0,0,0.2);
        }
        .flip-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }
        .flip-back {
          transform: rotateY(180deg);
        }

        .particle {
          position: absolute;
          pointer-events: none;
          z-index: 1;
          animation: pulseGlow 5s ease-in-out infinite alternate;
        }

        @keyframes pulseGlow {
          from {
            filter: brightness(0.8) blur(1px);
          }
          to {
            filter: brightness(1.4) blur(1.5px);
          }
        }
      `}</style>

      {/* 🌿 Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        {[...Array(25)].map((_, i) => {
          const size = 8 + Math.random() * 22;
          const duration = 14 + Math.random() * 20;
          const left = Math.random() * 100;
          const colors = [
            "rgba(16,185,129,0.50)",
            "rgba(34,197,94,0.90)",
            "rgba(132,204,22,0.50)",
            "rgba(20,184,166,0.55)",
            "rgba(5,150,105,0.50)",
          ];
          const color = colors[Math.floor(Math.random() * colors.length)];

          return (
            <motion.span
              key={i}
              className="particle"
              style={{
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: `radial-gradient(circle, ${color}, transparent 70%)`,
                borderRadius: "50%",
                opacity: 0.45,
                boxShadow: `0 0 ${size * 1.4}px ${color}`,
                filter: "blur(0.6px)",
              }}
              initial={{
                y: -200 - Math.random() * 200,
                x: Math.random() * 40 - 20,
                opacity: 0,
                scale: 0.7 + Math.random() * 0.6,
              }}
              animate={{
                y: "110vh",
                x: [
                  `${left}%`,
                  `${left + (Math.random() * 20 - 10)}%`,
                  `${left + (Math.random() * 30 - 15)}%`,
                ],
                opacity: [0.15, 100, 0.25],
                rotate: [0, 45, -20, 30],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* HERO */}
      <header className="relative z-10 top-20">
        <div className="min-h-[70vh] flex items-center justify-center relative">
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(20,83,45,0.55), rgba(20,83,45,0.2)), url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="max-w-5xl mx-auto text-center px-6 py-20 relative z-10">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Matri Sneha
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="font-semibold text-yellow-200">Mothers’ Wellness Care</span> —
              "When a mother thrives, a generation rises."
            </motion.p>
          </div>
        </div>
      </header>

      {/* STATS SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="bg-white/80 backdrop-blur-md border border-emerald-100 rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl font-extrabold text-emerald-700">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-gray-700 font-medium">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INITIATIVES (Flip Cards) */}
      <section id="initiatives" className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-12">
          Core Initiatives
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {initiatives.map((p) => (
            <div key={p.id} className="flip-3d h-[460px]">
              <div className="flip-3d-inner">
                {/* FRONT */}
                <div className="flip-face bg-white/90 backdrop-blur-md border border-emerald-100 rounded-3xl overflow-hidden flex flex-col">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-emerald-700">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-gray-700 text-sm flex-grow leading-relaxed">
                      {p.summary}
                    </p>
                    <div className="mt-4 text-emerald-600 text-sm font-semibold">
                      Hover to see activities →
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div className="flip-face flip-back bg-gradient-to-br from-emerald-700 to-teal-600 rounded-3xl p-6 flex flex-col justify-center shadow-inner">
                  <h4 className="text-lg font-bold text-white mb-4 text-center">
                    Key Activities
                  </h4>
                  <ul className="space-y-2 text-white text-[14px] leading-relaxed">
                    {p.activities.map((act, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span>•</span> {act}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY (Custom Slider) */}
      <section className="py-16 bg-gradient-to-b from-[#f0fff4] to-[#ecfdf5]">
        <div className="w-full px-4 md:px-8 max-w-7xl mx-auto">
          <motion.h3 className="text-3xl font-bold text-green-700 text-center mb-10">
            Glimpses — Matri Sneha in Action
          </motion.h3>
          
          <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <img
                  src={galleryImages[currentIndex]}
                  alt={`Gallery ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 text-white">
                   <span className="bg-emerald-600 px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block">
                    Initiative #{currentIndex + 1}
                   </span>
                   <h4 className="text-2xl font-bold drop-shadow-lg">Nurturing Strength</h4>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots Navigation */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-10">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "bg-emerald-400 w-6" : "bg-white/50 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="join"
        className="py-12 bg-gradient-to-r from-emerald-50 to-green-100"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-green-800">
              Support Mothers
            </h4>
            <p className="text-gray-700">
              Join hands to care for those who nurture the world — every mother deserves wellness, dignity, and love.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="/donate"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold shadow hover:brightness-95 transition"
            >
              Donate
            </a>
            <a
              href="/volunteer"
              className="px-6 py-3 rounded-full border border-green-600 text-green-700 font-semibold bg-white hover:bg-green-50 transition"
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}