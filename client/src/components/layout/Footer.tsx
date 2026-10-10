'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Globe,
  ChevronRight
} from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

/**
 * Polished Footer Component for Sonavan Old Rehabilitation Center (SORC)
 *
 * Specifications:
 * - Deep teal background (#145B52).
 * - White and muted cream text (#FAF8F2).
 * - Soft gold accents (#D6B56D).
 * - 4-Column responsive grid (Organization, Quick Links, Get Involved, Verified Contact).
 * - Dynamic current year copyright notice.
 * - Privacy Policy link (Terms omitted as no Terms page exists).
 * - Accessible bilingual language switcher.
 * - Reusable across all application routes.
 */
export const Footer: React.FC = () => {
  const { locale, toggleLocale } = useLanguage();

  const quickLinks = [
    { href: '/', label: locale === 'bn' ? 'হোম' : 'Home' },
    { href: '/about', label: locale === 'bn' ? 'আমাদের সম্পর্কে' : 'About' },
    { href: '/services', label: locale === 'bn' ? 'সেবাসমূহ' : 'Services' },
    { href: '/facilities', label: locale === 'bn' ? 'সুযোগ-সুবিধা' : 'Facilities' },
    { href: '/stories', label: locale === 'bn' ? 'প্রবীণদের গল্প' : 'Stories' }
  ];

  const getInvolvedLinks = [
    { href: '/donate', label: locale === 'bn' ? 'অনুদান দিন' : 'Donate' },
    { href: '/volunteer', label: locale === 'bn' ? 'স্বেচ্ছাসেবক' : 'Volunteer' },
    { href: '/get-involved', label: locale === 'bn' ? 'প্রাতিষ্ঠানিক অংশীদারিত্ব' : 'Partnerships' },
    { href: '/contact', label: locale === 'bn' ? 'যোগাযোগ' : 'Contact' }
  ];

  return (
    <footer
      role="contentinfo"
      aria-label="Site Footer"
      className="w-full bg-[#145B52] text-[#FAF8F2] border-t border-[#D6B56D]/25 relative overflow-hidden"
    >
      {/* Ambient background decorative glow accents */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#276749]/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-80 h-80 bg-[#D6B56D]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main 4-Column Grid Layout (Single line on md and lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 lg:grid-cols-12 gap-8 md:gap-6 lg:gap-10 pb-12 border-b border-[#D6B56D]/20">

          {/* Column 1 — Organization (4 Columns on md and lg) */}
          <div className="sm:col-span-2 md:col-span-4 lg:col-span-4 space-y-4 md:space-y-4 lg:space-y-5">
            {/* Logo Emblem & Names */}
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 sm:gap-3 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D6B56D] rounded-xl"
              aria-label="Sonavan Old Rehabilitation Center Home"
            >
              {/* SORC Logo Emblem Placeholder */}
              <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-[#0E423B] border border-[#D6B56D]/50 text-[#FAF8F2] flex items-center justify-center font-black text-xs sm:text-sm tracking-wider shadow-md group-hover:scale-105 transition-transform duration-200 shrink-0">
                <span className="text-[#D6B56D]">S</span>ORC
              </div>

              <div className="min-w-0">
                <span className="block font-black text-sm lg:text-lg text-[#FAF8F2] tracking-tight leading-tight">
                  Sonavan Old Rehabilitation Center
                </span>
                <span className="block text-[11px] lg:text-xs font-bold text-[#D6B56D] tracking-wide leading-tight mt-0.5">
                  সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র
                </span>
              </div>
            </Link>

            {/* Approved Organizational Description */}
            <p className="text-xs lg:text-sm text-[#FAF8F2]/80 leading-relaxed font-normal max-w-md">
              {locale === 'bn'
                ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র (SORC) একটি মানবিক অলাভজনক প্রতিষ্ঠান যা স্বজনহীন ও অসহায় প্রবীণদের বাসস্থান, চিকিৎসা ও সম্মানজনক জীবন উপহার দিতে কাজ করছে।'
                : 'Sonavan Old Rehabilitation Center (SORC) is a compassionate nonprofit dedicated to giving homeless and elderly seniors dignity, medical treatment, and a warm family atmosphere.'}
            </p>

            {/* Approved Nonprofit Verification Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#0E423B]/70 border border-[#D6B56D]/35 text-[11px] lg:text-xs font-semibold text-amber-100 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#D6B56D] shrink-0" aria-hidden="true" />
              <span>
                {locale === 'bn'
                  ? 'অনুমোদিত অলাভজনক পুনর্বাসন কেন্দ্র'
                  : 'Approved Nonprofit Rehabilitation Center'}
              </span>
            </div>
          </div>

          {/* Column 2 — Quick Links (2 Columns on md and lg) */}
          <div className="md:col-span-2 lg:col-span-2 space-y-3 lg:space-y-4">
            <h3 className="text-xs lg:text-sm font-bold uppercase tracking-wider text-white flex items-center gap-1.5 lg:gap-2">
              <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#D6B56D]" aria-hidden="true" />
              <span>{locale === 'bn' ? 'কুইক লিংক' : 'Quick Links'}</span>
            </h3>

            <nav aria-label="Quick Links">
              <ul className="space-y-2 lg:space-y-2.5 text-xs lg:text-sm">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#FAF8F2]/80 hover:text-[#D6B56D] transition-colors duration-200 inline-flex items-center gap-1 lg:gap-1.5 py-0.5 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D6B56D] rounded-sm"
                    >
                      <ChevronRight
                        className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#D6B56D]/60 group-hover:text-[#D6B56D] group-hover:translate-x-0.5 transition-all"
                        aria-hidden="true"
                      />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3 — Get Involved (3 Columns on md and lg) */}
          <div className="md:col-span-3 lg:col-span-3 space-y-3 lg:space-y-4">
            <h3 className="text-xs lg:text-sm font-bold uppercase tracking-wider text-white flex items-center gap-1.5 lg:gap-2">
              <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#D6B56D]" aria-hidden="true" />
              <span>{locale === 'bn' ? 'যুক্ত হোন' : 'Get Involved'}</span>
            </h3>

            <nav aria-label="Get Involved Links">
              <ul className="space-y-2 lg:space-y-2.5 text-xs lg:text-sm">
                {getInvolvedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#FAF8F2]/80 hover:text-[#D6B56D] transition-colors duration-200 inline-flex items-center gap-1 lg:gap-1.5 py-0.5 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D6B56D] rounded-sm"
                    >
                      <ChevronRight
                        className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#D6B56D]/60 group-hover:text-[#D6B56D] group-hover:translate-x-0.5 transition-all"
                        aria-hidden="true"
                      />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 4 — Contact & Visiting (3 Columns on md and lg) */}
          <div className="md:col-span-3 lg:col-span-3 space-y-3 lg:space-y-4">
            <h3 className="text-xs lg:text-sm font-bold uppercase tracking-wider text-white flex items-center gap-1.5 lg:gap-2">
              <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#D6B56D]" aria-hidden="true" />
              <span>{locale === 'bn' ? 'যোগাযোগ ও সময়সূচি' : 'Contact & Visiting'}</span>
            </h3>

            <ul className="space-y-2.5 lg:space-y-3 text-xs lg:text-sm text-[#FAF8F2]/85">
              {/* Verified Address */}
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D6B56D] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-snug">
                  {locale === 'bn'
                    ? 'সোনাভান টেক, গাজীপুর সদর, গাজীপুর-১৭০০, বাংলাদেশ'
                    : 'Sonavan Tech, Gazipur Sadar, Gazipur-1700, Bangladesh'}
                </span>
              </li>

              {/* Verified Helpline */}
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D6B56D] shrink-0" aria-hidden="true" />
                <a
                  href="tel:+8801700000000"
                  className="hover:text-[#D6B56D] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D6B56D] rounded-sm"
                >
                  +880 1700-000000
                </a>
              </li>

              {/* Verified Email */}
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D6B56D] shrink-0" aria-hidden="true" />
                <a
                  href="mailto:info@sorc-bd.org"
                  className="hover:text-[#D6B56D] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D6B56D] rounded-sm"
                >
                  info@sorc-bd.org
                </a>
              </li>

              {/* Verified Operating / Visiting Hours */}
              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#D6B56D] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-1 text-xs">
                  <p>
                    <strong className="text-amber-100">
                      {locale === 'bn' ? 'সাক্ষাতের সময়:' : 'Visiting Hours:'}
                    </strong>{' '}
                    {locale === 'bn' ? 'শুক্র ও শনিবার, ১০:০০ - ১৬:০০' : 'Fri & Sat, 10:00 AM – 4:00 PM'}
                  </p>
                  <p className="text-teal-200/80">
                    <strong className="text-amber-100">
                      {locale === 'bn' ? 'স্বাস্থ্যসেবা:' : 'Medical Care:'}
                    </strong>{' '}
                    {locale === 'bn' ? '২৪/৭ সার্বক্ষণিক পরিচর্যা' : '24/7 Continuous Support'}
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Privacy Policy, Language Control */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F2]/75">
          {/* Dynamic Copyright with Current Year */}
          <p className="text-center sm:text-left">
            {locale === 'bn'
              ? `© ${CURRENT_YEAR} সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র (SORC)। সর্বস্বত্ব সংরক্ষিত।`
              : `© ${CURRENT_YEAR} Sonavan Old Rehabilitation Center (SORC). All rights reserved.`}
          </p>

          {/* Links & Language Control */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            {/* Privacy Policy Link */}
            <Link
              href="/privacy"
              className="hover:text-[#D6B56D] underline underline-offset-4 decoration-[#D6B56D]/40 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D6B56D] rounded-sm"
            >
              {locale === 'bn' ? 'গোপনীয়তা নীতিমালা' : 'Privacy Policy'}
            </Link>

            {/* Bilingual Language Control Switcher */}
            <button
              onClick={toggleLocale}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0E423B]/70 hover:bg-[#0E423B] border border-[#D6B56D]/35 text-xs font-bold text-[#FAF8F2] hover:text-[#D6B56D] transition shadow-2xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D6B56D] cursor-pointer"
              title={locale === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
              aria-label={locale === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
            >
              <Globe className="w-3.5 h-3.5 text-[#D6B56D]" aria-hidden="true" />
              <span>{locale === 'bn' ? 'English' : 'বাংলা'}</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
