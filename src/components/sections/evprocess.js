import React from "react"

import classes from './evprocess.module.css'

import proto from '../../../content/illus/proto.svg'
import blob from '../../../content/bgillus/blob4DGr.svg'

const EvProcess = () => {
    return(
        <div className={classes.evPWrap}>
            <img src={blob} alt="blob3" className={classes.blob} />
            <img src={proto} alt="Idea Prototype" className={classes.evPIm}/>
            <div className={classes.evPTx}>
                <p className={classes.evPTxHead}>Event Process</p>
                <div className={classes.evPTxCont}>
                    <p className={classes.evPTxContH}>Stage 1: Level 1 Submission</p>
                    <p className={classes.evPTxContC}>
                        The participants should submit their designs online on or before 31st March for evaluation by autodesk experts
                    </p>

                    <p className={classes.evPTxContH}>Stage 2: Boot Camps</p>
                    <p className={classes.evPTxContC}>
                        After the level 1 screening, the competitors will be 
                        given the opportunity to attend a three-day advanced training boot camp with Autodesk experts.
                    </p>

                    <p className={classes.evPTxContH}>Stage 3: Level 2 Submission</p>
                    <p className={classes.evPTxContC}>
                        After successful completion of boot camps, competitors are invited to submit advanced designs on or before 25th April 2020.<br/>
                        <br/>
                        At this stage, the top 20 submissions each from school and college/polytechnic categories will be shortlisted for final presentation.
                    </p>

                    <p className={classes.evPTxContH}>Stage 4: Level 3 Presentation</p>
                    <p className={classes.evPTxContC}>
                        Shortlisted competitors are required to present their designs to an expert panel of judges, including experts from Autodesk, academia and industry.
                        <br/><br/>
                        3 finalists will be selected and asked to present their designs during the finale of the competition.
                        <br/><br/>
                        The venue of the finale will be announced shortly.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default EvProcess;