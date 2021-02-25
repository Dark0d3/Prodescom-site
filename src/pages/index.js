import React from "react"
import { Helmet } from "react-helmet"

import classes from '../styles/index.module.css'

import Layout from '../components/hoc/Layout/Layout'

import Hero from '../components/sections/hero'
import Challenge from '../components/sections/challenge'
import EvProcess from '../components/sections/evprocess'
import Prize from '../components/sections/prize'
import Evtimeline from '../components/sections/evtimeline'
import Sponsor from '../components/sections/sponsor'
import Contact from '../components/sections/contact'
import Footer from '../components/sections/footer'

if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
}


const indexPage = () => {

    return(
        <Layout>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
                <title>PRODESCOM</title>
            </Helmet>
            <Hero />
            <Challenge />
            <EvProcess/>
            <Prize />
            <Evtimeline />
            <Sponsor />
            <Contact />
            <Footer />
        </Layout>

    )
}

export default indexPage;

