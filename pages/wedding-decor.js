import React from 'react'
import Footer from '../components/Footer'
import PageGallery from '../components/PageGallery'
import Hero from '../components/Decor/Hero'
import Intro from '../components/Decor/Intro'
import MyHead from '../components/Head'

const WeddingDecor = () => {
    const gallery = [
        {
            id: 2,
            itemType: "image",
            imgUrl: "/decor/decor2.jpeg"
        },
        {
            id: 8,
            itemType: "image",
            imgUrl: "/decor/decor8.jpeg"
        },
        {
            id: 5,
            itemType: "image",
            imgUrl: "/decor/decor5.jpeg"
        },
        {
            id: 6,
            itemType: "image",
            imgUrl: "/decor/decor6.jpeg"
        },
        {
            id: 7,
            itemType: "image",
            imgUrl: "/decor/decor7.jpeg"
        },
        {
            id: 3,
            itemType: "image",
            imgUrl: "/decor/decor3.jpeg"
        },
        {
            id: 12,
            itemType: "image",
            imgUrl: "/decor/decor12.jpg"
        },
        {
            id: 16,
            itemType: "image",
            imgUrl: "/decor/decor16.jpg"
        },
        {
            id: 9,
            itemType: "image",
            imgUrl: "/decor/decor9.jpeg"
        },
        {
            id: 11,
            itemType: "image",
            imgUrl: "/decor/decor11.jpg"
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
            id: 4,
            itemType: "image",
            imgUrl: "/decor/decor4.jpeg"
        },
        {
            id: 1,
            itemType: "image",
            imgUrl: "/decor/decor1.jpg"
        },
        {
            id: 15,
            itemType: "image",
            imgUrl: "/decor/decor15.jpg"
        },
        {
            id: 17,
            itemType: "image",
            imgUrl: "/decor/decor17.jpg"
        },
        {
            id: 10,
            itemType: "image",
            imgUrl: "/decor/decor10.jpeg"
        },
    ]

    return (
        <>
            <MyHead title={"Wedding Decor | Riwaj Events"} description={"This is the Wedding Decor of Riwaj Events"} />
            <Hero />
            <Intro />
            <PageGallery galleryData={gallery} />
            <Footer />
        </>
    )
}

export default WeddingDecor
