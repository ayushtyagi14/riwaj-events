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
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332859/public/floral/floral1_q6kbkw.jpg"
        },
        {
            id: 2,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332859/public/floral/floral2_dsqacl.jpg"
        },
        {
            id: 3,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332860/public/floral/floral3_o4v957.jpg"
        },
        {
            id: 4,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332860/public/floral/floral4_itzvl7.jpg"
        },
        {
            id: 5,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332860/public/floral/floral5_d32ulw.jpg"
        },
        {
            id: 6,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332860/public/floral/floral6_duilwg.jpg"
        },
        {
            id: 7,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332860/public/floral/floral7_crpfit.jpg"
        },
        {
            id: 8,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332861/public/floral/floral8_i6jds0.jpg"
        },
        {
            id: 9,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332861/public/floral/floral9_cf41h5.jpg"
        },
        {
            id: 10,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332859/public/floral/floral10_lpqnav.jpg"
        },
        {
            id: 11,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709422041/floral11_h80inc.jpg"
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
