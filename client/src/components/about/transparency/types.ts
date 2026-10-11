import { LucideIcon } from 'lucide-react';

export interface TransparencyDocument {
  id: string;
  title: {
    en: string;
    bn: string;
  };
  category: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  icon: LucideIcon;
  isAvailable: boolean;
  statusText: {
    en: string;
    bn: string;
  };
  documentUrl?: string;
  actionType?: 'view' | 'download';
  fileType?: string;
  fileSize?: string;
  publicationDate?: {
    en: string;
    bn: string;
  };
}

export interface AboutTransparencySectionProps {
  id?: string;
  className?: string;
  documents?: TransparencyDocument[];
}
