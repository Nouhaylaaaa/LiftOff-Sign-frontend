import React from "react";
import '../App.css';
import Footer from './Footer';
import Authentification from './Authentification';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SignIN() {
    return (
      <div className="App">
        <ToastContainer />
     <div className='bod'><Authentification/></div>
     <Footer/>
      </div>
    );
  }
export default SignIN;

