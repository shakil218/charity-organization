'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  const { locale, t } = useLanguage();

  if (pathname === '/' || pathname === '/about') return null;

  const pathSegments = pathname.split('/').filter(Boolean);

  const getLabel = (segment: string) => {
    switch (segment) {
      case 'about': return t.nav.about;
      case 'services': return t.nav.services;
      case 'facilities': return t.nav.facilities;
      case 'team': return t.nav.team;
      case 'stories': return t.nav.stories;
      case 'get-involved': return t.nav.getInvolved;
      case 'donate': return t.nav.donate;
      case 'contact': return t.nav.contact;
      case 'elderly-care': return locale === 'bn' ? 'প্রবীণ সেবা' : 'Elderly Care';
      case 'campaigns': return locale === 'bn' ? 'চলতি ক্যাম্পেইন' : 'Campaigns';
      case 'transparency': return locale === 'bn' ? 'স্বচ্ছতা ও হিসাব' : 'Transparency';
      case 'volunteer': return locale === 'bn' ? 'স্বেচ্ছাসেবক' : 'Volunteer';
      default: return segment.replace('-', ' ');
    }
  };

  return (
    <nav aria-label="Breadcrumb" className="bg-[#F2ECE0]/60 border-b border-teal-900/10 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold text-[#242B29]/70">
        <Link href="/" className="flex items-center gap-1 hover:text-[#145B52] transition">
          <Home className="w-3.5 h-3.5 text-[#145B52]" />
          <span>{t.nav.home}</span>
        </Link>

        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          const label = getLabel(segment);

          return (
            <React.Fragment key={href}>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              {isLast ? (
                <span className="text-[#145B52] font-bold tracking-tight">
                  {label}
                </span>
              ) : (
                <Link href={href} className="hover:text-[#145B52] transition">
                  {label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
