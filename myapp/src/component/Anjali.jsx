import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Anjali = () => {
  var [name, setname] = useState()
  const anjali = () => {
    setname("Anjali")
  }
  const bahaja = () => {
    setname("bahaja")
  }
  const sajanya = () => {
    setname("sajanya")
  }
  return (
    <div>
      <Typography variant='h3'>welcome{name}</Typography>
      <Button variant='contained' color='inherit' onClick={anjali}>Anjali</Button>&nbsp;&nbsp;
      <Button variant='contained' color='inherit' onClick={bahaja}>Bahaja</Button>&nbsp;&nbsp;
      <Button variant='contained' color='inherit' onClick={sajanya}>Sajanya</Button>
    </div>
  )
}

export default Anjali