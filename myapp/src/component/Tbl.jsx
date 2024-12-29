import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tbl = () => {
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
          <TableRow>
            <TableCell>Vinu</TableCell>
            <TableCell>Maths</TableCell>
            <TableCell>34</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>mathew</TableCell>
            <TableCell>cs</TableCell>
            <TableCell>54</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </TableContainer>
          
    </div>
  )
}

export default Tbl