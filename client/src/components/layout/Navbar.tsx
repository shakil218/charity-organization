'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { Heart, Globe, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenDonateModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDonateModal }) => {
  const { locale, toggleLocale, t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Core navigation links
  const navLinks = [
    { href: '/', label: locale === 'bn' ? 'হোম' : 'Home' },
    { href: '/about', label: locale === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us' },
    { href: '/services', label: locale === 'bn' ? 'সেবাসমূহ' : 'Services' },
    { href: '/facilities', label: locale === 'bn' ? 'সুযোগ-সুবিধা' : 'Facilities' },
    { href: '/team', label: locale === 'bn' ? 'আমাদের টিম' : 'Our Team' },
    { href: '/stories', label: locale === 'bn' ? 'গল্প ও খবর' : 'Stories' },
    { href: '/get-involved', label: locale === 'bn' ? 'যুক্ত হোন' : 'Get Involved' },
    { href: '/contact', label: locale === 'bn' ? 'যোগাযোগ' : 'Contact' },
  ];

  return (
    <>
      {/* Main Sticky Header & Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#FAF8F2]/95 backdrop-blur-md border-b border-teal-900/10 shadow-xs transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3">
          
          <Link 
            href="/" 
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 rounded-xl p-1"
          >
            {/* SORC Text Emblem Logo */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#145B52] border border-[#D6B56D]/40 text-[#FAF8F2] flex items-center justify-center font-black text-xs sm:text-sm tracking-wider shadow-md group-hover:scale-105 transition-transform duration-200 shrink-0">
              <span className="text-[#D6B56D]">S</span>ORC
            </div>
            <div className="min-w-0">
              <span className="block font-black text-sm sm:text-base xl:text-lg leading-tight text-[#145B52] tracking-tight truncate max-w-[170px] sm:max-w-xs xl:max-w-none">
                {locale === 'bn' ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র' : 'Sonavan Old Rehabilitation Center'}
              </span>
              <span className="block text-[10px] sm:text-[11px] font-bold text-[#276749] tracking-wide uppercase truncate">
                {locale === 'bn' ? 'SORC • প্রবীণ আবাসন' : 'SORC • Senior Shelter'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5 shrink-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 py-1.5 rounded-lg text-xs xl:text-sm font-bold whitespace-nowrap transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#145B52] ${
                    isActive
                      ? 'text-[#145B52] bg-[#276749]/10 border-b-2 border-[#D6B56D]'
                      : 'text-[#242B29]/80 hover:text-[#145B52] hover:bg-[#F2ECE0]/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Items: Language Switcher & Prominent Donate Button */}
          <div className="hidden xl:flex items-center gap-2.5 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#145B52]/20 bg-white hover:bg-[#F2ECE0] text-xs font-bold text-[#145B52] transition shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#145B52] cursor-pointer"
              title="Switch Language / ভাষা পরিবর্তন করুন"
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#145B52]" />
              <span>{locale === 'bn' ? 'English' : 'বাংলা'}</span>
            </button>

            {/* Prominent Donate Button */}
            <button
              onClick={onOpenDonateModal}
              className="flex items-center gap-1.5 sm:gap-2 px-3.5 py-2.5 rounded-xl bg-[#145B52] hover:bg-[#0E423B] text-white text-xs xl:text-sm font-extrabold shadow-md hover:shadow-lg transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#145B52]"
            >
              <Heart className="w-4 h-4 text-amber-300 fill-amber-300" />
              <span>{t.nav.donate}</span>
            </button>
          </div>

          {/* Mobile Actions & Accessible Menu Button */}
          <div className="flex items-center gap-2 xl:hidden shrink-0">
            {/* Language Switcher Button on Mobile */}
            <button
              onClick={toggleLocale}
              className="px-2.5 py-1.5 rounded-lg border border-[#145B52]/20 bg-white text-xs font-extrabold text-[#145B52] focus:outline-none focus:ring-2 focus:ring-[#145B52]"
              aria-label="Toggle Language"
            >
              {locale === 'bn' ? 'EN' : 'বাংলা'}
            </button>

            {/* Accessible Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#145B52] hover:bg-[#F2ECE0] rounded-xl border border-[#145B52]/20 focus:outline-none focus:ring-2 focus:ring-[#145B52]"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#FAF8F2] border-b border-teal-900/10 px-4 pt-3 pb-6 space-y-1.5 shadow-2xl animate-in slide-in-from-top-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                    isActive
                      ? 'bg-[#145B52] text-white'
                      : 'text-[#242B29] hover:bg-[#F2ECE0] hover:text-[#145B52]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-amber-200/60">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonateModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#145B52] text-white text-sm font-extrabold shadow-md"
              >
                <Heart className="w-4 h-4 text-amber-300 fill-amber-300" />
                <span>{t.nav.donate}</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
