import React from 'react';
import '../styles/Searcher.css'
// import JobInformation from './JobInformation';
import logoLupa from '../images/lupa.png';

const Searcher = () =>{
    return(
        <div className='container-searcher'>
            <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <form className="d-flex" role="search">
                    <div className="container-img-search">
                        <img className='img-search' src={logoLupa} alt='...' />
                    </div>
                    <input className="input-search" type="search" placeholder="   Busca por cargo, salario, ubicación o empresa" aria-label="Search" />
                </form>
            </div>
            </nav>
            <div className='container-buttons'>
                <button className='container-buttons__button'>Área <span class="triangle-down"></span> </button>
                <button className='container-buttons__button'>Cargo <span class="triangle-down"></span> </button>
                <button className='container-buttons__button'>Salario <span class="triangle-down"></span> </button>
                <button className='container-buttons__button'>Ubicación <span class="triangle-down"></span> </button>
            </div>
        </div>
    );
};

export default Searcher;