import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {BrowserRouter} from 'react-router-dom'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>  
      <ReactQueryDevtools />
    </QueryClientProvider>, 
)
