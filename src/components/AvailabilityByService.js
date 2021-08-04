import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { timeFormat } from 'd3';
import Title from './Title';

const data = [
  { service: 'Addiction', date: new Date('2021-08-06') },
  { service: 'Adult', date: new Date('2021-08-12') },
  { service: 'Child/Adolescent', date: new Date('2021-07-15') },
  { service: 'Geriatric', date: new Date('2021-08-13') }
];

function dateFormat(date) {
  return timeFormat('%B %e')(date);
}

export default function ProviderAvailability() {
  return (
    <>
      <Title>Availability by Service</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Service</TableCell>
            <TableCell>Next Availability</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d) => (
            <TableRow key={d.service}>
              <TableCell>{d.service}</TableCell>
              <TableCell>{dateFormat(d.date)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
