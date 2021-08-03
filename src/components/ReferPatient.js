import React from "react";
import { Button, Dialog, DialogTitle, DialogContent, TextField, MenuItem, DialogActions } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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

export default function ReferPatient({
  open,
  handleClickOpen,
  handleClose,
  hospital,
  handleHospitalChange,
  hospitals
}) {
  const classes = useStyles();
  
  return (
    <>
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
    </>
  )
}