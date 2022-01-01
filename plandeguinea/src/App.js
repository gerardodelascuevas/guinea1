import './App.css';
import NavBar from './Components/Navbar';
import Footer from './Components/footer';
import Inicio from './Components/inicio';
import {Route, Routes} from 'react-router-dom';
import Start from './Components/start';

function App() {
  return (
      <div>  
        {/* <NavBar />   */}
       
        <Routes >          
          <Route index element = {<Start />} />
          {/* <Route path='/'  element = {<NavBar />} /> */}

          <Route path='inicio/turismo' element = { <Inicio/> } /> 
          
        </Routes>
      </div>

  );
  }

export default App;
