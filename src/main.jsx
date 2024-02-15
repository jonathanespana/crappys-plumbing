import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'
import './index.css'
import Root from "./routes/root"
import Index from './routes/Index';
import AboutUs from './routes/AboutUs';
import Services from './routes/Services';
import Pricing from './routes/Pricing';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
    >
      <Route index element={<Index />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="services" element={<Services />} />
      <Route path="pricing" element={<Pricing />} />
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
