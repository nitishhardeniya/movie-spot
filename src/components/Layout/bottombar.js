import React, { useState } from 'react';
import { withRouter } from "react-router";
import styled ,{ withTheme } from 'styled-components';
import { bottombarBackground } from '../../themes';

const BottomNav = styled.div`
    background-color: ${bottombarBackground}
`;

const NavList = [{
    path: '/',
    icon: 'home',
    label: 'Home'
},
{
    path: '/',
    icon: 'search',
    label: 'Home'
},{
    path: '/wishlist',
    icon: 'favorite',
    label: 'Wishlist'
},{
    path: '/more-nav',
    icon: 'more_horiz',
    label: 'More'
}]

const BottomBar = (props) => {
    // console.log(props)
    const [activeNav, setActiveNav ] = useState(0); 
    const changeRoute = (toPath, index) => {
        setActiveNav(index);
        props.history.push(toPath);
    };

    return (<BottomNav className="bottom-nav">
        {/* <div className="app-title"><span style={{fontWeight:'200'}}>Movie</span> Spot</div> */}
        {NavList.map((nav, index) => <div className="bottomnav-item">
            <i className={`material-icons mi-pointer ${activeNav === index ? 'active': ''}`} onClick={() => changeRoute(nav.path, index)}>{nav.icon}</i>
        </div>)}
    </BottomNav>)
}

export default withTheme(withRouter(BottomBar));