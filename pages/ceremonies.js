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
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332851/public/ceremonies/ceremonies1_euawvb.jpg"
        },
        {
            id: 6,
            itemType: "image",
            imgUrl: "/ceremonies/ceremonies6.jpg"
        },
        {
            id: 3,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332853/public/ceremonies/ceremonies6_esaznz.jpg"
        },
        {
            id: 4,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332852/public/ceremonies/ceremonies4_h1fqd9.jpg"
        },
        {
            id: 5,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332853/public/ceremonies/ceremonies5_bhpieb.jpg"
        },
        {
            id: 2,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332852/public/ceremonies/ceremonies2_i7vsu6.jpg"
        },
        {
            id: 9,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332853/public/ceremonies/ceremonies9_fwnfi3.jpg"
        },
        {
            id: 10,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332851/public/ceremonies/ceremonies10_zt5dff.jpg"
        },
        {
            id: 7,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332853/public/ceremonies/ceremonies7_uesyfb.jpg"
        },
        {
            id: 8,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332853/public/ceremonies/ceremonies8_xvbqb5.jpg"
        },
        {
            id: 11,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332852/public/ceremonies/ceremonies11_zmzeby.jpg"
        },
        {
            id: 11,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332852/public/ceremonies/ceremonies12_uzeckl.jpg"
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
