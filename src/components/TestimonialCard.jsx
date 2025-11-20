import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-coverflow";

import test from "../assets/test.png";
import Kumari from "../assets/kumari.webp";
import Payal from "../assets/Payal.webp";
import Navya from "../assets/Navya.webp";
import Mona from "../assets/Mona.webp";
import Sumitra from "../assets/Sumitra.webp";

const testimonials = [

  // 🌸 New Testimonials added exactly as provided
  {
    name: "Mona Singh",
    role: "Environmental Engineer Trainee, KCCL, Bhubaneswar, Odisha | Graduate, IIT Dhanbad",
    quote:
      "Kanya Jagriti Foundation is doing truly remarkable work towards empowering women and helping them build a brighter, more confident future. Their commitment to education, awareness, and self-reliance reflects a deep sense of purpose and compassion. It is heartwarming to see how their efforts are bringing real change in the lives of women who only needed an opportunity to shine. As a woman, I feel inspired by their vision and dedication. My heartfelt gratitude to the entire Kanya Jagriti team for their tireless work and unwavering spirit. I am very happy to be part of it and I wish them continued strength and success in their journey of spreading hope and transforming lives.",
    program: "Supporter & Well-Wisher",
    img: Mona,
  },
  {
    name: "Navya Sree",
    role: "Manager, EMD, Tata Steel, Jamshedpur | B.Tech, IIT (ISM) Dhanbad",
    quote:
      "Women have always been the lifeline of our society — the strength behind families and communities. Now, it is time to rise again and rewrite that true identity with confidence and equality. Kanya Jagriti Foundation is doing remarkable work in this direction by empowering women through education, skill development, and awareness. Their diverse initiatives not only provide opportunities but also nurture self-belief and independence among women from all walks of life. It’s truly inspiring to see such dedicated efforts creating real and lasting change. My heartfelt appreciation and best wishes to the entire Kanya Jagriti team for their noble mission and impact.",
    program: "Supporter & Mentor",
    img: Navya,
  },
  {
    name: "Kumari Bulti Ghar",
    role: "Software Developer Senior Analyst, NTT DATA",
    quote:
      "Kanya Jagriti Foundation is doing commendable work in supporting tribal communities and women through education, healthcare, skill development, and essential resources like food and clothing. Their initiatives empower women and underserved communities, creating lasting impact and hope for a better future. I am truly inspired by the foundation’s dedication and the holistic approach they take to uplift lives. Their work is a powerful reminder of how focused efforts can bring meaningful change and opportunities to those who need it most.",
    program: "Supporter & Advocate for Women Empowerment",
    img: Kumari,
  },
  {
    name: "Payal Modi",
    role: "IT Analyst, TCS",
    quote:
      "Kanya Jagriti Foundation is setting a remarkable example of holistic care for women. From nurturing child health and providing nutritious meals to supporting education, scholarships, legal guidance, and financial independence, their initiatives touch every aspect of a woman’s journey. It is inspiring to see an organization address not just immediate needs, but the long-term growth and confidence of women, creating real opportunities and transforming lives for a brighter, more equal future. I am proud to support and be associated with their incredible mission.",
    program: "Contributor & Supporter",
    img: Payal,
  },
  {
    name: "Sumitra Kumari Jayswal",
    role: "Software Engineer, LTIMindtree | B.Tech, Institute of Technical Education & Research (ITER), Odisha",
    quote:
      "Being associated with Kanya Jagriti Foundation has been a truly inspiring experience. The foundation’s work toward empowering women and girls through education, skill training, and awareness programs has shown me how change really begins at the community level. I’ve seen women gain confidence, discover their potential, and take charge of their own futures — and that is incredibly powerful to witness. The dedication of the team and volunteers is truly heartwarming. Every initiative reflects hope, compassion, and the belief that every woman deserves the chance to grow and thrive. I’m proud to support an organization that is not just transforming lives but also inspiring a more equal and inclusive society.",
    program: "Supporter & Volunteer",
    img: Sumitra,
  },
];

const TestimonialCard = () => {
  const swiperRef = useRef(null);

  return (
    <section className="relative py-24 bg-linear-to-b from-[#e6faf6] via-[#fffaf5] to-white overflow-hidden">

      {/* ==== Heading & Subheading ==== */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl sm:text-5xl font-extrabold text-[#004f4f] mb-4"
      >
        Voices of Impact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center text-gray-600 text-lg mb-12"
      >
        Real people. Real stories. One shared mission — women’s empowerment.
      </motion.p>

      {/* ==== Swiper Section ==== */}
      <Swiper
        modules={[EffectCoverflow, Navigation]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 30,
          slideShadows: false,
          stretch: 0,
          depth: 120,
          modifier: 2,
        }}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        pagination={false}   // 🔥 Removed dots
        navigation={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto px-6"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="
                bg-white/90 backdrop-blur-xl 
                border border-teal-100 
                rounded-3xl shadow-lg hover:shadow-teal-200/60 
                transition-all duration-500 
                flex flex-col items-center text-center 
                p-6 
                h-[400px]     /* 🔥 UNIFORM CARD HEIGHT */
                max-h-[480px]
              "
            >
              {/* Avatar */}
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-teal-300 blur-2xl rounded-full opacity-20"></div>
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full border-4 border-[#00a0a0] object-cover shadow-md relative z-10"
                />
              </div>

              {/* Name */}
              <h4 className="text-lg font-semibold text-[#004b4b]">{t.name}</h4>

              {/* Role */}
              <p className="text-sm text-gray-500 mb-3 italic line-clamp-2">{t.role}</p>

              {/* Quote (scrollable if long) */}
              <blockquote
                className="
                  text-gray-700 text-sm leading-relaxed 
                  max-w-sm mx-auto 
                  overflow-y-auto 
                  px-2
                  mb-3
                  h-[140px]   /* 🔥 Fixed quote area */
                "
              >
                <span className="text-3xl text-teal-400">“</span>
                {t.quote}
                <span className="text-3xl text-teal-400">”</span>
              </blockquote>

              {/* Program */}
              <p className="mt-auto text-sm font-medium text-[#007f7f]">
                {t.program}
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ==== Prev / Next Buttons at BOTTOM ==== */}
      <div className="flex justify-center gap-6 mt-3">
        <button
          onClick={() => swiperRef.current.slidePrev()}
          className="px-5 py-2 bg-[#006666] text-white rounded-full shadow hover:bg-[#004c4c] transition"
        >
          Prev
        </button>
        <button
          onClick={() => swiperRef.current.slideNext()}
          className="px-5 py-2 bg-[#FF7F50] text-white rounded-full shadow hover:bg-[#e96b3e] transition"
        >
          Next
        </button>
      </div>

    </section>
  );
};

export default TestimonialCard;
