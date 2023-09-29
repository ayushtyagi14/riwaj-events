import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/EventPlanning/Hero'
import Intro from '../components/EventPlanning/Intro'
import DayOf from '../components/EventPlanning/DayOf'
import Bts from '../components/EventPlanning/Bts'
import HappyBride from '../components/EventPlanning/HappyBride'
import All from '../components/EventPlanning/All'

const EventPlanning = () => {
    return (
        <>
            <Head>
                <title>Event Planning | Riwaj Events</title>
                <meta name="description" content="This is the Event Planning of Riwaj Events" />
            </Head>
            <Hero />
            <Intro />
            <DayOf />
            <Bts />
            <HappyBride />
            <All />
            <Footer />
        </>
    )
}

export default EventPlanning
