import React from 'react'
import ReactDOM from 'react-dom/client'
import { StoreProvider } from 'easy-peasy'
import App from './App.jsx'
import './index.css'
import store from './store/index.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>

)
