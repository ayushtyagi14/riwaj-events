import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import PageGallery from '../components/PageGallery'
import Hero from '../components/Mehndi/Hero'
import Intro from '../components/Mehndi/Intro'

const MehndiDecor = () => {
    const gallery = [
        {
            id: 1,
            itemType: "image",
            imgUrl: "/mehndi/mehndi1.jpeg"
        },
        {
            id: 2,
            itemType: "image",
            imgUrl: "/mehndi/mehndi2.jpeg"
        },
        {
            id: 3,
            itemType: "image",
            imgUrl: "/mehndi/mehndi3.jpeg"
        },
        {
            id: 4,
            itemType: "image",
            imgUrl: "/mehndi/mehndi4.jpg"
        },
        {
            id: 5,
            itemType: "image",
            imgUrl: "/mehndi/mehndi5.jpg"
        },
        {
            id: 6,
            itemType: "image",
            imgUrl: "/mehndi/mehndi6.jpg"
        },
        {
            id: 7,
            itemType: "image",
            imgUrl: "/mehndi/mehndi7.jpeg"
        },
        {
            id: 8,
            itemType: "image",
            imgUrl: "/mehndi/mehndi8.jpeg"
        },
        {
            id: 9,
            itemType: "image",
            imgUrl: "/mehndi/mehndi9.jpeg"
        },
        {
            id: 10,
            itemType: "image",
            imgUrl: "/mehndi/mehndi10.jpeg"
        },
        {
            id: 11,
            itemType: "image",
            imgUrl: "/mehndi/mehndi11.jpeg"
        },
        {
            id: 12,
            itemType: "image",
            imgUrl: "/mehndi/mehndi12.jpeg"
        },
        {
            id: 13,
            itemType: "image",
            imgUrl: "/mehndi/mehndi13.jpeg"
        },
        {
            id: 14,
            itemType: "image",
            imgUrl: "/mehndi/mehndi14.jpeg"
        },
        {
            id: 15,
            itemType: "image",
            imgUrl: "/mehndi/mehndi15.jpeg"
        },
        {
            id: 16,
            itemType: "image",
            imgUrl: "/mehndi/mehndi16.jpeg"
        },
        {
            id: 17,
            itemType: "image",
            imgUrl: "/mehndi/mehndi17.jpeg"
        },
        {
            id: 18,
            itemType: "image",
            imgUrl: "/mehndi/mehndi18.jpeg"
        },
        {
            id: 19,
            itemType: "image",
            imgUrl: "/mehndi/mehndi19.jpeg"
        },
        {
            id: 20,
            itemType: "image",
            imgUrl: "/mehndi/mehndi20.jpeg"
        },
        {
            id: 21,
            itemType: "image",
            imgUrl: "/mehndi/mehndi21.jpeg"
        },
        {
            id: 22,
            itemType: "image",
            imgUrl: "/mehndi/mehndi22.jpeg"
        },
        {
            id: 23,
            itemType: "image",
            imgUrl: "/mehndi/mehndi23.jpg"
        },
        {
            id: 24,
            itemType: "image",
            imgUrl: "/mehndi/mehndi24.jpeg"
        },
        {
            id: 25,
            itemType: "image",
            imgUrl: "/mehndi/mehndi25.jpeg"
        },
        {
            id: 26,
            itemType: "image",
            imgUrl: "/mehndi/mehndi26.jpg"
        },
        {
            id: 27,
            itemType: "image",
            imgUrl: "/mehndi/mehndi27.jpg"
        },
        {
            id: 28,
            itemType: "image",
            imgUrl: "/mehndi/mehndi28.jpg"
        },
        {
            id: 29,
            itemType: "image",
            imgUrl: "/mehndi/mehndi29.jpg"
        },
        {
            id: 30,
            itemType: "image",
            imgUrl: "/mehndi/mehndi30.jpg"
        },
        {
            id: 31,
            itemType: "image",
            imgUrl: "/mehndi/mehndi31.jpg"
        },
        {
            id: 32,
            itemType: "image",
            imgUrl: "/mehndi/mehndi32.jpg"
        },
        {
            id: 33,
            itemType: "image",
            imgUrl: "/mehndi/mehndi33.jpg"
        },
        {
            id: 34,
            itemType: "image",
            imgUrl: "/mehndi/mehndi34.jpg"
        },
        {
            id: 35,
            itemType: "image",
            imgUrl: "/mehndi/mehndi35.jpg"
        },
        {
            id: 36,
            itemType: "image",
            imgUrl: "/mehndi/mehndi36.jpg"
        },
        {
            id: 37,
            itemType: "image",
            imgUrl: "/mehndi/mehndi37.jpg"
        },
    ]

    return (
        <>
            <Head>
                <title>Mehndi Decor | Riwaj Events</title>
                <meta name="description" content="This is the Mehndi Decor of Riwaj Events" />
            </Head>
            <Hero />
            <Intro />
            <PageGallery galleryData={gallery} />
            <Footer />
        </>
    )
}

export default MehndiDecor
