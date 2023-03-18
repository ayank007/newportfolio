import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { LangCtxProvider } from "./context/language"

import Cursor from './utils/cursor'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LangCtxProvider>
      <Cursor />
      <App />
    </LangCtxProvider>
  </React.StrictMode>
)
