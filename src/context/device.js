import React, {useState, useEffect} from 'react';

const screenWidth = window.screen.width;
const isMobile = screenWidth <= 800;

const deviceInfo = {
    screenWidth,
    isMobile
};

const DeviceContext = React.createContext(deviceInfo);

export default DeviceContext;