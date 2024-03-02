import React from 'react';
import '../styles/MenuLateral.css'
import imgEmpleos from '../images/empleoss.png';
import imgPostulaciones from '../images/postulaciones.png';
import imgCodex from '../images/codex.png';
import imgPreguntas from '../images/preguntas.png';
import imgBootcamp from '../images/bootcamp.png';
import imgPremios from '../images/premios.png';
import imgCv from '../images/cv.png';



const MenuLateral = () =>{
    return(
        <div className='container-menu-lateral'>
            <a href='#' class="menu-lateral">
                <img className='img-empleos' src={imgEmpleos} alt='Logo Menu' />
                <p>Empleos</p>
            </a>
            <a href='#' class="menu-lateral">
                <img className='img-postulaciones' src={imgPostulaciones} alt='Logo Menu' />
                <p>Postulaciones</p>
            </a>
            <a href='#' class="menu-lateral">
                <img className='img-codex' src={imgCodex} alt='Logo Menu' />
                <p>CodeX</p>
            </a>
            <a href='#' class="menu-lateral">
                <img className='img-preguntas' src={imgPreguntas} alt='Logo Menu' />
                <p>Preguntas</p>
            </a>
            <a href='#' class="menu-lateral">
                <img className='img-bootcamp' src={imgBootcamp} alt='Logo Menu' />
                <p>Bootcamp</p>
            </a>
            <a href='#' class="menu-lateral">
                <img className='img-premios' src={imgPremios} alt='Logo Menu' />
                <p>Premios</p>
            </a>
            <a href='#' class="menu-lateral">
                <img className='img-cv' src={imgCv} alt='Logo Menu' />
                <p>Tu CV</p>
            </a>
        </div>
    );
};

export default MenuLateral;
