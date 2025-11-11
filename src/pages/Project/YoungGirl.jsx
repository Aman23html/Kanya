// src/pages/YoungGirl.jsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import CountUp from "react-countup";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

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
      title: "Hunar Vikas — Skill development",
      objective:
        "To equip girls with hands-on vocational and digital skills that improve employability, boost confidence, and offer alternative income-generation pathways.",
      activities: [
        "Tailoring and embroidery",
        "Handicraft and local art",
        "Computer literacy and digital training",
        "Spoken English and communication skills",
        "Beauty and wellness training",
      ],
      img: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "udaan",
      title: "Udaan Camps — Camp and outings",
      objective:
        "To expose girls to life beyond their immediate surroundings, helping them develop social confidence, leadership, and emotional intelligence through travel and group activities.",
      activities: [
        "Educational excursions",
        "Nature camps and treks",
        "Life skills workshops",
        "Leadership building activities",
        "Inter-state cultural exchange programs",
      ],
      img: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "nipun",
      title: "Nipun — Training and capacity building",
      objective:
        "To provide targeted training sessions to build girls’ knowledge and awareness around critical life topics, preparing them for future roles in education, employment, and community leadership.",
      activities: [
        "Legal literacy and rights awareness",
        "Menstrual hygiene and health education",
        "Digital safety and cyber awareness",
        "Social media awareness",
      ],
      img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "meriSathi",
      title: "Meri Sathi — Mental wellness program",
      objective:
        "To ensure emotional and psychological well-being among adolescent girls, who often suffer silently due to societal pressure and lack of support.",
      activities: [
        "One-on-one counseling with trained professionals",
        "Peer support groups",
        "Stress management workshops",
        "Art, music, and play therapy",
        "Safe spaces for expression and healing",
      ],
      img: "https://images.unsplash.com/photo-1584697964190-266f9b57b52d?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "swasthya",
      title: "Swasthya Saheli — Health awareness program",
      objective:
        "To promote health awareness and preventive care among adolescent girls and young women through education and community outreach.",
      activities: [
        "Menstrual hygiene management",
        "Nutrition education",
        "Sanitation and clean water workshops",
        "Regular health check-up camps",
        "Maternal and reproductive health awareness",
      ],
      img: "https://images.unsplash.com/photo-1606761568499-6d2451b23c53?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "shiksha",
      title: "Shiksha Jyoti — Education and Scholarships",
      objective:
        "To illuminate the path of underprivileged girls through access to quality education, scholarships, and mentorship.",
      activities: [
        "Tuition fee support and scholarships",
        "School and college enrollment assistance",
        "Learning materials and uniforms",
        "Digital learning access (smart devices, internet packs)",
        "Mentorship from educators and role models",
      ],
      img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "sangini",
      title: "Sangini — Fooding and Lodging",
      objective:
        "To provide nutritious meals and safe lodging to underprivileged girls, especially those living far from educational institutions or in vulnerable conditions.",
      activities: [
        "Daily nutritious meals based on dietary guidelines",
        "Hygienic, secure hostel facilities",
        "Sanitation and clean drinking water",
        "Emergency care and support",
        "Emotional support and a family-like environment",
      ],
      img: "https://images.unsplash.com/photo-1590080875832-8408be7a59f1?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-linear-to-b from-[#f0fff4] via-[#ecfdf5] to-white text-gray-800 relative">
      <style>{`
        .kenburns {
          transform-origin: center;
          animation: ygKb 20s ease-in-out infinite alternate;
        }
        @keyframes ygKb {
          from { transform: scale(1) translateY(0); }
          to { transform: scale(1.06) translateY(-1.8%); }
        }
        .flip-3d { perspective: 1400px; }
        .flip-3d-inner { transform-style: preserve-3d; transition: transform 0.7s; }
        .flip-3d:hover .flip-3d-inner { transform: rotateY(180deg); }
        .flip-face { backface-visibility: hidden; }
        .flip-back { transform: rotateY(180deg); }
        .glass-accent {
          background: linear-linear(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.15));
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(8px);
        }
      `}</style>

      {/* Floating green particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full opacity-25"
            style={{
              left: `${(i * 9 + 7) % 100}%`,
              width: 18 + (i % 5) * 12,
              height: 18 + (i % 5) * 12,
              background: "radial-linear(circle at 30% 30%, rgba(34,197,94,0.25), rgba(16,185,129,0.08))",
            }}
            initial={{ y: -200 - Math.random() * 600, rotate: Math.random() * 360 }}
            animate={{ y: 900 + Math.random() * 400, rotate: 360 }}
            transition={{ duration: 30 + Math.random() * 20, repeat: Infinity, ease: "linear" }}
          />
        ))}
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
                "linear-linear(180deg, rgba(20,83,45,0.22), rgba(255,255,255,0.08)), url('https://images.unsplash.com/photo-1531182127180-1c17c2f6fe1b?auto=format&fit=crop&w=1600&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "contrast(0.95) saturate(0.9)",
            }}
          />

          <div className="max-w-5xl mx-auto text-center px-6 py-20 relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-linear-to-r from-green-700 via-emerald-600 to-teal-500">
              Young Girls Empowerment
            </h1>
            <p className="mt-6 text-lg md:text-xl text-green-900 max-w-3xl mx-auto">
              <span className="font-semibold text-shadow-green-700">Kanya Shakti</span> — building confident, educated, and self-reliant girls who uplift generations.
            </p>
            <motion.div
              className="mt-8 inline-block max-w-2xl mx-auto bg-white/10 backdrop-blur-md border border-white/40 rounded-2xl p-6 text-green-600 shadow-xl shadow-emerald-95000"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <p className="text-lg italic leading-relaxed">“When you empower a girl, you empower generations.”</p>
            </motion.div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <a href="#join" className="px-6 py-3 rounded-full bg-linear-to-r from-green-600 to-emerald-500 text-white font-semibold shadow hover:scale-95 transition">
                Get Involved
              </a>
              <a href="#programs" className="px-6 py-3 rounded-full border border-black/40 text-green-950 bg-white/30 hover:bg-white/20 transition">
                Explore Programs
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div key={i} className="glass-accent rounded-2xl p-6 text-center shadow-md" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}>
              <div className="text-3xl font-extrabold text-emerald-700">
                <CountUp end={s.value} duration={2.6} separator="," />
              </div>
              <div className="mt-2 text-sm text-gray-700">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROGRAMS — 3D flip cards */}
      <section id="programs" className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-8">
          Program Pillars & Actions
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <motion.article key={p.id} className="flip-3d">
              <div className="flip-3d-inner rounded-3xl shadow-2xl">
                <div className="flip-face bg-white rounded-3xl md:flex overflow-hidden">
                  <div className="md:w-1/2 p-6 flex flex-col justify-center bg-linear-to-br from-emerald-50 to-green-100">
                    <h3 className="text-2xl font-semibold text-emerald-700">{p.title}</h3>
                    <p className="mt-3 text-gray-700">{p.objective}</p>
                    <button className="mt-5 px-4 py-2 rounded-full bg-linear-to-r from-green-600 to-emerald-500 text-white text-sm shadow-sm hover:brightness-95 transition">
                      View activities
                    </button>
                  </div>
                  <div className="md:w-1/2">
                    <img src={p.img} alt={p.title} className="w-full h-64 md:h-full object-cover kenburns" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 bg-linear-to-b from-[#f0fff4] to-[#ecfdf5]">
        <div className="w-full px-4 md:px-8">
          <motion.h3 className="text-3xl font-bold text-green-700 text-center mb-10">
            Glimpses — Young Girls Empowerment
          </motion.h3>

          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            autoplay={{ delay: 3800, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            spaceBetween={20}
            slidesPerView={1.05}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3.2 },
            }}
            className="w-full"
          >
            {[
              "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1400&q=80",
              "https://images.unsplash.com/photo-1598006782296-f9a5f90d5f86?auto=format&fit=crop&w=1400&q=80",
              "https://images.unsplash.com/photo-1562176558-3cb7a2a165a4?auto=format&fit=crop&w=1400&q=80",
              "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80",
            ].map((src, i) => (
              <SwiperSlide key={i}>
                <motion.div className="relative h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg" whileHover={{ scale: 1.03 }}>
                  <img src={src} alt={`YGE Glimpse ${i + 1}`} className="w-full h-full object-cover kenburns" />
                  <div className="absolute bottom-4 left-4 bg-white/70 backdrop-blur-md py-2 px-3 rounded-lg text-sm font-semibold text-emerald-700 shadow">
                    Program Glimpse #{i + 1}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="py-12 bg-linear-to-r from-emerald-50 to-green-100">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold text-green-800">Support Kanya Shakti</h4>
            <p className="text-gray-700">
              Join hands to provide skills, safety, and supportive spaces for young girls.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="/donate"
              className="px-6 py-3 rounded-full bg-linear-to-r from-green-600 to-emerald-500 text-white font-semibold shadow hover:brightness-95 transition"
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
