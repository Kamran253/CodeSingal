// import react from "react"
import './App.css'; 
// import Home from './Pages/Home'
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Solutions from './Pages/Solutions';
import Resources from './Pages/Resources';
import Company from './Pages/Company';
import Pricing from './Pages/Pricing';
import ForIndividuals from './Pages/ForIndividuals';
import Login from './Pages/LoginPage';



function App() {
 ;  
  return (
    <div className="App">

      <Router>  
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/Products" element= {<Products/>} />
        <Route path="/Solutions" element= {<Solutions/>} />
        <Route path="/Resources" element= {<Resources/>} />
        <Route path="/Company" element= {<Company/>} />
        <Route path="/Pricing" element= {<Pricing/>} />
        <Route path="/ForIndividuals" element= {<ForIndividuals/>} />
        <Route path="/Login" element= {<Login/>} />

 
     </Routes>

    
      

  
  
   
      </Router>
    </div>
  );
}

export default App;
