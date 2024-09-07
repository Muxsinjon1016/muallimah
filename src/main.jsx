import React from 'react';
import { createRoot } from 'react-dom/client'; // createRoot import qilinmoqda
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();
const root = createRoot(document.getElementById('root')); // createRoot to'g'ri chaqirildi

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);
