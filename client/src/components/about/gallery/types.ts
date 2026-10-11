export interface GalleryImageItem {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  caption?: {
    en: string;
    bn: string;
  };
  date?: {
    en: string;
    bn: string;
  };
  category?: {
    en: string;
    bn: string;
  };
  altText: {
    en: string;
    bn: string;
  };
  imageUrl: string;
  isFeatured?: boolean;
  isIllustrative?: boolean;
  isVerifiedActualPhoto?: boolean;
}

export interface AboutGalleryPreviewSectionProps {
  id?: string;
  className?: string;
  heading?: {
    en: string;
    bn: string;
  };
  subtitle?: {
    en: string;
    bn: string;
  };
  description?: {
    en: string;
    bn: string;
  };
  images?: GalleryImageItem[];
  galleryHref?: string;
  showPrivacyNotice?: boolean;
}
