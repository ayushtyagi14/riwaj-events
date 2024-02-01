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
            imgUrl: "/floral/floral1.jpeg"
        },
        {
            id: 2,
            itemType: "image",
            imgUrl: "/floral/floral2.jpeg"
        },
        {
            id: 3,
            itemType: "image",
            imgUrl: "/floral/floral3.jpeg"
        },
        {
            id: 4,
            itemType: "image",
            imgUrl: "/floral/floral4.jpeg"
        },
        {
            id: 5,
            itemType: "image",
            imgUrl: "/floral/floral5.jpg"
        },
        {
            id: 6,
            itemType: "image",
            imgUrl: "/floral/floral6.jpeg"
        },
        {
            id: 7,
            itemType: "image",
            imgUrl: "/floral/floral7.jpg"
        },
        {
            id: 8,
            itemType: "image",
            imgUrl: "/floral/floral8.jpeg"
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
        }
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
