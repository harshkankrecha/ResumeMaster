import React ,{useContext,useEffect} from 'react'
import './FirstStepStyle.css';
import MainContext from '../components/MainContext'
function FirstStepTemplate() {
    const [currentStep,setStep,userData,setUserData] = useContext(MainContext);
    const {
        firstname,
        lastname,
        address,
        state,
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
        <header>            
            <meta charset="UTF-8"></meta>            
            <link rel="stylesheet" href="FirstStepStyle.css"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            
                             
            
        </header>
        <body className="bodyclass">
        <div className="container">
            <div className="title">Heading</div>
            <div className="content">
            <form action="#">
                <div className="userdetails">
                <div className="inputbox">
                    <span className="details">First Name</span>
                    <input type="text" name="firstname" value={firstname} onChange={handleOnChange} placeholder="Enter your first name" required/>
                </div>
                <div className="inputbox">
                    <span className="details">Last Name</span>
                    <input type="text" name="lastname" value={lastname} onChange={handleOnChange} placeholder="Enter your last name" required/>
                </div>
                <div className="inputbox">
                    <span className="details">Email</span>
                    <input type="text" name="email" value={email} onChange={handleOnChange} placeholder="abc@mail.com" required/>
                </div>
                <div className="inputbox">
                    <span className="details">Phone</span>
                    <input type="tel" name="phone" value={phone} onChange={handleOnChange} placeholder="999999999" required/>
                </div>
                <div className="inputbox">
                    <span className="details">Zip Code</span>
                    <input type="text" name="zipcode" value={zipcode} onChange={handleOnChange} placeholder="362001" required/>
                </div>
                <div className="inputbox">
                    <span className="details">Address</span>
                    <input type="text" name="address" value={address} onChange={handleOnChange} placeholder="" required/>
                </div>
                <div className="inputbox">
                    <span className="details">State</span>
                    <input type="text" name="state" value={state} onChange={handleOnChange} placeholder="Gujarat" required/>
                </div>
                <div className="inputbox">
                    <span className="details">Country</span>
                    <input type="text" name="country" value={country} onChange={handleOnChange} placeholder="India" required/>
                </div>
                <div className="inputbox">
                    <span className="details">LinkedIn</span>
                    <input type="url" name="linkedin" value={linkedin} onChange={handleOnChange} placeholder="" required/>
                </div>
                <div className="inputbox">
                    <span className="details">Github</span>
                    <input type="url" name="github" value={github} onChange={handleOnChange} placeholder="" required/>
                </div>
                </div>              
                    
                <div className="button">                
                    <input type="button" value="Next" onClick={handleChange}/>
                </div>
                
            </form>
            </div>
        </div>
        </body>          
        
    </div>
  )
}

export default FirstStepTemplate
