import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore } from 'redux'
import Function from './Component/Function.jsx'

const storage =  createStore(Function)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={storage}>
     <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>
 
)
