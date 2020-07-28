import React from 'react';
import styled ,{ withTheme } from 'styled-components';
import ToggleTheme from './toggleTheme';

const MoreNav = (props) => {
    return (<div className="more-nav">
        <ToggleTheme theme={props.theme} />
    </div>);
}

export default withTheme(MoreNav);