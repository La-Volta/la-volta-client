import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logoVolta-1.png';
import ajuntament from '../../../assets/images/logoAjuntament-1.png';
import generalitat from '../../../assets/images/logoGeneralitat-1.png';
import diputacio from '../../../assets/images/logoDiputacio-1.png';
import associacio from '../../../assets/images/logoAssociacioSantNarcis.png';
import cases from '../../../assets/images/logoCases.png';




const Footer = () => {
  return (
    <footer className="py-4 bg-light mt-auto">
        <div className="container-fluid px-4">
            <div className="d-flex align-items-center justify-content-between small">
                <div>
                  <img className="lavolta" src={logo} alt="logo La Volta"/>
                  <img className="lavolta" src={ajuntament} alt="logo La Volta"/>
                  <img className="lavolta" src={generalitat} alt="logo La Volta"/>
                  <img className="lavolta" src={diputacio} alt="logo La Volta"/>
                  <img className="lavolta" src={associacio} alt="logo La Volta"/>
                  <img className="lavolta" src={cases} alt="logo La Volta"/> 
            </div>
            </div>
        </div>
                <div className="text-muted">
            Associació Cultural LA VOLTA | Plaça Assumpció, 22 | Sant Narcís, 17005 Girona | +34 610033833 | <Link to="mailto:info@femlavolta.cat">mail: info@femlavolta.cat</Link>  <Link to="http://www.quelic.net">Creació web:Quelic</Link> </div>    
            
    </footer>
  );
}

export default Footer;