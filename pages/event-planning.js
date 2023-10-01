import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/EventPlanning/Hero'
import Intro from '../components/EventPlanning/Intro'
import DayOf from '../components/EventPlanning/DayOf'
import Bts from '../components/EventPlanning/Bts'
import HappyBride from '../components/EventPlanning/HappyBride'
import All from '../components/EventPlanning/All'
import MyHead from '../components/Head'

const EventPlanning = () => {
    return (
        <>
            <MyHead title={"Event Planning | Riwaj Events"} description={"This is the Event Planning of Riwaj Events"} />
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
