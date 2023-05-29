import React from 'react';

const Footer = ({redSocial}) => {

    //Acá va el código js necesario
    //Calculamos el año corriente
    const year = new Date().getFullYear();

    return ( 
        <div>
            <p>Acá va el footer</p>
            <p>Año {year}</p>
            <p>Visita nuestra red social {redSocial}</p>
        </div>
    );
}
 
export default Footer;