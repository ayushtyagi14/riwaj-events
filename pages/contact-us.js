import React from 'react'
import Navbar from '../components/Navbar'
import GetInTouch from '../components/ContactUs/GetInTouch'
import Calendly from '../components/Calendly'
import Footer from '../components/Footer'
import Head from 'next/head'

const ContactUs = () => {
    return (
        <>
            <Head>
                <title>Contact Us | Riwaj Events</title>
                <meta name="description" content="This is the Contact Us of Riwaj Events" />
            </Head>
            <Navbar />
            <GetInTouch />
            <Calendly />
            <Footer />
        </>
    )
}

export default ContactUs
