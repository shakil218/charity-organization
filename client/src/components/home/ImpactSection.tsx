'use client';

import React from 'react';
import { OurImpactSection, type OurImpactSectionProps } from './OurImpactSection';

export type ImpactSectionProps = OurImpactSectionProps;

/**
 * ImpactSection Component
 * Renders the OurImpactSection ("Every Act of Care Matters.").
 */
export const ImpactSection: React.FC<ImpactSectionProps> = (props) => {
  return <OurImpactSection {...props} />;
};

export * from './OurImpactSection';
