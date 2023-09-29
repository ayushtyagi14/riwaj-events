import React from 'react'
import Hero from '../components/AboutUs/Hero'
import Main from '../components/AboutUs/Main'
import Calendly from '../components/Calendly'
import Footer from '../components/Footer'
import Head from 'next/head'

const AboutUs = () => {
    return (
        <>
            <Head>
                <title>About Us | Riwaj Events</title>
                <meta name="description" content="This is the About Us of Riwaj Events" />
            </Head>
            <Hero />
            <Main />
            <Calendly />
            <Footer />
        </>
    )
}

export default AboutUs
