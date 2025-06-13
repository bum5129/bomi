import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../utils/supabase';
import { userService } from '../services/userService';
import { Database } from '../types/supabase';

type UserDetails = Database['public']['Tables']['users']['Row'];

interface AuthContextType {
  user: User | null;
  userDetails: UserDetails | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const initialContext: AuthContextType = {
  user: null,
  userDetails: null,
  loading: true,
  signOut: async () => {}
};

const AuthContext = createContext<AuthContextType>(initialContext);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 초기 세션 확인
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        loadUserDetails(session.user.id);
      }
      setLoading(false);
    });

    // 인증 상태 변경 구독
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        await loadUserDetails(session.user.id);
      } else {
        setUserDetails(null);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const loadUserDetails = async (userId: string) => {
    try {
      const details = await userService.getUserById(userId);
      setUserDetails(details);
    } catch (error) {
      console.error('Error loading user details:', error);
      setUserDetails(null);
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      setUserDetails(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const value: AuthContextType = {
    user,
    userDetails,
    loading,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 