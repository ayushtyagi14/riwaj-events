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
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332849/public/centerpiece/centerpiece1_pzxjtc.jpg"
        },
        {
            id: 2,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332850/public/centerpiece/centerpiece2_jlerc2.jpg"
        },
        {
            id: 3,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332850/public/centerpiece/centerpiece3_q7nxg5.jpg"
        },
        {
            id: 4,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332850/public/centerpiece/centerpiece4_hcr99g.jpg"
        },
        {
            id: 5,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332850/public/centerpiece/centerpiece5_fel9to.jpg"
        },
        {
            id: 7,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332851/public/centerpiece/centerpiece7_as4ta9.jpg"
        },
        {
            id: 8,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332852/public/centerpiece/centerpiece8_gp3cvr.jpg"
        },
        {
            id: 9,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332849/public/centerpiece/centerpiece9_rzxo3g.jpg"
        },
        {
            id: 10,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332849/public/centerpiece/centerpiece10_ky61te.jpg"
        },
        {
            id: 11,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709422421/centerpiece11_kjkvse.jpg"
        },
        {
            id: 12,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709422425/centerpiece12_osrlvr.jpg"
        },
        {
            id: 13,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709422423/centerpiece13_mnn3lj.jpg"
        },
        {
            id: 14,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709422427/centerpiece14_tx3ltf.jpg"
        },
        {
            id: 15,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709422430/centerpiece15_riei7c.jpg"
        },
        {
            id: 16,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709422432/centerpiece16_qalmcq.jpg"
        },
        {
            id: 17,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709422435/centerpiece17_ulnxrw.jpg"
        },
        {
            id: 18,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709422437/centerpiece18_ifij1h.jpg"
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
