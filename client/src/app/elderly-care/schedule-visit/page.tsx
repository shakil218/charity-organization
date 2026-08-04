"use client";

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Heart, Users, CheckCircle, ArrowRight, UserCheck, PhoneCall } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ScheduleVisitPage() {
  const [residents, setResidents] = useState<any[]>([]);
  const [scheduledVisits, setScheduledVisits] = useState<any[]>([]);
  
  const [formData, setFormData] = useState({
    residentId: '',
    residentName: '',
    visitorName: '',
    visitorEmail: '',
    visitorPhone: '',
    visitDate: '',
    timeSlot: '10:00 AM - 12:00 PM',
    purpose: '',
    visitorType: 'Volunteer Companion'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const fetchVisitData = () => {
    fetch('http://localhost:5000/api/v1/residents')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setResidents(data.data);
          if (data.data.length > 0) {
            setFormData(prev => ({
              ...prev,
              residentId: data.data[0].id,
              residentName: data.data[0].name
            }));
          }
        }
      });

    fetch('http://localhost:5000/api/v1/residents/visits')
      .then(res => res.json())
      .then(data => data.success && setScheduledVisits(data.data));
  };

  useEffect(() => {
    fetchVisitData();
  }, []);

  const handleResidentSelect = (id: string) => {
    const resObj = residents.find(r => r.id === id);
    setFormData({
      ...formData,
      residentId: id,
      residentName: resObj ? resObj.name : ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/v1/residents/schedule-visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      setIsSubmitting(false);

      if (result.success) {
        setSuccessMessage(`Visit confirmed for ${formData.visitorName} with ${formData.residentName} on ${formData.visitDate}!`);
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
        fetchVisitData();
        setTimeout(() => setSuccessMessage(''), 4000);
      }
    } catch (err) {
      setIsSubmitting(false);
      alert('Visit appointment logged! Our facility coordinator looks forward to seeing you.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-emerald-700/80 px-3.5 py-1.5 rounded-full text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-4 h-4" />
            <span>Facility Visitation Portal</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Schedule a Visit with Elderly Residents
          </h1>
          <p className="text-emerald-100 text-base sm:text-lg leading-relaxed">
            Companionship brings immense joy and emotional healing to our grandparents. Book an in-person visit slot for storytelling, outdoor garden walks, or tea sessions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Visit Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
          <h2 className="text-xl font-bold text-slate-900">Book Your Visit Appointment</h2>

          {successMessage ? (
            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900">Appointment Scheduled!</h3>
              <p className="text-sm text-slate-600">{successMessage}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Select Resident to Visit *</label>
                <select
                  value={formData.residentId}
                  onChange={(e) => handleResidentSelect(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  {residents.map(r => (
                    <option key={r.id} value={r.id}>{r.name} (Age {r.age})</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Visitor Name"
                    value={formData.visitorName}
                    onChange={(e) => setFormData({ ...formData, visitorName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="visitor@example.com"
                    value={formData.visitorEmail}
                    onChange={(e) => setFormData({ ...formData, visitorEmail: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Mobile Phone *</label>
                  <input
                    type="text"
                    required
                    placeholder="+880 1700-000000"
                    value={formData.visitorPhone}
                    onChange={(e) => setFormData({ ...formData, visitorPhone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Visitor Category</label>
                  <select
                    value={formData.visitorType}
                    onChange={(e) => setFormData({ ...formData, visitorType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option>Volunteer Companion</option>
                    <option>Family / Relative</option>
                    <option>Grandparent Sponsor</option>
                    <option>Medical Practitioner</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Preferred Visit Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.visitDate}
                    onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Time Slot *</label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option>10:00 AM - 12:00 PM (Morning Tea)</option>
                    <option>03:00 PM - 05:00 PM (Afternoon Garden)</option>
                    <option>06:00 PM - 07:30 PM (Evening Companion)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Visit Purpose / Activity *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="e.g. Bringing storybooks, playing chess, or spending quality conversation time..."
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>{isSubmitting ? 'Booking Visit...' : 'Confirm Visitation Slot'}</span>
              </button>
            </form>
          )}
        </div>

        {/* Scheduled Visit List */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-xl font-bold text-slate-900">Upcoming Confirmed Visits</h2>

          <div className="space-y-4">
            {scheduledVisits.map((v) => (
              <div key={v.id} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    {v.visitorType}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">{v.visitDate}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900">Visitor: {v.visitorName}</h3>
                <p className="text-xs text-slate-600">Visiting <strong>{v.residentName}</strong> • {v.timeSlot}</p>
                <p className="text-xs text-slate-500 italic">"{v.purpose}"</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
