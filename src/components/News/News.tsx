/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NewsForm from './NewsItems/NewsForm';
import ShortNewsForm from './NewsItems/ShortNewsForm';
import Overview from './NewsItems/Overview';
import { postNews } from '../../services/Apiclient';

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

const steps = ['Description', 'Meta Details', 'Review your news story'];


export default function News() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const [selectedCategory, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    const details = {
      "title": title,
      "shortDescription": shortDescription,
      "longDescription": longDescription,
      "location": location,
      "categories": selectedCategory,
      "image": image,
      "date": date
    }
    // const formBody = [];
    // for (let property in details) {
    //   const encodedKey = encodeURIComponent(property);
    // // how do I handle this typescript error?
    //   const encodedValue = encodeURIComponent(details[property]);
    //   formBody.push(`${encodedKey}=${encodedValue}`);
    // };
    // const result = formBody.join("&");
    // postNews(token, result)

    setActiveStep(activeStep + 1);
  };

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <NewsForm
          setTitle={setTitle}
          selectedCategory={selectedCategory}
          setCategory={setCategory}
          setLongDescription={setLongDescription}
          setLocation={setLocation}
          setdate={setDate}
        />;
      case 1:
        return <ShortNewsForm
          setShortDescription={setShortDescription}
          setImage={setImage}
        />;
      case 2:
        return <Overview
          title={title}
          selectedCategory={selectedCategory}
          longDescription={longDescription}
          shortDescription={shortDescription}
          location={location}
          image={image}
          date={date}
        />;
      default:
        throw new Error('Unknown step');
    }
  }


  const handleNext = () => {
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
            Create News Story
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you.
                </Typography>
                <Typography variant="subtitle1">
                  Your story has been added to the news and will be published in the Citizen Pilot App momentarily.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  {
                    activeStep === steps.length - 1 ?
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        className={classes.button}
                      >
                        Submit
                  </Button> :
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        Next
                    </Button>
                  }

                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  )
}
