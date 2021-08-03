import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Icon,
  InputLabel,
  Select,
  MenuItem,
  TextField
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import RateChart from './RateChart';
import Beds from './Beds';
import Availability from './Availability';
import HospitalMap from './HospitalMap';
import PageSelect from './PageSelect';
import { timeFormat } from 'd3';
import SectionSelect from './SectionSelect';

// DATASETS
const adultBeds = [
  { hospital: 'Providence St. Patrick Hospital', beds: 31 },
  { hospital: 'Logan Health', beds: 26 },
  { hospital: 'Benefis Community Care', beds: 32 },
  { hospital: 'Billings Clinic Hospital', beds: 45 },
  { hospital: 'Montana State Hospital', beds: 42 },
  { hospital: "St. Peter's Health", beds: 24 },
  { hospital: 'Glendive Medical Center', beds: 50 }
];

const childBeds = [
  { hospital: "Shodair Children's Hospital", beds: 9 },
  { hospital: 'Billings Clinic Hospital', beds: 30 },
  { hospital: 'Providence Hospital', beds: 29 }
];

const adultEmPATH = [
  { hospital: 'Billings Clinic Hospital', beds: 35 },
  { hospital: 'Glendive Medical Center', beds: 6 },
  { hospital: 'Holy Rosary Hospital', beds: 22 },
  { hospital: 'Sidney Health Center', beds: 9 },
  { hospital: "Shodair Children's Hospital", beds: 22 }
];

const childEmPATH = [
  { hospital: 'Billings Clinic Hospital', beds: 8 },
  { hospital: "Shodair Children's Hospital", beds: 12 }
];

const scdData = [
  { date: new Date('2020-09'), rate: 13.66 },
  { date: new Date('2020-10'), rate: 21.11 },
  { date: new Date('2020-11'), rate: 18.54 },
  { date: new Date('2020-12'), rate: 19.06 },
  { date: new Date('2021-01'), rate: 12.10 },
  { date: new Date('2021-02'), rate: 16.36 },
  { date: new Date('2021-03'), rate: 14.68 },
  { date: new Date('2021-04'), rate: 16.08 },
  { date: new Date('2021-05'), rate: 11.95 },
  { date: new Date('2021-06'), rate: 11.00 },
  { date: new Date('2021-07'), rate: 13.54 },
  { date: new Date('2021-08'), rate: 12.92 }
];

const smiData = [
  { date: new Date('2020-09'), rate: 17.3 },
  { date: new Date('2020-10'), rate: 24.13 },
  { date: new Date('2020-11'), rate: 20.13 },
  { date: new Date('2020-12'), rate: 18.4 },
  { date: new Date('2021-01'), rate: 17.8 },
  { date: new Date('2021-02'), rate: 20.93 },
  { date: new Date('2021-03'), rate: 19.63 },
  { date: new Date('2021-04'), rate: 21.37 },
  { date: new Date('2021-05'), rate: 15.73 },
  { date: new Date('2021-06'), rate: 20.42 },
  { date: new Date('2021-07'), rate: 21.9 },
  { date: new Date('2021-08'), rate: 19.88 }
];

const sudData = [
  { date: new Date('2020-09'), rate: 26.99 },
  { date: new Date('2020-10'), rate: 37.56 },
  { date: new Date('2020-11'), rate: 30.96 },
  { date: new Date('2020-12'), rate: 30.9 },
  { date: new Date('2021-01'), rate: 26.37 },
  { date: new Date('2021-02'), rate: 26.51 },
  { date: new Date('2021-03'), rate: 32.18 },
  { date: new Date('2021-04'), rate: 29.3 },
  { date: new Date('2021-05'), rate: 30.69 },
  { date: new Date('2021-06'), rate: 33.21 },
  { date: new Date('2021-07'), rate: 33.13 },
  { date: new Date('2021-08'), rate: 31.23 }
];

const readmissionData = [
  { date: new Date('2020-09'), rate: 17.19 },
  { date: new Date('2020-10'), rate: 22.63 },
  { date: new Date('2020-11'), rate: 15.03 },
  { date: new Date('2020-12'), rate: 23.06 },
  { date: new Date('2021-01'), rate: 26.96 },
  { date: new Date('2021-02'), rate: 11.4 },
  { date: new Date('2021-03'), rate: 15.46 },
  { date: new Date('2021-04'), rate: 22.94 },
  { date: new Date('2021-05'), rate: 19.84 },
  { date: new Date('2021-06'), rate: 20.27 },
  { date: new Date('2021-07'), rate: 18.57 },
  { date: new Date('2021-08'), rate: 19.72 }
];

const timeToReadmission = [
  { date: new Date('2020-09'), rate: 461 },
  { date: new Date('2020-10'), rate: 52 },
  { date: new Date('2020-11'), rate: 498 },
  { date: new Date('2020-12'), rate: 321 },
  { date: new Date('2021-01'), rate: 270 },
  { date: new Date('2021-02'), rate: 452 },
  { date: new Date('2021-03'), rate: 197 },
  { date: new Date('2021-04'), rate: 275 },
  { date: new Date('2021-05'), rate: 61 },
  { date: new Date('2021-06'), rate: 285 },
  { date: new Date('2021-07'), rate: 60 },
  { date: new Date('2021-08'), rate: 70 }
];

const stayData = [
  { date: new Date('2020-09'), rate: 9 },
  { date: new Date('2020-10'), rate: 9 },
  { date: new Date('2020-11'), rate: 4 },
  { date: new Date('2020-12'), rate: 3 },
  { date: new Date('2021-01'), rate: 3 },
  { date: new Date('2021-02'), rate: 7 },
  { date: new Date('2021-03'), rate: 4 },
  { date: new Date('2021-04'), rate: 7 },
  { date: new Date('2021-05'), rate: 9 },
  { date: new Date('2021-06'), rate: 6 },
  { date: new Date('2021-07'), rate: 10 },
  { date: new Date('2021-08'), rate: 7 }
];

const edLocations = [
  {
    name: 'Glendive Medical Center',
    city: 'Glendive',
    number: '738-555-3160',
    coordinates: [47.11792650055652, -104.70395611627464]
  },
  {
    name: 'Frances Mahon Deaconess Hospital',
    city: 'Glasgow',
    number: '359-555-7621',
    coordinates: [48.18981204076515, -106.63537154631985]
  },
  {
    name: 'Barrett Hospital & Healthcare',
    city: 'Dillon',
    number: '155-814-5327',
    coordinates: [45.20219723945498, -112.64728273273796]
  },
  {
    name: 'Holy Rosary Healthcare',
    city: 'Miles City',
    number: '868-784-6670',
    coordinates: [46.395851529810614, -105.8282375780751]
  },
  {
    name: 'Roosevelt Medical Center',
    city: 'Culbertson',
    number: '250-281-1727',
    coordinates: [48.15189390927604, -104.5147349003122]
  },
  {
    name: 'Livingston HealthCare',
    city: 'Livingston',
    number: '553-345-7334',
    coordinates: [45.67583250052617, -110.52708275521294]
  },
  {
    name: 'St. Luke Community Healthcare',
    city: 'Ronan',
    number: '932-393-3863',
    coordinates: [47.52994452935552, -114.10704674671666]
  },
  {
    name: 'Big Horn County Memorial Hospital',
    city: 'Hardin',
    number: '995-707-3046',
    coordinates: [45.72950822276518, -107.61654354777687]
  }
];

const mentalHealthHospitals = [
  {
    name: 'Providence Hospital',
    city: 'Missoula',
    number: '406-543-7271',
    coordinates: [46.87577554264733, -113.9994216911055]
  },
  {
    name: 'Logan Health',
    city: 'Kalispell',
    number: '406-752-5111',
    coordinates: [48.21513891885364, -114.32372034630467]
  },
  {
    name: 'Benefis Community Care',
    city: 'Kalispell',
    number: '406-752-0580',
    coordinates: [48.22682230319765, -114.30257078705924]
  },
  {
    name: 'Billings Clinic Hospital',
    city: 'Billings',
    number: '406-238-2500',
    coordinates: [45.78986201223207, -108.51278637102406]
  },
  {
    name: 'Montana State Hospital',
    city: 'Warm Springs',
    number: '406-693-7000',
    coordinates: [46.181160158654244, -112.79057523957525]
  },
  {
    name: "St. Peter's Health",
    city: 'Helena',
    number: '406-442-2480',
    coordinates: [46.58370091445607, -111.99672560865174]
  },
  {
    name: "Glendive Medical Center",
    city: 'Glendive',
    number: '406-345-3306',
    coordinates: [47.11804331455797, -104.70382737024401]
  }
];

// INPUT OPTIONS
const sections = [
  { id: 'service', label: 'Service Accessibility' },
  { id: 'epidemiology', label: 'Epidemiology' }
]

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
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 60
  },
  dialogContent: {
    display: 'flex',
    flexFlow: 'row wrap'
  },
  textField: {
    margin: theme.spacing(1),
    align: 'center',
    minWidth: '45%'
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

  // transfer patient
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
        </Box>
        {/* Refer Patient */}
        <Box className={classes.navTool}>
          <Button id='refer-patient' variant='contained' color='primary' onClick={handleClickOpen}>
            Refer Patient
          </Button>
          <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
            <DialogTitle id='refer-patient-title'>Refer a Patient</DialogTitle>
            <DialogContent className={classes.dialogContent}>
              <TextField required id='patient-name' label='Patient Name' className={classes.textField} />
              <TextField
                select
                required
                id='hospital'
                label='Hospital'
                value={hospital}
                onChange={handleHospitalChange}
                helperText='Please select a hospital'
                variant='outlined'
                className={classes.textField}
              >
                {hospitals.map((hospital) => (
                  <MenuItem key={hospital} value={hospital}>{hospital}</MenuItem>
                ))}
              </TextField>
              <TextField multiline id='description' label='Description' rows={6} fullWidth variant='outlined' className={classes.textField} />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color='primary'>Cancel</Button>
              <Button onClick={handleClose} color='primary'>Submit Referral</Button>
            </DialogActions>
          </Dialog>
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
                  data={edLocations}
                />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <HospitalMap
                  title='Mental Health Hospitals'
                  data={mentalHealthHospitals}
                />
              </Paper>
            </Grid>
            {/* Available Adult Inpatient Psychiatric Beds */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <Beds
                  title='Available Adult Inpatient Psychiatric Beds'
                  data={adultBeds}
                />
              </Paper>
            </Grid>
            {/* Child Inpatient Psychiatric Beds */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <Beds
                  title='Available Child Inpatient Psychiatric Beds'
                  data={childBeds}
                />
              </Paper>
            </Grid>
            {/* Adult EmPATH Seats */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <Beds
                  title='Available Adult EmPATH Seats'
                  data={adultEmPATH}
                />
              </Paper>
            </Grid>
            {/* Child EmPATH Seats */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <Beds
                  title='Available Child EmPATH Seats'
                  data={childEmPATH}
                />
              </Paper>
            </Grid>
            {/* Provider Availability */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <Availability />
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
                <RateChart title='Hospital Readmission Rate' data={readmissionData} />
              </Paper>
            </Grid>
            {/* Average Time since Last Hopsitalization */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <RateChart
                  title='Average Time since Last Hospitalization'
                  data={timeToReadmission}
                  yAxisLabel='Days'
                />
              </Paper>
            </Grid>
            {/* Average Hospital Stay Duration */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <RateChart
                  title='Average Hospital Stay Duration'
                  data={stayData}
                  yAxisLabel='Days'
                />
              </Paper>
            </Grid>
            {/* Suicide Rate */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <RateChart title='Suicide Rate' data={scdData} />
              </Paper>
            </Grid>
            {/* SMI Diagnosis Rate */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <RateChart title='SMI Diagnosis Rate' data={smiData} />
              </Paper>
            </Grid>
            {/* SUD Diagnosis Rate */}
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <RateChart title='SUD Diagnosis Rate' data={sudData} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}