import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import test from "../assets/test.png";
import Kumari from "../assets/kumari.webp";
import Payal from "../assets/Payal.webp";
import Navya from "../assets/Navya.webp";
import Mona from "../assets/Mona.webp";
import Sumitra from "../assets/Sumitra.webp";




const testimonials = [
  // Existing testimonials...
  {
    name: "Rani Kumari",
    role: "Class 10 Student | Beneficiary",
    quote:
      "Before I joined the education center, I was always the quiet one in class. I struggled with maths and English. After three months at Shiksha Jyoti, I started answering questions in school and even helped a friend with her homework. I want to become a teacher one day.",
    program: "Student, Shiksha Jyoti Program",
    img: test,
  },
  {
    name: "Rahul Sinha",
    role: "Software Engineer | Volunteer",
    quote:
      "Teaching digital skills to women at Saksham Nari changed my perspective. One woman in her 40s told me she never believed she could learn to use a laptop — now she runs her own tailoring page on social media. It’s amazing what empowerment looks like up close.",
    program: "Volunteer Trainer, Saksham Nari",
    img: test,
  },
  {
    name: "Anjali Mishra",
    role: "High Court Lawyer | Legal Volunteer",
    quote:
      "In the sessions we conduct under Nyay Sakhi, we start with basics — what rights women have under law. Many are shocked to learn they can fight for maintenance, property, or protection from abuse. Some cry, some smile. All of them leave a little stronger.",
    program: "Legal Educator, Nyay Sakhi Project",
    img: test,
  },
  {
    name: "Savitri Devi",
    role: "Homemaker | SHG Member",
    quote:
      "I never earned a rupee before. Now, with four other women from my village, we run a small spice-making unit. I didn’t just learn how to manage money — I learned how to speak up in front of people. That’s what Nari Shakti Sangathan gave me.",
    program: "Self-Help Group Member, Giridih",
    img: test,
  },
  {
    name: "Rakesh Sharma",
    role: "School Teacher | Community Partner",
    quote:
      "When the awareness sessions from Nari Suraksha started in our school, I noticed the change quickly. Girls started asking more questions. Some even stayed back after class to discuss safety, harassment, or how to convince their parents to let them study longer.",
    program: "Teacher Partner, Dhanbad",
    img: test,
  },
  {
    name: "Puja Kumari",
    role: "B.Tech Graduate | Entrepreneur",
    quote:
      "Even with a degree, I didn’t feel ready. The skill training from Saksham Nari gave me more than just technical knowledge — it gave me confidence. Today, I manage online marketing for two small brands and teach younger girls how to do it too.",
    program: "Graduate & Mentor, Saksham Nari",
    img: test,
  },
  {
    name: "Dr. Preeti Das",
    role: "Gynecologist | Medical Volunteer",
    quote:
      "Working with Swasthya Sakhi reminded me why I became a doctor. We meet women who’ve never had a health check-up in their life. When they finally speak about their pain, their stress, or their depression — you realize healthcare isn’t just treatment, it’s listening.",
    program: "Volunteer Doctor, Health Camps",
    img: test,
  },
  {
    name: "Jitendra Kumar",
    role: "Law Student | Volunteer Paralegal",
    quote:
      "At Nyay Sakhi, I saw the real world side of the law — not textbooks, but courage. We helped a survivor of domestic violence file her first FIR. I will never forget her relief when the complaint was finally accepted.",
    program: "Paralegal Volunteer, Nyay Sakhi",
    img: test,
  },
  {
    name: "Salma Khatoon",
    role: "Domestic Worker | Food Relief Recipient",
    quote:
      "During COVID, I lost my job and couldn’t feed my children properly. The hot meals and ration kits from Kanya Jagriti Foundation food program came like a blessing. For people like us, even a packet of rice means survival.",
    program: "Beneficiary, Food Relief Program",
    img: test,
  },
  {
    name: "Amit Rungta",
    role: "Business Owner | Donor Partner",
    quote:
      "I’ve supported many NGOs, but Kanya Jagriti stood out for one reason — transparency and impact. We funded the setup of a Shiksha Jyoti digital classroom. Within few months, students were really happy and ready to learn. That’s real progress.",
    program: "CSR Donor, Shiksha Jyoti Program",
    img: test,
  },

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
  return (
    <section className="relative py-24 bg-linear-to-b from-[#e6faf6] via-[#fffaf5] to-white overflow-hidden">
      {/* Floating gradient orbs */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-teal-200 blur-[120px] opacity-40 rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-pink-200 blur-[130px] opacity-40 rounded-full animate-pulse"></div>

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
        modules={[Pagination, Autoplay, EffectCoverflow]}
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
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
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
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/90 backdrop-blur-xl border border-teal-100 rounded-3xl p-8 shadow-lg hover:shadow-teal-200/60 transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="relative mb-5">
                <div className="absolute inset-0 bg-teal-300 blur-2xl rounded-full opacity-20"></div>
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full border-4 border-[#00a0a0] object-cover shadow-md relative z-10"
                />
              </div>
              <h4 className="text-lg font-semibold text-[#004b4b]">{t.name}</h4>
              <p className="text-sm text-gray-500 mb-3 italic">{t.role}</p>
              <blockquote className="text-gray-700 text-sm leading-relaxed max-w-sm mx-auto">
                <span className="text-3xl text-teal-400">“</span>
                {t.quote}
                <span className="text-3xl text-teal-400">”</span>
              </blockquote>
              <p className="mt-4 text-sm font-medium text-[#007f7f]">
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
