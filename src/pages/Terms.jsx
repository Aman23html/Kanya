import React from "react";
import { motion } from "framer-motion";

const Terms = () => {
  const sections = [
    {
      title: "1 Introduction",
      content: `You may download, display or print information from this Site (the “Information”) solely for non-commercial personal use.

You must retain and reproduce each and every copyright notice or other proprietary rights notice contained in any Information you download. You may not, however, distribute, modify, transmit, reuse, repost, or use the content of the Site for public or commercial purposes, including the text, images, graphics, audio, and video without written permission of Kanya Jagriti Foundation. You should assume that everything you see or read on this Site is copyrighted unless otherwise noted and may not be used except as provided in these Terms and Conditions or in the text on the Site without the written permission of Kanya Jagriti Foundation. Kanya Jagriti Foundation neither warrants nor represents that your use of materials displayed on the Site will not infringe rights of third parties not owned by or affiliated with Kanya Jagriti Foundation.

With the exception of the foregoing limited authorisation, no license to or right in any copyright of Kanya Jagriti Foundation or of any other party is granted or conferred to you.

Kanya Jagriti Foundation site may contain or reference trademarks, patents, proprietary information, technologies, products, processes or other proprietary rights of Kanya Jagriti Foundation and/or other parties. No license to or right in any such trademarks, patents, trade secrets, technologies, products, processes and other proprietary rights of Kanya Jagriti Foundation and/or other parties is granted to or conferred upon you.

While Kanya Jagriti Foundation uses reasonable efforts to include accurate and up to date information in the Site, Kanya Jagriti Foundation makes no warranties or representations with respect to the content of the Site, which is provided “as is”. Kanya Jagriti Foundation accepts no responsibility or liability whatsoever arising from or in any way connected with the use of this Site or its content. In particular, Kanya Jagriti Foundation will not be liable for the accuracy, completeness, adequacy, timeliness, or comprehensiveness of the information contained on the Site. Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusion may not apply to you. Kanya Jagriti Foundation also assumes no responsibility, and shall not be liable for, any damages to, or viruses that may infect, your computer equipment or other property on account of your access to, use of, or browsing in the Site or your downloading of any materials, data, text, images, video, or audio from the Site.

Kanya Jagriti Foundation reserves the right to interrupt or discontinue any or all of the functionality of its Site. Kanya Jagriti Foundation who is controlling this Site accepts no responsibility or liability whatsoever for any interruption or discontinuance of any or all functionality of its Site, whether the result of actions or omissions of an entity of Kanya Jagriti Foundation or a third party.

Any communication or material you transmit to the Site by electronic mail or otherwise, including any data, questions, feedback, ideas, queries, comments, suggestions or the like is, and will be treated as, non-confidential and non-proprietary. Anything you transmit or post becomes the property of Kanya Jagriti Foundation or its affiliates and may be used for any purpose, including, but not limited to, reproduction, disclosure, transmission, publication, broadcast and posting. Furthermore, Kanya Jagriti Foundation is free to use any ideas, concepts, know-how, or techniques contained in any communication you send to the Site for any purpose whatsoever including, but not limited to, developing, manufacturing and marketing products using such information.

The information may contain technical inaccuracies or typographical errors. Kanya Jagriti Foundation reserves the right to make changes, corrections and/or improvements to the Information, and to the products and programmes described in such information, at any time without notice.

The Kanya Jagriti Foundation site contains information on its products and services, not all of which are available in every location. A reference to a Kanya Jagriti Foundation product or service on the Site does not imply that such product or service is or will be available in your location.

Because Kanya Jagriti Foundation has no control over and does not endorse any of the sites to which the Site is linked and because Kanya Jagriti Foundation has not reviewed any or all of the sites to which the Site is linked, you acknowledge that Kanya Jagriti Foundation is not responsible for the content of any off-Site pages or any other sites linked to the Site. Your linking to the Site, off-Site pages or other sites is at your own risk and without the permission of Kanya Jagriti Foundation.

Although Kanya Jagriti Foundation may from time to time monitor or review postings, transmissions, bulletin boards, and the like on the Site, Kanya Jagriti Foundation is under no obligation to do so and assumes no responsibility or liability arising from the content of any such locations nor for any error, defamation, libel, slander, omission, falsehood, obscenity, pornography, profanity, danger, or inaccuracy contained in any information within such locations on the Site. You are prohibited from posting or transmitting any unlawful, threatening, libelous, defamatory, obscene, scandalous, inflammatory, pornographic, or profane material or any material that could constitute or encourage conduct that would be considered a criminal offense, give rise to civil liability, or otherwise violate any law.

Kanya Jagriti Foundation will fully cooperate with any law enforcement authorities or court order requesting or directing Kanya Jagriti Foundation to disclose the identity of anyone posting any such information or materials.

Kanya Jagriti Foundation may at any time revise these Terms and Conditions by updating this posting. You are bound by any such revisions and should therefore periodically visit this page to review the then current Terms and Conditions to which you are bound.

Framing of this Site by sites or site elements of parties not part of the Kanya Jagriti Foundation is not permitted. In-line linking or any other manner of incorporating parts of this Site in sites of parties not part of Kanya Jagriti Foundation is equally prohibited.`,
    },
    {
      title: "Contact Us",
      content: `For questions regarding these Terms & Conditions, please reach out to us at 
info@kanyajagriti.org or through our Contact page.`,
    },
  ];

  return (
    <div className="relative overflow-hidden bg-linear-to-b from-[#f7fff9] via-[#ecfdf3] to-[#e6faed] text-gray-800 min-h-screen">
      {/* Background animation and glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="absolute inset-0 bg-[url('../assets/leaf-pattern.png')] bg-cover bg-center opacity-10"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-green-300/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        className="absolute bottom-10 right-1/3 w-[25rem] h-[25rem] bg-lime-300/20 rounded-full blur-3xl"
      />

      {/* Hero Section */}
      <section className="relative text-center py-24 px-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-linear-to-r from-green-700 via-emerald-600 to-lime-500 text-transparent bg-clip-text drop-shadow-lg"
        >
          Terms & Conditions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed"
        >
          Your access to and use of this website{' '}
          <span className="font-semibold text-emerald-600">
            https://kanyajagriti.org/
          </span>{' '}
          is subject to the following terms and conditions and all applicable
          laws.
        </motion.p>
      </section>

      {/* Terms Section */}
      <section className="relative z-20 max-w-5xl mx-auto py-2 px-6 space-y-1">
        {sections.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 0 40px rgba(34,197,94,0.25)',
            }}
            className="relative bg-white/60 backdrop-blur-lg border border-emerald-100 rounded-2xl p-8 transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-green-100/20 to-lime-100/10 opacity-0 hover:opacity-100 transition duration-700" />
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-4">
              {item.title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-[1.05rem] whitespace-pre-line">
              {item.content}
            </p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Terms;
