import React, { useState } from 'react';
import { withRouter } from "react-router";
import styled ,{ withTheme } from 'styled-components';
import { bottombarBackground } from '../../themes';

const BottomNav = styled.div`
    background-color: ${bottombarBackground}
`;

const BottomBar = (props) => {
    console.log(props)
    const changeRoute = (toPath) => {
        props.history.push(toPath);
    };

    return (<BottomNav className="bottom-nav">
        {/* <div className="app-title"><span style={{fontWeight:'200'}}>Movie</span> Spot</div> */}
        <div className="bottomnav-item">
            <i className="material-icons mi-pointer" onClick={() => changeRoute('/')}>home</i>
        </div>
        <div className="bottomnav-item">
            <i className="material-icons mi-pointer" onClick={() => changeRoute('/')}>search</i>
        </div>
        <div className="bottomnav-item">
            <i className="material-icons mi-pointer" onClick={() => changeRoute('/wishlist')}>favorite</i>
        </div>
        <div className="bottomnav-item">
            <i className="material-icons mi-pointer" onClick={() => changeRoute('/more-nav')}>more_horiz</i>
        </div>
        
    </BottomNav>)
}

export default withTheme(withRouter(BottomBar));