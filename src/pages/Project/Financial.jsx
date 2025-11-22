import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CountUp from "react-countup";
import Finance1 from "../../assets/Finance/Finance1.webp";
import Finance2 from "../../assets/Finance/Finance2.webp";
import Finance3 from "../../assets/Finance/Finance3.webp";
import Finance4 from "../../assets/Finance/Finance4.webp";
import Finance5 from "../../assets/Finance/Finance5.webp";
// Images from your snippet
const heroImage = Finance5;
const arthikImg = Finance3;
const shgImg = Finance1;
const leaderImg = Finance4;

const galleryImages = [
  Finance1,
  Finance2,
  Finance3,
  Finance4,
];

export default function Financial() {
  // Custom Slider State
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: "Women Empowered", value: "4200" },
    { label: "Self Help Groups", value: "180" },
    { label: "Training Sessions", value: "350" },
    { label: "Entrepreneurs", value: "270" },
  ];

  const initiatives = [
    {
      id: "arthik",
      title: "Arthik Shakti — Financial Independence",
      summary: "Empowering women to be financially aware, self-reliant, and capable of making independent life choices.",
      activities: [
        "Workshops on budgeting & entrepreneurship",
        "Microfinance & government scheme awareness",
        "Decision-making & financial confidence",
        "Mentorship for rural entrepreneurs",
      ],
      image: arthikImg,
    },
    {
      id: "swavalambi",
      title: "Swavalambi Saheli — Self Help Groups",
      summary: "Forming and strengthening women-led SHGs that promote savings, income-generation, and entrepreneurship.",
      activities: [
        "Formation & training of SHGs",
        "Regular savings & group loan systems",
        "Skill-building (papad making, stitching)",
        "Digital finance & mobile banking awareness",
      ],
      image: shgImg,
    },
    {
      id: "nari",
      title: "Nari Utthan — Women Leadership",
      summary: "Building confident women leaders who can manage groups, advocate for rights, and represent their communities.",
      activities: [
        "Leadership & confidence workshops",
        "Public speaking & communication",
        "Group management & record-keeping",
        "Exposure visits & role model mentorship",
      ],
      image: leaderImg,
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
            className="absolute inset-0 "
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(6,30,20,0.55), rgba(6,30,20,0.2)), url(${heroImage})`,
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
              Arthik Shakti
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="font-semibold text-yellow-200">Financial Empowerment</span> —
              "Earn. Lead. Rise."
            </motion.p>

            <p className="text-lg italic mt-3 text-gray-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              Empowering women through financial literacy, collective strength, and leadership.
            </p>
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
                <CountUp end={s.value } duration={2.4} separator=","  />
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
                    src={p.image}
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

       {/* FIXED GALLERY SECTION */}
      <section className="py-16 bg-gradient-to-b from-[#f7fff7] to-[#e8fff0]">
        <div className="px-4 md:px-8">
          <h3 className="text-3xl font-bold text-[#14532d] text-center mb-10">
            Glimpses — Financial Empowerment in Action
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
            {galleryImages.map((src, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl bg-white"
                >
                  <img
                    src={src}
                    alt={`Activity ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  <div className="absolute bottom-4 left-4 bg-white/85 backdrop-blur-sm px-3 py-1 rounded text-sm font-semibold text-[#0b663c] shadow">
                    Field Activity #{i + 1}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
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
              Join the Movement
            </h4>
            <p className="text-gray-700">
                Help women turn potential into prosperity — building a financially independent and inclusive India.
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
              href="/contact"
              className="px-6 py-3 rounded-full border border-green-600 text-green-700 font-semibold bg-white hover:bg-green-50 transition"
            >
              Volunteer / Partner
            </a>
          </div>
        </div>
      </section>
    </div>



  );
}