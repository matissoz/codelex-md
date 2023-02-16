import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './i18n';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter >
      <QueryClientProvider client={queryClient}>
        <Suspense fallback="loading">
          <App />
        </Suspense>
      </QueryClientProvider>
    </ BrowserRouter>
  </React.StrictMode>,
)