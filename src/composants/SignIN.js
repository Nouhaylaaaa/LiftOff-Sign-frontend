import React from "react";
import '../App.css';
import Footer from './Footer';
import Authentification from './Authentification';
import Slides from './Slides';
function SignIN() {
    return (
      <div className="App">
     <div className='bod'><Authentification/><Slides/></div>
     <Footer/>
      </div>
    );
  }
export default SignIN;

