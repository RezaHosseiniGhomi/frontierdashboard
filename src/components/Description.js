import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Popover, Typography, Button, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  box: {
    padding: theme.spacing(2)
  }
}));

export default function Description({
  id,
  anchorEl,
  handleClick,
  handleClose,
  description
}) {
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const ident = open ? {id} : undefined;

  return (
    <div>
      <Button aria-describedby={ident} color='primary' size='small' onClick={handleClick}>
        Description
      </Button>
      <Popover
        id={ident}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
      >
        <Box className={classes.box}>
          <Typography variant='body1'>
            <b>Description: </b>{description}
          </Typography>
          <Typography variant='body1'>
            <b>Source: </b> This data was randomly generated on <a href='https://www.mockaroo.com/'>Mockaroo</a>
          </Typography>
        </Box>
      </Popover>
    </div>
  )
};