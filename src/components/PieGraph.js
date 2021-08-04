import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '@material-ui/core';
import Title from './Title';

export default function PieGraph({
  title,
  data,
  colors
}) {
  const theme = useTheme();

  return (
    <>
      <Title>{title}</Title>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart>
          <Pie
            dataKey="percent"
            nameKey="group"
            data={data}
            cx='45%'
            cy='50%'
            outerRadius='80%'
            startAngle={90}
            endAngle={450}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend align='right' verticalAlign='top' layout='vertical'/>
        </PieChart>
      </ResponsiveContainer>
    </>
  )
};