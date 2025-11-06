import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Aboutus from "../components/Aboutus";
import OurProjects from "../components/OurProject";
import TestimonialCard from "../components/TestimonialCard";

const heroImages = [
  "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?auto=format&fit=crop&w=1600&q=80",
];

const projects = [
  {
    title: "Young Girls Empowerment",
    desc: "Nurturing confidence and education among rural girls of Jharkhand through mentorship, leadership, and life-skills training.",
    img: "https://source.unsplash.com/800x600/?education,girls",
  },
  {
    title: "Tribal Girl Children Care",
    desc: "Providing education, nutrition, and emotional support while preserving tribal heritage and dignity.",
    img: "https://source.unsplash.com/800x600/?tribal,children",
  },
  {
    title: "Legal Help (Nyay Sakhi)",
    desc: "Creating legal awareness and access to justice for women in rural communities through workshops and paralegal support.",
    img: "https://source.unsplash.com/800x600/?law,justice",
  },
  {
    title: "Financial Independence (Arthik Shakti)",
    desc: "Training women in financial literacy, micro-enterprise, and digital banking to build economic confidence.",
    img: "https://source.unsplash.com/800x600/?finance,women",
  },
  {
    title: "Environment Protection",
    desc: "Empowering women to lead eco-initiatives—tree plantations, waste management, and sustainable living practices.",
    img: "https://source.unsplash.com/800x600/?environment,green",
  },
  {
    title: "Mothers’ Wellness Care (Matri Sneha)",
    desc: "Caring for mothers’ physical and emotional health through wellness camps, nutrition awareness, and medical aid.",
    img: "https://source.unsplash.com/800x600/?mother,health",
  },
];

const testimonials = [
  {
    name: "Rani Kumari",
    role: "Student | Shiksha Jyoti",
    quote:
      "I was shy and struggled in school. After joining Shiksha Jyoti, I found my confidence and now dream of becoming a teacher.",
    img: "https://source.unsplash.com/200x200/?girl,student",
  },
  {
    name: "Rahul Sinha",
    role: "Volunteer | Saksham Nari",
    quote:
      "Teaching digital skills to women changed my outlook—watching them start small businesses online is true empowerment.",
    img: "https://source.unsplash.com/200x200/?man,volunteer",
  },
  {
    name: "Dr. Preeti Das",
    role: "Medical Volunteer | Swasthya Sakhi",
    quote:
      "We meet women who’ve never seen a doctor before. Listening and caring is where real healthcare begins.",
    img: "https://source.unsplash.com/200x200/?doctor,woman",
  },
  {
    name: "Savitri Devi",
    role: "SHG Member | Nari Shakti Sangathan",
    quote:
      "Starting a spice-making unit with other women taught me leadership and self-respect—that’s empowerment.",
    img: "https://source.unsplash.com/200x200/?woman,entrepreneur",
  },
];

export default function Home() {
  const [currentImg, setCurrentImg] = useState(0);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImg((p) => (p + 1) % heroImages.length),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <main className="bg-[#fefefe] text-gray-800 overflow-x-hidden">
      <Hero />
      <Aboutus />

      <OurProjects />

      <TestimonialCard />

     

      {/* DONATION CTA */}
<section className="relative py-24 bg-linear-to-r from-[#d1f7f2] via-[#e0fffa] to-[#c0f0eb] text-center overflow-hidden">
  {/* Decorative background orbs */}
  <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#00b3a4]/20 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#009688]/20 rounded-full blur-3xl animate-pulse"></div>

  <motion.h3
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="text-3xl sm:text-4xl font-bold text-[#006d6d] mb-4"
  >
    Support Our Mission
  </motion.h3>

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="max-w-3xl mx-auto text-base sm:text-lg text-gray-700 mb-10 leading-relaxed"
  >
    Every contribution fuels education, healthcare, and empowerment programs
    for women and girls in underserved communities. Together, let’s create lasting change.
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="flex justify-center gap-6 flex-wrap"
  >
    <a
      href="/donate"
      className="px-8 py-3 rounded-full bg-[#00b3a4] text-white font-semibold shadow-md hover:bg-[#009688] hover:scale-105 transition duration-300"
    >
      Donate Now
    </a>
    <a
      href="#contact"
      className="px-8 py-3 rounded-full border-2 border-[#00b3a4] text-[#00b3a4] font-semibold hover:bg-[#00b3a4] hover:text-white transition duration-300"
    >
      Volunteer With Us
    </a>
  </motion.div>
</section>


     
    </main>
  );
}
