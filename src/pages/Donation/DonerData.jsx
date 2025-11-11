// src/pages/DonorData.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const DonorData = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const purposeFromDonate = location.state?.purpose || "";

  const [form, setForm] = useState({
    purpose: purposeFromDonate,
    name: "",
    address: "",
    pincode: "",
    dob: "",
    mobile: "",
    email: "",
    pan: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  // 🧩 Validate before submitting
  const validateForm = () => {
    const newErrors = {};
    Object.entries(form).forEach(([key, value]) => {
      // PAN is optional (skip check)
      if (key !== "pan" && !value.trim()) {
        newErrors[key] = "This field is required";
      }
    });
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setShowErrorMsg(true);
      return;
    }

    // All good — navigate to bill
    navigate("/bill", { state: { donorData: form } });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#e6faf6] via-[#f0fdfa] to-white min-h-screen flex items-center justify-center py-20 px-6">
      {/* Background animation */}
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-gradient-to-tr from-[#99f6e4] to-[#a7f3d0] blur-[120px] opacity-40 rounded-full"
      />
      <motion.div
        animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[36rem] h-[36rem] bg-gradient-to-tr from-[#c7f9cc] to-[#e0f7fa] blur-[150px] opacity-50 rounded-full"
      />

      {/* Form card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl w-full bg-white/60 backdrop-blur-xl shadow-2xl rounded-3xl p-10"
      >
        <h2 className="text-3xl font-bold text-[#004f4f] text-center mb-8">
          Donor Details
        </h2>

        {showErrorMsg && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-600 text-center mb-6 font-medium"
          >
            ⚠️ Please fill out all required fields before continuing.
          </motion.p>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Purpose Dropdown */}
          <div>
            <label className="block text-gray-700 mb-2">Purpose <span className="text-red-500">*</span></label>
            <select
              name="purpose"
              value={form.purpose}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.purpose ? "border-red-500" : "border-gray-300"
              } bg-white/70 focus:ring-2 focus:ring-[#00c9a7]`}
            >
              <option value="">-- Select --</option>
              <option value="Girl Child Education">Girl Child Education</option>
              <option value="Women Empowerment">Women Empowerment</option>
              <option value="Tribal Welfare">Tribal Welfare</option>
            </select>
            {errors.purpose && <p className="text-red-500 text-sm mt-1">{errors.purpose}</p>}
          </div>

          {/* Input fields */}
          {[
            ["name", "Legal name"],
            ["address", "Full postal address"],
            ["pincode", "Pin code"],
            ["dob", "Date of Birth (mm/dd/yyyy)"],
            ["mobile", "Mobile Number"],
            ["email", "Email Address"],
            ["pan", "PAN Number (optional)"],
            ["amount", "Donation Amount (INR)"],
          ].map(([field, label]) => (
            <div key={field}>
              <label className="block text-gray-700 mb-2">
                {label}
                {field !== "pan" && <span className="text-red-500"> *</span>}
              </label>
              <input
                type={field === "dob" ? "date" : field === "email" ? "email" : "text"}
                name={field}
                value={form[field]}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors[field] ? "border-red-500" : "border-gray-300"
                } bg-white/70 focus:ring-2 focus:ring-[#00c9a7]`}
                placeholder={`Enter your ${label}`}
              />
              {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
            </div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-[#00c9a7] to-[#00bfa6] text-white py-3 rounded-full mt-6 font-semibold shadow-lg hover:shadow-[0_0_25px_#00c9a7] transition-all"
          >
            Review & Continue
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default DonorData;
