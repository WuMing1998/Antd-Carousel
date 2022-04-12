import React from 'react';
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import './mock';

createRoot(document.getElementById('root')!).render(
    <App />
)

// ReactDOM.render(<App />,document.getElementById('root'))

reportWebVitals();
