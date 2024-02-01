import React from 'react'
import Footer from '../components/Footer'
import PageGallery from '../components/PageGallery'
import Hero from '../components/Mehndi/Hero'
import Intro from '../components/Mehndi/Intro'
import MyHead from '../components/Head'

const MehndiDecor = () => {
    const gallery = [
        {
            id: 2,
            itemType: "image",
            imgUrl: "/mehndi/mehndi2.jpg"
        },
        {
            id: 5,
            itemType: "image",
            imgUrl: "/mehndi/mehndi5.jpeg"
        },
        {
            id: 15,
            itemType: "image",
            imgUrl: "/mehndi/mehndi15.jpg"
        },
        {
            id: 4,
            itemType: "image",
            imgUrl: "/mehndi/mehndi4.jpeg"
        },
        {
            id: 3,
            itemType: "image",
            imgUrl: "/mehndi/mehndi3.jpeg"
        },
        {
            id: 6,
            itemType: "image",
            imgUrl: "/mehndi/mehndi6.jpeg"
        },
        {
            id: 7,
            itemType: "image",
            imgUrl: "/mehndi/mehndi7.jpeg"
        },
        {
            id: 13,
            itemType: "image",
            imgUrl: "/mehndi/mehndi13.jpeg"
        },
        {
            id: 9,
            itemType: "image",
            imgUrl: "/mehndi/mehndi9.jpeg"
        },
        {
            id: 12,
            itemType: "image",
            imgUrl: "/mehndi/mehndi12.jpeg"
        },
        {
            id: 8,
            itemType: "image",
            imgUrl: "/mehndi/mehndi8.jpeg"
        },
        {
            id: 14,
            itemType: "image",
            imgUrl: "/mehndi/mehndi14.jpeg"
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
            id: 1,
            itemType: "image",
            imgUrl: "/mehndi/mehndi1.jpeg"
        },
    ]

    return (
        <>
            <MyHead title={"Mehndi Decor | Riwaj Events"} description={"This is the Mehndi Decor of Riwaj Events"} />
            <Hero />
            <Intro />
            <PageGallery galleryData={gallery} />
            <Footer />
        </>
    )
}

export default MehndiDecor
