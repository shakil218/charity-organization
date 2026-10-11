export interface CarePrincipleItem {
  id: string;
  principleNumber: string;
  title: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  iconName: 'HeartHandshake' | 'Shield' | 'Compass' | 'Sparkles' | 'MessageSquareHeart' | 'UserCheck' | 'Accessibility';
  tag?: {
    en: string;
    bn: string;
  };
}

export interface CarePrinciplesSectionProps {
  id?: string;
  className?: string;
  eyebrow?: {
    en: string;
    bn: string;
  };
  heading?: {
    en: string;
    bn: string;
  };
  description?: {
    en: string;
    bn: string;
  };
  principles?: CarePrincipleItem[];
  noticeTitle?: {
    en: string;
    bn: string;
  };
  noticeText?: {
    en: string;
    bn: string;
  };
  policyNote?: {
    en: string;
    bn: string;
  };
}
