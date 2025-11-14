import React from "react";
import { motion } from "framer-motion";
import { Sparkles, HeartHandshake, Users, Leaf } from "lucide-react";

const Volunteer = () => {
  const cards = [
    {
      icon: <HeartHandshake className="w-10 h-10 text-lime-300" />,
      image:
        "https://images.unsplash.com/photo-1593113598332-cd7f0e22b5b5?auto=format&fit=crop&w=900&q=80",
      title: "Meaningful Engagement",
      desc: "Empower volunteers with purposeful roles supporting education, gender justice, and environment.",
    },
    {
      icon: <Users className="w-10 h-10 text-lime-300" />,
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
      title: "Leadership & Empathy",
      desc: "Build leadership, empathy, and social awareness through immersive volunteer experiences.",
    },
    {
      icon: <Leaf className="w-10 h-10 text-lime-300" />,
      image:
        "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=900&q=80",
      title: "Urban–Rural Bridge",
      desc: "Connect urban strengths with rural needs through innovative outreach initiatives.",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-lime-300" />,
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80",
      title: "Impact Tracking",
      desc: "Leverage smart systems to track impact, reward efforts & scale volunteerism.",
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-lime-300" />,
      image:
        "https://images.unsplash.com/photo-1542144612-1bf94e3eec8e?auto=format&fit=crop&w=900&q=80",
      title: "Culture of Giving",
      desc: "Inspire a compassionate movement rooted in kindness, respect, and contribution.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#fafff8] via-[#e9fdf2] to-[#e6f9ee] text-gray-800 min-h-screen">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative py-28 px-6 text-center overflow-hidden">

        {/* Glow background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,150,0.25),transparent_70%)]"
        />

        {/* Floating particles */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute top-24 right-24 w-20 h-20 bg-green-300/20 rounded-full blur-3xl"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 
            bg-gradient-to-r from-emerald-600 via-green-500 to-lime-600 
            text-transparent bg-clip-text"
        >
          Volunteer Engagement Program
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl italic font-semibold text-emerald-700"
        >
          “Nayi Soch Nayi Pehchaan”
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="max-w-3xl mx-auto mt-8 text-lg text-gray-700 leading-relaxed"
        >
          Join a movement of socially conscious citizens.  
          Volunteering isn’t just service — it transforms you.  
          <strong>“Serve. Learn. Inspire.”</strong>
        </motion.p>
      </section>

      {/* ---------------- ADVANCED CARD GRID ---------------- */}
      <section className="relative py-20 px-6">

        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16 text-emerald-700"
        >
          Program Objectives
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">

          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.06 }}
              className="relative rounded-3xl overflow-hidden group shadow-xl 
              bg-white/20 backdrop-blur-lg
              border border-emerald-200
              hover:shadow-[0_0_45px_10px_rgba(52,211,153,0.45)]
              transition-all duration-700"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-3xl">
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-56 object-cover rounded-3xl"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 1.2 }}
                />
              </div>

              {/* Card Body */}
              <div className="p-6 relative">
                <div className="mb-4">{card.icon}</div>

                <h4 className="text-xl font-bold text-emerald-800 mb-2">
                  {card.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>

              {/* Decorative bottom glow */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-green-400/40 to-transparent"></div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Volunteer;
