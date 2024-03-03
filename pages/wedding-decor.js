import React from 'react'
import Footer from '../components/Footer'
import PageGallery from '../components/PageGallery'
import Hero from '../components/Decor/Hero'
import Intro from '../components/Decor/Intro'
import MyHead from '../components/Head'

const WeddingDecor = () => {
    const gallery = [
        {
            id: 2,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332855/public/decor/decor2_fsho9m.jpg"
        },
        {
            id: 8,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332856/public/decor/decor8_j8tbss.jpg"
        },
        {
            id: 5,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332856/public/decor/decor5_buyfsu.jpg"
        },
        {
            id: 6,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332856/public/decor/decor6_vqxajo.jpg"
        },
        {
            id: 7,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332856/public/decor/decor7_y0d5vp.jpg"
        },
        {
            id: 3,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332855/public/decor/decor3_xwe5rw.jpg"
        },
        {
            id: 12,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332854/public/decor/decor12_kw2z8n.jpg"
        },
        {
            id: 16,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332855/public/decor/decor16_hyk5fe.jpg"
        },
        {
            id: 9,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332856/public/decor/decor9_e1mw7j.jpg"
        },
        {
            id: 11,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332854/public/decor/decor11_vpjjdy.jpg"
        },
        {
            id: 13,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332854/public/decor/decor13_tyosp7.jpg"
        },
        {
            id: 14,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332855/public/decor/decor14_qy1zoc.jpg"
        },
        {
            id: 4,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332856/public/decor/decor4_accayy.jpg"
        },
        {
            id: 1,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332854/public/decor/decor1_u0gil7.jpg"
        },
        {
            id: 15,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332855/public/decor/decor15_tmo7ds.jpg"
        },
        {
            id: 17,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332855/public/decor/decor17_wgdo4s.jpg"
        },
        {
            id: 18,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709423682/decor18_da0y8s.jpg"
        },
        {
            id: 19,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709423683/decor19_cu3iir.jpg"
        },
        {
            id: 20,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709423683/decor20_hoz2wm.jpg"
        },
        {
            id: 21,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709423683/decor21_nbgvcd.jpg"
        },
        {
            id: 22,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709423684/decor22_ip9k27.jpg"
        },
        {
            id: 23,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709424021/decor23_dllkh6_kojw6m.jpg"
        },
        {
            id: 24,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709423684/decor24_hfni1f.jpg"
        },
        {
            id: 10,
            itemType: "image",
            imgUrl: "https://res.cloudinary.com/drn5wtwrx/image/upload/v1709332854/public/decor/decor10_whihna.jpg"
        },
    ]

    return (
        <>
            <MyHead title={"Wedding Decor | Riwaj Events"} description={"This is the Wedding Decor of Riwaj Events"} />
            <Hero />
            <Intro />
            <PageGallery galleryData={gallery} />
            <Footer />
        </>
    )
}

export default WeddingDecor
