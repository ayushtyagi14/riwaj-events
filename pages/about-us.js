import React from 'react'
import Hero from '../components/AboutUs/Hero'
import Main from '../components/AboutUs/Main'
import Calendly from '../components/Calendly'
import Footer from '../components/Footer'
import MyHead from '../components/Head'

const AboutUs = () => {
    return (
        <>
            <MyHead title={"About Us | Riwaj Events"} description={"This is the About Us of Riwaj Events"} />
            <Hero />
            <Main />
            <Calendly />
            <Footer />
        </>
    )
}

export default AboutUs
