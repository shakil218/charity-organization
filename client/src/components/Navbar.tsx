"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Home, Users, Gift, ShieldCheck, Menu, X, HandHeart, LayoutDashboard, User, HelpCircle, Key, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth, UserRole } from '@/context/AuthContext';

export function Navbar() {
  const pathname = usePathname();
  const { user, setRole } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Elderly Care', href: '/elderly-care', icon: Heart },
    { name: 'Campaigns', href: '/campaigns', icon: Gift },
    { name: 'Transparency', href: '/transparency', icon: ShieldCheck },
  ];

  const secondaryLinks = [
    { name: 'Apply for Aid', href: '/beneficiary/apply', icon: HandHeart },
    { name: 'Donor Portal', href: '/donor/dashboard', icon: User },
    { name: 'Volunteer Network', href: '/volunteer', icon: Users },
    { name: 'Admin Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Auditor Terminal', href: '/auditor', icon: Key },
    { name: 'Help & FAQ', href: '/help', icon: HelpCircle },
  ];

  const roles: UserRole[] = ['Donor', 'Admin Staff', 'Volunteer', 'Beneficiary', 'Auditor'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-xl border border-slate-200/90 px-5 py-2.5'
            : 'bg-white/80 backdrop-blur-sm shadow-md border border-slate-200/60 px-5 py-3'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group shrink-0">
            <div className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform duration-200">
              <Heart className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div className="hidden sm:block">
              <span className="text-base font-extrabold text-slate-900 tracking-tight block leading-none">
                Ahsan Foundation
              </span>
              <span className="text-[10px] text-emerald-700 font-bold tracking-wider uppercase block mt-0.5">
                Elderly Care & Charity
              </span>
            </div>
          </Link>

          {/* Primary Nav Links */}
          <nav className="hidden md:flex items-center space-x-1">
            {primaryLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center space-x-1.5 ${
                    isActive
                      ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                      : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : 'text-slate-400'}`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}

            {/* More Dropdown Menu */}
            <div className="relative">
              <button
                onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center space-x-1 ${
                  moreMenuOpen ? 'bg-slate-100 text-slate-900' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>Portals & Aid</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${moreMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {moreMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 space-y-1 z-50 text-xs"
                  >
                    {secondaryLinks.map((sLink) => {
                      const SIcon = sLink.icon;
                      const isSubActive = pathname === sLink.href;
                      return (
                        <Link
                          key={sLink.href}
                          href={sLink.href}
                          onClick={() => setMoreMenuOpen(false)}
                          className={`flex items-center space-x-2.5 px-3 py-2 rounded-xl font-semibold transition-colors ${
                            isSubActive
                              ? 'bg-emerald-50 text-emerald-800 font-bold'
                              : 'text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <SIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{sLink.name}</span>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Role Switcher & Donate CTA */}
          <div className="hidden sm:flex items-center space-x-2.5 shrink-0">
            
            {/* Role Switcher */}
            <div className="relative">
              <button
                onClick={() => setRoleMenuOpen(!roleMenuOpen)}
                className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center space-x-1.5 border border-slate-200 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="hidden lg:inline">Role:</span>
                <span>{user.role}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </button>

              <AnimatePresence>
                {roleMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 space-y-1 z-50 text-xs"
                  >
                    <p className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Switch Persona</p>
                    {roles.map((r) => (
                      <button
                        key={r}
                        onClick={() => {
                          setRole(r);
                          setRoleMenuOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl font-semibold transition-colors ${
                          user.role === r ? 'bg-emerald-50 text-emerald-800 font-bold' : 'hover:bg-slate-100 text-slate-700'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/donate"
              className="px-5 py-2 rounded-full text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-200 shadow-md shadow-amber-600/20 flex items-center space-x-1.5"
            >
              <Heart className="w-3.5 h-3.5 fill-current animate-pulse text-white" />
              <span>Donate</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center space-x-2">
            <Link
              href="/donate"
              className="px-3 py-1 rounded-full text-xs font-bold text-white bg-amber-600"
            >
              Donate
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden max-w-6xl mx-auto mt-2 bg-white rounded-3xl border border-slate-200 p-5 shadow-2xl space-y-4 text-xs"
          >
            <div className="space-y-1">
              <p className="px-3 py-1 font-extrabold uppercase text-[10px] text-slate-400">Main Pages</p>
              {primaryLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3.5 py-2.5 rounded-xl font-bold transition-colors ${
                      isActive ? 'bg-emerald-700 text-white' : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="space-y-1 border-t border-slate-100 pt-3">
              <p className="px-3 py-1 font-extrabold uppercase text-[10px] text-slate-400">Portals & Tools</p>
              {secondaryLinks.map((sLink) => {
                const SIcon = sLink.icon;
                const isSubActive = pathname === sLink.href;
                return (
                  <Link
                    key={sLink.href}
                    href={sLink.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3.5 py-2.5 rounded-xl font-bold transition-colors ${
                      isSubActive ? 'bg-emerald-50 text-emerald-800' : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <SIcon className="w-4 h-4 text-emerald-600" />
                    <span>{sLink.name}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
