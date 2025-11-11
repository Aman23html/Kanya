import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We received your message.");
    console.log("Contact form:", form);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full bg-gradient-to-b from-[#f5fff8] via-[#ecfff5] to-white text-gray-800">
      <style>{`
        /* === Custom Styles === */
        .glass-card {
          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.35);
          box-shadow: 0 6px 28px rgba(0, 0, 0, 0.12);
        }
        .input-field {
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(0,0,0,0.1);
          transition: 0.3s ease;
        }
        .input-field:focus {
          border-color: #059669;
          box-shadow: 0 0 6px rgba(16,185,129,0.3);
          background: #fff;
        }

        /* === Animated gradient waves === */
        .hero-bg {
          background: linear-gradient(135deg, #064e3b 0%, #059669 50%, #10b981 100%);
          position: relative;
          overflow: hidden;
        }
        .hero-bg::before {
          content: "";
          position: absolute;
          inset: 0;
          background: url('https://www.transparenttextures.com/patterns/white-diamond.png');
          opacity: 0.1;
          animation: floatPattern 20s linear infinite;
        }
        .hero-bg::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 70%);
          animation: waveMove 12s ease-in-out infinite alternate;
        }

        @keyframes floatPattern {
          0% { background-position: 0 0; }
          100% { background-position: 400px 400px; }
        }

        @keyframes waveMove {
          0% { transform: scale(1) rotate(0deg); }
          100% { transform: scale(1.1) rotate(5deg); }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative h-[55vh] flex flex-col items-center justify-center text-center hero-bg text-white">
        {/* Overlay gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-emerald-900/40 to-emerald-700/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl">
            Contact Us
          </h1>
          <p className="mt-3 text-lg text-emerald-100 max-w-2xl mx-auto">
            Let’s connect — we’re here to support, collaborate, and empower.
          </p>
        </motion.div>

        {/* Floating circles (decorative animation) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3, y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-10 left-20 w-16 h-16 bg-emerald-400/20 rounded-full blur-xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25, y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-16 right-24 w-24 h-24 bg-teal-300/20 rounded-full blur-2xl"
        />
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-6 md:p-8 flex flex-col space-y-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold text-emerald-800 mb-2">
              Send Us a Message
            </h2>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="input-field mt-1 p-3 rounded-lg focus:outline-none"
                placeholder="Your full name"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="input-field mt-1 p-3 rounded-lg focus:outline-none"
                placeholder="Your email address"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="5"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="input-field mt-1 p-3 rounded-lg resize-none focus:outline-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold py-3 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* CONTACT DETAILS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col justify-center space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#065f46]">
              Get Connected With Us
            </h2>
            <p className="text-gray-600 max-w-md leading-relaxed">
              Whether you have a question, a suggestion, or wish to get
              involved — we’d love to hear from you. Together, we can make a
              difference.
            </p>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-emerald-600 text-xl" />
                <span>kanyajagritifoundation@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-emerald-600 text-xl" />
                <span>+91 9503618951</span>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-emerald-600 text-xl mt-1" />
                <span>
                  C/o Mira Panja,<br />
                  Jharnapara, Nr. Babloo Dharamshala,<br />
                  Hirapur, Dhanbad – 826001, Jharkhand
                </span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-emerald-700 text-white rounded-full shadow-md font-semibold w-fit mt-4"
              onClick={() =>
                window.open("https://forms.gle/your-google-form-id", "_blank")
              }
            >
              Open Google Form
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
