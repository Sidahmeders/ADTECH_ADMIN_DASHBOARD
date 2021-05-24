import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.scss'
import SideBar from '../components/sidebar'

function Home() {
    return (
        <div className="home-page">
            <header>
                <SideBar />
            </header>
            <main></main>
        </div>
    )
}

export default Home
