import React from 'react'
import logo from '../assets/images/logo.svg'
import './MainContainer.css'


const MainContainer = () => (
    <section className="container">
        <div className="main-container">
            <div className="item-a">
                <img alt="logo" src={logo} />
            </div>
            <div className="item-b">
            </div>
            <div className="item-c">
                <p>
                Ressources / Crédits
                </p>
            </div>
        </div>
    </section>
)

export default MainContainer