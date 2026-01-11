"use client";

import React, { createContext, useContext, ReactNode } from 'react';
import { useUser, User } from '@/firebase';
import { loginWithGoogle, logout as firebaseLogout } from '@/firebase/auth/api';


interface AuthContextType {
  user: User | null;
  login: (() => Promise<void>) | null;
  logout: (() => Promise<void>) | null;
  loading: boolean;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: null,
  logout: null,
  loading: true,
  isLoggedIn: false,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useUser();
  const isLoggedIn = !loading && !!user;

  const login = async () => {
    try {
      await loginWithGoogle();
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const logout = async () => {
    try {
      await firebaseLogout();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
