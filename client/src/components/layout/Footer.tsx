'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Heart, ShieldCheck, MapPin, Mail, Phone, ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  const { locale, t } = useLanguage();

  return (
    <footer className="bg-[#0E423B] text-[#FAF8F2] pt-16 pb-8 border-t border-teal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-teal-800/60">
          
          {/* Col 1: About SORC */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#145B52] to-[#276749] p-2 flex items-center justify-center border border-[#D6B56D]/30">
                <Heart className="w-6 h-6 text-[#D6B56D] fill-[#D6B56D]/40" />
              </div>
              <div>
                <span className="block font-bold text-base text-amber-100">
                  {locale === 'bn' ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র' : 'Sonavan Old Rehabilitation Center'}
                </span>
                <span className="block text-xs text-[#D6B56D]">
                  {locale === 'bn' ? 'SORC | অলাভজনক সংস্থা' : 'SORC | Nonprofit Rehabilitation Shelter'}
                </span>
              </div>
            </div>
            <p className="text-xs text-teal-200/90 leading-relaxed">
              {t.footer.aboutText}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-950/80 border border-[#D6B56D]/30 text-xs font-medium text-amber-200">
              <ShieldCheck className="w-4 h-4 text-[#D6B56D]" />
              <span>{t.footer.taxExemptBadge}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-amber-100 border-b border-teal-700/50 pb-2">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2 text-xs text-teal-200/90">
              <li>
                <Link href="/" className="hover:text-[#D6B56D] transition flex items-center gap-1">
                  <span>›</span> {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D6B56D] transition flex items-center gap-1">
                  <span>›</span> {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#D6B56D] transition flex items-center gap-1">
                  <span>›</span> {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-[#D6B56D] transition flex items-center gap-1">
                  <span>›</span> {t.nav.facilities}
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#D6B56D] transition flex items-center gap-1">
                  <span>›</span> {t.nav.team}
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-[#D6B56D] transition flex items-center gap-1">
                  <span>›</span> {t.nav.stories}
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="hover:text-[#D6B56D] transition flex items-center gap-1">
                  <span>›</span> {t.nav.getInvolved}
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-[#D6B56D] transition flex items-center gap-1">
                  <span>›</span> {t.nav.donate}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D6B56D] transition flex items-center gap-1">
                  <span>›</span> {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info (Placeholders) */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-amber-100 border-b border-teal-700/50 pb-2">
              {t.footer.contactInfo}
            </h3>
            <ul className="space-y-3 text-xs text-teal-200/90">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D6B56D] shrink-0 mt-0.5" />
                <span>
                  {locale === 'bn'
                    ? 'গাজীপুর সদর, গাজীপুর-১৭০০ [চূড়ান্ত ঠিকানা সত্যতা যাচাই সাপেক্ষে হালনাগাদ হবে]'
                    : 'Gazipur Sadar, Gazipur-1700 [Placeholder - Address Pending Verification]'}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D6B56D] shrink-0" />
                <span>+880 1700-000000 [Placeholder]</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D6B56D] shrink-0" />
                <span>info@sorc-bd.org [Placeholder]</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Verification Notice */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-amber-100 border-b border-teal-700/50 pb-2">
              {locale === 'bn' ? 'তথ্যাবলী প্রকাশ সংক্রান্ত' : 'Operational Verification'}
            </h3>
            <div className="p-3 rounded-xl bg-teal-950/80 border border-teal-800 space-y-2 text-xs text-amber-200/90">
              <div className="flex items-center gap-1.5 font-bold text-[#D6B56D]">
                <ShieldAlert className="w-4 h-4" />
                <span>{locale === 'bn' ? 'যাচাইকরণ শর্ত' : 'Verification Policy'}</span>
              </div>
              <p className="leading-relaxed">
                {t.footer.disclaimerNotice}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-teal-300/80">
          <p>{t.footer.copyright}</p>
          <div className="flex gap-4">
            <Link href="/transparency" className="hover:text-[#D6B56D] transition">
              {locale === 'bn' ? 'অডিট ও স্বচ্ছতা' : 'Audit & Ledger'}
            </Link>
            <Link href="/contact" className="hover:text-[#D6B56D] transition">
              {locale === 'bn' ? 'যোগাযোগ' : 'Contact Us'}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
