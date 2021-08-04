import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { timeFormat } from 'd3';
import Title from './Title';

function createData(id, provider, availabilityNew, availabilityFU) {
  return { id, provider, availabilityNew, availabilityFU };
}

const data = [
  createData(0, "Eric Arzubi, MD", new Date('2021-08-23'), new Date('2021-08-23')),
  createData(1, "Reza Hosseini Ghomi, MD", new Date("2021-08-20"), new Date("2021-08-16")),
  createData(2, "Robert Sise, MT", new Date("2021-08-13"), new Date("2021-08-13")),
  createData(3, "Melinda Truesdell, NP", new Date("2021-09-06"), new Date("2021-09-05")),
  createData(4, "Mark Ackerman, NP", new Date("2021-08-12"), new Date("2021-08-06")),
  createData(5, "Meghan Lehman, NP", new Date('2021-08-06'), new Date('2021-08-06')),
  createData(6, 'Ankur Patel, MD', new Date('2021-08-15'), new Date('2021-08-12'))
];

function dateFormat(date) {
  return timeFormat('%B %e')(date);
}

export default function ProviderAvailability() {
  return (
    <>
      <Title>Provider Availability</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Provider</TableCell>
            <TableCell>Next Availability - NEW</TableCell>
            <TableCell>Next Availability - F/U</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d) => (
            <TableRow key={d.id}>
              <TableCell>{d.provider}</TableCell>
              <TableCell>{dateFormat(d.availabilityNew)}</TableCell>
              <TableCell>{dateFormat(d.availabilityFU)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
