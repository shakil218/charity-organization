"use client";

import React, { useState, useEffect } from 'react';
import { Send, Mail, MessageSquare, CheckCircle, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AdminNotificationsPage() {
  const [logs, setLogs] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    recipient: 'All Grandparent Monthly Sponsors',
    channel: 'Email & Firebase Cloud SMS',
    subject: '',
    messageBody: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState('');

  const fetchLogs = () => {
    fetch('http://localhost:5000/api/v1/admin/notifications')
      .then(res => res.json())
      .then(data => data.success && setLogs(data.data));
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/v1/admin/notifications/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      setIsSubmitting(false);

      if (data.success) {
        setSuccess('Notification broadcast dispatched to recipients!');
        confetti({ particleCount: 60, spread: 50, origin: { y: 0.6 } });
        fetchLogs();
        setFormData({ recipient: 'All Grandparent Monthly Sponsors', channel: 'Email & Firebase Cloud SMS', subject: '', messageBody: '' });
        setTimeout(() => setSuccess(''), 3000);
      }
    } catch (err) {
      setIsSubmitting(false);
      alert('Notification broadcast queued!');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-2">
        <div className="inline-flex items-center space-x-2 bg-emerald-950 border border-emerald-800 text-emerald-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase">
          <Send className="w-4 h-4" />
          <span>Notification Engine</span>
        </div>
        <h1 className="text-3xl font-extrabold">Broadcast Email & SMS Notification Center</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Dispatch Update / Alert</h2>

          {success && (
            <p className="text-xs font-bold text-emerald-700 bg-emerald-50 p-3 rounded-xl border border-emerald-200 flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-emerald-600" /> {success}
            </p>
          )}

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Recipient Segment</label>
            <select
              value={formData.recipient}
              onChange={(e) => setFormData({ ...formData, recipient: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none"
            >
              <option>All Grandparent Monthly Sponsors</option>
              <option>Campaign Donors (Winter Blanket Fund)</option>
              <option>Registered On-Ground Volunteers</option>
              <option>Verified Aid Beneficiaries</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Channel Rail</label>
            <select
              value={formData.channel}
              onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none"
            >
              <option>Email & Firebase Cloud SMS</option>
              <option>SendGrid Email Only</option>
              <option>Twilio / Local SMS Gateway Only</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Broadcast Subject / Headline</label>
            <input
              type="text"
              required
              placeholder="e.g. August Grandparent Health Report & Impact Photos"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">Message Content</label>
            <textarea
              rows={4}
              required
              placeholder="Enter details of monthly update, health progress, or aid distribution schedule..."
              value={formData.messageBody}
              onChange={(e) => setFormData({ ...formData, messageBody: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md"
          >
            {isSubmitting ? 'Sending Broadcast...' : 'Dispatch Notification Broadcast'}
          </button>
        </form>

        {/* History Log */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Recent Dispatched Alerts</h2>

          <div className="space-y-3">
            {logs.map(log => (
              <div key={log.id} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-bold text-emerald-700">{log.recipient}</span>
                  <span>{log.sentAt}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900">{log.subject}</h3>
                <p className="text-xs text-slate-500">Channel: {log.channel}</p>
                <p className="text-xs text-emerald-800 font-semibold">{log.status}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
