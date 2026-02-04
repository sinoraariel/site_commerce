import { StrictMode } from 'react'
// import { SearchProvider } from "./Context/SearchContext";
import React from "react"
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* <SearchProvider> */}
      <App/>
    {/* </SearchProvider> */}
    </BrowserRouter>
  </StrictMode>,
)