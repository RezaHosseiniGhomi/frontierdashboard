import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {
  CssBaseline, Drawer, Box, Icon, AppBar, Toolbar, Typography, Divider,
  Container, Grid, Paper, Button
} from '@material-ui/core';
import RateChart from './RateChart';
import Beds from './Beds';
import ProviderAvailability from './ProviderAvailability';
import HospitalMap from './HospitalMap';
import PageSelect from './PageSelect';
import SectionSelect from './SectionSelect';
import DateRange from './DateRange';
import ReferPatient from './ReferPatient';
import data from './data';
import inputs from './inputs';
import ChoroplethMap from './ChoroplethMap';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 360
  },
  sectionHeader: {
    width: '100%',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2)
  },
  navTool: {
    padding: theme.spacing(1),
    paddingTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  /* INPUT SETTINGS */

  // page select
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(true);
  const handleClick1 = (event) => {
    // temporarily disabled
    ;
    // setActive1(true);
    // setActive2(false);
  };
  const handleClick2 = (event) => {
    setActive2(true);
    setActive1(false);
  };

  // date range
  const [startDate, setStartDate] = useState(new Date('2020-09'));
  const [endDate, setEndDate] = useState(new Date('2021-08'));
  const handleStartChange = (event) => {
    setStartDate(event.target.value);
  };
  const handleEndChange = (event) => {
    setEndDate(event.target.value);
  };

  // section select
  const [section, setSection] = useState('');
  const handleSectionChange = (event) => {
    setSection(event.target.value);
    document.getElementById(event.target.value).scrollIntoView();
  };

  // refer patient
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDialogClose = () => {
    setOpen(false);
  };
  const [hospital, setHospital] = useState(null);
  const handleHospitalChange = (event) => {
    setHospital(event.target.value);
  };

  // description
  const [anchorEl, setAnchorEl] = useState(null);
  const handleDescriptionClick = (event) => {
    setAnchorEl(event.target);
  };
  const handleDescriptionClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
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
        </Toolbar>
      </AppBar>
      {/* Sidebar Navigation */}
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        className={classes.drawer}
      >
        <Toolbar />
        {/* Page Select */}
        <Box className={classes.navTool}>
          <PageSelect
            active1={active1}
            active2={active2}
            handleClick1={handleClick1}
            handleClick2={handleClick2}
          />
        </Box>
        {/* Section Select */}
        <Box className={classes.navTool}>
          <SectionSelect
            options={inputs.statewideSections}
            section={section}
            handleSectionChange={handleSectionChange}
          />
        </Box>
        {/* Date Range */}
        <Box className={classes.navTool} alignItems='center'>
          <DateRange
            dates={inputs.dates}
            startDate={startDate}
            handleStartChange={handleStartChange}
            endDate={endDate}
            handleEndChange={handleEndChange}
          />
        </Box>
        {/* Refer Patient */}
        <Box className={classes.navTool}>
          <ReferPatient
            open={open}
            handleClickOpen={handleClickOpen}
            handleClose={handleDialogClose}
            hospital={hospital}
            handleHospitalChange={handleHospitalChange}
            hospitals={inputs.hospitals}
          />
        </Box>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {/* Service Accessibility */}
          <Box id='service' className={classes.sectionHeader}>
            <Typography color='textSecondary' variant='h4'>Service Accessibility</Typography>
            <Divider />
          </Box>
          <Grid container spacing={2}>
            {/* Hospitals with Telepsychiatry Access */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <HospitalMap
                  title='Hospitals with Emergency Telepsychiatry Access'
                  data={data.statewide.edLocations}
                />
              </Paper>
            </Grid>
            {/* Mental Health Hospitals */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <HospitalMap
                  title='Mental Health Hospitals'
                  data={data.statewide.mentalHealthHospitals}
                />
              </Paper>
            </Grid>
            {/* Crisis Facilities */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <HospitalMap
                  title='Crisis Facilities'
                  data={data.statewide.crisisCenters}
                />
              </Paper>
            </Grid>
            {/* Psychiatrist Density by County */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <ChoroplethMap />
              </Paper>
            </Grid>
            {/* Available Adult Inpatient Psychiatric Beds */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <Beds
                  title='Available Adult Inpatient Psychiatric Beds'
                  data={data.statewide.adultBeds}
                  fill='#3f51b5'
                />
              </Paper>
            </Grid>
            {/* Child Inpatient Psychiatric Beds */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <Beds
                  title='Available Child Inpatient Psychiatric Beds'
                  data={data.statewide.childBeds}
                  fill='#42a5b3'
                />
              </Paper>
            </Grid>
            {/* Adult EmPATH Seats */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <Beds
                  title='Available Adult EmPATH Seats'
                  data={data.statewide.adultEmPATH}
                  fill='#82ca9d'
                />
              </Paper>
            </Grid>
            {/* Child EmPATH Seats */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <Beds
                  title='Available Child EmPATH Seats'
                  data={data.statewide.childEmPATH}
                  fill='#8884d8'
                />
              </Paper>
            </Grid>
            {/* Provider Availability */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <ProviderAvailability />
              </Paper>
            </Grid>
          </Grid>
          {/* Epidemiology */}
          <Box id='epidemiology' className={classes.sectionHeader}>
            <Typography color='textSecondary' variant='h4'>Epidemiology</Typography>
            <Divider />
          </Box>
          <Grid container spacing={2}>
            {/* Hospital Readmission Rate */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <RateChart 
                  title='Hospital Readmission Rate' 
                  data={data.statewide.readmissions} />
              </Paper>
            </Grid>
            {/* Average Time since Last Hopsitalization */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <RateChart
                  title='Average Time since Last Hospitalization'
                  data={data.statewide.timeToReadmission}
                  yAxisLabel='Days'
                />
              </Paper>
            </Grid>
            {/* Average Hospital Stay Duration */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <RateChart
                  title='Average Hospital Stay Duration'
                  data={data.statewide.stayData}
                  yAxisLabel='Days'
                />
              </Paper>
            </Grid>
            {/* Followup Rates */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <RateChart
                  title='Percent of Patients Discharged with Followup Plans within 4 Weeks'
                  data={data.statewide.followupRates}
                  yAxisLabel='Percent'
                />
              </Paper>
            </Grid>
            {/* Suicide Rate */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <RateChart title='Suicide Rate' data={data.statewide.scdData} />
              </Paper>
            </Grid>
            {/* SMI Diagnosis Rate */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <RateChart title='SMI Diagnosis Rate' data={data.statewide.smiData} />
              </Paper>
            </Grid>
            {/* SUD Diagnosis Rate */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <RateChart title='SUD Diagnosis Rate' data={data.statewide.sudData} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}