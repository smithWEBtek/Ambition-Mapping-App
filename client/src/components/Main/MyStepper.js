import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import WelcomeCard from '../Cards/WelcomeCard';
import Part1Card from '../Cards/Part1Card';
import Part2Card from '../Cards/Part2Card';

function getSteps() {
  return ['Welcome', 'Via Negativa', 'Via Positiva', 'Filter Intuitions', 'Ambition Map', 'Clarify Goals', 'Milestones', 'Complete!'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <WelcomeCard />
    case 1:
      return <Part1Card />
    case 2:
      return <Part2Card />;
    case 3:
      return 'This is the bit I really care about!';
    case 4:
      return 'This is the bit I really care about!';
    case 5:
      return 'This is the bit I really care about!';
    case 6:
      return 'This is the bit I really care about!';
    case 7:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

export default function MyStepper() {

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  //add state for isOnDirections
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (

    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel elevation={18}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography 
            className={classes.instructions}
            >
              All steps completed - you&apos;re finished
            </Typography>

            <Button 
              onClick={handleReset} 
              className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
            <div>
              {getStepContent(activeStep)}
              <Typography 
              className={classes.instructions}>
              </Typography>
              <div>
                <Button 
                  disabled={activeStep === 0} 
                  onClick={handleBack} 
                  className={classes.button}>
                    Back
                </Button>
                

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                  >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: "10%",
    paddingRight: '10%',
  },
  button: {
    marginTop: "25px",
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));
