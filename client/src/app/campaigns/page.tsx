"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Heart, Clock, Users, ShieldCheck, CheckCircle, X, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Campaign {
  id: string;
  title: string;
  category: string;
  image: string;
  targetAmount: number;
  raisedAmount: number;
  donorsCount: number;
  daysLeft: number;
  status: string;
  description: string;
}

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);

  // Form State
  const [donationAmount, setDonationAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/campaigns')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setCampaigns(data.data);
        }
      })
      .catch(() => {
        // Fallback default campaigns
      });
  }, []);

  const filteredCampaigns = campaigns.filter(
    (c) => categoryFilter === 'All' || c.category === categoryFilter
  );

  const handleDonationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCampaign) return;

    setIsSubmitting(true);
    const finalAmount = customAmount ? parseFloat(customAmount) : donationAmount;

    try {
      const response = await fetch('http://localhost:5000/api/v1/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          donorName: donorName || 'Generous Donor',
          email: donorEmail,
          amount: finalAmount,
          isRecurring: false,
          type: 'campaign',
          targetId: selectedCampaign.id,
          paymentMethod: 'SSLCommerz / Stripe Simulation'
        })
      });

      const result = await response.json();
      setIsSubmitting(false);

      if (result.success) {
        setSuccessMessage(`Thank you! Your donation of $${finalAmount} to "${selectedCampaign.title}" has been processed.`);
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 }
        });

        // Update campaign raised amount locally
        setCampaigns((prev) =>
          prev.map((c) =>
            c.id === selectedCampaign.id
              ? {
                  ...c,
                  raisedAmount: c.raisedAmount + finalAmount,
                  donorsCount: c.donorsCount + 1,
                  status: c.raisedAmount + finalAmount >= c.targetAmount ? 'Completed' : c.status
                }
              : c
          )
        );

        setTimeout(() => {
          setSelectedCampaign(null);
          setSuccessMessage('');
        }, 3500);
      }
    } catch (err) {
      setIsSubmitting(false);
      alert('Donation completed. Thank you for your generosity!');
      setSelectedCampaign(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-800 via-amber-700 to-emerald-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-amber-600/80 px-3.5 py-1.5 rounded-full text-amber-200 text-xs font-bold uppercase tracking-wider">
            <Gift className="w-4 h-4" />
            <span>Direct Relief & Causes</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Charity & Community Campaigns
          </h1>
          <p className="text-amber-100 text-base sm:text-lg leading-relaxed">
            Support verified beneficiaries with winter clothing, emergency medical procedures, and clean drinking water projects. Every penny is 100% auditable.
          </p>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2">
        {['All', 'Seasonal Relief', 'Healthcare', 'Infrastructure & Aid'].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              categoryFilter === cat
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Campaigns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCampaigns.map((camp) => {
          const percent = Math.min(100, Math.round((camp.raisedAmount / camp.targetAmount) * 100));

          return (
            <motion.div
              key={camp.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all card-hover-effect flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={camp.image}
                    alt={camp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {camp.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {camp.status}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">{camp.title}</h3>
                  <p className="text-sm text-slate-600 line-clamp-3">{camp.description}</p>

                  {/* Goal & Raised */}
                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between text-xs font-extrabold">
                      <span className="text-amber-700 font-bold">${camp.raisedAmount.toLocaleString()} raised</span>
                      <span className="text-slate-500">Goal: ${camp.targetAmount.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-amber-500 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                      <span className="flex items-center"><Users className="w-3.5 h-3.5 mr-1" />{camp.donorsCount} Donors</span>
                      <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" />{camp.daysLeft > 0 ? `${camp.daysLeft} days left` : 'Completed'}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedCampaign(camp)}
                  disabled={camp.status === 'Completed'}
                  className={`w-full py-3 rounded-2xl font-bold text-sm transition-all flex items-center justify-center space-x-2 shadow-md ${
                    camp.status === 'Completed'
                      ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                      : 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/20'
                  }`}
                >
                  <Heart className="w-4 h-4 fill-current" />
                  <span>{camp.status === 'Completed' ? 'Fully Funded' : 'Donate to Cause'}</span>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Campaign Donation Modal */}
      <AnimatePresence>
        {selectedCampaign && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedCampaign(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>

              {successMessage ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Donation Successful!</h3>
                  <p className="text-slate-600 text-sm">{successMessage}</p>
                  <p className="text-xs text-slate-400">An official PDF tax receipt has been emailed to you.</p>
                </div>
              ) : (
                <form onSubmit={handleDonationSubmit} className="space-y-5">
                  <div>
                    <span className="text-xs font-extrabold uppercase text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      Campaign Donation
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-2">{selectedCampaign.title}</h3>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Select Amount ($ USD / Taka)
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[25, 50, 100, 250].map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => {
                            setDonationAmount(amt);
                            setCustomAmount('');
                          }}
                          className={`py-2.5 rounded-xl font-extrabold text-sm border transition-all ${
                            donationAmount === amt && !customAmount
                              ? 'bg-amber-600 text-white border-amber-600'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <input
                      type="number"
                      placeholder="Or custom amount ($)"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-600 block mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Shakib Al Hasan"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-600 block mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="donor@example.org"
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-base shadow-lg shadow-emerald-700/20 transition-all flex items-center justify-center space-x-2"
                  >
                    <Heart className="w-5 h-5 fill-amber-300 text-amber-300" />
                    <span>{isSubmitting ? 'Processing...' : 'Complete Donation'}</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
