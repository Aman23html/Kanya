import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rani Kumari",
    role: "Class 10 Student | Beneficiary",
    quote:
      "Before I joined the education center, I was always the quiet one in class. I struggled with maths and English. After three months at Shiksha Jyoti, I started answering questions in school and even helped a friend with her homework. I want to become a teacher one day.",
    program: "Student, Shiksha Jyoti Program",
    img: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    name: "Rahul Sinha",
    role: "Software Engineer | Volunteer",
    quote:
      "Teaching digital skills to women at Saksham Nari changed my perspective. One woman in her 40s told me she never believed she could learn to use a laptop — now she runs her own tailoring page on social media. It’s amazing what empowerment looks like up close.",
    program: "Volunteer Trainer, Saksham Nari",
    img: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    name: "Anjali Mishra",
    role: "High Court Lawyer | Legal Volunteer",
    quote:
      "In the sessions we conduct under Nyay Sakhi, we start with basics — what rights women have under law. Many are shocked to learn they can fight for maintenance, property, or protection from abuse. Some cry, some smile. All of them leave a little stronger.",
    program: "Legal Educator, Nyay Sakhi Project",
    img: "https://randomuser.me/api/portraits/women/72.jpg",
  },
  {
    name: "Savitri Devi",
    role: "Homemaker | SHG Member",
    quote:
      "I never earned a rupee before. Now, with four other women from my village, we run a small spice-making unit. I didn’t just learn how to manage money — I learned how to speak up in front of people. That’s what Nari Shakti Sangathan gave me.",
    program: "Self-Help Group Member, Giridih",
    img: "https://randomuser.me/api/portraits/women/70.jpg",
  },
  {
    name: "Rakesh Sharma",
    role: "School Teacher | Community Partner",
    quote:
      "When the awareness sessions from Nari Suraksha started in our school, I noticed the change quickly. Girls started asking more questions. Some even stayed back after class to discuss safety, harassment, or how to convince their parents to let them study longer.",
    program: "Teacher Partner, Dhanbad",
    img: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    name: "Puja Kumari",
    role: "B.Tech Graduate | Entrepreneur",
    quote:
      "Even with a degree, I didn’t feel ready. The skill training from Saksham Nari gave me more than just technical knowledge — it gave me confidence. Today, I manage online marketing for two small brands and teach younger girls how to do it too.",
    program: "Graduate & Mentor, Saksham Nari",
    img: "https://randomuser.me/api/portraits/women/63.jpg",
  },
  {
    name: "Dr. Preeti Das",
    role: "Gynecologist | Medical Volunteer",
    quote:
      "Working with Swasthya Sakhi reminded me why I became a doctor. We meet women who’ve never had a health check-up in their life. When they finally speak about their pain, their stress, or their depression — you realize healthcare isn’t just treatment, it’s listening.",
    program: "Volunteer Doctor, Health Camps",
    img: "https://randomuser.me/api/portraits/women/66.jpg",
  },
  {
    name: "Jitendra Kumar",
    role: "Law Student | Volunteer Paralegal",
    quote:
      "At Nyay Sakhi, I saw the real world side of the law — not textbooks, but courage. We helped a survivor of domestic violence file her first FIR. I will never forget her relief when the complaint was finally accepted.",
    program: "Paralegal Volunteer, Nyay Sakhi",
    img: "https://randomuser.me/api/portraits/men/61.jpg",
  },
  {
    name: "Salma Khatoon",
    role: "Domestic Worker | Food Relief Recipient",
    quote:
      "During COVID, I lost my job and couldn’t feed my children properly. The hot meals and ration kits from Kanya Jagriti Foundation food program came like a blessing. For people like us, even a packet of rice means survival.",
    program: "Beneficiary, Food Relief Program",
    img: "https://randomuser.me/api/portraits/women/71.jpg",
  },
  {
    name: "Amit Rungta",
    role: "Business Owner | Donor Partner",
    quote:
      "I’ve supported many NGOs, but Kanya Jagriti stood out for one reason — transparency and impact. We funded the setup of a Shiksha Jyoti digital classroom. Within few months, students were really happy and ready to learn. That’s real progress.",
    program: "CSR Donor, Shiksha Jyoti Program",
    img: "https://randomuser.me/api/portraits/men/73.jpg",
  },
];

const TestimonialCard = () => {
  return (
    <section className="relative py-24 bg-linear-to-b from-[#e6faf6] via-[#f0fdfa] to-white overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-teal-100 blur-[120px] opacity-50 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200 blur-[140px] opacity-40 rounded-full"></div>

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
        className="text-center text-gray-600 text-lg mb-16"
      >
        Real people. Real stories. One shared mission — women’s empowerment.
      </motion.p>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto px-6"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-white/80 backdrop-blur-lg border border-teal-100 rounded-3xl p-8 shadow-md hover:shadow-lg text-center flex flex-col items-center transition-all duration-500"
            >
              <div className="relative mb-5">
                <div className="absolute inset-0 bg-teal-200 blur-2xl rounded-full opacity-30"></div>
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full border-4 border-teal-300 object-cover shadow-md relative z-10"
                />
              </div>
              <h4 className="text-lg font-semibold text-[#004b4b]">
                {t.name}
              </h4>
              <p className="text-sm text-gray-500 mb-3">{t.role}</p>
              <blockquote className="text-gray-700 italic text-sm leading-relaxed max-w-sm mx-auto">
                “{t.quote}”
              </blockquote>
              <p className="mt-4 text-sm font-medium text-[#008080]">
                {t.program}
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialCard;
