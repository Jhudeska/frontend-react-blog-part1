import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {StrictMode} from "react";

ReactDOM.createRoot(document.getElementById('root')).render(

    //BrowserRouter zorgt dat react kan luisteren naar de URLvan de browser
    // Een handige manier om het te onthouden:
    //
    // BrowserRouter = houdt de browser-URL bij.
    // Routes = bepaalt welke route moet worden gebruikt.
    // Route = koppelt een URL aan een component.
    <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </StrictMode>,
)
