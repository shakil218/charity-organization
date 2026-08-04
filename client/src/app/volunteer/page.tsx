"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Users, Calendar, Award, CheckCircle, Clock, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Elderly Resident Care',
    availability: 'Weekends'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="max-w-2xl space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-emerald-700/80 px-3.5 py-1.5 rounded-full text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Users className="w-4 h-4" />
            <span>On-Ground Impact</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Volunteer Network & Hour Certificate Tracking
          </h1>
          <p className="text-emerald-100 text-base leading-relaxed">
            Spend meaningful hours listening to elderly stories, assisting medical checkup camps, or distributing seasonal winter blankets. Earn certified volunteer credit hours.
          </p>
        </div>

        <div className="relative z-10 shrink-0">
          <Link
            href="/volunteer/certificate"
            className="px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-xs flex items-center justify-center space-x-2 shadow-lg transition-colors"
          >
            <Award className="w-4 h-4 text-slate-900" />
            <span>Get Official Service Certificate</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Volunteer Opportunities */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Active Volunteer Opportunities</h2>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  Elderly Care Wing
                </span>
                <span className="text-xs text-slate-500 font-semibold flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1" /> 3 Hours / Session
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Weekend Companionship & Story Reading</h3>
              <p className="text-sm text-slate-600">
                Spend quality time conversing, reading books, playing board games, or gardening with our elderly residents in Dhaka home facility.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
                  Charity Distribution
                </span>
                <span className="text-xs text-slate-500 font-semibold flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1" /> 5 Hours Field Duty
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Winter Blanket Relief Distribution</h3>
              <p className="text-sm text-slate-600">
                Assist staff in packaging, verifying beneficiary tokens, and distributing heavy winter blankets to rural families.
              </p>
            </div>
          </div>
        </div>

        {/* Signup Form */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900">Join as a Volunteer</h3>
            <p className="text-xs text-slate-500">Sign up in 1 minute to receive event calls</p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Welcome to the Team!</h4>
              <p className="text-xs text-slate-600">
                Our volunteer coordinator will contact you via email with your introductory schedule.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="volunteer@example.org"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Primary Interest</label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  <option>Elderly Resident Care</option>
                  <option>Winter & Relief Distribution</option>
                  <option>Medical Health Camps</option>
                  <option>Digital & Photography Support</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <span>Submit Volunteer Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
