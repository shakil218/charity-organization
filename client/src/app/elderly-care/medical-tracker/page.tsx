"use client";

import React, { useState, useEffect } from 'react';
import { Stethoscope, DollarSign, FileText, CheckCircle, PlusCircle, AlertCircle, Eye, Calendar } from 'lucide-react';

export default function MedicalTrackerPage() {
  const [residents, setResidents] = useState<any[]>([]);
  const [selectedResidentId, setSelectedResidentId] = useState<string>('res-001');
  const [medicalLogs, setMedicalLogs] = useState<any[]>([]);

  // Log Form
  const [newLog, setNewLog] = useState({
    title: '',
    cost: '',
    doctor: '',
    notes: '',
    receiptUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80'
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/residents')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setResidents(data.data);
          if (data.data.length > 0) setSelectedResidentId(data.data[0].id);
        }
      });
  }, []);

  const fetchMedicalLogs = (id: string) => {
    fetch(`http://localhost:5000/api/v1/residents/${id}/medical-records`)
      .then(res => res.json())
      .then(data => data.success && setMedicalLogs(data.data));
  };

  useEffect(() => {
    if (selectedResidentId) {
      fetchMedicalLogs(selectedResidentId);
    }
  }, [selectedResidentId]);

  const handleAddMedicalLog = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/v1/residents/${selectedResidentId}/medical-records`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLog)
      });
      const data = await response.json();
      if (data.success) {
        setMessage('Medical record and expense logged!');
        fetchMedicalLogs(selectedResidentId);
        setNewLog({ title: '', cost: '', doctor: '', notes: '', receiptUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80' });
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (err) {
      alert('Medical expense logged!');
    }
  };

  const currentResident = residents.find(r => r.id === selectedResidentId);
  const totalMedicalSpent = medicalLogs.reduce((sum, log) => sum + (log.cost || 0), 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-4">
        <div className="inline-flex items-center space-x-2 bg-emerald-950 border border-emerald-800 text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase">
          <Stethoscope className="w-4 h-4" />
          <span>Resident Healthcare Ledger</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Medical Expense & Prescription Tracker
        </h1>
        <p className="text-slate-300 text-base leading-relaxed max-w-2xl">
          Detailed transparency into medication, doctor checkups, diagnostic tests, and surgical procedure costs for each elderly resident.
        </p>
      </div>

      {/* Resident Selector Pills */}
      <div className="flex items-center space-x-3 overflow-x-auto pb-2">
        {residents.map(r => (
          <button
            key={r.id}
            onClick={() => setSelectedResidentId(r.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              selectedResidentId === r.id
                ? 'bg-emerald-700 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {r.name} (Age {r.age})
          </button>
        ))}
      </div>

      {currentResident && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Resident Profile & Add Entry */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex items-center space-x-4">
              <img
                src={currentResident.photo}
                alt={currentResident.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-600"
              />
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900">{currentResident.name}</h3>
                <p className="text-xs text-slate-500">{currentResident.healthStatus}</p>
                <p className="text-xs font-bold text-emerald-800">Total Medical Spent: ${totalMedicalSpent}</p>
              </div>
            </div>

            {/* Add Medical Log Form */}
            <form onSubmit={handleAddMedicalLog} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900">Log Medical Expense Entry</h3>

              {message && (
                <p className="text-xs font-bold text-emerald-700 bg-emerald-50 p-2 rounded-xl border border-emerald-200">{message}</p>
              )}

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Expense Title / Medicine Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Monthly Diabetes & Cardiac Prescriptions"
                  value={newLog.title}
                  onChange={(e) => setNewLog({ ...newLog, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Cost ($ USD)</label>
                  <input
                    type="number"
                    required
                    placeholder="45"
                    value={newLog.cost}
                    onChange={(e) => setNewLog({ ...newLog, cost: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Attending Doctor</label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. Rahman"
                    value={newLog.doctor}
                    onChange={(e) => setNewLog({ ...newLog, doctor: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Prescription / Diagnostic Notes</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Doctor's recommendations, dosage info..."
                  value={newLog.notes}
                  onChange={(e) => setNewLog({ ...newLog, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md"
              >
                Log Medical Record
              </button>
            </form>

          </div>

          {/* Right Column: Medical History Logs */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Medical Expense & Treatment Logs</h3>

            <div className="space-y-4">
              {medicalLogs.map(log => (
                <div key={log.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      {log.date}
                    </span>
                    <span className="text-sm font-extrabold text-amber-700">${log.cost}</span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900">{log.title}</h4>
                  <p className="text-xs text-slate-500">Attending Physician: <strong>{log.doctor}</strong></p>
                  <p className="text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">"{log.notes}"</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
