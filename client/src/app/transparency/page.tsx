"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, FileCheck, CheckCircle2, Eye, Download, Award, Lock, ExternalLink, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

interface Disbursement {
  id: string;
  campaignTitle: string;
  beneficiary: string;
  amount: number;
  date: string;
  proofUrl: string;
  approvedBy: string;
  status: string;
}

export default function TransparencyPage() {
  const [disbursements, setDisbursements] = useState<Disbursement[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/transparency/disbursements')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setDisbursements(data.data);
        }
      })
      .catch(() => {
        // Fallback static feed
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="max-w-2xl space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-emerald-950 border border-emerald-800 text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Verified NGO Audit</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Trust & Financial Transparency Report
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Every dollar contributed is logged with photographic delivery receipts, bank settlement codes, and independent audit verification.
          </p>
        </div>

        <div className="relative z-10 shrink-0">
          <Link
            href="/transparency/report"
            className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-lg transition-colors"
          >
            <BarChart3 className="w-4 h-4" />
            <span>Interactive Financial Report</span>
          </Link>
        </div>
      </div>

      {/* Trust Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <FileCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">80G Tax Exemption</h3>
          <p className="text-sm text-slate-600">
            Registered Section 8 NGO trust. Instant downloadable PDF receipts compliant for tax exemption.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">KYC Verified Beneficiaries</h3>
          <p className="text-sm text-slate-600">
            Beneficiaries undergo physical field verification & document audit prior to fund disbursement.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Auditor Dashboard Access</h3>
          <p className="text-sm text-slate-600">
            External auditors hold read-only key access to review ledger logs and vendor invoice proofs.
          </p>
        </div>
      </div>

      {/* Live Disbursement Feed */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">Public Disbursement & Delivery Proof Feed</h2>
            <p className="text-sm text-slate-500">Live feed of completed fund allocations with photo evidence</p>
          </div>
          <Link
            href="/transparency/report"
            className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 flex items-center space-x-2 shadow-sm"
          >
            <Download className="w-4 h-4 text-amber-400" />
            <span>Annual Audit Report</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {disbursements.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400">Ref ID: {item.id}</span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> {item.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">{item.campaignTitle}</h3>
                <p className="text-sm text-slate-600">
                  <strong className="text-slate-900">Beneficiary:</strong> {item.beneficiary}
                </p>

                <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  <img src={item.proofUrl} alt="Disbursement Proof" className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 left-3 bg-slate-900/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                    Verified Photo Proof
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-500">
                <span>Disbursed: <strong>${item.amount.toLocaleString()}</strong></span>
                <span>Approved By: <strong>{item.approvedBy}</strong></span>
                <span>Date: {item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
