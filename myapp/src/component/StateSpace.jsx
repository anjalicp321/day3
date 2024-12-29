import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateSpace = () => {
    var [name,setname] = useState("Anjali")
    var [nval,sval] = useState()
    const setval = (e) => {
        console.log(e.target.value)
        setname(e.target.value)
    }
    const SubHandler=()=>{
        sval(name)
    }
return (
    <div>
        <Typography variant='h3'>Welcome {nval}</Typography>
        <TextField variant='outlined' onChange={setval}></TextField><br />
        <Button variant="contained" onClick={SubHandler}>Submit</Button>
    </div>
)
}

export default StateSpace