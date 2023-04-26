import React from "react";
import Tilt from 'react-tilt';
import "./Logo.css";
import logo from './logo.png';

const Logo = () => {
    return (
        <div>
            <Tilt className="Tilt shadow-4 bw2 center" options={{ max: 55 }} style={{ height: 170, width: 150 }} >
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop:"7px"}} src={logo} alt="no"></img> 
                </div>
            </Tilt>
        </div>
    )
}

export default Logo
