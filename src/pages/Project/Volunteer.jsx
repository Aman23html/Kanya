import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Vol1 from "../../assets/Voluenteer/Vol1.webp";
import Vol2 from "../../assets/Voluenteer/Vol2.webp";

// Placeholder Images
const heroImage = Vol1;
const visionImg = "https://images.unsplash.com/photo-1529390003868-6c01d73923f6?auto=format&fit=crop&w=1400&q=80";

// Objective Images
const img1 = Vol2;
const img2 = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80";
const img3 = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80";
const img4 = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80";
const img5 = "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80";

const galleryImages = [
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1400&q=80",
];

export default function Volunteer() {
  // Custom Slider State
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const objectives = [
    {
      id: 1,
      title: "Meaningful Engagement",
      desc: "To engage volunteers in meaningful roles supporting Kanya Jagriti programs.",
      details: ["Education Support", "Skill Training", "Mentorship"],
      img: img1,
    },
    {
      id: 2,
      title: "Leadership & Empathy",
      desc: "To develop leadership, empathy, and social awareness among youth.",
      details: ["Youth Workshops", "Community Leading", "Soft Skills"],
      img: img2,
    },
    {
      id: 3,
      title: "Urban–Rural Bridge",
      desc: "To bridge the gap between urban resources and rural realities.",
      details: ["Resource Sharing", "Cultural Exchange", "Networking"],
      img: img3,
    },
    {
      id: 4,
      title: "Impact Tracking",
      desc: "To provide structured volunteering opportunities with impact tracking.",
      details: ["Data Monitoring", "Progress Reports", "Feedback Loops"],
      img: img4,
    },
    {
      id: 5,
      title: "Culture of Giving",
      desc: "To create a culture of giving and grassroots community service.",
      details: ["Donation Drives", "Service Camps", "Awareness"],
      img: img5,
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#fafff8] via-[#e9fdf2] to-white text-gray-800 mt-10">
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
              backgroundImage: `linear-gradient(180deg, rgba(6,30,20,0.6), rgba(6,30,20,0.2)), url(${heroImage})`,
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
              Volunteer Engagement
            </motion.h1>

            <motion.h2
              className="mt-4 text-2xl md:text-3xl font-bold text-yellow-200 drop-shadow-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              “Nayi Soch Nayi Pehchaan”
            </motion.h2>

            <motion.p
              className="mt-6 text-lg md:text-xl text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Join a movement of socially conscious citizens. Volunteering isn’t just service — it transforms you.
            </motion.p>

           
          </div>
        </div>
      </header>

     

      {/* OBJECTIVES (Flip Cards) */}
      <section id="objectives" className="max-w-7xl mt-10 mx-auto px-6 md:px-12 py-20">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-12">
          Program Objectives
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {objectives.map((obj) => (
            <div key={obj.id} className="flip-3d h-[400px]">
              <div className="flip-3d-inner">
                {/* FRONT */}
                <div className="flip-face bg-white/90 backdrop-blur-md border border-emerald-100 rounded-3xl overflow-hidden flex flex-col">
                  <img
                    src={obj.img}
                    alt={obj.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-emerald-700">
                      {obj.title}
                    </h3>
                    <p className="mt-3 text-gray-700 text-sm flex-grow leading-relaxed">
                      {obj.desc}
                    </p>
                    <div className="mt-4 text-emerald-600 text-sm font-semibold">
                      Hover for details →
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div className="flip-face flip-back bg-gradient-to-br from-emerald-700 to-teal-600 rounded-3xl p-6 flex flex-col justify-center shadow-inner">
                  <h4 className="text-lg font-bold text-white mb-4 text-center">
                    Focus Areas
                  </h4>
                  <ul className="space-y-3 text-white text-[15px] leading-relaxed text-center">
                    {obj.details.map((item, idx) => (
                       <li key={idx} className="border-b border-white/20 pb-1 last:border-0">
                         {item}
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
            Glimpses of Volunteering
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
                    Volunteers in Action
                   </span>
                   <h4 className="text-2xl font-bold drop-shadow-lg">Making a Difference</h4>
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
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-green-800">
              Ready to Serve?
            </h4>
            <p className="text-gray-700">
              Join us in bridging the gap between urban resources and rural realities.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="/join-us"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold shadow hover:brightness-95 transition"
            >
              Become a Volunteer
            </a>
            <a
              href="/contact"
              className="px-6 py-3 rounded-full border border-green-600 text-green-700 font-semibold bg-white hover:bg-green-50 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}