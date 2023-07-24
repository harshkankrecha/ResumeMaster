import React, { useState } from 'react';
import MainContext from '../components/MainContext'

import { Button,TextField,Container,IconButton,Icon } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { v4 as uuidv4 } from 'uuid';
import {makeStyles} from "@mui/styles"
import SecondStepTemplate from './SecondStepTemplate';
import './SecondStepStyle.css';
const useStyles = makeStyles((theme) => ({
  /*root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  } */
}))


function DynamicAddField() {
    const classes = useStyles()
    const [inputFields, setInputFields] = useState([
      { id: uuidv4(), firstName: '', lastName: '' },
    ]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("InputFields", inputFields);
    };
  
    const handleChangeInput = (id, event) => {
      const newInputFields = inputFields.map(i => {
        if(id === i.id) {
          i[event.target.name] = event.target.value
        }
        return i;
      })
      
      setInputFields(newInputFields);
    }
  
    const handleAddFields = () => {
      setInputFields([...inputFields, { id: uuidv4(),  firstName: '', lastName: '' }])
    }
  
    const handleRemoveFields = id => {
      const values  = [...inputFields];
      values.splice(values.findIndex(value => value.id === id), 1);
      setInputFields(values);
    }
  
    return (
      <div>    
        <div>
          
            
              
            
            </div>
        </div>
      
      
    );
}

export default DynamicAddField
