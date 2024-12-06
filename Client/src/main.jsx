import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import App from './App.jsx'
import { DataProvider } from './GlobalData';
import './index.scss'
import { ClerkProvider } from '@clerk/clerk-react'


// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const ClerkWithRoutes = ()=> {
  const navigate = useNavigate();
  return(
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY}
      navigate={(to)=> navigate(to)}
    >
      <DataProvider>
        <App />
      </DataProvider>
    </ClerkProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ClerkWithRoutes/>
    </Router>
  </React.StrictMode>,
)
