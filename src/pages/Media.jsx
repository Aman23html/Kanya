import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Layers, X, Maximize2 } from "lucide-react";

// --- ASSETS (High-Quality External Placeholders) ---
// Replaced local imports with Unsplash URLs to prevent build errors


import glimpse1 from "../assets/Younggirl/Young1.webp";
import glimpse2 from "../assets/Younggirl/Young2.webp";
import glimpse3 from "../assets/Younggirl/Young3.webp";
import glimpse4 from "../assets/Younggirl/Young4.webp";
import glimpse5 from "../assets/Younggirl/Young5.webp";
import glimpse6 from "../assets/Younggirl/Young6.webp";
import Mother1 from "../assets/Mother/Mother1.webp";
import Mother2 from "../assets/Mother/Mother2.webp";
import Mother3 from "../assets/Mother/Mother3.webp";
import Mother4 from "../assets/Mother/Mother4.webp";
import Vol1 from "../assets/Voluenteer/Vol1.webp";
import Vol2 from "../assets/Voluenteer/Vol2.webp";
import Finance1 from "../assets/Finance/Finance1.webp";
import Finance2 from "../assets/Finance/Finance2.webp";
import Finance3 from "../assets/Finance/Finance3.webp";
import Finance4 from "../assets/Finance/Finance4.webp";
import Finance5 from "../assets/Finance/Finance5.webp";
import Legal1 from "../assets/Legal/Legal1.webp";
import Legal2 from "../assets/Legal/Legal2.webp";
import Legal3 from "../assets/Legal/Legal3.webp";
import Legal4 from "../assets/Legal/Legal4.webp";
import food1 from "../assets/Food/F1.webp";
import food2 from "../assets/Food/F2.webp";
import food3 from "../assets/Food/F3.webp";
import food4 from "../assets/Food/F4.webp";
import Trible1 from "../assets/Trible/Trible1.webp";
import Trible2 from "../assets/Trible/Trible2.webp"; 
import Trible3 from "../assets/Trible/Trible3.webp"; 
import Trible4 from "../assets/Trible/Trible4.webp"; 
import Trible5 from "../assets/Trible/Trible5.webp"; 
import Trible6 from "../assets/Trible/Trible6.webp"; 
import Trible7 from "../assets/Trible/Trible7.webp"; 
import YoungGirl from "./Project/YoungGirl";
import Env1 from "../assets/Environment/Env1.webp";
import Env2 from "../assets/Environment/Env2.webp";
import Env3 from "../assets/Environment/Env3.webp";
import Env4 from "../assets/Environment/Env4.webp";
import Env5 from "../assets/Environment/Env5.webp";

// Young Girls
const yg1 = glimpse1;
const yg2 = glimpse2;
const yg3 = glimpse3;
const yg4 = glimpse4;
const yg5 = glimpse5;
const yg6 = glimpse6;
// Tribal
const tr1 = Trible1;
const tr2 = Trible2;
const tr3 = Trible3;
const tr4 = Trible4;
const tr5 = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80";
const tr6 = "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80";
const tr7 = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80";

// Basic Needs (Food/Clothing)
const bn1 = food1;
const bn2 = food2;
const bn3 = food3;
const bn4 = food4;
// Environment
const env1 = Env1;
const env2 = Env2;
const env3 = Env3;

// Legal
const leg1 = Legal1;
const leg2 = Legal2;
const leg3 = Legal3;
const leg4 = "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=800&q=80";

// Financial
const fin1 = Finance1;
const fin2 = Finance2;
const fin3 = Finance3;
const fin4 = Finance4;
const fin5 = Finance5;

// Volunteer
const vol1 = Vol1;
const vol2 = Vol2;
// Mothers
const mom1 = Mother1;
const mom2 = Mother2;
const mom3 = Mother3;
const mom4 = Mother4;

// --- DATA LISTS (Visual Only) ---

const youngGirlsList = [
  { id: "yg-1", category: "Young Girls", size: "large", img: yg1 },
  { id: "yg-2", category: "Young Girls", size: "small", img: yg2 },
  { id: "yg-3", category: "Young Girls", size: "medium", img: yg3 },
  { id: "yg-4", category: "Young Girls", size: "small", img: yg4 },
  { id: "yg-5", category: "Young Girls", size: "medium", img: yg5 },
  { id: "yg-6", category: "Young Girls", size: "large", img: yg6 },
];

const tribalList = [
  { id: "tr-1", category: "Tribal Care", size: "large", img: tr1 },
  { id: "tr-2", category: "Tribal Care", size: "medium", img: tr2 },
  { id: "tr-3", category: "Tribal Care", size: "small", img: tr3 },
  { id: "tr-4", category: "Tribal Care", size: "medium", img: tr4 },
  { id: "tr-5", category: "Tribal Care", size: "large", img: tr5 },
  { id: "tr-6", category: "Tribal Care", size: "small", img: tr6 },
  { id: "tr-7", category: "Tribal Care", size: "medium", img: tr7 },
];

const basicNeedsList = [
  { id: "bn-1", category: "Basic Needs", size: "medium", img: bn1 },
  { id: "bn-2", category: "Basic Needs", size: "large", img: bn2 },
  { id: "bn-3", category: "Basic Needs", size: "small", img: bn3 },
  { id: "bn-4", category: "Basic Needs", size: "medium", img: bn4 },
];

const environmentList = [
  { id: "env-1", category: "Environment", size: "large", img: env1 },
  { id: "env-2", category: "Environment", size: "medium", img: env2 },
  { id: "env-3", category: "Environment", size: "small", img: env3 },
];

const legalList = [
  { id: "leg-1", category: "Legal Help", size: "large", img: leg1 },
  { id: "leg-2", category: "Legal Help", size: "medium", img: leg2 },
  { id: "leg-3", category: "Legal Help", size: "small", img: leg3 },
  { id: "leg-4", category: "Legal Help", size: "medium", img: leg4 },
];

const financialList = [
  { id: "fin-1", category: "Financial", size: "medium", img: fin1 },
  { id: "fin-2", category: "Financial", size: "large", img: fin2 },
  { id: "fin-3", category: "Financial", size: "small", img: fin3 },
  { id: "fin-4", category: "Financial", size: "medium", img: fin4 },
  { id: "fin-5", category: "Financial", size: "large", img: fin5 },
];

const volunteerList = [
  { id: "vol-1", category: "Volunteer", size: "large", img: vol1 },
  { id: "vol-2", category: "Volunteer", size: "medium", img: vol2 },
];

const mothersList = [
  { id: "mom-1", category: "Mothers", size: "medium", img: mom1 },
  { id: "mom-2", category: "Mothers", size: "large", img: mom2 },
  { id: "mom-3", category: "Mothers", size: "small", img: mom3 },
  { id: "mom-4", category: "Mothers", size: "medium", img: mom4 },
];

// Combine all for "All" tab
const allItems = [
  ...youngGirlsList, ...tribalList, ...basicNeedsList, 
  ...environmentList, ...legalList, ...financialList, 
  ...volunteerList, ...mothersList
];

const categories = [
  "All", "Young Girls", "Tribal Care", "Basic Needs", 
  "Environment", "Legal Help", "Financial", "Volunteer", "Mothers"
];

// --- COMPONENTS ---

const HeroFan = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cards = [yg1, tr1, bn1, mom1, fin1];
  
  return (
    <div className="relative w-full h-[350px] md:h-[500px] flex justify-center items-center perspective-1000 overflow-hidden">
      {cards.map((src, i) => {
        const offset = i - 2; 
        return (
          <motion.div
            key={i}
            initial={{ rotate: 0, x: 0, y: 100, opacity: 0 }}
            animate={{ 
              rotate: offset * (isMobile ? 6 : 10), 
              x: offset * (isMobile ? 20 : 40),     
              y: Math.abs(offset) * (isMobile ? 10 : 15), 
              opacity: 1 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 120, 
              damping: 20, 
              delay: 0.2 + i * 0.1 
            }}
            whileHover={{ 
              scale: 1.05, 
              zIndex: 50, 
              y: -10,
              transition: { duration: 0.2 }
            }}
            className="absolute w-36 h-52 md:w-64 md:h-80 rounded-xl md:rounded-2xl shadow-2xl border-[3px] md:border-4 border-white overflow-hidden cursor-pointer origin-bottom bg-gray-200"
            style={{ 
                zIndex: 10 - Math.abs(offset),
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
          >
            <img src={src} alt="hero" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        );
      })}
    </div>
  );
};

const Lightbox = ({ selectedId, setSelectedId, activeList }) => {
  const item = activeList.find((i) => i.id === selectedId);

  if (!selectedId || !item) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/95 backdrop-blur-xl"
      onClick={() => setSelectedId(null)}
    >
      {/* Close Button */}
      <button 
        onClick={() => setSelectedId(null)} 
        className="absolute top-6 right-6 z-50 text-white/70 hover:text-white p-2 rounded-full transition-colors bg-white/10"
      >
        <X size={32} />
      </button>

      <motion.div 
        layoutId={`card-${item.id}`} 
        className="relative max-w-6xl w-full max-h-[90vh] flex justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={item.img} 
          alt={item.category} 
          className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
        
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-6 py-2 rounded-full text-white text-sm font-medium border border-white/10">
          {item.category}
        </div>
      </motion.div>
    </motion.div>
  );
};

const BentoGrid = () => {
  const [filter, setFilter] = useState("All");
  const [selectedId, setSelectedId] = useState(null);
  const [currentItems, setCurrentItems] = useState(allItems);

  useEffect(() => {
    switch(filter) {
      case "Young Girls": setCurrentItems(youngGirlsList); break;
      case "Tribal Care": setCurrentItems(tribalList); break;
      case "Basic Needs": setCurrentItems(basicNeedsList); break;
      case "Environment": setCurrentItems(environmentList); break;
      case "Legal Help": setCurrentItems(legalList); break;
      case "Financial": setCurrentItems(financialList); break;
      case "Volunteer": setCurrentItems(volunteerList); break;
      case "Mothers": setCurrentItems(mothersList); break;
      case "All":
      default: setCurrentItems(allItems); break;
    }
  }, [filter]);

  return (
    <div className="mt-12 md:mt-20">
      <AnimatePresence>
        {selectedId && <Lightbox selectedId={selectedId} setSelectedId={setSelectedId} activeList={currentItems} />}
      </AnimatePresence>

      {/* Filter Tabs */}
      <div className="sticky top-4 z-40 flex justify-center mb-12 px-4">
        <div className="flex flex-wrap justify-center gap-2 p-2 bg-white/80 backdrop-blur-lg rounded-full shadow-lg border border-gray-100 max-w-5xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                filter === cat 
                  ? "bg-black text-white shadow-md scale-105" 
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px] md:auto-rows-[300px] gap-4 md:gap-6 max-w-[95rem] mx-auto px-4 md:px-6"
      >
        <AnimatePresence mode="popLayout">
          {currentItems.map((item) => (
            <motion.div
              layoutId={`card-${item.id}`}
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedId(item.id)}
              className={`group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 cursor-zoom-in bg-gray-100 ${
                item.size === "large" ? "md:col-span-2 md:row-span-2" :
                item.size === "medium" ? "md:col-span-1 md:row-span-2" : 
                "col-span-1 row-span-1"
              }`}
            >
              <motion.img 
                src={item.img} 
                alt="Gallery Item" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Minimal Overlay - Just Icon */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                 <div className="bg-white/90 backdrop-blur p-3 rounded-full shadow-xl transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 size={20} className="text-black" />
                 </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const ScrollingMarquee = () => {
  return (
    <div className="w-full overflow-hidden bg-black py-3 md:py-4 mt-12 md:mt-20 -rotate-1 scale-105 origin-left">
      <motion.div 
        className="flex gap-12 whitespace-nowrap text-white/90 font-bold text-sm md:text-lg uppercase tracking-widest"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-8 md:gap-12 items-center">
            <span>Impact</span> <span className="w-2 h-2 rounded-full bg-emerald-500"/> 
            <span>Stories</span> <span className="w-2 h-2 rounded-full bg-emerald-500"/>
            <span>Change</span> <span className="w-2 h-2 rounded-full bg-emerald-500"/>
            <span>Empowerment</span> <span className="w-2 h-2 rounded-full bg-emerald-500"/>
            <span>Future</span> <span className="w-2 h-2 rounded-full bg-emerald-500"/>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---

export default function Media() {
  return (
    <div className="relative min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-emerald-200 overflow-x-hidden">
      
      {/* Abstract Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[20%] w-[60vw] h-[60vw] bg-emerald-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-100/40 rounded-full blur-[120px]" />
      </div>

      {/* Header Content */}
      <div className="relative z-10 pt-28 md:pt-32 mt-5 pb-8 md:pb-12 px-6 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-bold uppercase tracking-wide text-gray-500 mb-6"
        >
          <Layers size={14} className="text-emerald-600" /> Visual Gallery
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="text-4xl md:text-7xl font-black tracking-tight mb-6 text-slate-900"
        >
          Moments of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Impact.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed px-4"
        >
          A curated gallery of our journey in Jharkhand. Witness the stories of change, resilience, and hope through our lens.
        </motion.p>
      </div>

      {/* Hero Fan Section */}
      <div className="relative z-10 mb-8 md:mb-12">
        <HeroFan />
      </div>

      {/* Scrolling Marquee for Style */}
      <ScrollingMarquee />

      {/* Main Bento Grid Gallery */}
      <div className="relative z-10 pb-20 md:pb-32 bg-gradient-to-b from-transparent via-white/50 to-white pt-10">
        <BentoGrid />
      </div>

      {/* Footer CTA */}
      <section className="relative py-20 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a story to tell?</h2>
          <p className="text-gray-600 mb-8 text-lg">Join us in the field and help us document the change.</p>
          <button className="group relative px-8 py-4 bg-black text-white rounded-full font-bold overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
             <span className="relative z-10 flex items-center gap-2">
              <a href="/contact" className="flex items-center gap-2">
                 Contact Media Team  <ArrowUpRight size={16} />
              </a>
             </span>
          </button>
        </div>
      </section>

    </div>
  );
}