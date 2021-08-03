import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Dialog, DialogTitle, DialogContent, TextField } from '@material-ui/core';

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

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    },
  },
}));

export default function TransferPatient({ open, handleClickOpen, handleClose, hospital, handleHospitalChange }) {
  const classes = useStyles();
  return (
    <Box align='center' justifyContent='center'>
      <Button variant='contained' color='primary' onClick={handleClickOpen}>
        Transfer Patient
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id='transfer-patient'>Transfer Patient</DialogTitle>
        <DialogContent>
          <form className={classes.root} noValidate autoComplete='off'>
          <div>
            <TextField required id='patient-name' label='Patient Name' />
          </div>
          <div>
            <TextField multiline id='description' label='Description' variant='outlined' rows={3} />
          </div>
          <div>
            <TextField
              select
              id='hospital'
              label='Select Hospital'
              value={hospital}
              onChange={handleHospitalChange}
              variant='outlined'
              SelectProps={{ autoWidth: true }}
            >
              {hospitals.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>
          </div>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
};