import React from "react"

import classes from './challenge.module.css'

import blob from '../../../content/bgillus/blobDGr.svg'
import tinker from '../../../content/logos/tinkerLogo.png'
import fusion from '../../../content/logos/fusionLogo.png'

const Challenge = () => {
    return(
        <div className={classes.chalWrap} id="challenge-section">
            <img src={blob} alt="blob" className={classes.blob} />
            <div className={classes.chalTx}>
                <p className={classes.chalTxHead}>The Challenge</p>
                <p className={classes.chalTxCont}>Craft designs that can shape the future. 
                Design prototypes that can flourish into full-scale products and win exciting prizes.
                The challenge is narrowed down for students of two categories.</p>
            </div>
            <div className={classes.chalSplit}>
                <div className={classes.chalSplitSec}>
                    <p className={classes.chalSplitHead}>Schools</p>
                    <p className={classes.chalSplitCont}>Design a portable low-cost plastic waste management device for residential purposes.</p>
                    {/* <p className={classes.chalSplitCont3}>First Prize: &#8377; 30,000</p>
                    <p className={classes.chalSplitCont4}>Second Prize: &#8377; 20,000</p> */}
                    <p className={classes.chalSplitCont2}>Eligibility: 10th, 11th and 12th standard students<br/><br/>Software to be used: AUTODESK TINKERCAD</p>
                    <a href="https://www.tinkercad.com/" rel="noopener noreferrer" target="_blank" className={classes.chalSplitImg1}>
                        <img src={tinker} alt="tinkercad logo" />
                    </a>
                    <a href="http://prvdnc.com/pdchss" rel="noopener noreferrer" target="_blank" className={classes.rgBtn}>
                        Register
                    </a>
                </div>

                <div className={classes.chalSplitLine}></div>

                <div className={classes.chalSplitSec}>
                    <p className={classes.chalSplitHead}>Engineering Colleges &amp; Polytechnics</p>
                    <p className={classes.chalSplitCont}>Design a low-cost portable organic waste management device (other than vermicompost) for residential purposes.</p>
                    {/* <p className={classes.chalSplitCont3}>First Prize: &#8377; 50,000</p>
                    <p className={classes.chalSplitCont4}>Second Prize: &#8377; 25,000</p> */}
                    <p className={classes.chalSplitCont2}>Eligibility: Students from AICTE approved colleges<br/><br/>Software to be used: AUTODESK FUSION 360</p>
                    <a href="https://www.autodesk.in/products/fusion-360/overview" rel="noopener noreferrer" target="_blank" className={classes.chalSplitImg2}>
                        <img src={fusion} alt="fusion 360 logo" />
                    </a>
                    <a href="http://prvdnc.com/pdcpc" rel="noopener noreferrer" target="_blank" className={classes.rgBtn}>
                        Register
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Challenge;