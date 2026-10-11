'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, User, Award, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { LeadershipProfile } from './types';

interface LeadershipProfileCardProps {
  profile: LeadershipProfile;
}

export const LeadershipProfileCard: React.FC<LeadershipProfileCardProps> = ({ profile }) => {
  const { locale } = useLanguage();
  const isBn = locale === 'bn';

  const name = profile.name[locale] || profile.name.en;
  const role = profile.role[locale] || profile.role.en;
  const bio = profile.bio[locale] || profile.bio.en;
  const qualifications = profile.qualificationsOrExperience 
    ? (profile.qualificationsOrExperience[locale] || profile.qualificationsOrExperience.en) 
    : [];
  const imageAlt = profile.imageAlt 
    ? (profile.imageAlt[locale] || profile.imageAlt.en) 
    : `${name} - ${role}`;
  const badgeText = profile.verificationBadge 
    ? (profile.verificationBadge[locale] || profile.verificationBadge.en) 
    : (isBn ? 'অনুমোদিত পদবি' : 'Verified Role');

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      className="bg-white rounded-3xl border border-[#145B52]/12 p-6 sm:p-7 shadow-[0_4px_20px_-4px_rgba(20,91,82,0.06)] hover:shadow-[0_16px_32px_-8px_rgba(20,91,82,0.12)] hover:border-[#D6B56D]/70 transition-all duration-300 flex flex-col justify-between space-y-5"
    >
      <div className="space-y-4">
        {/* Top Portrait & Verification Status Header */}
        <div className="flex items-start justify-between gap-4">
          {/* Approved Portrait or Monogram Avatar */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#145B52]/15 bg-[#FAF8F2] shadow-xs shrink-0 group">
            {profile.imageUrl ? (
              <Image
                src={profile.imageUrl}
                alt={imageAlt}
                fill
                sizes="(max-width: 640px) 80px, 96px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-[#145B52] text-[#D6B56D]">
                <User className="w-9 h-9" aria-hidden="true" />
              </div>
            )}
          </div>

          {/* Verification Badge */}
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#276749] bg-green-50 px-2.5 py-1 rounded-full border border-green-200/60 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#276749]" aria-hidden="true" />
              <span>{badgeText}</span>
            </span>
            <span className="text-[10px] text-[#242B29]/60 font-medium">
              {isBn ? 'সত্যায়িত দায়িত্ব' : 'Accredited'}
            </span>
          </div>
        </div>

        {/* Name & Official Role */}
        <div className="space-y-1">
          <h3 className={`text-lg sm:text-xl font-black text-[#145B52] tracking-tight leading-snug ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
            {name}
          </h3>
          <p className="text-xs font-extrabold text-[#276749] uppercase tracking-wider">
            {role}
          </p>
        </div>

        {/* Short Biography */}
        <p className={`text-xs sm:text-sm text-[#242B29]/80 leading-relaxed font-normal ${isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}`}>
          {bio}
        </p>
      </div>

      {/* Relevant Qualifications or Verified Experience */}
      {qualifications.length > 0 && (
        <div className="pt-4 border-t border-[#145B52]/8 space-y-2.5">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#145B52]/80 uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
            <span>{isBn ? 'অনুমোদিত যোগ্যতা ও অভিজ্ঞতা' : 'Verified Qualifications & Scope'}</span>
          </div>
          <ul className="space-y-1.5">
            {qualifications.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-[#242B29]/75 leading-relaxed">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D6B56D] shrink-0 mt-0.5" aria-hidden="true" />
                <span className={isBn ? 'font-[family-name:var(--font-hind-siliguri)]' : 'font-[family-name:var(--font-inter)]'}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};
