import React from 'react'

const Tble = () => {
  return (
      <div><TableContainer>
          <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Subject</TableCell>
                      <TableCell>Mark</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow>
                      <TableCell>Anu</TableCell>
                      <TableCell>English</TableCell>
                      <TableCell>33</TableCell>
                  </TableRow>
                  
              </TableBody>
          </Table>
      </TableContainer></div>
  )
}

export default Tble