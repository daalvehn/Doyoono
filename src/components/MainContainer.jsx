import React from 'react'
import logo from '../assets/images/logo.svg'
import './MainContainer.css'


const MainContainer = () => (
    <section className="container">
        <div className="main-container">
            <header>
                <img alt="logo" src={logo} />
            </header>
            <footer>
                <a href="">Ressources / Crédits</a>
            </footer>
        </div>
    </section>
)

export default MainContainer