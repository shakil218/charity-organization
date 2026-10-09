'use client';

import React, { useState } from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { DonationModal } from '@/components/shared/DonationModal';

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [modalResidentName, setModalResidentName] = useState<string | undefined>();
  const [modalResidentId, setModalResidentId] = useState<string | undefined>();

  const handleOpenDonateModal = (residentName?: string, residentId?: string) => {
    setModalResidentName(residentName);
    setModalResidentId(residentId);
    setDonateModalOpen(true);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF8F2] text-[#242B29]">
        <Navbar onOpenDonateModal={() => handleOpenDonateModal()} />
        <Breadcrumbs />
        
        <main className="flex-1">
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child as React.ReactElement<{ onOpenDonateModal?: typeof handleOpenDonateModal }>, {
                onOpenDonateModal: handleOpenDonateModal
              });
            }
            return child;
          })}
        </main>

        <Footer />

        <DonationModal
          isOpen={donateModalOpen}
          onClose={() => setDonateModalOpen(false)}
          defaultResidentName={modalResidentName}
          defaultResidentId={modalResidentId}
        />
      </div>
    </LanguageProvider>
  );
};
