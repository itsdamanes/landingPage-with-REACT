import React from 'react'
import {createRoot} from 'react-dom/client'
import Home from './pages/home'
import './styles/index.css'
import 'bootstrap/'
const root = createRoot(document.getElementById('root'));
root.render(<Home />)