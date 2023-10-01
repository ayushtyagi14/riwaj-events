import React from 'react'
import Hero from '../components/Florals/Hero'
import Footer from '../components/Footer'
import Intro from '../components/Florals/Intro'
import PageGallery from '../components/PageGallery'
import MyHead from '../components/Head'

const Florals = () => {
    const gallery = [
        {
            id: 1,
            itemType: "image",
            imgUrl: "/floral/floral1.jpg"
        },
        {
            id: 2,
            itemType: "image",
            imgUrl: "/floral/floral2.jpg"
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
            imgUrl: "/floral/floral8.jpg"
        },
        {
            id: 9,
            itemType: "image",
            imgUrl: "/floral/floral9.jpg"
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
            <MyHead title={"Florals | Riwaj Events"} description={"This is the Florals of Riwaj Events"} />
            <Hero />
            <Intro />
            <PageGallery galleryData={gallery} />
            <Footer />
        </>
    )
}

export default Florals
