import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { ThemeProvider, useTheme } from '@material-ui/core';
import Title from './Title';

const data = [
  { type: 'Scheduled', percent: 63 },
  { type: 'UnScheduled', percent: 37 }
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function VisitTypes() {
  const theme = useTheme();
  const colors = [theme.palette.primary.main, theme.palette.secondary.main];

  return (
    <>
      <Title>Scheduled vs. Unscheduled Visits</Title>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart>
          <Pie
            dataKey="percent"
            nameKey="type"
            data={data}
            cx='50%'
            cy='50%'
            outerRadius='90%'
            fill={theme.palette.primary.main}
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