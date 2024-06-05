
import { useState } from 'react';
import './index.css';


 const App= () => {
  const[dicenumber, setdicenumber] =useState(6);

  const refreshdice = () =>{
    const random= Math.floor(Math.random() *6)+1;
    setdicenumber(random) 
  }
  return (

    <div>
   <center>
        <img src={require(`./assets/assets/${dicenumber}.png`)}></img>

        <div>
        <button onClick={()=> refreshdice()} className='button'>roll</button>
        </div>
        </center>
    </div>
  
    
    
  );
}

export default App;
