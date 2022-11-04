import React from 'react';
import '../hojas-de-estilo/Nosotros.css';


function nosotros(props) {
 return (
   <div className='contenedor-nosotros'>
    <img 
      className='imagen-nosotros'
      src={require(`../imagenes/${props.imagen}.png`)}
      alt='Foto de acerca de nosotros'/>
    <div className='contenedor-texto-nosotros'>
      <p className='nombre-nosotros'>{props.nombre}</p>
      <p className='informacion-nosotros'>{props.informacion}</p>
      <p className='texto-nosotros'>{props.texto}</p>
    </div>
   </div>
 );
}

export default nosotros;
