import React from 'react'

import classes from './Logo.module.css'
import prLogo from '../../../content/logos/prodesBl.png'
// import rasLogo from '../../../content/logos/rasBlTx.svg'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={prLogo} alt="Rasam logo"/>
    </div>
);

export default logo;