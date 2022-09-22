import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter } from 'react-router-dom'
import '../styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CookiesProvider>
      <Suspense fallback={<h1>Loading...</h1>}>
        <App />
      </Suspense>
    </CookiesProvider>
  </BrowserRouter>,
)
