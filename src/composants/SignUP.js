import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import '../styles/SignUP.css';
import { Paper } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";



const theme = createTheme();

export default function SignUp() {
  const paperStyle={padding:'50px 20px' , width:'600',margin:"20px auto"};
  const handleSubmit = (event) => {
 
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
 
  
  const[name,setName]=React.useState('')
  const[lastName,setLastName]=React.useState('')
  const[email,setEmail]=React.useState('')
  const[password,setPassword]=React.useState('')
  
  const handleClick = (e) => {
    e.preventDefault();
  
    // validate inputs
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!name || !lastName || !password ) {
      alert('Please fill in all the required fields.');
      return;
    }
  
    // send data to server
    const user = { name, lastName, email, password};
    fetch('http://localhost:8080/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    }).then(() => {
      console.log('new user added');
      toast.success('Signup successful!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate('/SignIn');
    });
  };
  
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
     
      <Container className="signup-container" component="main" maxWidth="xs">
      
        <Paper elevation={3} style={paperStyle}>
        <CssBaseline />
        
        <Avatar className='avatar' sx={{ m: 1, bgcolor: 'rgb(27, 40, 219)', position: 'relative', top: '-20px', left: '43%',right: '80%',alignItems: 'center' }}>
            <LockOutlinedIcon />
          </Avatar>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          
        >
           
          
          
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: -3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e)=>setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </Grid>
              
            </Grid>
            <Button
            
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
              color="primary"
              onClick={handleClick}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/SignIn" href="#" variant="body2" >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}