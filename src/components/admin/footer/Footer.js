import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logoVolta-1.png';
import ajuntament from '../../../assets/images/logoAjuntament-1.png';
import generalitat from '../../../assets/images/logoGeneralitat-1.png';
import diputacio from '../../../assets/images/logoDiputacio-1.png';
import associacio from '../../../assets/images/logoAssociacioSantNarcis.png';
import cases from '../../../assets/images/logoCases.png';
import "../footer/footer.css";




const Footer = () => {
  return (
    <footer className="bg-white">
        <div className="d-flex justify-content-center container-fluid py-4">
                <div>
                  <img className="lavoltaimgs" src={logo} alt="logo La Volta"/>
                  <img className="lavoltaimgs" src={ajuntament} alt="logo La Volta"/>
                  <img className="lavoltaimgs" src={generalitat} alt="logo La Volta"/>
                  <img className="llavoltaimgs" src={diputacio} alt="logo La Volta"/>
                  <img className="lavoltaimgs" src={associacio} alt="logo La Volta"/>
                  <img className="lavoltaimgs" src={cases} alt="logo La Volta"/> 
                </div>
        </div>   

                <div className='bg-black'>
                  <p className='text-footer text-center'>
                    Associació Cultural La Volta | Plaça Assumpció, 22 | Sant Narcís, 17005 Girona | +34 610 033 833 |
                    <Link className='text-decoration-none' to="mailto:info@femlavolta.cat"> info@femlavolta.cat </ Link>
                    <Link className='text-decoration-none' to="#"> | Creació web: FemCoders_cultural </ Link>
                  </p>
                </div>
            
    </footer>
  );
}

export default Footer;