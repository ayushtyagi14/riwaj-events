import Head from 'next/head'
import React from 'react'
import Hero from '../components/OurPackages/Hero'
import Footer from '../components/Footer'
import Stages from '../components/OurPackages/Stages'
import Planning from '../components/OurPackages/Planning'
import Floral from '../components/OurPackages/Floral'

const OurPackages = () => {
    return (
        <>
            <Head>
                <title>Our Packages | Riwaj Events</title>
                <meta name="description" content="This is the Our Packages of Riwaj Events" />
            </Head>
            <Hero />
            <Stages />
            <Planning />
            <Floral />
            <Footer />
        </>
    )
}

export default OurPackages
