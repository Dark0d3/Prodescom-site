import React from "react"

import classes from './sponsor.module.css'

import prc from '../../../content/logos/prc1.png'
import vinsys from '../../../content/logos/vinsys.png'
import autodesk from '../../../content/logos/autodeskLP.png'
import nss from '../../../content/logos/nss.png'
import promea from '../../../content/logos/promea.png'

const Sponsor = () => {
    return(
        <div className={classes.spWrap}>
            {/* <img src={blob} alt="blob3" className={classes.blob} /> */}
            <div className={classes.spTx}>
                <p className={classes.spTxHead}>In Association With</p>
            </div>
            <div className={classes.spImgs}>
                <a href="https://www.autodesk.in/" rel="noopener noreferrer" target="_blank">
                    <img src={autodesk} alt="Autodesk"/>
                </a>
                <a href="https://www.vinsys.com/" rel="noopener noreferrer" target="_blank">
                    <img src={vinsys} alt="Vinsys"/>
                </a>
                <a href="https://providence.edu.in/" rel="noopener noreferrer" target="_blank">
                    <img src={prc} alt="PRC"/>
                </a>
                <img src={nss} alt="NSS"/>
                <img src={promea} alt="PROMEA"/>
            </div>
        </div>
    )
}

export default Sponsor;