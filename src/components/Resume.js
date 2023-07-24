import React,{useContext} from 'react'
import FirstStepTemplate from '../forms/FirstStepTemplate';
import SecondStepTemplate from '../forms/SecondStepTemplate'
import ThirdStepTemplate from '../forms/ThirdStepTemplate'
import FourthStepTemplate from '../forms/FourthStepTemplate'
import FifthStepTemplate from '../forms/FifthStepTemplate'
import { Stepper,StepLabel, Step} from '@mui/material'
//import getMuiTheme from 'material-ui/styles/getMuiTheme'
//import {makeStyles } from '@mui/material'
import {makeStyles} from "@mui/styles"
import MainContext from './MainContext'
import MainState from './MainState'
import { grey } from '@mui/material/colors';
//import { multiStepContext } from '../StepContext'
//import StepContext from '../StepContext';

function Resume() {
    const [currentStep,setStep] = useContext(MainContext);
    function showstep(step){
        switch(step){
            case 1:
                return <FirstStepTemplate />  
            case 2:
                return <SecondStepTemplate />
            case 3:
                return <ThirdStepTemplate />
            case 4:
                return <FourthStepTemplate />
            case 5:
                return <FifthStepTemplate />
        }
    }
    /*const useStyles = makeStyles(() => ({
        root: {
          "& .MuiStepIcon-active": { color: "#9b59b6" },
          "& .MuiStepIcon-completed": { color: "#71b7e6" },
          "& .Mui-disabled .MuiStepIcon-root": { color: grey }
        }
      }));
      className={c.root}
      const c = useStyles();*/
    
  return (
    <div>       
        
        <Stepper  activeStep={currentStep-1}>
            <Step>
                <StepLabel>Heading</StepLabel>
            </Step>
            <Step>
                <StepLabel>Experience</StepLabel>
            </Step>
            <Step>
                <StepLabel>Projects</StepLabel>
            </Step>
            <Step>
                <StepLabel>Education</StepLabel>
            </Step>
            <Step>
                <StepLabel>Skills & Achievements</StepLabel>
            </Step>            
        </Stepper>        
        {showstep(currentStep)}; 
          
    </div>
  )
}

export default Resume
