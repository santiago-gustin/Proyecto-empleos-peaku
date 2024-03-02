import React from 'react';
import '../styles/JobCards.css'
import JobInformation from './JobInformation';
import logoEmpresa from '../images/logo-empresa.png';

const JobCards = (props) =>{
    return(
        <div className='container-card'>
            <img className='img-card' src={logoEmpresa} alt="Logo-empresa"/>
            <div className='container-text px-3'>
                <div className='container-title'>
                    <div>
                        <h4>{props.title}</h4>
                    </div>
                    <div className='container-title__programs pt-1 px-3'>
                        {props.programs.map((program) => <p>{program}</p>)}
                    </div>
                </div>
                <div>
                    <JobInformation className='job-information' information={props.information}/>
                </div>                
            </div>
        </div>
    );
};

export default JobCards;
