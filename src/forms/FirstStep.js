import React,{useContext,useEffect} from 'react'
import { Button,TextField } from '@mui/material';
import MainContext from '../components/MainContext'
import MainState from '../components/MainState'
import FirstStepTemplate from './FirstStepTemplate';


function FirstStep() {
    const [currentStep,setStep,userData,setUserData] = useContext(MainContext);
    const {
    firstname,
    lastname,
    address,
    city,
    country,
    zipcode,
    phone,
    email,
    linkedin,
    github
    } = userData
    const handleChange = (event) => {
        setStep(currentStep+1);
        event.preventDefault();    
    } 
    const handleOnChange = (event) =>{
        setUserData({...userData,[event.target.name]:event.target.value})
    }    
    useEffect(()=>{
        const formData = JSON.parse(window.localStorage.getItem('user'))
        setUserData((prev)=>({...prev, ...formData}))
    },[])
    useEffect(() =>{
        window.localStorage.setItem('user',JSON.stringify(userData))
    },[])
  return (
    <div>
        <FirstStepTemplate />            
    </div>
  )
}
export default FirstStep
