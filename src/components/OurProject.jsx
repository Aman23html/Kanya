import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import younggirl from "../assets/projects/Young_girl.webp";
import Trible from "../assets/projects/Trible.webp";
import mother from "../assets/projects/Mother.webp";
import legal from "../assets/projects/Legal.webp";
import finance from "../assets/projects/Finance.webp";
import volunteer from "../assets/projects/Voluenteer.webp";
import environment from "../assets/project3.webp";
import food from "../assets/projects/food1.webp";

const projects = [
  {
    title: "Young Girls Empowerment",
    desc: "Empowering adolescent girls through education, skill development, health awareness, and emotional support to help them become confident, self-reliant changemakers.",
    img: younggirl,
  },
  {
    title: "Tribal Girl Children Care",
    desc: "Supporting tribal girl children by ensuring education, nutrition, and inclusion — while preserving their cultural heritage and fostering empowerment.",
    img: Trible,
  },
  {
    title: "Food, Clothing, Shelter & Medical Help",
    desc: "Providing essential needs and healthcare for underprivileged women and girls with compassion and dignity.",
    img: food,
  },
  {
    title: "Environment Protection",
    desc: "Promoting eco-conscious living through tree plantations, waste management, and sustainability awareness led by women and communities.",
    img: environment,
  },
  {
    title: "Legal Help (Nari Nyay Sashaktikaran)",
    desc: "Promoting women's rights and legal awareness to create a just, equal, and safe environment for all women and girls.",
    img: legal,
  },
  {
    title: "Financial Independence (Arthik Shakti)",
    desc: "Building entrepreneurial skills and financial literacy for women to lead independent, confident, and empowered lives.",
    img: finance,
  },
  {
    title: "Volunteer Engagement Program",
    desc: "Training and engaging volunteers, students, and community leaders to participate in social upliftment activities across Jharkhand.",
    img: volunteer,
  },
  {
    title: "Mothers’ Wellness Care (Matri Sneha)",
    desc: "Focusing on the health, nutrition, and emotional well-being of mothers — the heart of every family and society.",
    img: mother,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function OurProjects() {
  return (
    <section
      id="projects"
      className="relative py-8 sm:py-10 bg-linear-to-b from-[#f9fcfd] to-[#ecf7f5] overflow-hidden"
    >
      {/* Soft glowing backgrounds */}
      <div className="absolute -top-10 left-1/3 w-72 h-72 bg-[#88d1c3]/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-20 w-72 h-72 bg-[#ffb6b6]/25 rounded-full blur-3xl -z-10"></div>

      {/* Section heading */}
      <motion.h3
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-center text-[#006666] mb-14"
      >
        Our Projects
      </motion.h3>

      {/* Swiper Carousel */}
      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          loop
          centeredSlides
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Autoplay]}
          className="pb-12"
        >
          {projects.map((proj, i) => (
            <SwiperSlide key={i}>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 200, damping: 14 },
                }}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Section */}
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-lg sm:text-xl font-semibold text-[#004b4b] mb-3 group-hover:text-[#ff7f50] transition-colors duration-300">
                    {proj.title}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {proj.desc}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
