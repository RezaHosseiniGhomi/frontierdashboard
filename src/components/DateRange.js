import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Box, Typography } from '@material-ui/core';
import { timeFormat } from 'd3';;

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    align: 'center',
    width: '40%'
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }
}));

const dates = [
  new Date('2020-09'),
  new Date('2020-10'),
  new Date('2020-11'),
  new Date('2020-12'),
  new Date('2021-01'),
  new Date('2021-02'),
  new Date('2021-03'),
  new Date('2021-04'),
  new Date('2021-05'),
  new Date('2021-06'),
  new Date('2021-07'),
  new Date('2021-08')
];

export default function DateRange({
  startDate,
  handleStartChange,
  endDate,
  handleEndChange
}) {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <FormControl className={classes.formControl}>
        <InputLabel id='start-label'>Start Date</InputLabel>
        <Select
          labelId='start-label'
          id='start'
          value={startDate}
          onChange={handleStartChange}
          displayEmpty
          renderValue={(value) => timeFormat('%b %y')(value)}
        >
          {dates.map((date) => (
            <MenuItem value={date} key={date.getMonth()}>{timeFormat('%b %Y')(date)}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography variant='body1' color='textSecondary'>to</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel id='end-label'>End Date</InputLabel>
        <Select
          labelId='end-label'
          id='end'
          value={endDate}
          onChange={handleEndChange}
          displayEmpty
          renderValue={(value) => timeFormat('%b %y')(value)}
        >
          {dates.map((date) => (
            <MenuItem value={date} key={date}>{timeFormat('%b %Y')(date)}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}