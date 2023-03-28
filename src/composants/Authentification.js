import React, { useState } from 'react'
import '../styles/Authentification.css'
import Connecter from './Connecter'
import bankhi_logo from '../assets/Bankhi-logo.png'
import email_icon from '../assets/Icon_Email.png'
import password_icon from '../assets/Icon_Password.png'
import eyeOn from '../assets/Eye_On.png'
import eyeOff from '../assets/Eye_Off.png'
import { Link } from "react-router-dom";




export default function Authentification() {
  const[type, setType] =useState('password');
  const[eye, setEye] =useState(eyeOff);
  const handdleToggle=()=>{
    if(type==='password'){
      setEye(eyeOn);
      setType('text')
    }else{
      setEye(eyeOff);
      setType('password');
    }
  }

  return (  
    <section className='field'>
        <img src={bankhi_logo} alt='bankhi-logo' className='bankhi_logo'/>
        <form action="" method='post'>
            <fieldset>
            <div className='over_inputs'>
            <h1>Ooh ! Content de te revoir</h1>
            <p>Content de te revoir! veuillez saisir vos coordonnées.</p>
            </div>
            <div className='inputs'>
                
                <label for="mail"></label>
                <div className='icon_input'>
                <img src={email_icon} alt="icon" className='email_icon'/>
                <input type="email" id="mail" placeholder='Votre Email' className='input1'/>
                </div>
                
                <label for="password"></label>
                <div className='icon_input'>
                <img src={password_icon} alt="icon" className='password_icon'/>
                <input type={type} id="password" placeholder='Votre Mot de Pass' className='input1'/>
                <span onClick={handdleToggle}><img src={eye} alt="icon"/></span>
                </div>
               
            </div>
            <div className='under_inputs'>
                <div className='check'>
                <input type="checkbox" name="souv" id='souv' />
                <label for="souv">Souviens-toi de moi</label>
                </div>
                <Link to="/SignUP" href="#" variant="body2" >
                  don't have an account? Sign Up
                </Link>
            </div>
            <Connecter/>
            </fieldset>
            
        </form>
        
    </section>
  )
}
