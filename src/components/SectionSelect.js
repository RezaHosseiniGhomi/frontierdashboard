import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 60
  }
}));

export default function SectionSelect({ options, section, handleSectionChange }) {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl} variant='outlined' fullWidth>
      <InputLabel id='section-label'>Section</InputLabel>
      <Select
        labelId='section-label'
        label='Section'
        id='section'
        value={section}
        onChange={handleSectionChange}
      >
        {options.map(option => (
          <MenuItem value={option.id} key={option.id}>{option.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};