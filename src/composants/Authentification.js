import React from 'react'
import '../styles/Authentification.css'
import Connecter from './Connecter'

import email_icon from '../assets/Icon_Email.png'
import password_icon from '../assets/Icon_Password.png'
import eyeOn from '../assets/Eye_On.png'
import eyeOff from '../assets/Eye_Off.png'
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';







export default function Authentification() {
  const[type, setType] =React.useState('password')
  const[eye, setEye] =React.useState(eyeOff)
  const handdleToggle=()=>{
    if(type==='password'){
      setEye(eyeOn);
      setType('text')
    }else{
      setEye(eyeOff);
      setType('password');
    }
  }
  const[email,setEmail]=React.useState('')
  const[password,setPassword]=React.useState('')

  const navigate = useNavigate();

// ...

const ProceedLogin = (e) => {
  e.preventDefault();
  if (Validate()) {
    fetch("http://localhost:8080/users/getAll")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const users = data.find((users) => users.email === email);
        if (!users) {
          toast.error("Email not found in database.");
          return;
        }
        if (users.password !== password) {
          toast.error("Invalid password.");
          return;
        }
        toast.success("Login successful!");
        navigate('/Home'); // navigate to the Home component
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        toast.error("Login failed due to " + err.message);
      });
  }


  
  
  
  
  }
  
  
  const Validate=()=>{
    let result=true;
    if(email===''|| email===null)
    {
      result=false;
      toast.warning('please enter ur email');
    }
    if(password===''|| password===null)
    {
    
      result=false;
      toast.warning('please enter ur password');
      
    }
    return result;
  }

  return (  
    <section className='field'>
       
        <form action="" method='post' onSubmit={ProceedLogin}>
      
            <fieldset>
            <div className='over_inputs'>
            <h1>SIGN IN</h1>
            <p>Content de te revoir! veuillez saisir vos coordonnées.</p>
            </div>
            <div className='inputs'>
                
                <label htmlFor="mail"></label>
                <div className='icon_input'>
                <img src={email_icon} alt="icon" className='email_icon'/>
                <input type="email" id="mail" placeholder='Votre Email' className='input1'
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                />
                </div>
                
                <label htmlFor="password"></label>
                <div className='icon_input'>
                <img src={password_icon} alt="icon" className='password_icon'/>
                <input type={type} id="password" placeholder='Votre Mot de Pass' className='input1'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <span onClick={handdleToggle}><img src={eye} alt="icon"/></span>
                </div>
               
            </div>
            <div className='under_inputs'>
                <div className='check'>
                <input type="checkbox" name="souv" id='souv' />
                <label htmlFor="souv">Souviens-toi de moi</label>
                </div>
                <Link to="/SignUP" href="#" variant="body2" >
                  don't have an account? Sign Up
                </Link>
            </div>
            <div>
              <Link to =""/>
            <Connecter/>
            </div>
            </fieldset>
            
        </form>
        
    </section>
  )
}
