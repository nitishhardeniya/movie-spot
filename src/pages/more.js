import React from 'react';
import { withTheme } from 'styled-components';
import ToggleTheme from '../components/toggleTheme';

const MoreNav = (props) => {
    return (<div className="more-nav">
        <ToggleTheme theme={props.theme} />
    </div>);
}

export default withTheme(MoreNav);