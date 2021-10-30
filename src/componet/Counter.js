import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PhotoProfile from './PhotoProfile';
import FullName from './FullName';
import Adress from './Adress';
import {Button} from "react-bootstrap"
import Icons from './Icons'
import Timer from './Timer'

function App() {
  return (
    <div className="App">
    

    <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
  <div className="card p-4">
      <PhotoProfile/>
      <FullName/>
      <Adress/>

     
      
      <div className="text mt-3"> <span> My Name is Baraa i'm Frome tunisia <br/>I am a full stack developer <br/> With 3 years experience</span> </div>

   <Icons/>

  

      <div className=" ">   <Button variant="secondary">View More</Button>{' '}
<Timer/>
</div>
    </div>
  </div>
</div>
  );
}

export default App;

