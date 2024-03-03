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
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332852/public/ceremonies/ceremonies3_q6miud.jpg"
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
            id: 12,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332852/public/ceremonies/ceremonies12_uzeckl.jpg"
        },
        {
            id: 13,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709424550/ceremonies13_bsstfa.jpg"
        },
        {
            id: 14,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709424548/ceremonies14_fj0fca.jpg"
        },
        {
            id: 15,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709424548/ceremonies15_kwlj26.jpg"
        },
        {
            id: 16,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709424550/ceremonies16_nqcdbg.jpg"
        },
        {
            id: 17,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709424552/ceremonies17_wzravf.jpg"
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
