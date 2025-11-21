import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLSetpLP3aIAxRBig-DWDcBVzUYLmrgI34FaHOK-9NbJgRdlK8Q/formResponse";

  const ENTRY_NAME = "entry.1857233315";
  const ENTRY_EMAIL = "entry.449520266";
  const ENTRY_MESSAGE = "entry.1564358331";

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  return (
    <div className="w-full bg-linear-to-b from-[#f5fff8] via-[#ecfff5] to-white text-gray-800">

      {/* SUCCESS MESSAGE */}
      {success && (
        <div className="mx-auto mt-6 w-fit bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg text-lg font-semibold z-20">
          ✅ Message Sent Successfully!
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative h-[50vh] flex flex-col items-center justify-center text-center hero-bg text-white">
        <div className="absolute inset-0 bg-emerald-700"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl">
            Contact Us
          </h1>
          <p className="mt-3 text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            We're here to answer your questions and support your journey.
          </p>
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-6xl mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* CONTACT FORM */}
          <motion.form
            action={GOOGLE_FORM_ACTION}
            method="POST"
            target="hidden_iframe"
            onSubmit={() => {
              setSuccess(true);
              setTimeout(() => setSuccess(false), 5000);
            }}
            className="glass-card rounded-2xl p-6 md:p-8 flex flex-col space-y-5 shadow-lg border border-emerald-100 bg-white/70 backdrop-blur-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Hidden iframe */}
            <iframe
              name="hidden_iframe"
              style={{ display: "none" }}
              onLoad={() => {
                setForm({ name: "", email: "", message: "" });
              }}
            ></iframe>

            <h2 className="text-3xl font-bold text-emerald-800 mb-2">
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-4">
              Fill out the form below and our team will get back to you shortly.
            </p>

            {/* NAME */}
            <input
              type="text"
              name={ENTRY_NAME}
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="input-field mt-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500"
              placeholder="Your Name"
            />

            {/* EMAIL */}
            <input
              type="email"
              name={ENTRY_EMAIL}
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="input-field mt-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500"
              placeholder="Your Email"
            />

            {/* MESSAGE */}
            <textarea
              rows="5"
              name={ENTRY_MESSAGE}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="input-field mt-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500"
              placeholder="Write your message..."
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold py-3 rounded-full shadow-md hover:shadow-xl transition-all"
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

            <div className="space-y-5 text-gray-700">

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-emerald-600 text-2xl mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Email</p>
                  <p>kanyajagritifoundation@gmail.com</p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-emerald-600 text-2xl mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Phone</p>
                  <p>+91 9503618951</p>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-emerald-600 text-2xl mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Address</p>
                  <p>
                    C/o Mira Panja,<br />
                    Jharnapara, Nr. Babloo Dharamshala,<br />
                    Hirapur, Dhanbad – 826001,<br />
                    Jharkhand
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
