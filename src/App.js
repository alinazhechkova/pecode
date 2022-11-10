import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import './components/style.scss'
import Footer from './components/Footer'
import Routes from './Routes'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container pt-4">
                <Switch>
                    <Routes />
                </Switch>
            </div>
            <Footer />
        </BrowserRouter>
    )
}

export default App
