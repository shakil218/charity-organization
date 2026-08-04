"use client";

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Download, CheckCircle, PieChart, FileText, Lock, Award, DollarSign } from 'lucide-react';

export default function FinancialReportPage() {
  const [summary, setSummary] = useState<any>(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/transparency/financial-summary')
      .then(res => res.json())
      .then(data => data.success && setSummary(data.data));
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-4 border border-slate-800">
        <div className="inline-flex items-center space-x-2 bg-emerald-950 border border-emerald-800 text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Annual Audit Statement</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Annual Financial Report (FY 2025–2026)
        </h1>
        <p className="text-slate-300 text-base leading-relaxed">
          Full public breakdown of every dollar collected and disbursed across our Elderly Care Wing and Charity Campaigns.
        </p>
      </div>

      {summary && (
        <div className="space-y-8">
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-1">
              <span className="text-xs font-bold uppercase text-slate-400">Total Revenue Raised</span>
              <p className="text-3xl font-extrabold text-slate-900">${summary.totalRaised.toLocaleString()}</p>
              <p className="text-xs text-emerald-700 font-semibold">100% Tax-Exempt Receipts</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-1">
              <span className="text-xs font-bold uppercase text-slate-400">Total Direct Aid Disbursed</span>
              <p className="text-3xl font-extrabold text-emerald-800">${summary.totalDisbursed.toLocaleString()}</p>
              <p className="text-xs text-slate-500 font-semibold">Verified Bank Settlement Logs</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-1">
              <span className="text-xs font-bold uppercase text-slate-400">Independent Audit Status</span>
              <p className="text-xl font-extrabold text-amber-600">{summary.auditorStatus}</p>
              <p className="text-xs text-slate-500">{summary.auditorName}</p>
            </div>
          </div>

          {/* Allocation Breakdown */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-slate-900">Fund Allocation Breakdown</h2>

            <div className="space-y-5">
              {summary.breakdown.map((item: any, idx: number) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-sm font-bold">
                    <span className="text-slate-800">{item.category}</span>
                    <span className="text-emerald-800">${item.amount.toLocaleString()} ({item.percent}%)</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-emerald-600 h-3 rounded-full transition-all duration-700"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => alert("Full Audited Financial Report (PDF) downloaded.")}
              className="px-8 py-3.5 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 flex items-center space-x-2 shadow-lg"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download Signed Audit Report (PDF)</span>
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
