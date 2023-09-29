import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import PageGallery from '../components/PageGallery'
import Hero from '../components/Decor/Hero'
import Intro from '../components/Decor/Intro'

const WeddingDecor = () => {
    const gallery = [
        {
            id: 1,
            itemType: "image",
            imgUrl: "/decor/decor1.jpg"
        },
        {
            id: 2,
            itemType: "image",
            imgUrl: "/decor/decor2.jpg"
        },
        {
            id: 3,
            itemType: "image",
            imgUrl: "/decor/decor3.jpg"
        },
        {
            id: 4,
            itemType: "image",
            imgUrl: "/decor/decor4.jpg"
        },
        {
            id: 5,
            itemType: "image",
            imgUrl: "/decor/decor5.jpg"
        },
        {
            id: 6,
            itemType: "image",
            imgUrl: "/decor/decor6.jpg"
        },
        {
            id: 7,
            itemType: "image",
            imgUrl: "/decor/decor7.jpg"
        },
        {
            id: 8,
            itemType: "image",
            imgUrl: "/decor/decor8.jpg"
        },
        {
            id: 9,
            itemType: "image",
            imgUrl: "/decor/decor9.jpg"
        },
        {
            id: 10,
            itemType: "image",
            imgUrl: "/decor/decor10.jpg"
        },
        {
            id: 11,
            itemType: "image",
            imgUrl: "/decor/decor11.jpg"
        },
        {
            id: 12,
            itemType: "image",
            imgUrl: "/decor/decor12.jpg"
        },
        {
            id: 13,
            itemType: "image",
            imgUrl: "/decor/decor13.jpg"
        },
        {
            id: 14,
            itemType: "image",
            imgUrl: "/decor/decor14.jpg"
        },
        {
            id: 15,
            itemType: "image",
            imgUrl: "/decor/decor15.jpg"
        },
        {
            id: 16,
            itemType: "image",
            imgUrl: "/decor/decor16.jpg"
        },
        {
            id: 17,
            itemType: "image",
            imgUrl: "/decor/decor17.jpg"
        },
        {
            id: 18,
            itemType: "image",
            imgUrl: "/decor/decor18.jpeg"
        },
        {
            id: 19,
            itemType: "image",
            imgUrl: "/decor/decor19.jpg"
        },
        {
            id: 20,
            itemType: "image",
            imgUrl: "/decor/decor20.jpg"
        },
        {
            id: 21,
            itemType: "image",
            imgUrl: "/decor/decor21.jpeg"
        },
        {
            id: 22,
            itemType: "image",
            imgUrl: "/decor/decor22.jpg"
        },
        {
            id: 23,
            itemType: "image",
            imgUrl: "/decor/decor23.jpg"
        },
        {
            id: 24,
            itemType: "image",
            imgUrl: "/decor/decor24.jpeg"
        },
        {
            id: 25,
            itemType: "image",
            imgUrl: "/decor/decor25.jpeg"
        },
        {
            id: 26,
            itemType: "image",
            imgUrl: "/decor/decor26.jpeg"
        },
        {
            id: 27,
            itemType: "image",
            imgUrl: "/decor/decor27.jpg"
        },
        {
            id: 28,
            itemType: "image",
            imgUrl: "/decor/decor28.jpeg"
        },
        {
            id: 29,
            itemType: "image",
            imgUrl: "/decor/decor29.jpeg"
        },
        {
            id: 30,
            itemType: "image",
            imgUrl: "/decor/decor30.jpeg"
        },
        {
            id: 31,
            itemType: "image",
            imgUrl: "/decor/decor31.jpeg"
        },
        {
            id: 32,
            itemType: "image",
            imgUrl: "/decor/decor32.jpeg"
        },
        {
            id: 33,
            itemType: "image",
            imgUrl: "/decor/decor33.jpeg"
        },
        {
            id: 34,
            itemType: "image",
            imgUrl: "/decor/decor34.jpeg"
        },
        {
            id: 35,
            itemType: "image",
            imgUrl: "/decor/decor35.jpeg"
        },
        {
            id: 36,
            itemType: "image",
            imgUrl: "/decor/decor36.jpeg"
        },
        {
            id: 37,
            itemType: "image",
            imgUrl: "/decor/decor37.jpeg"
        },
        {
            id: 38,
            itemType: "image",
            imgUrl: "/decor/decor38.jpeg"
        },
        {
            id: 39,
            itemType: "image",
            imgUrl: "/decor/decor39.jpeg"
        },
        {
            id: 40,
            itemType: "image",
            imgUrl: "/decor/decor40.jpeg"
        },
        {
            id: 41,
            itemType: "image",
            imgUrl: "/decor/decor41.jpeg"
        },
        {
            id: 42,
            itemType: "image",
            imgUrl: "/decor/decor42.jpeg"
        },
        {
            id: 43,
            itemType: "image",
            imgUrl: "/decor/decor43.jpeg"
        },
        {
            id: 44,
            itemType: "image",
            imgUrl: "/decor/decor44.jpeg"
        },
        {
            id: 45,
            itemType: "image",
            imgUrl: "/decor/decor45.jpeg"
        },
        {
            id: 46,
            itemType: "image",
            imgUrl: "/decor/decor46.jpeg"
        },
        {
            id: 47,
            itemType: "image",
            imgUrl: "/decor/decor47.jpeg"
        },
        {
            id: 48,
            itemType: "image",
            imgUrl: "/decor/decor48.jpeg"
        },
        {
            id: 49,
            itemType: "image",
            imgUrl: "/decor/decor49.jpeg"
        },
        {
            id: 50,
            itemType: "image",
            imgUrl: "/decor/decor50.jpeg"
        },
        {
            id: 51,
            itemType: "image",
            imgUrl: "/decor/decor51.jpeg"
        },
        {
            id: 52,
            itemType: "image",
            imgUrl: "/decor/decor52.jpeg"
        },
        {
            id: 53,
            itemType: "image",
            imgUrl: "/decor/decor53.jpeg"
        },
        {
            id: 54,
            itemType: "image",
            imgUrl: "/decor/decor54.jpeg"
        },
        {
            id: 55,
            itemType: "image",
            imgUrl: "/decor/decor55.jpeg"
        },
        {
            id: 56,
            itemType: "image",
            imgUrl: "/decor/decor56.jpeg"
        },
        {
            id: 57,
            itemType: "image",
            imgUrl: "/decor/decor57.jpeg"
        },
        {
            id: 58,
            itemType: "image",
            imgUrl: "/decor/decor58.jpeg"
        },
        {
            id: 59,
            itemType: "image",
            imgUrl: "/decor/decor59.jpg"
        },
        {
            id: 60,
            itemType: "image",
            imgUrl: "/decor/decor60.jpg"
        },
        {
            id: 61,
            itemType: "image",
            imgUrl: "/decor/decor61.jpg"
        },
        {
            id: 62,
            itemType: "image",
            imgUrl: "/decor/decor62.jpg"
        },
    ]

    return (
        <>
            <Head>
                <title>Wedding Decor | Riwaj Events</title>
                <meta name="description" content="This is the Wedding Decor of Riwaj Events" />
            </Head>
            <Hero />
            <Intro />
            <PageGallery galleryData={gallery} />
            <Footer />
        </>
    )
}

export default WeddingDecor
