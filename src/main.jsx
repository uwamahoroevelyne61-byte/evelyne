import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Myname from './Name.jsx'
import Farm from './Farm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    
 {/* 
 <Myname/> 
 <Farm animal= 'cow' type= 'human' crops='hamahama'/> 
 */}
 <App />

  </StrictMode>,
   )
