"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Home, Users, Gift, ShieldCheck, Menu, X, HandHeart, UserCheck, LayoutDashboard, User, HelpCircle, Key, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth, UserRole } from '@/context/AuthContext';

export function Navbar() {
  const pathname = usePathname();
  const { user, setRole } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Elderly Care', href: '/elderly-care', icon: Heart },
    { name: 'Campaigns', href: '/campaigns', icon: Gift },
    { name: 'Transparency', href: '/transparency', icon: ShieldCheck },
    { name: 'Apply Aid', href: '/beneficiary/apply', icon: HandHeart },
    { name: 'Donor Portal', href: '/donor/dashboard', icon: User },
    { name: 'Admin', href: '/admin', icon: LayoutDashboard },
    { name: 'Auditor', href: '/auditor', icon: Key },
    { name: 'Help', href: '/help', icon: HelpCircle },
  ];

  const roles: UserRole[] = ['Donor', 'Admin Staff', 'Volunteer', 'Beneficiary', 'Auditor'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3 border-b border-emerald-100'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-lg shadow-emerald-700/20 group-hover:scale-105 transition-transform duration-200">
              <Heart className="w-6 h-6 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <span className="text-xl font-bold text-slate-900 tracking-tight block">
                Ahsan Foundation
              </span>
              <span className="text-xs text-emerald-700 font-semibold tracking-wide uppercase block -mt-1">
                Elderly Care & Charity
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-1 bg-white/60 p-1.5 rounded-full border border-slate-200/80 shadow-sm backdrop-blur-sm">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center space-x-1 ${
                    isActive
                      ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                      : 'text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/80'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : 'text-slate-400'}`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Call to Action & Role Switcher */}
          <div className="hidden lg:flex items-center space-x-3">
            
            {/* Role Switcher */}
            <div className="relative">
              <button
                onClick={() => setRoleMenuOpen(!roleMenuOpen)}
                className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center space-x-1.5 border border-slate-200 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Role: {user.role}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </button>

              <AnimatePresence>
                {roleMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 space-y-1 z-50 text-xs"
                  >
                    {roles.map((r) => (
                      <button
                        key={r}
                        onClick={() => {
                          setRole(r);
                          setRoleMenuOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl font-medium transition-colors ${
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
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 transition-all duration-200 shadow-md hover:shadow-lg shadow-amber-600/20 group"
            >
              <Heart className="w-4 h-4 mr-1.5 fill-current animate-pulse text-white" />
              <span>Donate Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center space-x-2">
            <Link
              href="/donate"
              className="px-3 py-1.5 rounded-full text-xs font-bold text-white bg-amber-600"
            >
              Donate
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 mt-2 shadow-xl max-h-[80vh] overflow-y-auto"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-emerald-700 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
