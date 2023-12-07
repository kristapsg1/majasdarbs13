import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Pagesecond from './Pagesecond.tsx'
import PageThird from './Pagethird.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Pagesecond />
    <PageThird />
  </React.StrictMode>,
)
