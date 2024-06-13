import React from 'react';
import ReactDOM from 'react-dom/client';
import 'virtual:uno.css';
import '@unocss/reset/tailwind.css';
import Layout from './editor/layouts/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
