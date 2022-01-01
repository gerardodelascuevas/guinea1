import img from './img/hueytamalco.jpg'
import './Navbar.css'
import { Link } from 'react-router-dom'
import NavBar from './Navbar'


export default function Inicio(){
    return (
        <div>
            <NavBar />
            <Link to = './inicio/turismo'> 
            <h1>Plan de Guinea</h1>
            <img className= 'bueytamales' src={img} alt="Hueytamalco" />
            <p> Bienvenido a Plan de Guinea </p>
            </Link>
        </div>
    )
}