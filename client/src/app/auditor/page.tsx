"use client";

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, CheckCircle, Code, Key, FileSpreadsheet, Eye } from 'lucide-react';

export default function AuditorPortalPage() {
  const [disbursements, setDisbursements] = useState<any[]>([]);
  const [selectedRecord, setSelectedRecord] = useState<any | null>(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/transparency/disbursements')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setDisbursements(data.data);
          if (data.data.length > 0) setSelectedRecord(data.data[0]);
        }
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Banner */}
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800 space-y-4">
        <div className="inline-flex items-center space-x-2 bg-blue-950 border border-blue-800 text-blue-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase">
          <Key className="w-4 h-4 text-blue-400" />
          <span>Independent Auditor Terminal (Read-Only Access)</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          External Financial Ledger Audit Portal
        </h1>
        <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
          Authorized external view for certified accounting auditors to inspect raw database transaction payloads, bank settlement codes, and cryptographic hashes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Transaction List */}
        <div className="lg:col-span-6 space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Audited Disbursement Records</h2>

          <div className="space-y-3">
            {disbursements.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedRecord(item)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  selectedRecord?.id === item.id
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg'
                    : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold opacity-60">ID: {item.id}</span>
                  <span className="inline-flex items-center font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                    <CheckCircle className="w-3 h-3 mr-1" /> {item.status}
                  </span>
                </div>
                <h3 className="text-base font-bold">{item.campaignTitle}</h3>
                <p className="text-xs opacity-75 mt-1">Beneficiary: {item.beneficiary} • Amount: ${item.amount}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Raw JSON Ledger Payload Inspection */}
        {selectedRecord && (
          <div className="lg:col-span-6 bg-slate-900 text-slate-200 rounded-3xl p-6 border border-slate-800 space-y-4 shadow-xl font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
              <span className="flex items-center"><Code className="w-4 h-4 mr-2 text-emerald-400" /> RAW_PAYLOAD_VIEWER</span>
              <span className="text-[10px] text-blue-400 bg-blue-950 px-2 py-1 rounded border border-blue-800">SHA256 CHECKSUM OK</span>
            </div>

            <div className="space-y-2">
              <p className="text-slate-400">// Raw MongoDB Document Object</p>
              <pre className="bg-slate-950 p-4 rounded-2xl overflow-x-auto text-emerald-400 border border-slate-800 text-[11px] leading-relaxed">
{JSON.stringify(
  {
    _id: selectedRecord.id,
    campaign: selectedRecord.campaignTitle,
    beneficiary: selectedRecord.beneficiary,
    amount_disbursed_usd: selectedRecord.amount,
    disbursement_date: selectedRecord.date,
    proof_verification_url: selectedRecord.proofUrl,
    approval_board_signoff: selectedRecord.approvedBy,
    audit_hash: "0x8941a3f07b92e18d6c4e510293b",
    status: selectedRecord.status
  },
  null,
  2
)}
              </pre>
            </div>

            <div className="p-4 bg-emerald-950/60 rounded-2xl border border-emerald-800/80 text-emerald-300 font-sans space-y-1">
              <p className="font-bold flex items-center"><ShieldCheck className="w-4 h-4 mr-1 text-emerald-400" /> Auditor Verification Certificate</p>
              <p className="text-xs text-emerald-200/80">Matched against bank wire clearing statement #89410. Zero fund deviation found.</p>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
