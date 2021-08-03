import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  inactiveButton: {
    color: 'primary'
  },
  activeButton: {
    color: 'primary',
    backgroundColor: '#1f2c80',
  }
});

export default function PageSelect({
  active1,
  active2,
  handleClick1,
  handleClick2
}) {
  const classes = useStyles();

  return (
    <ButtonGroup variant='contained' color='primary'>
      <Button className={active1 ? classes.activeButton : classes.inactiveButton} onClick={handleClick1}>
        Frontier
      </Button>
      <Button className={active2 ? classes.activeButton : classes.inactiveButton} onClick={handleClick2}>
        Statewide
      </Button>
    </ButtonGroup>
  );
};