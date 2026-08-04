"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Users, Sparkles, ArrowRight, CheckCircle2, Stethoscope, HandHeart, Award, Eye } from 'lucide-react';

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
      .catch(() => {
        // Fallback gracefully if backend service isn't started yet
      });
  }, []);

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative hero-gradient pt-8 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-4 h-4 text-emerald-700 animate-spin" />
              <span>Dignified Aging & Transparent Charity</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Honor Every Senior. <br />
              <span className="text-emerald-700 underline decoration-amber-400 decoration-4 underline-offset-8">
                Empower Every Life.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              We provide warm housing, specialized healthcare, and living dignity for neglected elderly residents, while seamlessly connecting donors with 100% verified underprivileged families.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <Link
                href="/elderly-care"
                className="px-7 py-3.5 rounded-full text-base font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-all duration-200 shadow-lg shadow-emerald-700/25 flex items-center justify-center space-x-2 group"
              >
                <Heart className="w-5 h-5 text-amber-300 fill-amber-300 group-hover:scale-110 transition-transform" />
                <span>Sponsor a Grandparent</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/campaigns"
                className="px-7 py-3.5 rounded-full text-base font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-all duration-200 flex items-center justify-center space-x-2 shadow-sm"
              >
                <HandHeart className="w-5 h-5 text-amber-600" />
                <span>Explore Charity Causes</span>
              </Link>
            </div>

            {/* Quick Trust Badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/80 max-w-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Tax Exempt 80G</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Photo Proof Aid</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">100% Audited</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual Showcase */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80"
                  alt="Dadi Amma Rahima - Elderly Care Resident"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-white/60">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
                      alt="Dadi Amma"
                      className="w-14 h-14 rounded-full object-cover border-2 border-emerald-600"
                    />
                    <div>
                      <h4 className="text-base font-bold text-slate-900">Dadi Amma Rahima (78)</h4>
                      <p className="text-xs text-slate-500">Elderly Care Resident • Needs Healthcare</p>
                      <div className="mt-1.5 flex items-center space-x-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-semibold text-emerald-800">Partially Sponsored ($100 / $150)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>


      {/* 2. IMPACT STATS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-emerald-800/80 text-center">
          
          <div className="pt-4 md:pt-0">
            <p className="text-3xl sm:text-4xl font-extrabold text-amber-400">
              {stats.totalElderlyCared}+
            </p>
            <p className="text-sm text-emerald-200 mt-1 font-medium">Elderly Residents Cared For</p>
          </div>

          <div className="pt-4 md:pt-0">
            <p className="text-3xl sm:text-4xl font-extrabold text-amber-400">
              {stats.familiesHelped.toLocaleString()}+
            </p>
            <p className="text-sm text-emerald-200 mt-1 font-medium">Poor Families Assisted</p>
          </div>

          <div className="pt-4 md:pt-0">
            <p className="text-3xl sm:text-4xl font-extrabold text-amber-400">
              ${stats.totalFundsRaised.toLocaleString()}
            </p>
            <p className="text-sm text-emerald-200 mt-1 font-medium">Direct Aid Distributed</p>
          </div>

          <div className="pt-4 md:pt-0">
            <p className="text-3xl sm:text-4xl font-extrabold text-amber-400">
              {stats.transparencyScore}
            </p>
            <p className="text-sm text-emerald-200 mt-1 font-medium">Audited Transparency</p>
          </div>

        </div>
      </section>


      {/* 3. TWO CORE VERTICALS (ELDERLY CARE vs CHARITY WING) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Two Connected Wings, One Compassionate Mission
          </h2>
          <p className="text-slate-600 text-base">
            Our platform operates two synchronized pillars to maximize dignity and community impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Wing 1: Elderly Care Wing */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-shadow space-y-6 relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Heart className="w-7 h-7 fill-emerald-600 text-emerald-600" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-extrabold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Pillar 1: Physical Home & Facility
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Elderly Care Wing
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A safe, comfortable home where elderly individuals without family or support receive dignified food, healthcare, companionship, and monthly recurring sponsorship.
              </p>
            </div>

            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex items-center space-x-2">
                <Stethoscope className="w-4 h-4 text-emerald-600" />
                <span>24/7 On-site Medical & Dietary Care</span>
              </li>
              <li className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-emerald-600" />
                <span>"Sponsor a Grandparent" Monthly Support</span>
              </li>
              <li className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-emerald-600" />
                <span>Volunteer & Family Visiting Sessions</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/elderly-care"
                className="inline-flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-800 group-hover:translate-x-1 transition-transform"
              >
                <span>View Elderly Profiles & Sponsor</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          {/* Wing 2: Charity & Donation Wing */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-shadow space-y-6 relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <HandHeart className="w-7 h-7 text-amber-600" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-extrabold tracking-wider uppercase text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Pillar 2: Direct Community Aid
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Charity & Relief Campaigns
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Connecting generous donors directly to verified poor individuals and emergency causes. Track every taka or dollar from contribution to item distribution.
              </p>
            </div>

            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Admin KYC & Verified Beneficiaries</span>
              </li>
              <li className="flex items-center space-x-2">
                <Eye className="w-4 h-4 text-amber-600" />
                <span>Public Photo & Video Distribution Proof</span>
              </li>
              <li className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Instant Digital Tax Exemption Receipt</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/campaigns"
                className="inline-flex items-center text-sm font-bold text-amber-700 hover:text-amber-800 group-hover:translate-x-1 transition-transform"
              >
                <span>Browse Active Causes</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. TRUST & TRANSPARENCY BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero Leakage Policy</span>
            </div>
            <h3 className="text-3xl font-extrabold tracking-tight">
              100% Traceable & Audited Fund Utilization
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We publish public photo receipts, bank disbursement statements, and beneficiary confirmation slips for every campaign and elderly sponsorship.
            </p>
          </div>
          <Link
            href="/transparency"
            className="px-8 py-4 rounded-full text-base font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg shrink-0 flex items-center space-x-2"
          >
            <span>View Public Disbursement Feed</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
