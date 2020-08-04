import React from 'react';
import { withRouter } from "react-router";
import styled ,{ withTheme } from 'styled-components';
import { headerBackground } from '../../themes';

function BackNav(props) {
    const goBack = () => {
		props.history.goBack();
    }
    
    return (
        <div>
            <i className={`material-icons mi-color back-btn ${props.circle && 'mi-action'}`} onClick={() => goBack()}>keyboard_backspace</i>
        </div>
    )
}

export default withRouter(BackNav);