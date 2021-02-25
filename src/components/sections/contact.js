import React, { useState } from "react"

import { Link } from 'gatsby'

import { Collapse } from "@blueprintjs/core"
import useCollapse from 'react-collapsed';

import classes from './contact.module.css'

import blob from '../../../content/bgillus/blobDGr.svg'

import down from '../../../content/icons/down.svg'


const Contact = () => {

    const [conOpen, toggConOpen] = useState(false)

    const [isOpen, setOpen] = useState(false);
    const {getCollapseProps, getToggleProps} = useCollapse({isOpen});


    return(
        <div className={classes.chalWrap} id="contact-section">
            <div className={classes.chalTx}>
                <p className={classes.chalTxHead}>Contact Us</p>
                <p className={classes.chalTxCont}>We'd love to answer your questions!</p>
            </div>
            <div className={classes.chalSing}>
                <div className={classes.chalSplitSec}>
                    <p className={classes.chalSplitHead}>JOFIN THOMAS</p>
                    <p className={classes.chalSplitCont}>REGIONAL MANAGER, AUTODESK VINSYS</p>
                    <p className={classes.chalSplitContPh}>9847816401</p>
                </div>
                <div className={classes.chalSplitSec}>
                    <p className={classes.chalSplitHead}>JOBIN JOY</p>
                    <p className={classes.chalSplitCont}>FACULTY, PROVIDENCE COLLEGE OF ENG.</p>
                    <p className={classes.chalSplitContPh}>9947374969</p>
                </div>
            </div>

            {/* <button onClick={() => toggConOpen(!conOpen)}>Expand</button>
            <Collapse isOpen={conOpen}  className={classes.collapse} transitionDuration={200}>
                <div className={classes.chalSing}>    
                    <div className={classes.chalSplitSec}>
                        <p className={classes.chalSplitHead}>AAYUSH NAIR</p>
                        <p className={classes.chalSplitCont}>AUTODESK STUDENT AMBASSADOR</p>
                        <p className={classes.chalSplitContPh}>9656485839</p>
                    </div>
                    <div className={classes.chalSplitSec}>
                        <p className={classes.chalSplitHead}>AKHIL KRISHNAN</p>
                        <p className={classes.chalSplitCont}>FUSION 360 CERTIFIED USER</p>
                        <p className={classes.chalSplitContPh}>8301859886</p>
                    </div>
                    <div className={classes.chalSplitSec}>
                        <p className={classes.chalSplitHead}>CHRISTY KOSHY</p>
                        <p className={classes.chalSplitCont}>NSS PROGRAM OFFICER, PROVIDENCE</p>
                        <p className={classes.chalSplitContPh}>9459536744</p>
                    </div>
                    <div className={classes.chalSplitSec}>
                        <p className={classes.chalSplitHead}>ABIN T OOMMEN</p>
                        <p className={classes.chalSplitCont}>NSS STUDENT COORDINATOR</p>
                        <p className={classes.chalSplitContPh}>9526388627</p>
                    </div>
                    <div className={classes.chalSplitSec}>
                        <p className={classes.chalSplitHead}>SREENATH R</p>
                        <p className={classes.chalSplitCont}>VICE PRESIDENT, PROMEA</p>
                        <p className={classes.chalSplitContPh}>9074977216</p>
                    </div>
                </div>
            </Collapse> */}

            <div className={classes.chalSing } {...getCollapseProps()}>    
                <div className={classes.chalSplitSec}>
                    <p className={classes.chalSplitHead}>AAYUSH NAIR</p>
                    <p className={classes.chalSplitCont}>AUTODESK STUDENT AMBASSADOR</p>
                    <p className={classes.chalSplitContPh}>9656485839</p>
                </div>
                <div className={classes.chalSplitSec}>
                    <p className={classes.chalSplitHead}>AKHIL KRISHNAN</p>
                    <p className={classes.chalSplitCont}>FUSION 360 CERTIFIED USER</p>
                    <p className={classes.chalSplitContPh}>8301859886</p>
                </div>
                <div className={classes.chalSplitSec}>
                    <p className={classes.chalSplitHead}>CHRISTY KOSHY</p>
                    <p className={classes.chalSplitCont}>NSS PROGRAM OFFICER, PROVIDENCE</p>
                    <p className={classes.chalSplitContPh}>9459536744</p>
                </div>
                <div className={classes.chalSplitSec}>
                    <p className={classes.chalSplitHead}>ABIN T OOMMEN</p>
                    <p className={classes.chalSplitCont}>NSS STUDENT COORDINATOR</p>
                    <p className={classes.chalSplitContPh}>9526388627</p>
                </div>
                <div className={classes.chalSplitSec}>
                    <p className={classes.chalSplitHead}>SREENATH R</p>
                    <p className={classes.chalSplitCont}>VICE PRESIDENT, PROMEA</p>
                    <p className={classes.chalSplitContPh}>9074977216</p>
                </div>
            </div>

            <div
                {...getToggleProps({
                onClick: () => setOpen(oldOpen => !oldOpen),
                })}>
                {isOpen ? 
                    <div className={classes.collapseButt}>
                        <p className={classes.collapseTx}>less</p>
                        <img src={down} className={classes.downU}/>
                    </div>: 
                    <div className={classes.collapseButt}>
                        <p className={classes.collapseTx}>more</p>
                        <img src={down} className={classes.downD}/>
                    </div>}
            </div>

            <div className={classes.chalTx}>
                <Link to="/district-coordinators" className={classes.chalTxCont2}>
                    <p>Contact our district coordinators for information on free Tinkercad/ Fusion 360 training sessions.</p>
                </Link>
            </div>
            {/* <div className={classes.chalSplit}>
                <div className={classes.chalSplitSec}>
                    <p className={classes.chalSplitHead}>KASARGOD</p>
                    <p className={classes.chalSplitCont}>ANU MOHAN</p>
                    <p className={classes.chalSplitContPh}>8075358440</p>
                    <p className={classes.chalSplitHead}>KANNUR</p>
                    <p className={classes.chalSplitCont}>AFREED C P</p>
                    <p className={classes.chalSplitContPh}>8593997127</p>
                    <p className={classes.chalSplitHead}>WAYANAD</p>
                    <p className={classes.chalSplitCont}>VISHAL P K</p>
                    <p className={classes.chalSplitContPh}>9207132812</p>
                    <p className={classes.chalSplitHead}>KOZHIKODE</p>
                    <p className={classes.chalSplitCont}>JOEL BIJU GEORGE</p>
                    <p className={classes.chalSplitContPh}>8078290466</p>
                    <p className={classes.chalSplitHead}>MALAPPURAM</p>
                    <p className={classes.chalSplitCont}>ANANTHU R</p>
                    <p className={classes.chalSplitContPh}>8281184583</p>
                   
                </div>

                <div className={classes.chalSplitSec}>
                    <p className={classes.chalSplitHead}>PALAKKAD</p>
                    <p className={classes.chalSplitCont}>SHARATH R SHANKAR</p>
                    <p className={classes.chalSplitContPh}>8943892463</p>
                    <p className={classes.chalSplitHead}>THRISSUR</p>
                    <p className={classes.chalSplitCont}>JOEL GEE ROY</p>
                    <p className={classes.chalSplitContPh}>9645171179</p>
                    <p className={classes.chalSplitHead}>ERNAKULAM</p>
                    <p className={classes.chalSplitCont}>SOORAJ S</p>
                    <p className={classes.chalSplitContPh}>8129284264</p>
                    <p className={classes.chalSplitHead}>IDUKKI</p>
                    <p className={classes.chalSplitCont}>RITHIK GEORGE CHERIAN</p>
                    <p className={classes.chalSplitContPh}>9544441884</p>
                    <p className={classes.chalSplitHead}>KOTTAYAM</p>
                    <p className={classes.chalSplitCont}>JAI JACOB</p>
                    <p className={classes.chalSplitContPh}>9447803240</p>
                    
                
                </div>
                <div className={classes.chalSplitSec}>
                    <p className={classes.chalSplitHead}>ALAPPUZHA</p>
                    <p className={classes.chalSplitCont}>ABIN OOMMEN</p>
                    <p className={classes.chalSplitContPh}>8281072987</p>
                    <p className={classes.chalSplitHead}>PATHANAMTHITTA</p>
                    <p className={classes.chalSplitCont}>AKHIL KRISHNA</p>
                    <p className={classes.chalSplitContPh}>8075599369</p>
                    <p className={classes.chalSplitHead}>KOLLAM</p>
                    <p className={classes.chalSplitCont}>NIDHIN S PRASAD</p>
                    <p className={classes.chalSplitContPh}>9447186233</p>
                    <p className={classes.chalSplitHead}>THIRUVANANTHAPURAM</p>
                    <p className={classes.chalSplitCont}>VISHAKH VENUGOPAL</p>
                    <p className={classes.chalSplitContPh}>9496390121</p>
                
                </div>
            </div> */}
        </div>
    )
}

export default Contact;