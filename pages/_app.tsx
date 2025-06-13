import React from 'react';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/AuthContext';
import { ProjectProvider } from '../contexts/ProjectContext';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <ProjectProvider>
        <Component {...pageProps} />
      </ProjectProvider>
    </AuthProvider>
  );
};

export default MyApp; 