import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { app } from './firebase/firebase'
import 'bootstrap/dist/css/bootstrap.min.css'

const container = document.getElementById('root')
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);


// body {
//   margin: 0;
//   font-family:'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//     sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
// }

// code {
//   font-family: 'Ubuntu',source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//     monospace;
// }
