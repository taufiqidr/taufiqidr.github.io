import React from 'react'
import Contact from './Contact'
import Footer from './Footer'
import Navbar from './Navbar'
import Projects from './Projects'
import Up from './Up'
import Welcome from './Welcome'

const Layout = () => {
    return (
        <div>
            <Navbar />
            <main className='bg-dark'>
                <Welcome />
                <Projects />
                <Contact />
            </main>
            <Footer />
            <Up />
        </div>
    )
}

export default Layout