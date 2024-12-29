import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div>
      <Typography variant="h2">SIGN UP</Typography >
      <TextField label="Username" variant="outlined" /><br /><br /><br />
    <TextField label="Password" variant="outlined" /><br /><br /><br />
    <Button variant="contained">SIGNUP</Button><br /><br /><br /></div>
    
  )
}

export default Signup