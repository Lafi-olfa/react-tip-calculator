import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import { TipProvider } from './context/TipBillContext.jsx';

createRoot(document.getElementById('root')).render(
  <TipProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </TipProvider>
)
