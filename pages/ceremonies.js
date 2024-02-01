import React from 'react'
import Hero from '../components/Ceremonies/Hero'
import Intro from '../components/Ceremonies/Intro'
import Footer from '../components/Footer'
import PageGallery from '../components/PageGallery'
import MyHead from '../components/Head'

const Ceremonies = () => {
    const gallery = [
        {
            id: 1,
            itemType: "image",
            imgUrl: "/ceremonies/ceremonies1.jpeg"
        },
        {
            id: 6,
            itemType: "image",
            imgUrl: "/ceremonies/ceremonies6.jpg"
        },
        {
            id: 3,
            itemType: "image",
            imgUrl: "/ceremonies/ceremonies3.jpeg"
        },
        {
            id: 4,
            itemType: "image",
            imgUrl: "/ceremonies/ceremonies4.jpeg"
        },
        {
            id: 5,
            itemType: "image",
            imgUrl: "/ceremonies/ceremonies5.jpeg"
        },
        {
            id: 2,
            itemType: "image",
            imgUrl: "/ceremonies/ceremonies2.jpeg"
        },
        {
            id: 9,
            itemType: "image",
            imgUrl: "/ceremonies/ceremonies9.jpeg"
        },
        {
            id: 10,
            itemType: "image",
            imgUrl: "/ceremonies/ceremonies10.jpeg"
        },
        {
            id: 7,
            itemType: "image",
            imgUrl: "/ceremonies/ceremonies7.jpg"
        },
        {
            id: 8,
            itemType: "image",
            imgUrl: "/ceremonies/ceremonies8.jpg"
        },
        {
            id: 11,
            itemType: "image",
            imgUrl: "/ceremonies/ceremonies11.jpeg"
        },
        {
            id: 11,
            itemType: "image",
            imgUrl: "/ceremonies/ceremonies12.jpg"
        },
    ]

    return (
        <>
            <MyHead title={"Ceremonies | Riwaj Events"} description={"This is the Ceremonies Page of Riwaj Events"} />
            <Hero />
            <Intro />
            <PageGallery galleryData={gallery} />
            <Footer />
        </>
    )
}

export default Ceremonies
