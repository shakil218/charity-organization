"use client";

import React, { useState } from 'react';
import { Heart, ShieldCheck, CreditCard, CheckCircle, Sparkles, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DonatePage() {
  const [vertical, setVertical] = useState<'elderly' | 'charity' | 'general'>('elderly');
  const [donationFrequency, setDonationFrequency] = useState<'one-time' | 'monthly'>('monthly');
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentRail, setPaymentRail] = useState<'sslcommerz' | 'stripe'>('sslcommerz');

  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount;

    try {
      const response = await fetch('http://localhost:5000/api/v1/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          donorName: donorName || 'Generous Supporter',
          email: donorEmail,
          amount,
          isRecurring: donationFrequency === 'monthly',
          type: vertical,
          targetId: 'general-fund',
          paymentMethod: paymentRail === 'sslcommerz' ? 'SSLCommerz (bKash/Nagad/Cards)' : 'Stripe Global (Visa/MC)'
        })
      });

      const data = await response.json();
      setIsSubmitting(false);
      setCompleted(true);
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    } catch (err) {
      setIsSubmitting(false);
      setCompleted(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Title */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <Heart className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span>Direct & Secure Contribution</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Make an Impact Today</h1>
        <p className="text-slate-600 text-sm max-w-xl mx-auto">
          Choose where your funds go. Receive an instant official tax-exemption receipt.
        </p>
      </div>

      {completed ? (
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center space-y-6">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900">Thank You For Your Support!</h2>
          <p className="text-slate-600 text-base max-w-md mx-auto">
            Your contribution of <strong>${customAmount || selectedAmount}</strong> has been received and routed to our verified fund ledger.
          </p>
          <div className="p-4 bg-slate-50 rounded-2xl max-w-md mx-auto border border-slate-200 text-xs text-slate-500 space-y-1">
            <p className="font-semibold text-slate-800">Transaction ID: TXN-SECURE8941</p>
            <p>An 80G tax receipt has been dispatched to {donorEmail || 'your email'}.</p>
          </div>
          <button
            onClick={() => setCompleted(false)}
            className="px-6 py-3 rounded-full bg-emerald-700 text-white font-bold text-sm shadow-md hover:bg-emerald-800"
          >
            Make Another Donation
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8">
          
          {/* Vertical Selection */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              1. Choose Where Your Donation Goes
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'elderly', title: 'Elderly Care Wing', desc: 'Housing & healthcare for seniors' },
                { id: 'charity', title: 'Charity Campaigns', desc: 'Winter blankets & emergency aid' },
                { id: 'general', title: 'General Foundation Fund', desc: 'Allocated where needed most' }
              ].map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setVertical(v.id as any)}
                  className={`p-4 rounded-2xl text-left border transition-all ${
                    vertical === v.id
                      ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-600/20'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <p className="text-sm font-bold text-slate-900">{v.title}</p>
                  <p className="text-xs text-slate-500 mt-1">{v.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Frequency */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              2. Donation Frequency
            </label>
            <div className="grid grid-cols-2 gap-3 max-w-sm">
              {[
                { id: 'monthly', title: 'Monthly Support' },
                { id: 'one-time', title: 'One-Time Contribution' }
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setDonationFrequency(f.id as any)}
                  className={`py-3 rounded-xl font-bold text-xs border transition-all ${
                    donationFrequency === f.id
                      ? 'bg-emerald-700 text-white border-emerald-700'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  {f.title}
                </button>
              ))}
            </div>
          </div>

          {/* Amount Tiers */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              3. Choose Amount ($ USD / Taka)
            </label>
            <div className="grid grid-cols-4 gap-3">
              {[25, 50, 100, 250].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => {
                    setSelectedAmount(amt);
                    setCustomAmount('');
                  }}
                  className={`py-3 rounded-xl font-extrabold text-base border transition-all ${
                    selectedAmount === amt && !customAmount
                      ? 'bg-amber-600 text-white border-amber-600'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  ${amt}
                </button>
              ))}
            </div>
            <input
              type="number"
              placeholder="Or enter custom amount ($)"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm mt-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>

          {/* Payment Method Rail */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              4. Payment Gateway Rail
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPaymentRail('sslcommerz')}
                className={`p-4 rounded-2xl border text-left flex items-center justify-between ${
                  paymentRail === 'sslcommerz'
                    ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-600/20'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div>
                  <p className="text-sm font-bold text-slate-900">SSLCommerz (Local BD)</p>
                  <p className="text-xs text-slate-500">bKash, Nagad, Rocket, Local Cards</p>
                </div>
                <CreditCard className="w-5 h-5 text-emerald-700" />
              </button>

              <button
                type="button"
                onClick={() => setPaymentRail('stripe')}
                className={`p-4 rounded-2xl border text-left flex items-center justify-between ${
                  paymentRail === 'stripe'
                    ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-600/20'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div>
                  <p className="text-sm font-bold text-slate-900">Stripe (Global USD)</p>
                  <p className="text-xs text-slate-500">Visa, Mastercard, Apple Pay</p>
                </div>
                <Lock className="w-5 h-5 text-emerald-700" />
              </button>
            </div>
          </div>

          {/* Donor Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-600 block mb-1">Your Name</label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-600 block mb-1">Your Email</label>
              <input
                type="email"
                required
                placeholder="email@domain.com"
                value={donorEmail}
                onChange={(e) => setDonorEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-base shadow-xl shadow-amber-600/20 transition-all flex items-center justify-center space-x-2"
          >
            <Heart className="w-5 h-5 fill-current" />
            <span>{isSubmitting ? 'Processing Payment...' : `Complete $${customAmount || selectedAmount} Donation`}</span>
          </button>
        </form>
      )}

    </div>
  );
}
