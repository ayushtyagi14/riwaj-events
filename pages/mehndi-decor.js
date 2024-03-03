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
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332864/public/mehndi/mehndi2_eoga0l.jpg"
        },
        {
            id: 5,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332865/public/mehndi/mehndi5_twdajs.jpg"
        },
        {
            id: 15,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332864/public/mehndi/mehndi15_yaquup.jpg"
        },
        {
            id: 4,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332864/public/mehndi/mehndi4_cnxvjr.jpg"
        },
        {
            id: 3,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332864/public/mehndi/mehndi3_ubfiio.jpg"
        },
        {
            id: 6,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332865/public/mehndi/mehndi6_whyxzp.jpg"
        },
        {
            id: 7,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332865/public/mehndi/mehndi7_xlvfyb.jpg"
        },
        {
            id: 13,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332864/public/mehndi/mehndi13_dp32le.jpg"
        },
        {
            id: 9,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332865/public/mehndi/mehndi9_qnmtbr.jpg"
        },
        {
            id: 12,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332864/public/mehndi/mehndi12_engxm5.jpg"
        },
        {
            id: 8,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332865/public/mehndi/mehndi8_neiiib.jpg"
        },
        {
            id: 14,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332864/public/mehndi/mehndi14_mpqghz.jpg"
        },
        {
            id: 10,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332863/public/mehndi/mehndi10_z6ndki.jpg"
        },
        {
            id: 11,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332863/public/mehndi/mehndi11_dod9e0.jpg"
        },
        {
            id: 1,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332863/public/mehndi/mehndi1_enncoh.jpg"
        },
        {
            id: 16,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709425124/mehndi16_bkwqne.jpg"
        },
        {
            id: 17,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709424929/mehndi17_cwc0a1.jpg"
        },
        {
            id: 18,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709424923/mehndi18_g7nfnt.jpg"
        },
        {
            id: 19,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709424924/mehndi19_v08cox.jpg"
        },
        {
            id: 20,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709424924/mehndi20_js6ewn.jpg"
        },
        {
            id: 21,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709424926/mehndi21_ktftie.jpg"
        },
        {
            id: 22,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709424927/mehndi22_txx22d.jpg"
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
