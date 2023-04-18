import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {SearchContextProvider} from './context/SearchContext'
import { AuthContextProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <React.StrictMode>
 
      <AuthContextProvider>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
      </AuthContextProvider>

  </React.StrictMode>
  </React.StrictMode>,
)
