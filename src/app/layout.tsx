import React, { ReactNode } from 'react';
import AppWrappers from './AppWrappers';
import ToastProvider from 'Providers/ToasterProvider';
// import '@asseinfo/react-kanban/dist/styles.css';
// import '/public/styles/Plugins.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body id={'root'}>
        
        <AppWrappers>{children}
        <ToastProvider/>
        </AppWrappers>
      </body>

    </html>
  );
}
