export interface StoryArticleItem {
  id: string;
  slug: string;
  title: {
    en: string;
    bn: string;
  };
  summary: {
    en: string;
    bn: string;
  };
  category: {
    en: string;
    bn: string;
  };
  categoryTheme?: 'teal' | 'amber' | 'emerald' | 'blue';
  publishedAt: string; // ISO format: YYYY-MM-DD
  formattedDate: {
    en: string;
    bn: string;
  };
  coverImage: string;
  imageAlt: {
    en: string;
    bn: string;
  };
  readTime?: {
    en: string;
    bn: string;
  };
  isDemo?: boolean; // Set to true when representing illustrative announcements before official verification
  href?: string;
}

export interface StoriesSectionProps {
  heading?: {
    en: string;
    bn: string;
  };
  subtitle?: {
    en: string;
    bn: string;
  };
  articles?: StoryArticleItem[];
  showEmptyStateIfNoArticles?: boolean;
  className?: string;
}
