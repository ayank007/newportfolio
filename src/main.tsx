import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import MyRouter from './Router'
import './index.css'
import { LangCtxProvider } from "./context/language"

import Cursor from './utils/cursor'

setTimeout(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <LangCtxProvider>
        <Cursor />
        <MyRouter />
      </LangCtxProvider>
    </React.StrictMode>
  )
},800)