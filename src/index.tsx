import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from 'store/AuthContext';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <Suspense fallback={<div>Loading</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </AuthContextProvider>
);
