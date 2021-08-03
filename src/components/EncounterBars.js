import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { BarChart, CartesianGrid, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Title from './Title';

const data = [
  { name: 'Arzubi', encounters: 145 },
  { name: 'Truesdell', encounters: 112 },
  { name: 'Ghomi', encounters: 87 },
  { name: 'Sise', encounters: 82 },
  { name: 'Lehman', encounters: 78 },
  { name: 'Patel', encounters: 38 },
  { name: 'Arias', encounters: 37 },
  { name: 'Duong', encounters: 21 },
  { name: 'Toretta', encounters: 11 },
  { name: 'Frieder', encounters: 3 }
];

export default function EncounterBars() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Number of Encounters per Provider</Title>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 16,
          }}
          layout='vertical'
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey="encounters" stroke={theme.palette.text.secondary} />
          <YAxis
            type="category"
            dataKey="name"
            stroke={theme.palette.text.secondary}
            tick={{ width: 100 }}
            interval={0}
          />
          <Tooltip />
          <Bar dataKey="encounters" fill={theme.palette.primary.main} />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}