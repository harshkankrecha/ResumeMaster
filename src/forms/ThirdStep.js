import React,{useContext,useEffect} from 'react'
import { Button,TextField } from '@mui/material';
import MainContext from '../components/MainContext'
import MainState from '../components/MainState'
import axios from "axios"
import { saveAs } from "file-saver";

function ThirdStep() {
    const [currentStep,setStep,userData,setUserData,finalData,setFinalData] = useContext(MainContext);
    const {firstname,lastname,contact,education,university,age,job,role,skills} = userData
    const submitData = async (event) =>{
        console.log(userData)
        event.preventDefault();

        
        
        //const res = await fetch("/main/add",{
            //method:"POST",
            //headers: {
                //"Content-Type":"application/json"
            //},
            //body:JSON.stringify({firstname,lastname,contact,education,university,age,job,role,skills})
        //})
        axios
            .post("/main/add", userData)            
            .then(() => {
                axios
          .get("/main/fetch-pdf",{ responseType: "arraybuffer" ,})
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: "application/pdf" });
            console.log(res.data);
            saveAs(pdfBlob, `Resume.pdf`);
          })
          .catch((err) => console.log(err));
      })
            
            .catch((err) => console.log(err));
        
    }
    const handleOnChange = (event) =>{
        event.preventDefault();
        let value=event.target.value;
        let name=event.target.name;
        setUserData((prev)=>({...prev,[name]:value}))
        setStep(currentStep);      



    }
    useEffect(()=>{
        const formData = JSON.parse(window.localStorage.getItem('user'))
        setUserData((prev)=>({...prev, ...formData}))
    },[])
    useEffect(() =>{
        window.localStorage.setItem('user',JSON.stringify(userData))
    },[job,role,skills])
  
    return (
    <div>
        <div>
            <TextField name="job" value={job} onChange={handleOnChange} label="Job" margin="normal" variant="outlined" color="secondary"/>
        </div>
        <div>
            <TextField name="role" value={role} onChange={handleOnChange} label="Role" margin="normal" variant="outlined" color="secondary"/>
        </div>
        <div>
            <TextField name="skills" value={skills} onChange={handleOnChange} label="Skills" margin="normal" variant="outlined" color="secondary"/>
        </div>
        <div>        
            <Button onClick={()=>setStep(currentStep-1)} variant="contained" color="primary">Prev</Button>
            
            <Button onClick={submitData} variant="contained" color="primary">Submit</Button>
            
            
        </div>     
      
    </div>
  )
}
export default ThirdStep
