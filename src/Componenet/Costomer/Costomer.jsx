import React from 'react';
import './Costomer.css';
import Costome from '../../Images/Costomer.jpg'

function Costomer() {
  return (
    <div className='Costomer-main'>
      <div className="Costomer-1"> 
            <p>CUSTOMER STORIES</p>
            <h1>
            You’re in good <br /> company</h1>
            <button>SEE ALL STORIES  &rarr;</button>
         </div>      
      <div className="Costomer-2">
         <img alt='img' src={Costome}className='Costomer-img-1' />
        
        </div>        
        
    </div>
  )
}

export default Costomer
