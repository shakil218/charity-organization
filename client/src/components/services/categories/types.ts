export interface ServiceCategoryItem {
  id: string;
  slug: string;
  title: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  availabilityLabel: {
    en: string;
    bn: string;
  };
  imageUrl: string;
  imageAlt: {
    en: string;
    bn: string;
  };
  iconName: 'HeartHandshake' | 'Activity' | 'Smile' | 'Utensils' | 'HeartPulse' | 'Users';
  href: string;
}

export interface ServiceCategoriesSectionProps {
  id?: string;
  className?: string;
  heading?: {
    en: string;
    bn: string;
  };
  eyebrow?: {
    en: string;
    bn: string;
  };
  description?: {
    en: string;
    bn: string;
  };
  categories?: ServiceCategoryItem[];
  onOpenDonateModal?: () => void;
}
