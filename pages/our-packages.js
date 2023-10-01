import React from 'react'
import Hero from '../components/OurPackages/Hero'
import Footer from '../components/Footer'
import Stages from '../components/OurPackages/Stages'
import Planning from '../components/OurPackages/Planning'
import Floral from '../components/OurPackages/Floral'
import MyHead from '../components/Head'

const OurPackages = () => {
    return (
        <>
            <MyHead title={"Our Packages | Riwaj Events"} description={"This is the Our Packages of Riwaj Events"} />
            <Hero />
            <Stages />
            <Planning />
            <Floral />
            <Footer />
        </>
    )
}

export default OurPackages
