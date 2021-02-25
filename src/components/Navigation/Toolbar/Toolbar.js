import React from 'react'

import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            <Logo className={classes.LogoImg}/>
        </div>
        {/* <DrawerToggle clicked = {props.drawerToggleClicked}/> */}
        <nav className={classes.NavItems}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;