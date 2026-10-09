'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Users, CheckCircle2, HeartHandshake, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function VolunteerPage() {
  const { locale, t } = useLanguage();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [occupation, setOccupation] = useState('');
  const [district, setDistrict] = useState('Dhaka');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [motivation, setMotivation] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const skillsList = [
    { id: 'medical', label: locale === 'bn' ? 'চিকিৎসা ও সেবিকা (Medical & Nursing)' : 'Medical & Nursing Support' },
    { id: 'caregiving', label: locale === 'bn' ? 'প্রবীণ পরিচর্যা (Senior Caretaking)' : 'Senior Caretaking & Companionship' },
    { id: 'it', label: locale === 'bn' ? 'আইটি ও সোশ্যাল মিডিয়া (IT & Social Media)' : 'IT & Social Media' },
    { id: 'event', label: locale === 'bn' ? 'ইভেন্ট ও ক্যাম্পেইন (Event Management)' : 'Event Management & Fundraising' },
  ];

  const toggleSkill = (skillId: string) => {
    if (selectedSkills.includes(skillId)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skillId));
    } else {
      setSelectedSkills([...selectedSkills, skillId]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;

    setLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          occupation,
          skills: selectedSkills,
          district,
          motivation
        })
      });

      setLoading(false);
      setSubmitted(true);
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    } catch {
      setLoading(false);
      setSubmitted(true);
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    }
  };

  return (
    <div className="space-y-12 py-12">
      
      <section className="bg-gradient-to-r from-[#0D4B4D] to-[#1E4D2B] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto space-y-4 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold">
            <Users className="w-4 h-4" />
            <span>{locale === 'bn' ? 'স্বেচ্ছাসেবক নিবন্ধন' : 'Volunteer Registration'}</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-amber-100">
            {t.volunteerPage.title}
          </h1>
          <p className="text-base text-teal-100/90 leading-relaxed">
            {t.volunteerPage.subtitle}
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-teal-900/15 p-8 shadow-xl">
          
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D4B4D]">
                {locale === 'bn' ? 'আবেদন সফল হয়েছে!' : 'Application Submitted!'}
              </h3>
              <p className="text-sm text-gray-700 max-w-md mx-auto">
                {t.volunteerPage.successMessage}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-[#0D4B4D] text-white font-semibold text-sm"
              >
                {locale === 'bn' ? 'নতুন আবেদন করুন' : 'Submit Another Form'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    {t.volunteerPage.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#0D4B4D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    {t.volunteerPage.emailLabel} *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#0D4B4D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    {t.volunteerPage.phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#0D4B4D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    {t.volunteerPage.occupationLabel}
                  </label>
                  <input
                    type="text"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#0D4B4D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    {t.volunteerPage.districtLabel}
                  </label>
                  <input
                    type="text"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#0D4B4D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                  {t.volunteerPage.skillsTitle}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skillsList.map((skill) => (
                    <button
                      key={skill.id}
                      type="button"
                      onClick={() => toggleSkill(skill.id)}
                      className={`p-3 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition ${
                        selectedSkills.includes(skill.id)
                          ? 'border-[#0D4B4D] bg-teal-50 text-[#0D4B4D]'
                          : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span>{skill.label}</span>
                      {selectedSkills.includes(skill.id) && <CheckCircle2 className="w-4 h-4 text-[#0D4B4D]" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  {t.volunteerPage.motivationLabel}
                </label>
                <textarea
                  rows={4}
                  value={motivation}
                  onChange={(e) => setMotivation(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#0D4B4D]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#0D4B4D] to-[#1E4D2B] text-white font-bold text-base shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <HeartHandshake className="w-5 h-5 text-[#D4AF37]" />
                <span>{loading ? 'Submitting...' : t.volunteerPage.submitBtn}</span>
              </button>

            </form>
          )}

        </div>
      </section>

    </div>
  );
}
