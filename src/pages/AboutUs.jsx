import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

// Import your team images
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";
import aboutImg from "../assets/about.jpg"; // Add your foundation image

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const AboutUs = () => {
  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const team = [
    { name: "Anita Sharma", role: "Founder & Director", img: team1 },
    { name: "Rohit Kumar", role: "Program Coordinator", img: team2 },
    { name: "Pooja Singh", role: "Outreach Head", img: team3 },
    { name: "Amit Verma", role: "Financial Advisor", img: team4 },
  ];

  return (
    <div className="bg-[#f9fafb] text-gray-800">
      {/* HERO / WHO WE ARE */}
<section className="pt-45 sm:pt-44 pb-20 sm:pb-28">
  <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-[#008080] mb-6">
        Who We Are
      </h2>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        <strong>Kanya Jagriti Foundation</strong> is a Jharkhand-based
        non-governmental organization committed to empowering and uplifting
        women and girls. We envision a more inclusive society where every
        woman has equal access to opportunities, education, and dignity.
      </p>
      <p className="text-lg leading-relaxed text-gray-700">
        Our initiatives focus on skill development, education, health
        awareness, legal support, and gender equality — fostering
        self-reliance and confidence in underserved communities.
      </p>
    </motion.div>

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative"
    >
      <img
        src={aboutImg}
        alt="About Foundation"
        className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-teal-500/10 rounded-3xl blur-3xl -z-10"></div>
    </motion.div>
  </div>
</section>

      {/* VISION & MISSION */}
      <section className="py-2 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-4xl font-bold text-[#008080] mb-14"
          >
            Our Vision & Mission
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="p-8 rounded-2xl bg-linear-to-br from-[#e0f7f5] to-[#ffffff] shadow-lg hover:shadow-2xl transition-all duration-700"
            >
              <h4 className="text-2xl font-semibold text-[#004b4b] mb-4">
                Our Vision
              </h4>
              <p className="text-gray-700 text-base leading-relaxed">
                To create a world where women and girls are empowered, educated,
                and valued equally — fostering a culture of respect, inclusion,
                and opportunity for all.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="p-8 rounded-2xl bg-linear-to-br from-[#e6f9f8] to-[#ffffff] shadow-lg hover:shadow-2xl transition-all duration-700"
            >
              <h4 className="text-2xl font-semibold text-[#004b4b] mb-4">
                Our Mission
              </h4>
              <p className="text-gray-700 text-base leading-relaxed">
                To uplift women through education, skill training, health
                awareness, and legal empowerment — enabling them to lead
                independent and dignified lives while contributing to community
                growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="py-24 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-4xl font-bold text-[#008080] mb-14"
          >
            Our Dedicated Team
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={i * 0.1}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-3"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-[#004b4b] mb-2">
                    {member.name}
                  </h4>
                  <p className="text-gray-600 text-sm font-medium">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
