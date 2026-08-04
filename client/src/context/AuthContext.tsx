"use client";

import React, { createContext, useContext, useState } from 'react';

export type UserRole = 'Donor' | 'Admin Staff' | 'Volunteer' | 'Beneficiary' | 'Auditor';

interface UserProfile {
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: UserProfile;
  setRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile>({
    name: 'Tanvir Ahsan',
    email: 'donor@example.org',
    role: 'Donor'
  });

  const setRole = (role: UserRole) => {
    setUser(prev => ({ ...prev, role }));
  };

  return (
    <AuthContext.Provider value={{ user, setRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
