import './App.css'
import logo from './assets/logo-white.png'
import { Routes, Route } from 'react-router-dom'



function App() {
    return (

        <Routes>
            <Route path="/"
                   element={
                    <div className="container">
                        <img src={logo} alt="Company logo" />
                        <h1>Begin hier met het maken van jouw blog-applicatie!</h1>
                    </div>
                   }
            />
        </Routes>

    )
}

export default App
