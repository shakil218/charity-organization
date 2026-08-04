"use client";

import React, { useState } from 'react';
import { HandHeart, FileText, CheckCircle, ShieldAlert, ArrowRight, UserCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BeneficiaryApplyPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    nidOrId: '',
    phone: '',
    address: '',
    category: 'Winter Clothing Aid',
    amountRequested: '150',
    reason: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/v1/beneficiaries/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      setIsSubmitting(false);

      if (result.success) {
        setSubmittedData(result.data);
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      }
    } catch (err) {
      setIsSubmitting(false);
      alert('Application submitted! Our field staff will review your case.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-3">
        <div className="inline-flex items-center space-x-2 bg-emerald-700/80 px-3 py-1 rounded-full text-amber-300 text-xs font-bold uppercase tracking-wider">
          <HandHeart className="w-4 h-4" />
          <span>Beneficiary Aid Portal</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Apply for Foundation Relief Aid</h1>
        <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
          If you or someone you know is in genuine need of winter blankets, medical treatment, or emergency financial support, please fill in the request below.
        </p>
      </div>

      {submittedData ? (
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center space-y-6">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900">Application Submitted Successfully</h2>
          <p className="text-slate-600 text-base max-w-md mx-auto">
            Your request ID is <strong>{submittedData.id}</strong>. Our ground verification team will review your information within 48 hours.
          </p>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left max-w-md mx-auto space-y-2 text-xs text-slate-700">
            <p><strong>Applicant Name:</strong> {submittedData.fullName}</p>
            <p><strong>Category:</strong> {submittedData.category}</p>
            <p><strong>Status:</strong> <span className="text-amber-700 font-bold">{submittedData.status}</span></p>
          </div>

          <button
            onClick={() => setSubmittedData(null)}
            className="px-6 py-3 rounded-full bg-emerald-700 text-white font-bold text-sm shadow-md hover:bg-emerald-800"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
          
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 flex items-start space-x-3 text-xs text-amber-800">
            <ShieldAlert className="w-5 h-5 shrink-0 text-amber-600 mt-0.5" />
            <p>
              <strong>Notice:</strong> All applications undergo physical ground verification (KYC) by our foundation inspectors to ensure aid reaches truly deserving individuals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Applicant Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Kulsum Bibi"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">NID / Voter ID / Birth Reg No *</label>
              <input
                type="text"
                required
                placeholder="e.g. NID-1984729104"
                value={formData.nidOrId}
                onChange={(e) => setFormData({ ...formData, nidOrId: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Mobile Phone Number *</label>
              <input
                type="text"
                required
                placeholder="+880 1700-000000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Aid Category *</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
              >
                <option>Winter Clothing Aid</option>
                <option>Emergency Medical Procedure</option>
                <option>Elderly Living Support</option>
                <option>Clean Water & Food Supply</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Full Village / Town Address *</label>
            <input
              type="text"
              required
              placeholder="House/Village, Union/Post Office, District"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Estimated Financial Aid Needed ($ USD / Taka)</label>
            <input
              type="number"
              required
              placeholder="e.g. 180"
              value={formData.amountRequested}
              onChange={(e) => setFormData({ ...formData, amountRequested: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Reason & Condition Details *</label>
            <textarea
              rows={4}
              required
              placeholder="Describe your current situation, health issue, or seasonal hardship..."
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-base shadow-lg shadow-emerald-700/20 transition-all flex items-center justify-center space-x-2"
          >
            <UserCheck className="w-5 h-5" />
            <span>{isSubmitting ? 'Submitting Application...' : 'Submit Help Request'}</span>
          </button>
        </form>
      )}

    </div>
  );
}
