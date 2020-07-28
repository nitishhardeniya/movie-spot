import React from 'react';
import { useTheme } from '../ThemeContext';
import Switch from "react-switch";

const ToggleTheme = (props) => {
    const toggle = useTheme();
    return (<div className="mode-switch">
    <span className="font-grey">Dark Mode</span>
    <Switch 
        onChange={()=> toggle.toggleTheme()} 
        checked={props.theme.mode === 'dark'}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={20}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={15}
        width={35}
        className="react-switch"
        id="material-switch"
    />
    </div>);
}

export default ToggleTheme;