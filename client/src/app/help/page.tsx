"use client";

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ShieldCheck, Heart, FileCheck, PhoneCall } from 'lucide-react';

export default function HelpPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does 'Sponsor a Grandparent' work?",
      a: "When you select a resident in the Elderly Care Wing, your monthly recurring donation ($10, $25, or custom) directly covers their prescription medication, specialized diabetic/low-sodium meals, and resident room amenities. You receive monthly photo and health updates."
    },
    {
      q: "Are donations eligible for 80G Tax Exemption?",
      a: "Yes! Ahsan Foundation is a registered Section 8 NGO trust. Every donor immediately receives a digital 80G PDF receipt with unique transaction reference for tax deductions."
    },
    {
      q: "How are poor beneficiaries verified before aid is disbursed?",
      a: "Our ground field inspectors perform physical visits, verify national ID cards (NID/Birth Reg), and cross-check union council records. Once verified, a 'Field KYC Verified' badge is assigned prior to fund allocation."
    },
    {
      q: "Can I visit an elderly resident in person?",
      a: "Absolutely! Visitors, sponsors, and volunteers are welcome. You can use our 'Schedule a Visit' portal to book a 2-hour morning or afternoon slot for storytelling, garden walks, or tea sessions."
    },
    {
      q: "What payment rails are accepted?",
      a: "We support SSLCommerz for local Bangladesh donors (bKash, Nagad, Rocket, local debit/credit cards) as well as Stripe for international donors (Visa, Mastercard, Apple Pay, USD currency)."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase">
          <HelpCircle className="w-4 h-4 text-emerald-700" />
          <span>Donor & Community Support</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Frequently Asked Questions</h1>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          Everything you need to know about transparent donations, resident sponsorships, and 80G tax receipts.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full p-5 text-left font-bold text-slate-900 flex items-center justify-between text-base"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-emerald-700' : ''}`} />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="bg-emerald-900 text-white rounded-3xl p-8 text-center space-y-3">
        <h3 className="text-2xl font-bold">Have Specific Questions?</h3>
        <p className="text-sm text-emerald-200">Our foundation staff is available 24/7 to assist with sponsorships and audits.</p>
        <p className="text-xs font-bold text-amber-300">Call: +880 1700-000000 | Email: support@ahsanfoundation.org</p>
      </div>

    </div>
  );
}
