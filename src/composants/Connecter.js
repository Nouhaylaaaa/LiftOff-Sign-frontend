import React from 'react'
import '../styles/Connecter.css'
import Button from '@mui/material/Button';

export default function Connecter() {
  return (
    <div>
   <Button
  className="button_con"
  type="submit"
  variant="outlined"
  sx={{ mt: 3, mb: 2 }}
  color="primary"
 
>
  Sign In
</Button>

  </div>
  
  )
}
