import React,{useState} from 'react'
import MainContext from './MainContext'

const MainState = (props) => {
  const [currentStep,setStep] = useState(1);
  const [userData,setUserData] = useState({
    firstname:"",
    lastname:"",
    address:"",
    state:"",
    country:"",
    zipcode:"",
    phone:"",
    email:"",
    linkedin:"",
    github:"",
    experience:[{'role':"",'company':"",'description':""}],          
    projectsList:[{'title':"",'description':""}],
    educationList:[{'university':"","course":"","percentage":"","degree":"","startdate":"","enddate":""}],
    skillsList:[{'skill':""}],
    achievementsList:[{'achievement':""}],
  });
  //const [finalData,setFinalData] = useState({irstname:"",lastname:"",contact:"",education:"",university:"",age:"",job:"",role:"",skills:""});
  return (
    <MainContext.Provider value={[currentStep,setStep,userData,setUserData]}>
        {props.children}
    </MainContext.Provider>    
  )
}
export default MainState