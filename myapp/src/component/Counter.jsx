import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const counter = () => {
  var [val, setval] = useState(0)
  const add = () => {
    
  
    setval(val + 1)
}
const sub = () => {
  setval(val-1)
}

  return (
    <div>
      <Typography variant='h4'>Count:{val}</Typography>
      <Button variant="contained" onClick={add}>+</Button>
      <Button variant="contained" onClick={sub}>-</Button>
    </div>
  )
}

export default counter