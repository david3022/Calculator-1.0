import React from "react";
import davidLogo from '../imagenes/david-logo.png';
import '../App.css';


const Logo = (props) => (
    <div className='david-logo-contenedor'>
        <img 
            src={davidLogo}
            className='david-logo'
            alt='Logo de David'
        />
        {props.imgLogo}

    </div>

);


export default Logo;