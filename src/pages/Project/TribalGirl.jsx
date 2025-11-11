// src/pages/TribalGirl.jsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import CountUp from "react-countup";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

/**
 * Tribal Girl — Themed page aligned to FoodClothing.jsx design language
 * - cinematic hero (slow zoom)
 * - floating parallax leaves
 * - glass stat cards (CountUp)
 * - 3D flip cards for initiatives
 * - animated vertical timeline
 * - Ken Burns gallery (Swiper)
 * - CTA
 */

const stats = [
  { label: "Girls enrolled", value: 1240 },
  { label: "Meals / month", value: 7200 },
  { label: "Scholarships awarded", value: 86 },
  { label: "Health camps / year", value: 18 },
];

const initiatives = [
  {
    id: "vanyashree",
    title: "Vanyashree Vidya — Education",
    summary:
      "Holistic & bilingual learning, bridge courses, uniforms, and mentorship for tribal girls.",
    activities: [
      "Enrollment drives & school linkages",
      "Bridge courses for out-of-school girls",
      "Bilingual curriculum (tribal + regional languages)",
      "Uniforms, books & learning kits",
      "Scholarships & mentorship for higher education",
    ],
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1400&q=80",
    color: "from-emerald-50 to-emerald-100",
    icon: "📚",
  },
  {
    id: "poshan",
    title: "Poshan Vatika — Nutrition",
    summary:
      "Daily balanced meals, growth monitoring, kitchen gardens and supplements for better health.",
    activities: [
      "Daily nutritious meals & snacks",
      "Growth monitoring & BMI tracking",
      "Local kitchen gardens & school meals",
      "Iron/calcium supplementation drives",
      "Nutrition education & cooking workshops",
    ],
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
    color: "from-teal-50 to-cyan-50",
    icon: "🥦",
  },
  {
    id: "sanskriti",
    title: "Sanskriti — Cultural Preservation {need to decide}",
    summary:
      "Celebrating tribal art, dance & language to strengthen identity alongside learning.",
    activities: [
      "Cultural workshops & performances",
      "Local-history learning modules",
      "Craft training for livelihoods",
      "Festivals that center girls' heritage",
    ],
    img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1400&q=80",
    color: "from-green-50 to-emerald-100",
    icon: "🎨",
  },
];



export default function TribalGirl() {
  return (
    <div className="w-full overflow-hidden bg-linear-to-b from-[#f0fff5] via-[#e8fff0] to-white text-gray-800 relative">
      {/* Component-scoped CSS */}
      <style>{`
        /* Ken Burns */
        .kenburns {
          transform-origin: center;
          animation: tgKb 18s ease-in-out infinite alternate;
        }
        @keyframes tgKb {
          from { transform: scale(1) translateY(0); }
          to { transform: scale(1.06) translateY(-1.6%); }
        }

        /* 3D flip */
        .flip-3d { perspective: 1400px; }
        .flip-3d-inner { transform-style: preserve-3d; transition: transform 0.7s; }
        .flip-3d:hover .flip-3d-inner, .flip-3d:focus-within .flip-3d-inner { transform: rotateY(180deg); }
        .flip-face { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .flip-back { transform: rotateY(180deg); }

        /* glass accent */
        .glass-accent {
          background: linear-linear(135deg, rgba(255,255,255,0.62), rgba(255,255,255,0.12));
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(6px);
        }
      `}</style>

      {/* Floating leaves — parallax */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        {[...Array(8)].map((_, i) => {
          const left = `${(i * 13) % 100}%`;
          const size = 28 + (i % 4) * 14;
          const delay = Math.random() * 6;
          const duration = 28 + Math.random() * 24;
          return (
            <motion.span
              key={i}
              className="absolute opacity-8"
              style={{
                left,
                width: size,
                height: size,
                backgroundImage: "url('/assets/leaf.svg')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                transform: `translateY(-20vh)`,
              }}
              initial={{ y: -200 - Math.random() * 400, rotate: Math.random() * 360 }}
              animate={{ y: 900 + Math.random() * 400, rotate: 360 }}
              transition={{ duration, repeat: Infinity, ease: "linear", delay }}
            />
          );
        })}
      </div>

      {/* HERO — cinematic with slow zoom + animated linear overlay */}
      <header className="relative z-10">
        <div className="min-h-[72vh] flex items-center justify-center bg-fixed bg-center bg-cover relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.06 }}
            transition={{ duration: 36, repeat: Infinity, ease: "linear", repeatType: "mirror" }}
            aria-hidden
            style={{
              backgroundImage:
                "linear-linear(180deg, rgba(6,30,20,0.28), rgba(255,255,255,0.04)), url('https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1600&q=80')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              filter: "saturate(0.96) contrast(0.98)",
            }}
          />

          <motion.div
            className="absolute inset-0"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            style={{
              background: "linear-linear(120deg, rgba(40,100,50,0.04), rgba(160,220,130,0.03))",
              mixBlendMode: "screen",
            }}
            aria-hidden
          />

          <motion.div
            className="max-w-5xl mx-auto text-center px-6 py-20 relative z-10"
            initial={{ opacity: 0, y: -18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-[#114d27] via-[#2e7d32] to-[#8bc34a]">
                Tribal Girl Children Care
              </span>
            </h1>

            <motion.p className="mt-6 text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
              <span className="font-semibold text-white/90">Kanya Jagriti Foundation</span> — nurturing education, nutrition & culture for tribal girls of Jharkhand.
            </motion.p>

            <motion.div className="mt-8 inline-block max-w-2xl mx-auto bg-white/8 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-white shadow-lg"
              initial={{ scale: 0.98, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}>
              <p className="text-lg italic leading-relaxed">“Strong roots, bright futures — caring for every tribal girl child.”</p>
              <footer className="mt-3 text-sm opacity-90">Vision — education, nutrition & cultural pride.</footer>
            </motion.div>

            <motion.div className="mt-8 flex items-center justify-center gap-4"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}>
              <a href="#join" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0b663c] text-white font-semibold shadow hover:bg-[#14532d] transition transform active:scale-95">
                Join the Cause
              </a>
              <a href="#learn" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/30 text-white bg-white/6 hover:bg-white/12 transition">
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* STATS — glass cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              className="glass-accent rounded-2xl p-6 text-center shadow-md"
            >
              <div className="text-3xl font-extrabold text-[#1b5e20]">
                <CountUp end={s.value} duration={2.6} separator="," />
              </div>
              <div className="mt-2 text-sm text-gray-700">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INITIATIVES — 3D flip cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-[#155724] text-center mb-8" initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }}>
          Program Pillars & Initiatives
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((it, idx) => (
            <motion.article key={it.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.12 }}>
              <div className="flip-3d">
                <div className="flip-3d-inner rounded-3xl shadow-2xl">
                  {/* front */}
                  <div className="flip-face relative bg-white rounded-3xl md:flex overflow-hidden">
                    <div className={`md:w-1/2 p-6 flex flex-col justify-center bg-linear-to-br ${it.color}`}>
                      <div className="text-5xl mb-4">{it.icon}</div>
                      <h3 className="text-2xl font-semibold text-[#0b663c]">{it.title}</h3>
                      <p className="mt-3 text-gray-700">{it.summary}</p>
                      <div className="mt-5">
                        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0b663c] text-white text-sm shadow-sm hover:bg-[#155724] transition">
                          View activities
                        </button>
                      </div>
                    </div>

                    <div className="md:w-1/2 p-6 bg-white">
                      <img src={it.img} alt={it.title} className="w-full h-48 md:h-full object-cover rounded-lg shadow-sm kenburns" loading="lazy" onError={(e)=> e.target.src='https://via.placeholder.com/800x500?text=Image+Unavailable'} />
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold text-[#14532d]">Highlights</h4>
                        <ul className="mt-2 space-y-2 list-inside">
                          {it.activities.slice(0,4).map((a, ai) => (
                            <li key={ai} className="flex items-start gap-3 text-gray-700">
                              <span className="shrink-0 mt-1 text-green-600">•</span>
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* back */}
                  <div className="flip-face flip-back absolute inset-0 rounded-3xl bg-linear-to-br from-white/90 to-green-50 p-8">
                    <div className="h-full overflow-auto">
                      <div className="flex items-start gap-4">
                        <div className="text-5xl">{it.icon}</div>
                        <div>
                          <h3 className="text-2xl font-semibold text-[#0b663c]">{it.title}</h3>
                          <p className="mt-1 text-gray-700">{it.summary}</p>
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

              <div className="absolute -bottom-3 left-6 right-6 mx-auto h-2 rounded-full bg-linear-to-r from-green-200 to-green-400 opacity-60 blur-sm" />
            </motion.article>
          ))}
        </div>
      </section>

      

      {/* GALLERY — Ken Burns Swiper */}
      <section className="py-16 bg-linear-to-b from-[#f7fff7] to-[#e8fff0]">
        <div className="w-full px-4 md:px-8">
          <motion.h3 className="text-3xl font-bold text-[#14532d] text-center mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Glimpses — Tribal Girl Care</motion.h3>

          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            autoplay={{ delay: 3800, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            spaceBetween={20}
            slidesPerView={1.05}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              1024: { slidesPerView: 2.5, spaceBetween: 24 },
              1280: { slidesPerView: 3.2, spaceBetween: 28 },
            }}
            className="w-full"
          >
            {[
              "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1400&q=80",
              "https://images.unsplash.com/photo-1600566753190-17fdb1b4e1b8?auto=format&fit=crop&w=1400&q=80",
              "https://images.unsplash.com/photo-1544531584-60cd6e3e6e98?auto=format&fit=crop&w=1400&q=80",
              "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1400&q=80",
            ].map((src, i) => (
              <SwiperSlide key={i}>
                <motion.div className="relative h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg" whileHover={{ scale: 1.03 }} transition={{ duration: 0.4 }}>
                  <img src={src} alt={`Tribal glimpse ${i+1}`} className="w-full h-full object-cover kenburns" loading="lazy" onError={(e)=> e.target.src='https://via.placeholder.com/800x500?text=Image+Unavailable'} />
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
      <section id="join" className="py-12 bg-linear-to-r from-[#dff7e6] to-[#e8fff0]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-[#0b663c]">Support Tribal Girl Care</h4>
            <p className="text-gray-700">Join hands to support education, nutrition and cultural pride for tribal girls.</p>
          </div>

          <div className="flex gap-3">
            <a href="/donate" className="inline-block px-6 py-3 rounded-full bg-[#0b663c] text-white font-semibold shadow hover:bg-[#14532d] transition">Donate</a>
            <a href="/volunteer" className="inline-block px-6 py-3 rounded-full border border-[#0b663c] text-[#0b663c] font-semibold bg-white hover:bg-[#f0fff5] transition">Volunteer / Partner</a>
          </div>
        </div>
      </section>
    </div>
  );
}
