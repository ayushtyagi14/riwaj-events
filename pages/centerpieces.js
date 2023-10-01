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
            imgUrl: "/centerpiece/centerpiece1.jpg"
        },
        {
            id: 2,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece2.jpeg"
        },
        {
            id: 3,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece3.jpg"
        },
        {
            id: 4,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece4.jpg"
        },
        {
            id: 5,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece5.jpg"
        },
        {
            id: 7,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece7.jpg"
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
        {
            id: 11,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece11.jpg"
        },
        {
            id: 12,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece12.jpg"
        },
        {
            id: 13,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece13.jpg"
        },
        {
            id: 14,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece14.jpg"
        },
        {
            id: 15,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece15.jpg"
        },
        {
            id: 16,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece16.jpg"
        },
        {
            id: 17,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece17.jpg"
        },
        {
            id: 18,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece18.jpg"
        },
        {
            id: 19,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece19.jpg"
        },
        {
            id: 20,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece20.jpg"
        },
        {
            id: 21,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece21.jpeg"
        },
        {
            id: 22,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece22.jpeg"
        },
        {
            id: 23,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece23.jpeg"
        },
        {
            id: 24,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece24.jpg"
        },
        {
            id: 25,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece25.jpg"
        },
        {
            id: 26,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece26.jpg"
        },
        {
            id: 27,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece27.jpg"
        },
        {
            id: 28,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece28.jpg"
        },
        {
            id: 29,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece29.jpeg"
        },
        {
            id: 30,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece30.jpeg"
        },
        {
            id: 31,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece31.jpg"
        },
        {
            id: 32,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece32.jpg"
        },
        {
            id: 33,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece33.jpeg"
        },
        {
            id: 34,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece34.jpeg"
        },
        {
            id: 35,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece35.jpeg"
        },
        {
            id: 36,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece36.jpeg"
        },
        {
            id: 37,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece37.jpeg"
        },
        {
            id: 38,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece38.jpeg"
        },
        {
            id: 39,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece39.jpeg"
        },
        {
            id: 40,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece40.jpeg"
        },
        {
            id: 41,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece41.jpeg"
        },
        {
            id: 42,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece42.jpeg"
        },
        {
            id: 43,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece43.jpeg"
        },
        {
            id: 44,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece44.jpeg"
        },
        {
            id: 45,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece45.jpeg"
        },
        {
            id: 46,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece46.jpeg"
        },
        {
            id: 47,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece47.jpeg"
        },
        {
            id: 48,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece48.jpg"
        },
        {
            id: 49,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece49.jpg"
        },
        {
            id: 50,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece50.jpg"
        },
        {
            id: 51,
            itemType: "image",
            imgUrl: "/centerpiece/centerpiece51.jpg"
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
