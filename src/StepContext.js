import React, {useState} from 'react'

export const multiStepContext = React.createContext()

const StepContext = (props) => {
    const [currentStep, setStep] = useState(1);
    //const currentStep =1
    

  return (
    <div>
        <multiStepContext.Provider value={currentStep}>
            {props.children}            
        </multiStepContext.Provider>
      
    </div>
  )
}

export default StepContext
