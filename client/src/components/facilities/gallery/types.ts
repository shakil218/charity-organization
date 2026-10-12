import type { BilingualText } from '../hero/types';

export type FacilityGalleryCategory =
  | 'all'
  | 'exterior'
  | 'interior'
  | 'common'
  | 'outdoor'
  | 'accessibility';

export interface FacilityGalleryItem {
  id: string;
  title: BilingualText;
  caption?: BilingualText;
  category: FacilityGalleryCategory;
  categoryLabel: BilingualText;
  imageUrl: string;
  altText: BilingualText;
  isFeatured?: boolean;
  isIllustrative?: boolean;
  disclaimer?: BilingualText;
}

export interface FacilitiesGallerySectionProps {
  id?: string;
  className?: string;
  eyebrow?: BilingualText;
  heading?: BilingualText;
  subtitle?: BilingualText;
  images?: FacilityGalleryItem[];
  showPrivacyNotice?: boolean;
}

export interface FacilityGalleryLightboxProps {
  isOpen: boolean;
  images: FacilityGalleryItem[];
  currentIndex: number;
  locale: 'en' | 'bn';
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export interface FacilityGalleryFeaturedCardProps {
  image: FacilityGalleryItem;
  locale: 'en' | 'bn';
  onClick: () => void;
}

export interface FacilityGalleryThumbCardProps {
  image: FacilityGalleryItem;
  locale: 'en' | 'bn';
  index: number;
  onClick: () => void;
}
