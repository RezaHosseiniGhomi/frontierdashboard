import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { BarChart, CartesianGrid, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Title from './Title';

export default function HorizontalBars({ 
  title, 
  data, 
  xAxisLabel = '', 
  formatter = (value, name, props ) => [value, xAxisLabel] 
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
            bottom: 0,
            left: 16,
          }}
          layout='vertical'
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey="value" stroke={theme.palette.text.secondary} />
          <YAxis
            type="category"
            dataKey="name"
            stroke={theme.palette.text.secondary}
            tick={{ width: 100 }}
            interval={0}
          />
          <Tooltip formatter={formatter}/>
          <Bar dataKey="value" fill={theme.palette.primary.main} />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}