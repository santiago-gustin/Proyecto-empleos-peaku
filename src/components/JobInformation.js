import React from 'react';
import '../styles/JobInformation.css'
import empresa from '../images/empresa.png';
import ubicacion from '../images/ubicacion.png'
import salario from '../images/salario.png'
import vacante from '../images/vacante.png'
import calendario from '../images/calendario.png'

const JobInformation = (props) =>{
    return(   
                <div className='container-job-information row'>
                    <div className='col-3 d-flex'>
                        <img className='img-information' src={empresa} alt="Empresa"/>
                        <p>{props.information[0]}</p>
                    </div>
                    <div className='col-3 d-flex'>
                        <img className='img-information' src={ubicacion} alt="Ubicacion"/>
                        <p>{props.information[1]}</p>
                    </div>
                    <div className='col-2 d-flex'>
                        <img className='img-information' src={salario} alt="Salario"/>
                        <p>{props.information[2]}</p>
                    </div>
                    <div className='col-2 d-flex'>
                        <img className='img-information' src={vacante} alt="Vacante"/>
                        <p>{props.information[3]}</p>
                    </div>
                    <div  className='col-2 d-flex'>
                        <img className='img-information' src={calendario} alt="Calendario"/>
                        <p>{props.information[4]}</p>
                    </div>
                </div>
    );
};

export default JobInformation;
