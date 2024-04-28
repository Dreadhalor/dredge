import React from 'react';
import ReactDOM from 'react-dom/client';
import { Dredge } from './dredge';
import './index.css';
import { DredgeProvider } from './providers/dredge-provider';
import { Toaster } from 'sonner';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DredgeProvider>
      <Dredge />
      <Toaster
        closeButton
        toastOptions={{
          classNames: {
            closeButton: 'bg-white',
          },
        }}
      />
    </DredgeProvider>
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>,
);
