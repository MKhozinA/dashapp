import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MantineProvider } from '@mantine/core'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ProtectedPage } from './ProtectedPage'
import { LoginPage } from './pages/LoginPage'
import { AuthProvider } from './providers/AuthProvider'
import { createBrowserRouter } from 'react-router-dom'


// const router = createBrowserRouter([
//   { path: '/', element: <ProtectedPage></ProtectedPage><App/>}
//   { path: '/login', element: <LoginPage /> }
// ])

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
