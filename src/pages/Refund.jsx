import React from "react";
import { motion } from "framer-motion";

const Refund = () => {
  const content = `
Kanya Jagriti Foundation Donation Refund Policy

Kanya Jagriti Foundation takes the utmost care to process donations as per the instructions given by our donors, online and offline. However, in case of an unlikely event of an erroneous donation or if the donor would like to cancel his donation, Kanya Jagriti Foundation will respond to the donor within 7 working days of receiving a valid request for refund from the donor. The timely refund of the donation will depend upon the type of credit card/banking instrument used during the transaction. The donor will have to send Kanya Jagriti Foundation a written request for a refund within 2 days of making the donation to Kanya Jagriti Foundation’s official address or account@kanyajagriti.org along with -

1. Proof of the deduction of the donation amount.

2. In cases where the donation receipt has already been issued to the donor, the donor will have to return the original receipt to us at our office addresses.

3. If the tax exemption certificate is already issued, then we are sorry but we will not be able to refund the donation. However, in case of a valid refund request due to any error on Kanya Jagriti Foundation’s part, Kanya Jagriti Foundation will refund the donation and bear the costs of the same.

4. International donations will need minimum 10 days for the refund process.
`;

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#f7fff9] via-[#ecfdf3] to-[#e6faed] text-gray-800 min-h-screen mt-12">
      {/* Soft themed glow circles */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] bg-green-300/20 blur-3xl rounded-full"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute bottom-20 right-1/3 w-[22rem] h-[22rem] bg-lime-300/20 blur-3xl rounded-full"
      />

      {/* Page Header */}
      <section className="relative text-center py-20 px-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 text-transparent bg-clip-text drop-shadow-lg"
        >
          Refund Policy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed"
        >
          Transparent and responsible refund process for donors of Kanya Jagriti Foundation.
        </motion.p>
      </section>

      {/* Content Card */}
      <section className="relative z-20 max-w-4xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 40px rgba(34,197,94,0.25)",
          }}
          className="relative bg-white/60 backdrop-blur-lg border border-emerald-100 rounded-2xl p-10 shadow-lg transition-all duration-500"
        >
          {/* Soft gradient on hover */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-100/20 to-lime-100/10 opacity-0 hover:opacity-100 transition duration-700" />

          {/* Actual text */}
          <p className="text-gray-700 leading-relaxed text-[1.05rem] whitespace-pre-line relative z-10">
            {content}
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Refund;
