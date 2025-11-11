import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e) => {
    e.preventDefault();

    // ✅ Option 1: Use EmailJS (Uncomment after setup)
    // emailjs.sendForm('service_id', 'template_id', e.target, 'user_id')
    //   .then(() => alert('Message sent successfully!'))
    //   .catch(() => alert('Something went wrong. Please try again.'));

    // ✅ Option 2: Redirect to Google Form (replace with your link)
    // window.open("https://forms.gle/your-google-form-id", "_blank");

    alert("Thank you! We received your message.");
    console.log("contact form:", form);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full overflow-hidden bg-linear-to-b from-[#f6fff9] via-[#eafff4] to-white text-gray-800">
      <style>{`
        .glass-box {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        }
        .contact-input {
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.4);
          transition: all 0.3s ease;
        }
        .contact-input:focus {
          border-color: #059669;
          box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
          background: white;
        }
      `}</style>

      {/* HERO SECTION */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-linear(rgba(5,60,20,0.6), rgba(5,60,20,0.5)), url('https://images.unsplash.com/photo-1581092334703-1250c7cceac1?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-emerald-100">
            Let’s connect — we’re here to support, collaborate, and empower.
          </p>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* FORM */}
          <motion.form
            onSubmit={submit}
            className="glass-box rounded-3xl p-8 md:p-10 shadow-xl flex flex-col space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-[#064e3b] mb-2">
              Send Us a Message
            </h2>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="contact-input mt-1 p-3 rounded-lg focus:outline-none"
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
                className="contact-input mt-1 p-3 rounded-lg focus:outline-none"
                placeholder="Your email address"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="6"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="contact-input mt-1 p-3 rounded-lg resize-none focus:outline-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-linear-to-r from-emerald-600 to-teal-500 text-white font-semibold py-3 rounded-full shadow-lg transition"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-[#065f46]">
              Get Connected With Us
            </h2>
            <p className="text-gray-600 max-w-md">
              Whether you have a question, a suggestion, or simply wish to get
              involved — we’d love to hear from you. Together, we can make a
              difference.
            </p>

            <div className="space-y-6 text-gray-700">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-emerald-600 text-2xl" />
                <span>kanyajagritifoundation@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-emerald-600 text-2xl" />
                <span>+91 9503618951</span>
              </div>
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-emerald-600 text-2xl mt-1" />
                <span>
                  C/o Mira Panja,<br />
                  Jharnapara, Nr. Babloo Dharamshala,<br />
                  Hirapur, Dhanbad – 826001, Jharkhand
                </span>
              </div>
            </div>

            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-emerald-700 text-white rounded-full shadow-lg font-semibold"
                onClick={() =>
                  window.open("https://forms.gle/your-google-form-id", "_blank")
                }
              >
                Open Google Form
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
