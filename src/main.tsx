import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Layout.tsx'
import DataTable from './Tabla.tsx'
import './index.css' 
//import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DataTable />
  </React.StrictMode>,
)
