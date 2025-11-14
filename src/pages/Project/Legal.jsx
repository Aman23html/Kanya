// src/pages/LegalHelp.jsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import CountUp from "react-countup";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

/**
 * LegalHelp — Nari Nyay Sashaktikaran (Green-themed)
 * - Cinematic hero (Ken Burns + linear overlay)
 * - Vision & quote card
 * - Impact Stats
 * - Ken Burns Swiper hero gallery (fade)
 * - Two glass fade-in program cards (Chetna & Suraksha Sakhi)
 * - Floating particles and glassy accents
 */

const slides = [
  {
    id: 1,
    title: "Chetna — Gender Equality Awareness",
    desc: "Build a gender-equal mindset within communities, schools, and families through sensitization workshops and community engagement.",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 2,
    title: "Suraksha Sakhi — Safety Awareness",
    desc: "Equip women and girls with personal, digital, and community safety skills and emergency preparedness.",
    img: "https://images.unsplash.com/photo-1555374018-13a8994ab246?auto=format&fit=crop&w=1400&q=80",
  },
];

const stats = [
  { label: "Women Reached", value: 2450 },
  { label: "Legal Awareness Sessions", value: 78 },
  { label: "Safety Workshops", value: 54 },
  { label: "Community Leaders Engaged", value: 312 },
];

export default function LegalHelp() {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-[#f0fff4] via-[#ecfff6] to-white text-gray-800 relative">
      <style>{`
        /* Ken Burns animation */
        .kenburns {
          transform-origin: center;
          animation: khKb 20s ease-in-out infinite alternate;
        }
        @keyframes khKb {
          from { transform: scale(1) translateY(0); }
          to { transform: scale(1.06) translateY(-1.8%); }
        }

        /* Flip/card helpers (used elsewhere if needed) */
        .glass-accent {
          background: linear-gradient(135deg, rgba(255,255,255,0.72), rgba(255,255,255,0.15));
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(8px);
        }

        .card-entrance {
          transition: transform .5s cubic-bezier(.2,.9,.2,1), box-shadow .3s;
        }
        .card-entrance:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(16,185,129,0.08);
        }

        /* small helper for swipe image object-fit fallback in some browsers */
        .cover-fix { object-position: center; object-fit: cover; }
      `}</style>

      {/* Floating green particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        {[...Array(12)].map((_, i) => {
          const left = `${(i * 9 + 7) % 100}%`;
          const size = 14 + (i % 5) * 10;
          const duration = 28 + (i % 4) * 6;
          const topOffset = -200 - (i % 3) * 180;
          return (
            <motion.span
              key={i}
              className="absolute rounded-full opacity-25"
              style={{
                left,
                width: size,
                height: size,
                // radial-gradient fallback for modern browsers
                background: `radial-gradient(circle at 30% 30%, rgba(16,185,129,0.22), rgba(52,211,153,0.06))`,
              }}
              initial={{ y: topOffset, rotate: Math.random() * 360 }}
              animate={{ y: 900 + Math.random() * 400, rotate: 360 }}
              transition={{ duration, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
            />
          );
        })}
      </div>

      {/* HERO */}
      <header className="relative z-10">
        <div className="min-h-[72vh] flex items-center justify-center relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(16,185,129,0.18), rgba(255,255,255,0.06)), url('https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=1600&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "contrast(0.98) saturate(0.97)",
            }}
            aria-hidden
          />

          <div className="max-w-5xl mx-auto text-center px-6 py-20 relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#14532d] via-[#0b663c] to-[#16a34a]">
              Legal Help & Awareness
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/95 max-w-3xl mx-auto">
              <span className="font-semibold text-white">Nari Nyay Sashaktikaran</span> — empowering women through legal literacy, equality, and safety awareness.
            </p>

            <motion.div
              className="mt-8 inline-block max-w-2xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white shadow-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <p className="text-lg italic leading-relaxed">
                “Know your rights. Raise your voice. Live with dignity.”
              </p>
            </motion.div>
          </div>
        </div>
      </header>

      {/* IMPACT STATS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="glass-accent rounded-2xl p-6 text-center shadow-md"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="text-3xl font-extrabold text-[#14532d]">
                <CountUp end={s.value} duration={2.6} separator="," />
              </div>
              <div className="mt-2 text-sm text-gray-700">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HERO SWIPER (green-themed fade) */}
      <section className="py-16">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          autoplay={{ delay: 4200, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          effect="fade"
          loop
          className="w-[92%] md:w-[80%] mx-auto rounded-3xl shadow-2xl overflow-hidden"
        >
          {slides.map((s) => (
            <SwiperSlide key={s.id}>
              <motion.div
                className="relative h-[420px] md:h-[520px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover kenburns cover-fix"
                  loading="lazy"
                />

                {/* overlay changed to green theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#14532d]/70 via-[#14532d]/20 to-transparent" />

                <div className="absolute left-6 md:left-10 bottom-6 md:bottom-10 bg-white/12 backdrop-blur-md border border-white/20 rounded-2xl p-5 max-w-md shadow-lg">
                  <h3 className="text-2xl font-semibold text-white drop-shadow">
                    {s.title}
                  </h3>
                  <p className="text-gray-100 text-sm mt-2 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* PROGRAMS */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <motion.h2
          className="text-3xl font-bold text-[#14532d] text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Program Pillars
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Chetna */}
          <motion.article
            className="card-entrance glass-accent rounded-2xl p-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              <div className="md:w-1/3 flex items-center justify-center bg-gradient-to-br from-[#ecfdf5] to-[#d1fae5] rounded-lg p-4">
                <div className="text-4xl">🤝</div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold text-[#0b663c]">
                  Chetna — Gender Equality Awareness
                </h3>
                <p className="mt-2 text-gray-700 font-medium">
                  Goal: Build a gender-equal mindset within communities, schools, and families.
                </p>
                <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Gender sensitization workshops for youth, men, and women</li>
                  <li>Role-play and theater-based awareness activities</li>
                  <li>School-based programs on gender roles and respect</li>
                  <li>Engaging fathers, brothers, and community leaders</li>
                  <li>Promoting equal opportunities in education and work for girls</li>
                </ul>
              </div>
            </div>
          </motion.article>

          {/* Suraksha Sakhi */}
          <motion.article
            className="card-entrance glass-accent rounded-2xl p-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              <div className="md:w-1/3 flex items-center justify-center bg-gradient-to-br from-[#ecfdf5] to-[#d1fae5] rounded-lg p-4">
                <div className="text-4xl">🛡️</div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold text-[#0b663c]">
                  Suraksha Sakhi — Safety Awareness
                </h3>
                <p className="mt-2 text-gray-700 font-medium">
                  Goal: Equip women and girls with knowledge and tools for personal and community safety.
                </p>
                <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Personal safety and self-defense workshops</li>
                  <li>Cyber safety and online harassment awareness</li>
                  <li>Safe mobility training (transport, public spaces)</li>
                  <li>Emergency response drills and safety planning</li>
                  <li>Community-based safety groups and peer networks</li>
                </ul>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-[#ecfdf5] to-[#d1fae5]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-[#14532d]">Support Nari Nyay</h4>
            <p className="text-gray-700">
              Help spread legal awareness and safety across rural & tribal communities.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="/donate"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#0b663c] to-[#16a34a] text-white font-semibold shadow hover:brightness-95 transition"
            >
              Donate
            </a>
            <a
              href="/volunteer"
              className="inline-block px-6 py-3 rounded-full border border-[#0b663c] text-[#14532d] font-semibold bg-white hover:bg-[#f0fff5] transition"
            >
              Volunteer / Partner
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
