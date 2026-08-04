"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Users, Sparkles, ArrowRight, CheckCircle2, Stethoscope, HandHeart, Award, Eye, Play, Star, ChevronRight } from 'lucide-react';

interface ImpactStats {
  totalElderlyCared: number;
  familiesHelped: number;
  totalFundsRaised: number;
  transparencyScore: string;
}

export default function HomePage() {
  const [stats, setStats] = useState<ImpactStats>({
    totalElderlyCared: 45,
    familiesHelped: 1250,
    totalFundsRaised: 48500,
    transparencyScore: '100%'
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/stats')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setStats(data.data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. ULTRA-MODERN HERO SECTION */}
      <section className="relative hero-gradient-modern pt-10 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text */}
          <motion.div 
            className="lg:col-span-7 space-y-7 text-left"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-extrabold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span>Dignified Elderly Care & 100% Transparent Aid</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08] font-serif">
              Aging with <span className="bg-gradient-to-r from-emerald-800 via-emerald-600 to-teal-700 bg-clip-text text-transparent">Dignity</span>, <br />
              Giving with <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent underline decoration-amber-300 decoration-4 underline-offset-8">Transparency</span>.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-sans">
              A modern foundation uniting a dedicated physical home for neglected elderly residents with a verified community aid network for underprivileged families.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4 pt-2">
              <Link
                href="/elderly-care"
                className="px-8 py-4 rounded-full text-base font-extrabold text-white bg-emerald-700 hover:bg-emerald-800 transition-all duration-300 shadow-xl shadow-emerald-700/25 flex items-center justify-center space-x-2.5 group shimmer-btn"
              >
                <Heart className="w-5 h-5 text-amber-300 fill-amber-300 group-hover:scale-110 transition-transform" />
                <span>Sponsor a Grandparent</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/campaigns"
                className="px-8 py-4 rounded-full text-base font-extrabold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm hover:shadow-md"
              >
                <HandHeart className="w-5 h-5 text-amber-600" />
                <span>Explore Relief Causes</span>
              </Link>
            </div>

            {/* Quick Badges */}
            <div className="pt-6 grid grid-cols-3 gap-3 border-t border-slate-200/80 max-w-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-700">80G Tax Exempt</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-700">Photo Proof Aid</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-slate-700">100% Audited</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Image Card */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glow Aura */}
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-3xl blur-2xl opacity-25 animate-pulse" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80"
                  alt="Dadi Amma Rahima - Elderly Care Resident"
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                
                {/* Resident Floating Overlay */}
                <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-2xl p-5 shadow-2xl border border-white/70">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
                      alt="Dadi Amma"
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-emerald-600 shadow-md"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="text-base font-extrabold text-slate-900">Dadi Amma Rahima (78)</h4>
                        <span className="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                          Resident
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">24/7 Medical Care & Daily Companion</p>
                      <div className="mt-2 flex items-center space-x-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-bold text-emerald-800">Partially Sponsored ($100 / $150 mo)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>


      {/* 2. STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800 text-center border border-slate-800">
          
          <div className="pt-4 md:pt-0 space-y-1">
            <p className="text-3xl sm:text-5xl font-extrabold text-amber-400">
              {stats.totalElderlyCared}+
            </p>
            <p className="text-xs sm:text-sm text-slate-300 font-semibold uppercase tracking-wider">Elderly Residents Cared For</p>
          </div>

          <div className="pt-4 md:pt-0 space-y-1">
            <p className="text-3xl sm:text-5xl font-extrabold text-amber-400">
              {stats.familiesHelped.toLocaleString()}+
            </p>
            <p className="text-xs sm:text-sm text-slate-300 font-semibold uppercase tracking-wider">Poor Families Assisted</p>
          </div>

          <div className="pt-4 md:pt-0 space-y-1">
            <p className="text-3xl sm:text-5xl font-extrabold text-amber-400">
              ${stats.totalFundsRaised.toLocaleString()}
            </p>
            <p className="text-xs sm:text-sm text-slate-300 font-semibold uppercase tracking-wider">Direct Aid Distributed</p>
          </div>

          <div className="pt-4 md:pt-0 space-y-1">
            <p className="text-3xl sm:text-5xl font-extrabold text-amber-400">
              {stats.transparencyScore}
            </p>
            <p className="text-xs sm:text-sm text-slate-300 font-semibold uppercase tracking-wider">Audited Transparency</p>
          </div>

        </div>
      </section>


      {/* 3. DUAL VERTICALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Dual Structural Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            Two Connected Wings, One Compassionate Mission
          </h2>
          <p className="text-slate-600 text-base">
            Seamlessly integrating long-term senior shelter with transparent emergency relief aid.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Wing 1 */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md card-hover-modern space-y-6 relative overflow-hidden group">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shadow-inner">
              <Heart className="w-8 h-8 fill-emerald-600 text-emerald-600" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-extrabold tracking-wider uppercase text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Pillar 1: Physical Care Home
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Elderly Care Wing
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A peaceful, dignified home where elderly residents receive round-the-clock nursing, customized diets, and monthly sponsorship support.
              </p>
            </div>

            <ul className="space-y-3 text-sm text-slate-700 border-t border-slate-100 pt-4">
              <li className="flex items-center space-x-2.5">
                <Stethoscope className="w-4 h-4 text-emerald-600" />
                <span>24/7 On-site Medical & Prescription Care</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Heart className="w-4 h-4 text-emerald-600" />
                <span>"Sponsor a Grandparent" Monthly Recurring Support</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Users className="w-4 h-4 text-emerald-600" />
                <span>Visitor Appointments & Volunteer Companionship</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/elderly-care"
                className="inline-flex items-center text-sm font-extrabold text-emerald-700 hover:text-emerald-800 group-hover:translate-x-1 transition-transform"
              >
                <span>View Resident Profiles & Sponsor</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Wing 2 */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md card-hover-modern space-y-6 relative overflow-hidden group">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shadow-inner">
              <HandHeart className="w-8 h-8 text-amber-600" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-extrabold tracking-wider uppercase text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Pillar 2: Direct Relief Aid
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Charity & Relief Campaigns
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Connecting donors directly to verified poor beneficiaries. Public delivery photos, bank wire references, and downloadable tax receipts.
              </p>
            </div>

            <ul className="space-y-3 text-sm text-slate-700 border-t border-slate-100 pt-4">
              <li className="flex items-center space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Ground Verification & Field KYC Audit</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Eye className="w-4 h-4 text-amber-600" />
                <span>Public Photo & Video Disbursement Proof</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Instant 80G Tax Exemption Certificate PDF</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/campaigns"
                className="inline-flex items-center text-sm font-extrabold text-amber-700 hover:text-amber-800 group-hover:translate-x-1 transition-transform"
              >
                <span>Explore Active Relief Campaigns</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

        </div>
      </section>


      {/* 4. TRUST & AUDIT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 rounded-3xl p-8 sm:p-14 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero Leakage Guarantee</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif">
              100% Traceable & Audited Fund Utilization
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every single rupee or dollar is traceable from your payment receipt to bank wire clearance and on-ground photo proof.
            </p>
          </div>
          <Link
            href="/transparency"
            className="px-8 py-4 rounded-full text-base font-extrabold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors shadow-xl shrink-0 flex items-center space-x-2 shimmer-btn"
          >
            <span>View Public Disbursement Feed</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
