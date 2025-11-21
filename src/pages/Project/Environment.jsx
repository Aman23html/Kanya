import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import CountUp from "react-countup";

// Using Unsplash images as placeholders since local assets were not provided
const heroImage = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=80";
const treePlantationImg = "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1400&q=80";
const safetyImg = "https://images.unsplash.com/photo-1626139576127-450a4b12254a?auto=format&fit=crop&w=1400&q=80";
const visionImg = "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80";

const galleryImages = [
  "https://images.unsplash.com/photo-1588279102279-780b68430892?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1611273426761-53c981188759?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1588863376651-516c99651521?auto=format&fit=crop&w=1400&q=80",
];

export default function Environment() {
  // Custom Slider State
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const programs = [
    {
      id: "hariyali",
      title: "Hariyali Sakhi — Tree Plantation Movement",
      objective: "Goal: Increase green cover in rural and tribal areas through community-led plantation drives.",
      activities: [
        "Community tree plantation events",
        "“One Girl, One Tree” campaign in schools",
        "Native and medicinal plant distribution",
        "Awareness on afforestation & water conservation",
        "Tree guardianship & plantation tracking",
      ],
      img: treePlantationImg,
    },
    {
      id: "surakshit",
      title: "Surakshit Aangan — Household Safety Awareness",
      objective: "Goal: Build safer households through awareness and preventive practices.",
      activities: [
        "Fire safety and first-aid training",
        "Awareness on safe cooking practices",
        "Safe storage of LPG/kerosene",
        "Electrical safety & emergency response",
        "Promoting smoke-free kitchens (chulha improvements)",
        "Safe drinking water & sanitation practices",
      ],
      img: safetyImg,
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

      {/* 🌿 Improved Floating Leaves / Particles */}
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
              Environment Protection
            </motion.h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="font-semibold text-yellow-200">Prakriti Raksha</span> —
              Living in Harmony with Nature.
            </motion.p>

            <p className="text-lg italic mt-3 text-gray-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              “Healthy people can only thrive in healthy environments.”
            </p>
          </div>
        </div>
      </header>

    

      {/* PROGRAMS */}
      <section id="programs" className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-green-700 mt-10 text-center mb-12">
          Our Key Initiatives
        </motion.h2>

        {/* Centered Grid for 2 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {programs.map((p) => (
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
                    <h3 className="text-xl font-semibold text-emerald-700">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-gray-700 text-sm flex-grow leading-relaxed">
                      {p.objective}
                    </p>
                    <div className="mt-4 text-emerald-600 text-sm font-semibold">
                      Hover to see activities →
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div className="flip-face flip-back bg-gradient-to-br from-emerald-700 to-teal-600 rounded-3xl p-6 flex flex-col justify-center shadow-inner">
                  <h4 className="text-xl font-bold text-white mb-4 text-center">
                    Key Activities
                  </h4>
                  <ul className="space-y-2 text-white text-[15px] leading-relaxed">
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

      {/* GALLERY (Custom Slider Implementation) */}
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


      {/* CTA */}
      <section
        id="join"
        className="py-12 bg-gradient-to-r from-emerald-50 to-green-100"
      >
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-green-800">
              Join the Green Movement
            </h4>
            <p className="text-gray-700">
              Support our mission to build sustainable, safe, and eco-friendly communities.
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