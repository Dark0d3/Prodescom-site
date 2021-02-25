import React from "react"

import { Link } from "gatsby"

import classes from './footer.module.css'

// import rasam from '../../../content/logos/rasWhTx.svg'
import prodesLogo from '../../../content/logos/prodesCol.png'
import locpin from '../../../content/icons/locpinEd.svg'
import mail from '../../../content/icons/mailEd.svg'
import fb from '../../../content/icons/fbEd.svg'
import insta from '../../../content/icons/instaEd.svg'
import twitter from '../../../content/icons/twitterEd.svg'
import youtube from '../../../content/icons/youtubeEd.svg'
import linkedin from '../../../content/icons/linkedinEd.svg'
import call from '../../../content/icons/callEd.svg'


const Footer = () => {
    return(
        <div className={classes.ftWrap}>
            <div className={classes.ftCol}>
                {/* <img src={prodesLogo} className={classes.rasLogo}/> */}
                <ul className={classes.navLinks}>
                    <Link to="/">HOME</Link>
                    <Link to="/#challenge-section">CHALLENGE</Link>
                    <Link to="/#timeline-section">TIMELINE</Link>
                    <Link to="/#contact-section">CONTACT</Link>
                    <Link to="/blog">BLOG</Link>
                </ul>
            </div>
            <div className={classes.ftCol}>
                <div className={classes.contDet}>
                    <a href="http://facebook.com/theprovidencecollege" rel="noopener noreferrer" target="_blank">
                        <img src={fb} alt="locpin" className={classes.svgIc}/>
                    </a>
                    <a href="http://twitter.com/providencece" rel="noopener noreferrer" target="_blank">
                        <img src={twitter} alt="locpin" className={classes.svgIc}/>
                    </a>
                    <a href="http://instagram.com/providencece" rel="noopener noreferrer" target="_blank">
                        <img src={insta} alt="locpin" className={classes.svgIc}/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCAm705PUEV-Xq5lrE2Dn-fA" rel="noopener noreferrer" target="_blank">
                        <img src={youtube} alt="locpin" className={classes.svgIc}/>
                    </a>
                    <a href="https://www.linkedin.com/school/providencece/" rel="noopener noreferrer" target="_blank">
                        <img src={linkedin} alt="locpin" className={classes.svgIc}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;