import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Root';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

serviceWorkerRegistration.register();
