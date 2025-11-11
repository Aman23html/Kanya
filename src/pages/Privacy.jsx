import React from "react";
import { motion } from "framer-motion";

const Privacy = () => {
  const sections = [
    {
      title: "Privacy Policy",
      content: `1. Kanya Jagriti Foundation is committed to the ethical collection, retention and use of information that you provide to us about yourself (“Personal Information”) on this site https://kanyajagriti.org/ (“Site”).

Your Personal Information may comprise the following:

your name

your age

your occupation

a user ID and password of your choice

your email and mailing address

your telephone number

your payment processing details

limited personal details

Any other data may require

The following Privacy Policy sets forth our understanding with you on the collection, use and protection of your Personal Information. Please read the entire Privacy Policy.

YOUR USE OF THE WEBSITE CONSTITUTES YOUR CONSENT TO THE ALL THE TERMS AND CONDITIONS CONTAINED IN THIS PRIVACY POLICY (AS AMENDED FROM TIME TO TIME) AND YOU SHALL BE BOUND BY THE SAME.`,
    },
    {
      title: "Collection of Information",
      content: `Site Browsing: You browse the Site anonymously. We do not require you to identify yourself or reveal any Personal Information while browsing through the Site. However, you may not be able to access certain sections of the Site or interact with us without supplying us with Personal Information. For instance, you would not be able to transact at the Site or make any donations at the Site, without providing the Site with Personal Information. If you desire to register yourself at the Site, you would be required to provide your Personal Information.

While you are browsing through the Site, the Site’s operating system may automatically record some general information (“General Information”) about your visit such as:

(i) the date and time you visit the Site, along with the address of the previous website you were visiting, if you linked to us from another website

(ii) the type of browser you are using (such as Internet Explorer version ‘X’)

(iii) which ‘hit’ it is on the Site

The General Information is not Personal Information. Kanya Jagriti Foundation’s tracking system does not record personal information about individuals or link this information to any Personal Information collected from you.

The General Information is used by Kanya Jagriti Foundation for statistical analysis, for tracking overall traffic patterns on the Site and to gauge the public interest in Kanya Jagriti Foundation and the Site. Such General Information may be shared by Kanya Jagriti Foundation with any person, at Kanya Jagriti Foundation’s discretion.`,
    },
    {
      title: "Cookies",
      content: `"Cookies” are small amounts of data that a website can send to a web browser on a visitor’s computer. The cookie is stored on a visitor’s computer. A cookie may enable the site holder to track how a visitor navigates through its site and the areas in which they show interest. This is similar to a traffic report: it tracks trends and behaviors, but does not identify individuals. Information gathered may include date and time of visits, pages viewed, time spent at the site, and the site visited just before and just after the Kanya Jagriti Foundation site.

Types of Cookies

Cookies can be set to expire: on a specified date after a specific period of time when a transaction has been completed or when a user turns off his/her browser.

A cookie that is erased from memory when a visitor’s browser closes is called a “session” cookie. Cookies that expire based on a time set by the Web server are called “persistent” cookies.

Persistent cookies may be used in some cases, for example, to recognize when a visitor returns to a website. The web browser will send the cookie information from the initial visit back to the website.`,
    },
    {
      title: "Usage of Information",
      content: `Personal information will be used by Kanya Jagriti Foundation for internal purposes including the following:

(i) sending you inter alia emails, features, promotional material, surveys, brochures, catalogues, Kanya Jagriti Foundation Annual Report, reminders for donations, regular updates on the utilisation of donations by Kanya Jagriti Foundation and other updates.

(ii) processing your donations to Kanya Jagriti Foundation and purchases of Kanya Jagriti Foundation products on the Site.

(iii) delivering the Kanya Jagriti Foundation products you have purchased on the Site /Receipt for donations made by you to Kanya Jagriti Foundation.

(iv) maintaining an internal confidential database of all the Personal Information collected from visitors to the Site

(v) evaluating and administering the Site and Kanya Jagriti Foundation’s activities, responding to any problems that may arise and gauging visitor trends on the Site.`,
    },
    {
      title: "Disclosure of Personal Information",
      content: `Within Kanya Jagriti Foundation, access to Personal Information collected by Kanya Jagriti Foundation will be given only to those persons who are authorised by Kanya Jagriti Foundation and third parties hired by Kanya Jagriti Foundation to perform administrative services. Kanya Jagriti Foundation will provide access to third parties for inter alia entering and managing Personal Information in Kanya Jagriti Foundation’s Database, processing your orders or donations preparing address labels, sending emails, which require such third parties to have access to your Personal Information. Kanya Jagriti Foundation cannot guarantee that such parties will keep your Personal Information confidential and Kanya Jagriti Foundation will not be liable in any manner for any loss of confidentiality attributable to such third parties.`,
    },
    {
      title: "Security & Copyright",
      content: `Kanya Jagriti Foundation endeavors to use up-to-date security measures to protect your Personal Information. However, it does not make any express or implied warranty with respect to the security measures employed for protection.

All content on this Site including graphics, text, icons, interfaces, audio clips, logos, images and software is the property of Kanya Jagriti Foundation and/or its content suppliers and is protected by Indian and international copyright laws.`,
    },
  ];

  return (
    <div className="relative overflow-hidden bg-linear-to-b from-[#f7fff9] via-[#ecfdf3] to-[#e6faed] text-gray-800 min-h-screen">
      {/* Animated glowing background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="absolute inset-0 bg-[url('../assets/leaf-pattern.png')] bg-cover bg-center opacity-10"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-green-300/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute bottom-10 right-1/3 w-[25rem] h-[25rem] bg-lime-300/20 rounded-full blur-3xl"
      />

      {/* Header Section */}
      <section className="relative text-center py-24 px-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-linear-to-r from-green-700 via-emerald-600 to-lime-500 text-transparent bg-clip-text drop-shadow-lg"
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed"
        >
          Kanya Jagriti Foundation is committed to maintaining your privacy and
          protecting your personal information in all online interactions.
        </motion.p>
      </section>

      {/* Content Section */}
      <section className="relative z-20 max-w-5xl mx-auto py-4 px-6 space-y-6">
        {sections.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 40px rgba(34,197,94,0.25)",
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

export default Privacy;
