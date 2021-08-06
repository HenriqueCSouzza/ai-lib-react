import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import StepConnector from "@material-ui/core/StepConnector";

const ColorlibConnector = withStyles((theme) => ({
  active: {
    "& $line": {
      borderColor: theme.palette.primary.main,
    },
  },
  completed: {
    "& $line": {
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
  },
  line: {
    border: 1,
    borderStyle: "dashed",
    backgroundColor: "transparent",
    borderColor: "#99ACC2",
  },
}))(StepConnector);

const useColorlibStepIconStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
    backgroundColor: "transparent",
    zIndex: 1,
    color: "#99ACC2",
  },
  active: {
    color: theme.palette.primary.main,
    "& .MuiStepLabel-label": {
      color: "#99ACC2",
      fontWeight: 700,
    },
  },
  completed: {
    color: theme.palette.primary.main,
  },
}));

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <CheckCircleOutlineIcon />,
    2: <CheckCircleOutlineIcon />,
    3: <CheckCircleOutlineIcon />,
    4: <CheckCircleOutlineIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {completed ? <CheckCircleIcon /> : icons[String(props.icon)]}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& .MuiPaper-root": {
      backgroundColor: "transparent",
      color: "#99ACC2",
    },
    "& .MuiStepLabel-label": {
      color: "#99ACC2",
      fontWeight: 700,
    },
  },
  active: {
    "& .MuiStepLabel-label": {
      color: theme.palette.primary.main,
      fontWeight: 700,
    },
  },
  completed: {
    "& .MuiStepLabel-label": {
      color: "#516F90",
      fontWeight: 700,
    },
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function CustomizedSteppers({ steps, activeStep, handleStep }) {
  const classes = useStyles();

  function getStepTitle(index) {
    return steps[index].title;
  }

  return (
    steps && (
      <div className={clsx(classes.root)}>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<ColorlibConnector />}
        >
          {steps.map((label, index) => (
            <Step key={index} onClick={() => handleStep(index)}>
              <StepLabel
                key={index}
                StepIconComponent={ColorlibStepIcon}
                className={clsx({
                  [classes.active]: activeStep === index,
                  [classes.completed]: index < activeStep,
                })}
              >
                {getStepTitle(index)}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    )
  );
}
