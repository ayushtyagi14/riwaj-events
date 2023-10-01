import React from 'react'
import Hero from '../components/Homepage/Hero'
import AboutUs from '../components/Homepage/AboutUs'
import Footer from '../components/Footer'
import Services from '../components/Homepage/Services'
import Clients from '../components/Homepage/Clients'
import Work from '../components/Homepage/Work'
import Gallery from '../components/Gallery'
import Calendly from '../components/Calendly'
import MyHead from '../components/Head'

const Homepage = () => {

    return (
        <>
            <MyHead title={"Homepage | Riwaj Events"} description={"This is the Homepage of Riwaj Events"} />
            <Hero />
            <AboutUs />
            <Services />
            <Clients />
            <Work />
            <Gallery />
            <Calendly />
            <Footer />
        </>
    )
}

export default Homepage
