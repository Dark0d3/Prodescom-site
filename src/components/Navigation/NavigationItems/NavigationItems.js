import React from 'react'



import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) =>(
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">HOME</NavigationItem>
        <NavigationItem link="/#challenge-section">CHALLENGE</NavigationItem>
        <NavigationItem link="/#timeline-section">TIMELINE</NavigationItem>
        <NavigationItem link="/#contact-section">CONTACT</NavigationItem>
        <NavigationItem link="/blog">BLOG</NavigationItem>
    </ul>
)

export default navigationItems