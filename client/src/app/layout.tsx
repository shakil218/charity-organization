import type { Metadata } from 'next';
import { Inter, Hind_Siliguri } from 'next/font/google';
import './globals.css';
import { AppShell } from '@/components/layout/AppShell';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const hindSiliguri = Hind_Siliguri({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['bengali', 'latin'],
  variable: '--font-hind-siliguri',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Sonavan Old Rehabilitation Center (SORC) | সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র',
    template: '%s | SORC Rehabilitation Center'
  },
  description: 'Sonavan Old Rehabilitation Center (SORC) is a registered non-profit rehabilitation shelter in Bangladesh offering 24/7 healthcare, nutritious dining, emotional therapy, and dignified living for vulnerable seniors.',
  keywords: [
    'SORC',
    'Sonavan Old Rehabilitation Center',
    'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র',
    'Elderly Care Bangladesh',
    'Old Age Home Bangladesh',
    'Sponsor a Grandparent',
    'Nonprofit Charity Bangladesh',
    'Bengali Senior Shelter'
  ],
  authors: [{ name: 'Sonavan Old Rehabilitation Center Foundation' }],
  openGraph: {
    title: 'Sonavan Old Rehabilitation Center (SORC)',
    description: 'Providing dignified shelter, 24/7 medical care, and monthly recurring sponsorship for elderly residents in Bangladesh.',
    url: 'https://sorc-bd.org',
    siteName: 'SORC Rehabilitation Center',
    locale: 'bn_BD',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    'name': 'Sonavan Old Rehabilitation Center (SORC)',
    'alternateName': 'সোনাভান বয়স্ক পুনর্বাসন কেন্দ্র',
    'url': 'https://sorc-bd.org',
    'logo': 'https://sorc-bd.org/logo.png',
    'sameAs': [
      'https://facebook.com/sorcbd',
      'https://youtube.com/sorcbd'
    ],
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Sonavan Tech, Gazipur Sadar',
      'addressLocality': 'Gazipur',
      'addressRegion': 'Dhaka',
      'postalCode': '1700',
      'addressCountry': 'BD'
    },
    'nonprofitStatus': 'Nonprofit501c3'
  };

  return (
    <html lang="bn" className={`${inter.variable} ${hindSiliguri.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
