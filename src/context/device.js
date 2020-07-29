import React, {useState, useEffect} from 'react';


const [screenWidth, updateWindowDimensions] = useState(window.screen.width);

useEffect(() => {
        window.addEventListener("resize", (event) => {
        updateWindowDimensions(window.screen.width);
    });
}, []);

const isMobile = screenWidth <= 800;

const deviceInfo = {
    screenWidth,
    isMobile
};

const DeviceContext = React.createContext(deviceInfo);

export default DeviceContext;