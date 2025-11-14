// src/pages/YoungGirl.jsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import CountUp from "react-countup";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import aware from "../../assets/aware.png";
import health from "../../assets/health.webp";
import camp from "../../assets/camp.webp";
import food from "../../assets/food.webp";
import mental from "../../assets/mental.webp";
import Skill from "../../assets/Skill.webp";

export default function YoungGirl() {
  const stats = [
    { label: "Girls Trained", value: 1280 },
    { label: "Udaan Camps", value: 42 },
    { label: "Health Sessions", value: 94 },
    { label: "Scholarships", value: 210 },
  ];

  const programs = [
    {
      id: "hunar",
      title: "Hunar Vikas — Skill Development",
      objective:
        "Empowering girls with practical skills for a sustainable and confident livelihood.",
      activities: [
        "Tailoring & Embroidery",
        "Handicrafts & Artistry",
        "Digital Literacy & Communication",
        "Beauty & Wellness",
      ],
      img: Skill,
    },
    {
      id: "udaan",
      title: "Udaan — Camps & Confidence Building",
      objective:
        "Helping girls explore the world through travel, exposure, and leadership activities.",
      activities: [
        "Educational Trips",
        "Leadership Activities",
        "Cultural Exchanges",
        "Outdoor Learning",
      ],
      img:camp,
    },
    {
      id: "nipun",
      title: "Nipun — Awareness & Capacity Building",
      objective:
        "Training girls to be self-aware, informed, and proactive leaders of tomorrow.",
      activities: [
        "Legal & Digital Literacy",
        "Health & Hygiene Awareness",
        "Cyber Safety",
      ],
      img: aware,
    },
    {
      id: "meriSathi",
      title: "Meri Sathi — Mental Wellness",
      objective:
        "Supporting emotional well-being through creative expression and counseling.",
      activities: [
        "Counseling Sessions",
        "Art & Music Therapy",
        "Peer Support Circles",
      ],
      img:mental,
    },
    {
      id: "swasthya",
      title: "Swasthya Saheli — Health & Hygiene",
      objective:
        "Promoting healthy habits and preventive care through awareness programs.",
      activities: [
        "Menstrual Hygiene Education",
        "Nutrition & Sanitation",
        "Health Camps",
      ],
      img: health,
    },
    {
      id: "shiksha",
      title: "Shiksha Jyoti — Education & Scholarships",
      objective:
        "Providing financial and mentorship support to ensure continuous education.",
      activities: [
        "Scholarships & Materials",
        "Digital Learning Support",
        "Mentorship Programs",
      ],
      img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "sangini",
      title: "Sangini — Food & Lodging Support",
      objective:
        "Providing safe accommodation and nutritious meals for girls pursuing education.",
      activities: [
        "Safe Hostel Facilities",
        "Healthy Meals",
        "Emergency Support",
      ],
      img: food,
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

        /* Swiper Pagination Custom */
        .swiper-pagination-bullet {
          background: rgba(255,255,255,0.8) !important;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin: 0 6px !important;
          transition: all 0.35s ease;
          box-shadow: 0 0 4px rgba(0,0,0,0.1);
        }
        .swiper-pagination-bullet-active {
          background: #10b981 !important;
          transform: scale(1.4);
          box-shadow: 0 0 10px #10b981;
        }
          .swiper-pagination {
  bottom: 10px !important;

}

.swiper-pagination-bullet:hover {
  background: #059669 !important;
  transform: scale(1.2);
  box-shadow: 0 0 12px #10b981;
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

{/* 🌿 Advanced Floating Particles */}
<div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
  {[...Array(25)].map((_, i) => {
    const size = 6 + Math.random() * 24;
    const duration = 12 + Math.random() * 25;
    const delay = Math.random() * 8;
    const left = Math.random() * 100;
    const colorOptions = [
      "rgba(16,185,129,0.4)",  // emerald
      "rgba(34,197,94,0.35)",  // green
      "rgba(132,204,22,0.3)",  // lime
      "rgba(20,184,166,0.35)", // teal
      "rgba(5,150,105,0.35)",  // darker emerald
    ];
    const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];

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
          boxShadow: `0 0 ${size * 1.2}px ${color}`,
          filter: "blur(0.8px)",
        }}
        initial={{
          y: Math.random() * -200,
          opacity: 0,
          x: Math.random() * 50 - 25,
          scale: 0.8 + Math.random() * 0.5,
        }}
        animate={{
          y: "110vh",
          opacity: [0.1, 0.5, 0.2],
          x: [
            `${left + Math.random() * 20 - 10}%`,
            `${left + Math.random() * 30 - 15}%`,
          ],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration,
          repeat: Infinity,
          delay,
          ease: "easeInOut",
        }}
      />
    );
  })}
</div>


      {/* HERO */}
      <header className="relative z-10">
        <div className="min-h-[80vh] flex items-center justify-center relative">
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(20,83,45,0.45), rgba(255,255,255,0.1)), url('https://images.unsplash.com/photo-1531182127180-1c17c2f6fe1b?auto=format&fit=crop&w=1600&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="max-w-5xl mx-auto text-center px-6 py-20 relative z-10">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Young Girls Empowerment
            </motion.h1>
            <motion.p
              className="mt-6 text-lg md:text-xl text-green-900 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="font-semibold text-emerald-700">Kanya Shakti</span> — Building a generation of confident, educated, and self-reliant girls.
            </motion.p>
            <p className="text-lg italic mt-3 text-green-800">
              “When you empower a girl, you empower generations.”
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <a
                href="#join"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Get Involved
              </a>
              <a
                href="#programs"
                className="px-8 py-3 rounded-full border border-emerald-600 text-green-800 bg-white/40 hover:bg-white/60 backdrop-blur-sm transition-all"
              >
                Explore Programs
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="bg-white/80 backdrop-blur-md border border-emerald-100 rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="text-4xl font-extrabold text-emerald-700">
                <CountUp end={s.value} duration={2.6} separator="," />
              </div>
              <div className="mt-2 text-sm text-gray-700 font-medium">
                {s.label}
              </div>
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
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 bg-gradient-to-b from-[#f0fff4] to-[#ecfdf5]">
        <div className="w-full px-4 md:px-8">
          <motion.h3 className="text-3xl font-bold text-green-700 text-center mb-10">
            Glimpses of Empowerment
          </motion.h3>
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            spaceBetween={20}
            slidesPerView={1.05}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3.2 },
            }}
            className="w-full  py-10 h-110"
          >
            {[
              "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1400&q=80",
              "https://images.unsplash.com/photo-1598006782296-f9a5f90d5f86?auto=format&fit=crop&w=1400&q=80",
              "https://images.unsplash.com/photo-1562176558-3cb7a2a165a4?auto=format&fit=crop&w=1400&q=80",
              "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80",
            ].map((src, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  className="relative h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl "
                  whileHover={{ scale: 1.04 }}
                >
                  <img
                    src={src}
                    alt={`Glimpse ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/70 backdrop-blur-md py-2 px-3 rounded-lg text-sm font-semibold text-emerald-700 shadow">
                    Glimpse #{i + 1}
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
              Support Kanya Shakti
            </h4>
            <p className="text-gray-700">
              Join hands to provide skills, safety, and supportive spaces for
              young girls.
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
              Volunteer / Partner
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
