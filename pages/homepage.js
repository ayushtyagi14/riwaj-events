import React from 'react'
import Hero from '../components/Homepage/Hero'
import AboutUs from '../components/Homepage/AboutUs'
import Footer from '../components/Footer'
import Head from 'next/head'
import Services from '../components/Homepage/Services'
import Clients from '../components/Homepage/Clients'
import Work from '../components/Homepage/Work'
import Gallery from '../components/Gallery'
import Calendly from '../components/Calendly'

const Homepage = () => {

    return (
        <>
            <Head>
                <title>Homepage | Riwaj Events</title>
                <meta name="description" content="This is the Homepage of Riwaj Events" />
            </Head>
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
