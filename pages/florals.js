import React from 'react'
import Hero from '../components/Florals/Hero'
import Head from 'next/head'
import Footer from '../components/Footer'
import Intro from '../components/Florals/Intro'
import PageGallery from '../components/PageGallery'

const Florals = () => {
    const gallery = [
        {
            id: 1,
            itemType: "image",
            imgUrl: "/floral/floral1.png"
        },
        {
            id: 2,
            itemType: "image",
            imgUrl: "/floral/floral2.png"
        },
        {
            id: 3,
            itemType: "image",
            imgUrl: "/floral/floral3.jpg"
        },
        {
            id: 4,
            itemType: "image",
            imgUrl: "/floral/floral4.jpg"
        },
        {
            id: 5,
            itemType: "image",
            imgUrl: "/floral/floral5.jpg"
        },
        {
            id: 6,
            itemType: "image",
            imgUrl: "/floral/floral6.jpg"
        },
        {
            id: 7,
            itemType: "image",
            imgUrl: "/floral/floral7.jpg"
        },
        {
            id: 8,
            itemType: "image",
            imgUrl: "/floral/floral8.png"
        },
        {
            id: 9,
            itemType: "image",
            imgUrl: "/floral/floral9.png"
        },
        {
            id: 10,
            itemType: "image",
            imgUrl: "/floral/floral10.jpg"
        },
        {
            id: 11,
            itemType: "image",
            imgUrl: "/floral/floral11.jpg"
        },
    ]

    return (
        <>
            <Head>
                <title>Florals | Riwaj Events</title>
                <meta name="description" content="This is the Florals of Riwaj Events" />
            </Head>
            <Hero />
            <Intro />
            <PageGallery galleryData={gallery} />
            <Footer />
        </>
    )
}

export default Florals
