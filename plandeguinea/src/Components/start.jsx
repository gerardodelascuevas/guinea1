import './Navbar.css'
import { Link } from "react-router-dom"
import Letras from './img/brujula.png'
import Vacas from './img/cow.png'
import cafe from './img/coffee-beans.png'
import agroveterinaria from './img/hospital.png'
import React from 'react'
import Footer from './footer'


export default function Start(){
    return(
            <React.Fragment > 
                <div id= 'container-start' >                 
                <h1 id='grupoguineatitulo'> Bienvenido a Grupo Guinea </h1>
                <div className="start">                   
                    <Link to ='./inicio/turismo'>
                        <img className='imgstart'src={Letras} alt="pdg2022" />
                    <h2 className='linkletras'> Visita Plan de Guinea  </h2>  
                    </Link>

                    <Link to ='./inicio/ganado'>
                        <img className='imgstart'src={Vacas} alt="Santa Gertrudis" />
                        <h2 className='linkletras'> Ganado Santa Gertrudis de registro  </h2>
                    </Link>
            
                    <Link to ='./inicio/cafe'>
                        <img className='imgstart' id='cafedelplan'src={cafe} alt="Café del Plan" />
                        <h2 className='linkletras'> Café del Plan </h2>
                    </Link>

                    <Link to ='./inicio/agroveterinaria'>
                        <img className='imgstart'src={agroveterinaria} alt="La Fuerza de Agroveterinaria" />
                        <h2 className='linkletras'> AgroVeterinaria Plan de Guinea </h2>
                    </Link>

                </div>
                </div>
                <Footer /> 
        </React.Fragment>
    )
}