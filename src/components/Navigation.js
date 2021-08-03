import React from "react";
import { AppBar, Toolbar, Icon, Typography } from "@material-ui/core";
import DashboardIcon from '@material-ui/icons';
import { Link, withRouter } from 'react-router-dom';

function Navigation() {
  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.toolbarIcon}>
          <Icon>
            <DashboardIcon />
          </Icon>
        </div>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Frontier Mental Health Data Dashboard
        </Typography>
        <Button color='inherit'>
          Statewide
        </Button>
        <Button color='inherit'>Frontier</Button>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Navigation);