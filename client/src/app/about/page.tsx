'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, Heart, Building } from 'lucide-react';
import { AboutHeroSection, OrganizationOverviewSection } from '@/components/about';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerCards: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export default function AboutPage() {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  return (
    <div className="flex flex-col">
      
      {/* Full-width Premium Hero Section (Animates on load and re-animates on scroll) */}
      <AboutHeroSection />

      {/* Organization Overview Section (Two-Column Layout with Framer Motion scroll animation) */}
      <OrganizationOverviewSection id="organization-overview" />

      {/* Core Care Pillars & Facilities (Animates every time on scroll down) */}
      <section id="services-section" className="bg-[#F2ECE0]/60 py-12 sm:py-16 border-y border-teal-900/10 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto space-y-3"
          >
            <span className="text-xs font-bold text-[#145B52] uppercase tracking-wider bg-white px-3.5 py-1.5 rounded-full border border-[#D6B56D]/40">
              {isBn ? 'সেবা ও সুযোগ-সুবিধা' : 'Sanctuary & Support'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#145B52] tracking-tight">
              {isBn ? 'আমাদের সেবা ও সহায়ক পরিবেশ' : 'Core Care Pillars & Facilities'}
            </h2>
            <p className="text-sm sm:text-base text-[#242B29]/75 leading-relaxed">
              {isBn 
                ? 'প্রবীণ সদস্যদের সুরক্ষা, মানসিক স্বাচ্ছন্দ্য ও শান্তিপূর্ণ জীবনযাপন নিশ্চিতে আমাদের সুসংগঠিত সেবা ব্যবস্থা।' 
                : 'Structured support designed to promote physical comfort, emotional peace, and dignified daily living for older adults.'}
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerCards}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-2xl border border-amber-200/80 shadow-xs hover:shadow-md transition-shadow space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-[#145B52] text-[#D6B56D] flex items-center justify-center">
                <Heart className="w-6 h-6 fill-[#D6B56D]/30" />
              </div>
              <h3 className="text-lg font-bold text-[#145B52]">
                {isBn ? 'চিকিৎসা ও নার্সিং পর্যবেক্ষণ' : 'Healthcare & Well-being'}
              </h3>
              <p className="text-xs sm:text-sm text-[#242B29]/70 leading-relaxed">
                {isBn 
                  ? 'দৈনন্দিন স্বাস্থ্য পর্যবেক্ষণ, প্রয়োজনীয় ওষুধ সেবন নিশ্চিতকরণ এবং শারীরিক স্বস্তির জন্য নিয়মিত সহায়তা।'
                  : 'Daily vitals monitoring, scheduled medicine delivery, and attentive physical assistance for peace of mind.'}
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-2xl border border-amber-200/80 shadow-xs hover:shadow-md transition-shadow space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-[#145B52] text-[#D6B56D] flex items-center justify-center">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#145B52]">
                {isBn ? 'শান্তিময় ও নিরাপদ আবাসন' : 'Comfortable Sanctuary'}
              </h3>
              <p className="text-xs sm:text-sm text-[#242B29]/70 leading-relaxed">
                {isBn
                  ? 'পরিচ্ছন্ন ও বাতাসঘেরা পরিবেশ, আরামদায়ক বিছানা এবং সবুজ বাগান সংলগ্ন পারিবারিক আবহাওয়া।'
                  : 'Clean, airy living spaces, comfortable bedding, and peaceful green surroundings designed for rest.'}
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-2xl border border-amber-200/80 shadow-xs hover:shadow-md transition-shadow space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-[#145B52] text-[#D6B56D] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#D6B56D]" />
              </div>
              <h3 className="text-lg font-bold text-[#145B52]">
                {isBn ? 'স্বচ্ছ ও আন্তরিক পরিচালনা' : 'Transparent & Ethical Care'}
              </h3>
              <p className="text-xs sm:text-sm text-[#242B29]/70 leading-relaxed">
                {isBn
                  ? 'সুস্পষ্ট নীতিমালা, দায়বদ্ধতা এবং প্রবীণদের কল্যাণে আন্তরিকতার সাথে পরিচালিত মানবিক সেবা।'
                  : 'Clear principles, community accountability, and sincere dedication to the well-being of all seniors.'}
              </p>
            </motion.div>

          </motion.div>

        </div>
      </section>

    </div>
  );
}
