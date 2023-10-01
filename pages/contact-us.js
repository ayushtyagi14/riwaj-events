import React from 'react'
import Navbar from '../components/Navbar'
import GetInTouch from '../components/ContactUs/GetInTouch'
import Calendly from '../components/Calendly'
import Footer from '../components/Footer'
import MyHead from '../components/Head'

const ContactUs = () => {
    return (
        <>
            <MyHead title={"Contact Us | Riwaj Events"} description={"This is the Contact Us of Riwaj Events"} />
            <Navbar />
            <GetInTouch />
            <Calendly />
            <Footer />
        </>
    )
}

export default ContactUs
