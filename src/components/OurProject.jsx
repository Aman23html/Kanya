import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import younggirl from "../assets/younggirl.webp";
import Trible from "../assets/trible.webp";
import mother from "../assets/mother.webp";
import legal from "../assets/legal.webp";
import finance from "../assets/Finance.webp";
import volunteer from "../assets/voluenteer.webp";
import environment from "../assets/project3.webp";
import food from "../assets/food1.webp";

let swiperRef;

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
    desc: "Building entrepreneurial skills and financial literacy for women to lead independent, confident, empowered lives.",
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
      {/* Background Decorative Glows */}
      <div className="absolute -top-10 left-1/3 w-64 h-64 bg-[#88d1c3]/25 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-20 w-64 h-64 bg-[#ffb6b6]/30 rounded-full blur-3xl -z-10"></div>

      {/* Section Header */}
      <motion.h3
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="text-3xl sm:text-4xl font-extrabold text-center text-[#006666] mb-10 tracking-wide"
      >
        Our <span className="text-[#FF7F50]">Projects</span>
        <div className="w-16 h-[3px] bg-[#FF7F50]/60 mx-auto mt-2 rounded-full"></div>
      </motion.h3>

      {/* Slider Container */}
      <div className="relative max-w-6xl mx-auto px-4">

        {/* Left Button */}
        <button
          className="absolute left-0 top-1/2 z-20 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-[#FF7F50] hover:text-white transition-all"
          onClick={() => swiperRef.slidePrev()}
        >
          ‹
        </button>

        {/* Right Button */}
        <button
          className="absolute right-0 top-1/2 z-20 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-[#FF7F50] hover:text-white transition-all"
          onClick={() => swiperRef.slideNext()}
        >
          ›
        </button>

        {/* Swiper */}
        <Swiper
          onSwiper={(s) => (swiperRef = s)}
          slidesPerView={1}
          spaceBetween={30}
          loop
          centeredSlides
          pagination={{ clickable: true, el: ".custom-pagination" }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          className="pb-10"
        >
          {projects.map((proj, i) => (
            <SwiperSlide key={i}>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{
                  scale: 1.04,
                  transition: { type: "spring", stiffness: 150, damping: 12 },
                }}
                className="group bg-white 
                  rounded-2xl shadow-md border border-gray-100 
                  overflow-hidden hover:shadow-2xl 
                  transition-all duration-500
                  h-[430px] flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="text-lg sm:text-xl font-semibold text-[#004b4b] mb-2 group-hover:text-[#FF7F50] transition-colors">
                    {proj.title}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                    {proj.desc}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="custom-pagination flex justify-center mt-4 space-x-2 
          [&_.swiper-pagination-bullet]:bg-green-400! 
          [&_.swiper-pagination-bullet-active]:!bg-[#FF7F50]!
          [&_.swiper-pagination-bullet]:w-3! 
          [&_.swiper-pagination-bullet]:h-3! 
          [&_.swiper-pagination-bullet]:rounded-full!">
        </div>
      </div>
    </section>
  );
}
