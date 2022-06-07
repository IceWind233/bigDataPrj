import reactDOM from 'react-dom/client'

import {BrowserRouter} from 'react-router-dom'

import App from './App'
import './index.css'

const container = document.getElementById('root');
const root = reactDOM.createRoot(container)
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)