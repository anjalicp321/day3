import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <div>
          <AppBar color="success">
              <Toolbar>
                  <Typography variant="h6">Myapp</Typography>
                  <Link to="/login">
                  <Button variant='contained'color="secondary">Login</Button> 
                  </Link>&nbsp;
                  <Link to="/signup">
                      <Button variant="contained" color="secondary">Signup</Button> 
                      </Link>&nbsp;
                  <Link to="/t">
                      <Button variant="contained" color="secondary">Table</Button>
                  </Link>&nbsp;
                  <Link to="/state">
                      <Button variant="contained" color="secondary">StateSpace</Button>
                  </Link>&nbsp;
                  <Link to="/counter">
                      <Button variant="contained" color="secondary">Counter</Button>
                  </Link>&nbsp;
                  <Link to="/name">
                      <Button variant="contained"color="secondary">Name</Button>
                  </Link>&nbsp;
                  <Link to="/api">
                      <Button variant="contained"color="secondary">Api</Button>
                  </Link>&nbsp;
                  <Link to="/product">
                      <Button variant="contained" color="secondary">Product</Button>
                      </Link>


              </Toolbar>
          </AppBar>
          <br /><br /><br />
    </div>
  )
}

export default NavBar