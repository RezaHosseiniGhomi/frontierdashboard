import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Box, Icon } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import RateChart from './RateChart';
import PieGraph from './PieGraph';
import ProviderAvailability from './ProviderAvailability';
import HorizontalBars from './HorizontalBars';
import PageSelect from './PageSelect';
import SectionSelect from './SectionSelect';
import DateRange from './DateRange';
import ReferPatient from './ReferPatient';
import AvailabilityByService from './AvailabilityByService';

// DATA
const encounters = [
  { date: new Date('2020-09'), rate: 233 },
  { date: new Date('2020-10'), rate: 322 },
  { date: new Date('2020-11'), rate: 325 },
  { date: new Date('2020-12'), rate: 385 },
  { date: new Date('2021-01'), rate: 413 },
  { date: new Date('2021-02'), rate: 497 },
  { date: new Date('2021-03'), rate: 516 },
  { date: new Date('2021-04'), rate: 553 },
  { date: new Date('2021-05'), rate: 553 },
  { date: new Date('2021-06'), rate: 659 },
  { date: new Date('2021-07'), rate: 668 },
  { date: new Date('2021-08'), rate: 714 }
];

const encountersByProvider = [
  { name: 'Ackerman', value: 145 },
  { name: 'Truesdell', value: 112 },
  { name: 'Ghomi', value: 87 },
  { name: 'Sise', value: 82 },
  { name: 'Lehman', value: 78 },
  { name: 'Arzubi', value: 51 },
  { name: 'Patel', value: 38 },
  { name: 'Arias', value: 37 },
  { name: 'Duong', value: 21 },
  { name: 'Toretta', value: 11 },
  { name: 'Frieder', value: 3 }
];

const globalUtilization = [
  { date: new Date('2020-09'), rate: 36 },
  { date: new Date('2020-10'), rate: 40 },
  { date: new Date('2020-11'), rate: 44 },
  { date: new Date('2020-12'), rate: 45 },
  { date: new Date('2021-01'), rate: 45 },
  { date: new Date('2021-02'), rate: 46 },
  { date: new Date('2021-03'), rate: 56 },
  { date: new Date('2021-04'), rate: 63 },
  { date: new Date('2021-05'), rate: 66 },
  { date: new Date('2021-06'), rate: 87 },
  { date: new Date('2021-07'), rate: 88 },
  { date: new Date('2021-08'), rate: 90 }
];

const visitTypes = [
  { group: 'Scheduled', percent: 63 },
  { group: 'Unscheduled', percent: 37 }
];

const patientAges = [
  { group: '0-17', percent: 24.6 },
  { group: '18-25', percent: 12.5 },
  { group: '26-40', percent: 25.0 },
  { group: '41-55', percent: 14.3 },
  { group: '56-64', percent: 12.0 },
  { group: '65+', percent: 11.6 }
];

const patientGenders = [
  { group: 'Female', percent: 54.4 },
  { group: 'Male', percent: 42.9 },
  { group: 'Unknown', percent: 2.7 }
];

const patientRaces = [
  { group: 'White', percent: 85.9 },
  { group: 'Black', percent: 0.6 },
  { group: 'Hispanic/Latino', percent: 4.1 },
  { group: 'Asian', percent: 0.9 },
  { group: 'Other', percent: 8.5 }
];

const providerUtilization = [
  { name: 'Truesdell', value: 107 },
  { name: 'Ackerman', value: 81 },
  { name: 'Lehman', value: 55.4 },
  { name: 'Toretta', value: 100 },
  { name: 'Patel', value: 79 },
  { name: 'Duong', value: 102 },
  { name: 'Arias', value: 89 }
];

// INPUT OPTIONS
const sections = [
  { id: 'activity', label: 'Activity' },
  { id: 'patients', label: 'Patients' },
  { id: 'providers', label: 'Providers' },
  { id: 'community-integration', label: 'Community Integration' }
];

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

const hospitals = [
  'Barrett Hospital & Healthcare',
  'Benefis Community Care',
  'Big Horn County Community Hospital',
  'Billings Clinic Hospital',
  'Frances Mahon Deaconess Hospital',
  'Glendive Medical Center',
  'Holy Rosary Healthcare',
  'Livingston HealthCare',
  'Logan Health',
  'Montana State Hospital',
  'Providence Hospital',
  'Roosevelt Medical Center',
  'St. Luke Community Healthcare',
  "St. Peter's Health"
];

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
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
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const handleClick1 = (event) => {
    setActive1(true);
    setActive2(false);
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
  const handleClose = () => {
    setOpen(false);
  };
  const [hospital, setHospital] = useState(null);
  const handleHospitalChange = (event) => {
    setHospital(event.target.value);
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
            options={sections}
            section={section}
            handleSectionChange={handleSectionChange}
          />
        </Box>
        {/* Date Range */}
        <Box className={classes.navTool} alignItems='center'>
          <DateRange
            dates={dates}
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
            handleClose={handleClose}
            hospital={hospital}
            handleHospitalChange={handleHospitalChange}
            hospitals={hospitals}
          />
        </Box>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {/* Activity */}
          <Box id='activity' className={classes.sectionHeader}>
            <Typography color='textSecondary' variant='h4'>Activity</Typography>
            <Divider />
          </Box>
          <Grid container spacing={2}>
            {/* Number of Encounters per Month */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <RateChart
                  title='Number of Encounters per Month'
                  data={encounters}
                  yAxisLabel=''
                />
              </Paper>
            </Grid>
            {/* Number of Encounters per Provider */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <HorizontalBars 
                  title='Number of Encounters per Provider'
                  data={encountersByProvider}
                  xAxisLabel='Encounters'
                />
              </Paper>
            </Grid>
            {/* Scheduled vs. Unscheduled Visits */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <PieGraph 
                title="Scheduled vs. Unscheduled Visits"
                data={visitTypes}
                colors={['#8884d8', '#82ca9d']} 
              />
              </Paper>
            </Grid>
            {/* Percent Global Utilization */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <RateChart
                  title='Percent Global Utilization'
                  data={globalUtilization}
                  yAxisLabel='Percent'
                />
              </Paper>
            </Grid>
          </Grid>
          {/* Patients */}
          <Box id='patients' className={classes.sectionHeader}>
            <Typography color='textSecondary' variant='h4'>Patients</Typography>
            <Divider />
          </Box>
          <Grid container spacing={2}>
            {/* Patient Ages */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <PieGraph
                  title='Patient Ages'
                  data={patientAges}
                  colors={['#8884d8', '#82ca9d', '#ffc658', '#e6842a', '#e25a42', '#42a5b3']}
                />
              </Paper>
            </Grid>
            {/* Patient Genders */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <PieGraph
                  title='Patient Genders'
                  data={patientGenders}
                  colors={['#8884d8', '#82ca9d', '#ffc658']}
                />
              </Paper>
            </Grid>
            {/* Patient Races */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <PieGraph
                  title='Patient Race'
                  data={patientRaces}
                  colors={['#8884d8', '#82ca9d', '#ffc658', '#e6842a', '#e25a42']}
                />
              </Paper>
            </Grid>
          </Grid>
          {/* Providers */}
          <Box id='providers' className={classes.sectionHeader}>
            <Typography color='textSecondary' variant='h4'>Providers</Typography>
            <Divider />
          </Box>
          <Grid container spacing={2}>
            {/* Provider Availability */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <ProviderAvailability />
              </Paper>
            </Grid>
            {/* Availability by Service */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <AvailabilityByService />
              </Paper>
            </Grid>
            {/* Provider Utilization */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <HorizontalBars
                  title='Provider Utilization'
                  data={providerUtilization}
                  formatter={(value, name, props ) => [`${value}%`, 'percent']}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}