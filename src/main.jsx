import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthContexts from './context/AuthContexts.jsx'
import UserContext from './context/UserContext.jsx'
import ShopContext from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthContexts>
    <UserContext>
      <ShopContext>
    <App />
    </ShopContext>
    </UserContext>
    </AuthContexts>
</BrowserRouter>
  
)
