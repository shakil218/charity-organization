import React from 'react';
import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Shield, CheckCircle, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 fill-amber-400 text-amber-400" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Ahsan Foundation
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Providing dignified housing, healthcare, and warmth to elderly residents, while empowering underprivileged families with transparent community aid.
            </p>
            <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-3 py-1.5 rounded-full w-fit">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Registered NGO / Tax-Exempt Trust (80G Certified)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/elderly-care" className="hover:text-emerald-400 transition-colors">
                  Elderly Care Wing
                </Link>
              </li>
              <li>
                <Link href="/campaigns" className="hover:text-emerald-400 transition-colors">
                  Charity & Causes
                </Link>
              </li>
              <li>
                <Link href="/transparency" className="hover:text-emerald-400 transition-colors">
                  Audits & Transparency
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="hover:text-emerald-400 transition-colors">
                  Volunteer Network
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">
              Trust & Security
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>Instant PDF Tax Receipt</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>100% Verified Beneficiaries</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>SSLCommerz & Stripe Secured</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>Annual Public Financial Audit</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">
              Contact Foundation
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>House 42, Peace Haven Road, Elderly Care Wing, Dhaka</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+880 1700-000000 / +1 800-CARE-NOW</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>support@ahsanfoundation.org</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Ahsan Elderly Care & Charity Foundation. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Donor Rights</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
