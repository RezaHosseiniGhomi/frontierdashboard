import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  inactiveButton: {
    color: 'primary',    
    opacity: '0.8'
  },
  activeButton: {
    color: 'primary'
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
      <Button 
        className={active1 ? classes.activeButton : classes.inactiveButton} 
        onClick={handleClick1}
        component={Link}
        to={'/frontier'}
      >
        Frontier
      </Button>
      <Button 
        className={active2 ? classes.activeButton : classes.inactiveButton} 
        onClick={handleClick2}
        component={Link}
        to={'/'}
      >
        Statewide
      </Button>
    </ButtonGroup>
  );
};