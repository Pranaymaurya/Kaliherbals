import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Cover from './Components/Cover.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Cover />}>
      <Route path="home" element={<App />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)