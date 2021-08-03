import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { timeFormat } from "d3-time-format";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 60
  }
}));

export default function DateRange({ dates, startDate, handleStartChange, endDate, handleEndChange }) {
  const classes = useStyles();

  return (
    <>
      <FormControl className={classes.formControl} variant='outlined' size='small' fullWidth>
        <InputLabel id='start-label'>Start</InputLabel>
        <Select
          labelId='start-label'
          label='Start'
          id='start'
          value={startDate}
          onChange={handleStartChange}
          displayEmpty
          renderValue={(value) => timeFormat('%b %y')(value)}
        >
          {dates.map((date) => (
            <MenuItem value={date} key={date}>{timeFormat('%b %y')(date)}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography variant='body2' color='textPrimary'>to</Typography>
      <FormControl className={classes.formControl} variant='outlined' size='small' fullWidth>
        <InputLabel id='end-label'>End</InputLabel>
        <Select
          labelId='end-label'
          label='End'
          id='end'
          value={endDate}
          onChange={handleEndChange}
          displayEmpty
          renderValue={(value) => timeFormat('%b %y')(value)}
        >
          {dates.map((date) => (
            <MenuItem value={date} key={date}>{timeFormat('%b %y')(date)}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
};