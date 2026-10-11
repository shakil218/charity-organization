'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { API_BASE_URL } from '@/lib/api';

export default function ContactPage() {
  const { locale, t } = useLanguage();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);

    try {
      await fetch(`${API_BASE_URL}/api/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, subject, message })
      });
      setLoading(false);
      setSent(true);
    } catch {
      setLoading(false);
      setSent(true);
    }
  };

  return (
    <div className="space-y-12 py-12">
      
      <section className="bg-gradient-to-r from-[#0D4B4D] to-[#1E4D2B] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto space-y-4 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-amber-100">
            {t.nav.contact}
          </h1>
          <p className="text-base text-teal-100/90 leading-relaxed">
            {locale === 'bn' 
              ? 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র ভ্রমণ, অনুদান তথ্য বা সাধারণ অনুসন্ধানের জন্য যোগাযোগ করুন।'
              : 'Reach out to Sonavan Old Rehabilitation Center for visits, donation inquiries, or general questions.'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#F4EFE6] p-8 rounded-3xl border border-amber-200 space-y-6">
              <h2 className="text-xl font-bold text-[#0D4B4D]">
                {t.footer.contactInfo}
              </h2>

              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0D4B4D] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-[#0D4B4D]">
                      {locale === 'bn' ? 'কেন্দ্রের অবস্থান:' : 'Rehabilitation Campus:'}
                    </strong>
                    <p>
                      {locale === 'bn' 
                        ? 'সোনাভান টেক, গাজীপুর সদর, গাজীপুর-১৭০০, বাংলাদেশ'
                        : 'Sonavan Tech, Gazipur Sadar, Gazipur-1700, Bangladesh'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#0D4B4D] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-[#0D4B4D]">
                      {locale === 'bn' ? 'জরুরি হেল্পলাইন:' : 'Helpline & Admissions:'}
                    </strong>
                    <p>+880 1700-000000 / +880 1800-000000</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#0D4B4D] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-[#0D4B4D]">
                      {locale === 'bn' ? 'অফিসিয়াল ইমেইল:' : 'Official Email:'}
                    </strong>
                    <p>info@sorc-bd.org</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Guidelines Card */}
            <div className="bg-[#0D4B4D] text-white p-6 rounded-2xl space-y-2">
              <h3 className="text-base font-bold text-amber-100">
                {locale === 'bn' ? 'সরাসরি প্রবীণদের সাথে সাক্ষাৎ' : 'Visiting Hours & Campus Tours'}
              </h3>
              <p className="text-xs text-teal-100/90 leading-relaxed">
                {locale === 'bn'
                  ? 'প্রতিটি শনিবার ও শুক্রবার সকাল ১০:০০ - বিকাল ৪:০০ পর্যন্ত দর্শক ও স্বজনরা কেন্দ্র ভ্রমণ করতে পারবেন।'
                  : 'Visitors and family sponsors are welcome every Friday & Saturday between 10:00 AM - 4:00 PM.'}
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-teal-900/15 shadow-xl">
            {sent ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#0D4B4D]">
                  {locale === 'bn' ? 'বার্তা প্রেরিত হয়েছে!' : 'Inquiry Sent Successfully!'}
                </h3>
                <p className="text-sm text-gray-600">
                  {locale === 'bn' ? 'আপনার প্রশ্নের উত্তর দিতে SORC টিম দ্রুত যোগাযোগ করবে।' : 'Thank you. Our team will get back to you shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-bold text-[#0D4B4D]">
                  {locale === 'bn' ? 'অনুসন্ধান বা বার্তা পাঠান' : 'Send an Inquiry Message'}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      {locale === 'bn' ? 'আপনার নাম' : 'Your Name'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#0D4B4D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      {locale === 'bn' ? 'ইমেইল ঠিকানা' : 'Email Address'} *
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      {locale === 'bn' ? 'ফোন নম্বর' : 'Phone Number'}
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#0D4B4D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      {locale === 'bn' ? 'বিষয়' : 'Subject'}
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#0D4B4D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    {locale === 'bn' ? 'আপনার বার্তা' : 'Message'} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-[#0D4B4D]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 rounded-xl bg-[#0D4B4D] hover:bg-[#083234] text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#D4AF37]" />
                  <span>{loading ? 'Sending...' : (locale === 'bn' ? 'বার্তা পাঠান' : 'Send Message')}</span>
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
