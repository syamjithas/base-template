import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root'
import { serviceWorkerRegistration } from './utils/'

if(10==5){
  console.log("3")
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)

serviceWorkerRegistration.register()
