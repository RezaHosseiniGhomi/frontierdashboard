import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { BarChart, CartesianGrid, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Title from './Title';

export default function Beds({
  title,
  data
}) {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>{title}</Title>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 24,
            left: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="hospital"
            stroke={theme.palette.text.secondary}
            tick={{ width: 75 }}
            interval={0}
          >
          </XAxis>
          <YAxis stroke={theme.palette.text.secondary} />
          <Tooltip />
          <Bar dataKey="beds" fill={theme.palette.primary.main} />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}