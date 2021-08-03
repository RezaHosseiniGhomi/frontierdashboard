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
import Beds from './Beds';
import Availability from './Availability';
import HospitalMap from './HospitalMap';
import PageSelect from './PageSelect';
import SectionSelect from './SectionSelect';
import DateRange from './DateRange';
import ReferPatient from './ReferPatient';

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
        </Container>
      </main>
    </div>
  );
}