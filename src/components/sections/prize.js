import React from "react"

import classes from './prize.module.css'

import win from '../../../content/illus/win2.svg'
import wave from '../../../content/bgillus/wave1.svg'

const Prize = () => {
    return(
        <div className={classes.prPWrap}>
            <img src={wave} alt="wave" className={classes.wave} />
            <div className={classes.prPWrap2}>
                <img src={win} alt="Winners" className={classes.prPIm}/>
                <div className={classes.prPTx}>
                    <p className={classes.prPTxHead}>Prizes &amp; Goodies</p>

                    <div className={classes.prPTxCont}>
                        <ul>
                            <li>The winners of the event get exciting cash prizes and an amazing opportunity to convert their designs into full-scale products.</li>
                            <br/>
                            <li>All participants will get Autodesk assured gifts and participation certificates after the completion of each stage.</li>
                            <br/>
                            <li>Participants who pass the first level screening gets exclusive access to Bootcamps set up by Autodesk experts.</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prize;