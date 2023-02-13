//table source code from Mui

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function testTable(name, division, clock_in, clock_out, total) {
  return { name, division, clock_in, clock_out, total };
}

const rows = [
  testTable('chubbs', "inspection", "8:15 am", "4:00 pm", 7.75),
  testTable('chris', "inspection", "10:00 am", "6:00 pm", 8.00),
  testTable('borey', "flex", "8:00 am", "4:00 pm", 8.0),
  
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name (first & last)</TableCell>
            <TableCell align="right">division</TableCell>
            <TableCell align="right">clock_in</TableCell>
            <TableCell align="right">clock_out</TableCell>
            <TableCell align="right">total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.division}</TableCell>
              <TableCell align="right">{row.clock_in}</TableCell>
              <TableCell align="right">{row.clock_out}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

