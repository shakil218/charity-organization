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
  altText: {
    en: string;
    bn: string;
  };
  imageUrl: string;
  isFeatured?: boolean;
  isIllustrative?: boolean;
  categoryTag?: {
    en: string;
    bn: string;
  };
}

export interface PhotoGallerySectionProps {
  heading?: {
    en: string;
    bn: string;
  };
  subtitle?: {
    en: string;
    bn: string;
  };
  ctaText?: {
    en: string;
    bn: string;
  };
  ctaHref?: string;
  images?: GalleryImageItem[];
  className?: string;
}
