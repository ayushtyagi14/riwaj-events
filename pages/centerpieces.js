import React from 'react'
import Footer from '../components/Footer'
import PageGallery from '../components/PageGallery'
import Hero from '../components/Centerpieces/Hero'
import Intro from '../components/Centerpieces/Intro'
import MyHead from '../components/Head'

const centerpieces = () => {
    const gallery = [
        {
            id: 1,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece1.jpeg"
        },
        {
            id: 2,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece2.jpeg"
        },
        {
            id: 3,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece3.jpeg"
        },
        {
            id: 4,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece4.jpeg"
        },
        {
            id: 5,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece5.jpeg"
        },
        {
            id: 7,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece7.jpeg"
        },
        {
            id: 8,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece8.jpg"
        },
        {
            id: 9,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece9.jpg"
        },
        {
            id: 10,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece10.jpg"
        },
    ]

    return (
        <>
            <MyHead title={"Centerpieces | Riwaj Events"} description={"This is the Centerpieces of Riwaj Events"} />
            <Hero />
            <Intro />
            <PageGallery galleryData={gallery} />
            <Footer />
        </>
    )
}

export default centerpieces
