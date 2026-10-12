'use client';

import React from 'react';
import { CheckCircle2, Info } from 'lucide-react';
import { AccessibilityCardProps } from './types';

export const AccessibilityCard: React.FC<AccessibilityCardProps> = ({
  card,
  locale
}) => {
  const title = card.title[locale] || card.title.en;
  const badge = card.badge[locale] || card.badge.en;
  const description = card.description[locale] || card.description.en;
  const prompt = card.inquiryPrompt ? (card.inquiryPrompt[locale] || card.inquiryPrompt.en) : null;
  const Icon = card.icon;

  return (
    <article
      className="group relative flex flex-col justify-between h-full bg-white rounded-3xl border border-teal-900/10 shadow-sm hover:shadow-md hover:border-teal-900/25 transition-all duration-300 p-6 sm:p-7 overflow-hidden"
      aria-labelledby={`acc-card-title-${card.id}`}
    >
      {/* Top Gold Accent Bar */}
      <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-[#D6B56D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Main Content */}
      <div className="space-y-4">
        {/* Header: Icon & Badge */}
        <div className="flex items-center justify-between gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#145B52]/10 text-[#145B52] flex items-center justify-center transition-transform group-hover:scale-105">
            <Icon className="w-6 h-6 text-[#145B52]" />
          </div>

          <span className="px-3 py-1 rounded-full bg-[#276749]/10 text-[#276749] text-xs font-bold border border-[#276749]/20">
            {badge}
          </span>
        </div>

        {/* Heading */}
        <h3
          id={`acc-card-title-${card.id}`}
          className="text-xl font-extrabold text-[#145B52] tracking-tight group-hover:text-[#0c3933] transition-colors leading-snug"
        >
          {title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-[#242B29]/80 leading-relaxed font-normal">
          {description}
        </p>

        {/* Verified Feature Highlights */}
        {card.details && card.details.length > 0 && (
          <div className="pt-2 space-y-2 border-t border-teal-900/10">
            {card.details.map((detail) => (
              <div
                key={detail.id}
                className="flex items-start gap-2 text-xs text-[#242B29]/85 leading-snug"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#276749] flex-shrink-0 mt-0.5" />
                <span className="font-medium">{detail.text[locale] || detail.text.en}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer / Transparency Prompt */}
      {prompt && (
        <div className="mt-5 pt-3.5 border-t border-teal-900/10">
          <div className="flex items-start gap-2 text-[11px] text-[#242B29]/70 leading-relaxed bg-[#FAF8F2] p-2.5 rounded-xl border border-teal-900/5">
            <Info className="w-3.5 h-3.5 text-[#145B52]/70 flex-shrink-0 mt-0.5" />
            <span>{prompt}</span>
          </div>
        </div>
      )}
    </article>
  );
};
