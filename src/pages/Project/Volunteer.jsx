import React from "react";
import { motion } from "framer-motion";

const Volunteer = () => {
  const cards = [
    {
      image: "https://images.unsplash.com/photo-1593113598332-cd7f0e22b5b5?auto=format&fit=crop&w=800&q=80",
      title: "Meaningful Engagement",
      desc: "Engage volunteers in impactful roles supporting Kanya Jagriti’s initiatives like gender justice, education, and environment.",
    },
    {
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      title: "Leadership & Empathy",
      desc: "Develop leadership, empathy, and social awareness among youth through structured volunteering programs.",
    },
    {
      image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=80",
      title: "Urban–Rural Bridge",
      desc: "Bridge the gap between urban resources and rural realities through mentorship and innovative outreach.",
    },
    {
      image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80",
      title: "Impact Tracking",
      desc: "Use data-driven systems to track social impact, recognize volunteers’ efforts, and inspire consistent participation.",
    },
    {
      image: "https://images.unsplash.com/photo-1542144612-1bf94e3eec8e?auto=format&fit=crop&w=800&q=80",
      title: "Culture of Giving",
      desc: "Foster a lifestyle of compassion, respect, and contribution through a community-driven volunteer movement.",
    },
  ];

  return (
    <div className="bg-linear-to-b from-[#fafff8] via-[#e9fdf2] to-[#e6f9ee] text-gray-800 overflow-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-linear-to-r from-emerald-600 via-green-500 to-lime-600 text-transparent bg-clip-text"
        >
          Volunteer Engagement Program
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl italic font-semibold text-emerald-700"
        >
          “Nayi Soch Nayi Pehchaan”
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="max-w-3xl mx-auto mt-8 text-lg text-gray-700 leading-relaxed"
        >
          The vision of this program is to build a movement of socially conscious citizens 
          who find purpose and pride in serving communities. Volunteering isn’t just service — 
          it’s transformation. <strong>“Serve. Learn. Inspire.”</strong>
        </motion.p>

        {/* Glow accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-20 left-1/2 -translate-x-1/2 w-120 h-120 bg-linear-to-tr from-green-300/30 to-lime-200/30 rounded-full blur-3xl"
        />
      </section>

      {/* Pinterest-style Objectives Section */}
      <section className="relative py-20 px-6">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16 text-emerald-700"
        >
          Program Objectives
        </motion.h3>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-3xl shadow-lg group break-inside-avoid bg-white"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto rounded-3xl object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Overlay Hover */}
              <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-emerald-900/80 via-emerald-700/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 p-6">
                <motion.h4
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl font-bold text-lime-200 mb-2"
                >
                  {card.title}
                </motion.h4>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-sm text-green-50 leading-relaxed"
                >
                  {card.desc}
                </motion.p>
              </div>

              {/* Border Glow on hover */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-green-200 transition-all duration-700 group-hover:shadow-[0_0_40px_6px_rgba(52,211,153,0.4)]" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
