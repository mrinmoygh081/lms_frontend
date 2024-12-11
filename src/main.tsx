import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouteHolder from './router/routeHolder'
import './assets/css/icofont.min.css'
import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouteHolder />
  </StrictMode>
)
