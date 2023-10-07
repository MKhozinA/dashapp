import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MantineProvider } from '@mantine/core'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'


const queryClient=new QueryClient()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

    <MantineProvider theme={{ primaryColor: "cyan" }} withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
