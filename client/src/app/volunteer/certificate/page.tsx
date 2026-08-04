"use client";

import React, { useState } from 'react';
import { Award, Printer, Download, CheckCircle, Search, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function VolunteerCertificatePage() {
  const [emailInput, setEmailInput] = useState('volunteer@example.org');
  const [certData, setCertData] = useState<any>(null);

  const fetchCertificate = () => {
    fetch(`http://localhost:5000/api/v1/volunteers/certificate/${encodeURIComponent(emailInput)}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setCertData(data.data);
          confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Banner */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase">
          <Award className="w-4 h-4 text-amber-600" />
          <span>Volunteer Recognition</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Certificate of Service & Hours Log</h1>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          Verify and print your official Foundation Service Certificate.
        </p>
      </div>

      {/* Search Input */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto">
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
          <input
            type="email"
            placeholder="Enter your volunteer email..."
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none"
          />
        </div>
        <button
          onClick={fetchCertificate}
          className="w-full sm:w-auto px-6 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-md shrink-0"
        >
          Generate Certificate
        </button>
      </div>

      {certData && (
        <div className="space-y-6">
          {/* Printable Certificate Box */}
          <div className="bg-[#fffdf9] border-8 border-double border-emerald-800 rounded-3xl p-8 sm:p-14 shadow-2xl text-center space-y-6 relative overflow-hidden">
            
            <div className="flex items-center justify-between border-b border-amber-200 pb-4">
              <div className="flex items-center space-x-2">
                <Heart className="w-6 h-6 text-emerald-700 fill-amber-400" />
                <span className="font-bold text-slate-900 text-lg">Ahsan Foundation</span>
              </div>
              <span className="text-xs font-bold text-slate-400">Ref Code: {certData.certificateId}</span>
            </div>

            <div className="space-y-2 py-4">
              <div className="inline-flex items-center space-x-1.5 text-xs font-extrabold uppercase text-amber-700 bg-amber-50 px-4 py-1 rounded-full border border-amber-200">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Certificate of Appreciation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-wide font-serif pt-2">
                PROUDLY PRESENTED TO
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-emerald-800 underline decoration-amber-400 decoration-2 underline-offset-8">
                {certData.name}
              </h3>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              In recognition of distinguished volunteer dedication, logging <strong>{certData.hoursLogged} hours</strong> of compassionate service for elderly residents and emergency community aid distribution.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-amber-200 text-xs text-slate-700">
              <div className="space-y-1 text-left">
                <p className="font-bold text-slate-900">Issuing Authority:</p>
                <p>Ahsan Elderly Care Board</p>
                <p className="text-slate-400">Date: {certData.issuedDate}</p>
              </div>

              <div className="space-y-1 text-right">
                <div className="inline-block p-2 bg-slate-100 rounded-xl border border-slate-200">
                  <p className="font-bold text-emerald-800 text-[10px]">KYC Verified Badge</p>
                  <p className="text-[10px] text-slate-500">QR Audit ID: #8941</p>
                </div>
              </div>
            </div>

          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => window.print()}
              className="px-6 py-3 rounded-full bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 flex items-center space-x-2 shadow-md"
            >
              <Printer className="w-4 h-4" />
              <span>Print Official Certificate</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
