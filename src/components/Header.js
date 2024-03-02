import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../styles/Header.css';
import logoPeaku from '../images/logo-peaku.png';
import logoInternet from '../images/logo-www.png';
import logoNotifications from '../images/notificaciones.png';
import logoUser from '../images/usuario.png';
import logoDiamante from '../images/diamante.png';

const Header = () =>{
    return(
        <div className='container-navbar d-flex justify-content-between align-content-center'>
            <img src={logoPeaku} alt="Logo Peaku" />
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#" active>Empleos</Nav.Link>
                        <Nav.Link href="#">Bootcamp</Nav.Link>
                        <Nav.Link href="#">Sobre Nosotros</Nav.Link>
                        <NavDropdown title="Para profesionales" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Inicio</NavDropdown.Item>
                            <NavDropdown.Item href="#">Empleos</NavDropdown.Item>
                            <NavDropdown.Item href="#">Cursos y retos</NavDropdown.Item>
                            <NavDropdown.Item href="#">Preguntas</NavDropdown.Item>
                            <NavDropdown.Item href="#">Profesores</NavDropdown.Item>
                            <NavDropdown.Item href="#">Bootcamp</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Para empresas" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Inicio</NavDropdown.Item>
                            <NavDropdown.Item href="#">Publicar empleo</NavDropdown.Item>
                            <NavDropdown.Item href="#">Nuestro proceso</NavDropdown.Item>
                        </NavDropdown>
                        <div className='container-languaje'>
                            <img className='img-internet' src={logoInternet} alt="Logo Internet" />
                            <Nav.Link href="#">Español</Nav.Link>
                        </div>
                        <div className='container-notifications'>
                            <button className='button-notifications'>
                                <img className='img-notifications' src={logoNotifications} alt='Logo Notificaciones' />
                            </button>
                        </div>

                        <div className='container-user'>
                                <img className='img-user' src={logoUser} alt='Logo Notificaciones' />
                            <div className='container-user__text'>
                                <spam>Santiago</spam>
                                <div>
                                    <img className='img-diamante' src={logoDiamante} alt='...' />
                                    <spam>5074</spam>
                                </div>
                            </div>
                        </div>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;