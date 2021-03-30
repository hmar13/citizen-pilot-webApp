/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Contact'];


export default function News({ handleClose }: any) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [title, setTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');


  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {


    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Contacts
          </Typography>

          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you.
                </Typography>
                <Typography variant="subtitle1">
                  The contact has been added and will be published in the Citizen Pilot App momentarily.
                </Typography>
                <Button onClick={handleClose} className={classes.button}>
                  Back
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography variant="h6" gutterBottom>
                  Add a contact
      </Typography>
                <form>

                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        onChange={handleTitleChange}
                        id="title"
                        name="title"
                        label="Title"
                        fullWidth
                        autoComplete="title"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    </Grid>
                    <Grid item xs={12} >
                      <TextField
                        required
                        onChange={handlePhoneChange}
                        id="Phone"
                        name="Phone"
                        label="Add a phone number"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        onChange={handleEmailChange}
                        id="email"
                        name="email"
                        label="Add an email address"
                        fullWidth
                        autoComplete="email"
                      />
                    </Grid>
                  </Grid>
                </form>
                <Button onClick={handleBack} className={classes.button}>
                  Back
                    </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  className={classes.button}
                >
                  Submit
                  </Button>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  )
}
