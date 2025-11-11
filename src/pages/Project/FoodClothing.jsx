// src/pages/FoodClothing.jsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import CountUp from "react-countup";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

/**
 * Enhanced Jeevan Aadhar — Food & Clothing page
 * - cinematic hero with animated linear + slow background zoom
 * - floating elements (parallax leaves)
 * - glassmorphism stat cards with CountUp
 * - interactive flip cards for initiatives
 * - animated vertical timeline
 * - Ken Burns gallery (swiper)
 * - improved CTA
 *
 * Replace or tune images/icons/colors as needed.
 */

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
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1400&q=80",
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
    img: "https://images.unsplash.com/photo-1570215170876-20b4e92b7c03?auto=format&fit=crop&w=1400&q=80",
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
    goal:
      "Provide timely medical help and health awareness to underserved women.",
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

const steps = [
  "Community Needs Assessment",
  "Local Partnerships (volunteers, clinics, kitchens)",
  "Resource distribution & camps",
  "Follow-up & rehabilitation",
];

export default function FoodClothing() {
  return (
    <div className="w-full overflow-hidden bg-linear-to-b from-[#f0fff5] via-[#e8fff0] to-white text-gray-800 relative">
      {/* ----- Component-scoped CSS for small effects ----- */}
      <style>{`
        /* Ken Burns */
        .kenburns {
          transform-origin: center;
          animation: kbZoom 16s ease-in-out infinite alternate;
        }
        @keyframes kbZoom {
          from { transform: scale(1) translateY(0); }
          to { transform: scale(1.07) translateY(-1.8%); }
        }

        /* 3D flip card */
        .flip-3d {
          perspective: 1400px;
        }
        .flip-3d-inner {
          transform-style: preserve-3d;
          transition: transform 0.7s;
        }
        .flip-3d:hover .flip-3d-inner, .flip-3d:focus-within .flip-3d-inner {
          transform: rotateY(180deg);
        }
        .flip-face {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-back {
          transform: rotateY(180deg);
        }

        /* subtle glass border accent */
        .glass-accent {
          background: linear-linear(135deg, rgba(255,255,255,0.55), rgba(255,255,255,0.12));
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(6px);
        }
      `}</style>

      {/* Floating decor - soft shapes (parallax) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        {[...Array(7)].map((_, i) => {
          const left = `${Math.random() * 100}%`;
          const size = 32 + Math.random() * 48;
          const delay = Math.random() * 8;
          const duration = 28 + Math.random() * 36;
          return (
            <motion.span
              key={i}
              className="absolute opacity-10"
              style={{
                left,
                width: size,
                height: size,
                backgroundImage: "url('/assets/leaf.svg')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                transform: `translateY(-20vh)`,
              }}
              initial={{ y: -200 - Math.random() * 800 }}
              animate={{ y: 900 + Math.random() * 400 }}
              transition={{ duration, repeat: Infinity, ease: "linear", delay }}
            />
          );
        })}
      </div>

      {/* HERO */}
      <header className="relative z-10">
        <div className="min-h-[72vh] flex items-center justify-center bg-fixed bg-center bg-cover relative overflow-hidden">
          {/* background slow zoom (motion) */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.06 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear", repeatType: "mirror" }}
            aria-hidden
            style={{
              backgroundImage:
                "linear-linear(180deg, rgba(6, 30, 20, 0.32), rgba(255,255,255,0.08)), url('https://images.unsplash.com/photo-1600456899121-9b247fae2cfc?auto=format&fit=crop&w=1600&q=80')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              filter: "saturate(0.95) contrast(0.98)",
            }}
          />

          {/* subtle animated linear overlay */}
          <motion.div
            className="absolute inset-0"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{
              background:
                "linear-linear(120deg, rgba(30,90,40,0.06), rgba(140,200,120,0.03))",
              mixBlendMode: "screen",
            }}
            aria-hidden
          />

          <motion.div
            className="max-w-5xl mx-auto text-center px-6 py-20 relative"
            initial={{ opacity: 0, y: -18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-[#114d27] via-[#2e7d32] to-[#8bc34a]">
                Jeevan Aadhar
              </span>
            </h1>

            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-100 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Food, Clothing, Shelter & Medical Help — ensuring dignity, care, and a stable foundation for vulnerable women and girls in Jharkhand.
            </motion.p>

            <motion.div
              className="mt-8 inline-block text-left max-w-2xl mx-auto bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-white shadow-lg"
              initial={{ scale: 0.98, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg italic leading-relaxed">
                “Before empowerment comes care. Before dreams comes dignity.”
              </p>
              <footer className="mt-3 text-sm opacity-90">
                Vision — build a society where every woman and girl feels seen, supported, and secure.
              </footer>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center justify-center gap-4"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="/donate"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0b663c] text-white font-semibold shadow hover:bg-[#14532d] transition transform active:scale-95"
              >
                Donate Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-90">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/30 text-white bg-white/6 hover:bg-white/12 transition"
              >
                Volunteer / Partner
              </a>
            </motion.div>

            {/* subtle scroll hint */}
            <motion.div
              className="mt-8 text-white opacity-80"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2.2 }}
              aria-hidden
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* STATS (glass) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.12 }}
              className="glass-accent rounded-2xl p-6 text-center shadow-md"
              aria-hidden={false}
            >
              <div className="text-3xl font-extrabold text-[#1b5e20]">
                <CountUp end={s.value} duration={2.5} separator="," />
              </div>
              <div className="mt-2 text-sm text-gray-700">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INITIATIVES — 3D flip cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#155724] text-center mb-8"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Program Pillars & Actions
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((it, i) => (
            <motion.article
              key={it.id}
              className="relative rounded-3xl overflow-visible border border-transparent"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="flip-3d">
                <div className="flip-3d-inner rounded-3xl shadow-2xl">
                  {/* front face */}
                  <div className="flip-face relative bg-white rounded-3xl md:flex overflow-hidden">
                    <div className={`md:w-1/2 p-6 flex flex-col justify-center bg-linear-to-br ${it.color}`}>
                      <div className="text-5xl mb-4">{it.icon}</div>
                      <h3 className="text-2xl font-semibold text-[#0b663c]">{it.title}</h3>
                      <p className="mt-3 text-gray-700">{it.goal}</p>
                      <div className="mt-5">
                        <button
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0b663c] text-white text-sm shadow-sm hover:bg-[#155724] transition"
                          aria-label={`Open details for ${it.title}`}
                        >
                          View activities
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-90">
                            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="md:w-1/2 p-6 bg-white">
                      <img
                        src={it.img}
                        alt={it.title}
                        className="w-full h-48 md:h-full object-cover rounded-lg shadow-sm kenburns"
                        loading="lazy"
                        onError={(e) => (e.target.src = "https://via.placeholder.com/800x500?text=Image+Unavailable")}
                      />
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold text-[#14532d]">Key Activities</h4>
                        <ul className="mt-2 space-y-2 list-inside">
                          {it.activities.map((act, ai) => (
                            <li key={ai} className="flex items-start gap-3 text-gray-700">
                              <span className="shrink-0 mt-1 text-green-600">•</span>
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* back face (activities in focused view) */}
                  <div className="flip-face flip-back absolute inset-0 rounded-3xl bg-linear-to-br from-white/90 to-green-50 p-8">
                    <div className="h-full overflow-auto">
                      <div className="flex items-start gap-4">
                        <div className="text-5xl">{it.icon}</div>
                        <div>
                          <h3 className="text-2xl font-semibold text-[#0b663c]">{it.title}</h3>
                          <p className="mt-1 text-gray-700">{it.goal}</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h5 className="font-semibold text-[#14532d]">How we do it</h5>
                        <ul className="mt-3 grid gap-2">
                          {it.activities.map((act, ai) => (
                            <li key={ai} className="text-gray-700 py-2 px-3 rounded-lg bg-white/60 border">
                              {ai + 1}. {act}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 flex gap-3">
                        <a href={`/programs/${it.id}`} className="px-4 py-2 rounded-full bg-[#0b663c] text-white inline-block">More</a>
                        <a href="/volunteer" className="px-4 py-2 rounded-full border border-[#0b663c] text-[#0b663c] bg-white">Join</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* subtle bottom banner */}
              <div className="absolute -bottom-3 left-6 right-6 mx-auto h-2 rounded-full bg-linear-to-r from-green-200 to-green-400 opacity-60 blur-sm" />
            </motion.article>
          ))}
        </div>
      </section>

      {/* PROCESS / TIMELINE */}
      <section className="bg-linear-to-b from-[#f7fff7] to-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h3 className="text-2xl font-bold text-[#0b6338] text-center mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            How We Deliver — Process & Partnerships
          </motion.h3>

          <div className="relative">
            {/* vertical connector */}
            <div className="absolute left-6 top-6 bottom-6 w-1 bg-linear-to-b from-green-300 to-green-500 rounded" aria-hidden />
            <div className="space-y-6 md:pl-16 pl-12">
              {steps.map((s, idx) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.12 }}
                  className="relative bg-white/90 rounded-2xl p-6 shadow-sm border"
                >
                  <span className="absolute left-22 top-6 w-12 h-12 bg-white rounded-full flex items-center justify-center border border-green-200 shadow">
                    <div className="text-green-600 font-bold">{idx + 1}</div>
                  </span>
                  <div className="font-semibold text-lg text-green-700">{s}</div>
                  <p className="mt-2 text-gray-600 text-sm">
                    {idx === 0 &&
                      "We start by listening — mapping needs in each village and community."}
                    {idx === 1 &&
                      "Local partners, volunteers, kitchens, and clinics that help mobilize resources."}
                    {idx === 2 && "Organized distribution, meal services, health & shelter camps."}
                    {idx === 3 && "Follow-up, rehabilitation, referrals and long-term support."}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
{/* GALLERY / SWIPER — Full-width immersive view */}
<section className="py-16 bg-linear-to-b from-[#f7fff7] to-[#e8fff0]">
  <div className="w-full px-2  md:px-4">
    <motion.h3
      className="text-3xl font-bold text-[#14532d] text-center mb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      Glimpses — Jeevan Aadhar in Action
    </motion.h3>

    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3800, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      spaceBetween={0}
      centeredSlides={false}
      slidesPerView={1.1}
      breakpoints={{
    640: { slidesPerView: 1.5, spaceBetween: 20 },
    1024: { slidesPerView: 2.5, spaceBetween: 24 },
    1280: { slidesPerView: 3.2, spaceBetween: 28 },
    1536: { slidesPerView: 3.6, spaceBetween: 32 },
      }}
      className="w-full "
    >
      {[
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1598006782296-f9a5f90d5f86?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1584268137245-1f8ffd0bb8f2?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1562176558-3cb7a2a165a4?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=1400&q=80",
      ].map((src, i) => (
        <SwiperSlide key={i}>
          <motion.div
            className="relative h-72  md:h-80 lg:h-96 xl:h-90 rounded-xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={src}
              alt={`Jeevan Aadhar ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) =>
                (e.target.src =
                  'https://via.placeholder.com/800x500?text=Image+Unavailable')
              }
            />
            <div className="absolute bottom-4 left-4 bg-white/70 backdrop-blur-md py-2 px-3 rounded-lg text-sm font-semibold text-[#0b663c] shadow">
              Field Activity #{i + 1}
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>


      {/* CTA */}
      <section className="py-12 bg-linear-to-r from-[#dff7e6] to-[#e8fff0]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-[#0b663c]">Support Jeevan Aadhar</h4>
            <p className="text-gray-700">Join hands to provide care, dignity, and a foundation for long-term empowerment.</p>
          </div>

          <div className="flex gap-3">
            <a
              href="/donate"
              className="inline-block px-6 py-3 rounded-full bg-[#0b663c] text-white font-semibold shadow hover:bg-[#14532d] transition transform active:scale-95"
            >
              Donate
            </a>
            <a
              href="/contact"
              className="inline-block px-6 py-3 rounded-full border border-[#0b663c] text-[#0b663c] font-semibold bg-white hover:bg-[#f0fff5] transition"
            >
              Volunteer / Partner
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
