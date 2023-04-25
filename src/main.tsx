import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import MyRouter from './Router'
import './index.css'
import { LangCtxProvider } from "./context/language"

import Cursor from './utils/cursor'

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpAPOzrJalGeiq6A8dwFZnRkA3ElV3GrU",
  authDomain: "ayankoley-bb6cc.firebaseapp.com",
  databaseURL: "https://ayankoley-bb6cc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ayankoley-bb6cc",
  storageBucket: "ayankoley-bb6cc.appspot.com",
  messagingSenderId: "637123921051",
  appId: "1:637123921051:web:9da163d93e46781d0f723e",
  measurementId: "G-G6GB3JGPL8"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

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