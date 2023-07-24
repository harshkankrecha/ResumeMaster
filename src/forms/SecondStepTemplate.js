import React ,{useState,useContext,useEffect} from 'react'
import './SecondStepStyle.css';
import MainContext from '../components/MainContext'

const SecondStepTemplate = () => {
  //const [projects, setProjects] = useState([{ id: 1, value: '' }]);
  const [currentStep,setStep,userData,setUserData] = useContext(MainContext);
  const {
    experience,    
    } = userData
  const [experiences, setExperiences] = useState(userData.experience || [{ role: '', company:'',description: '' }]);
  useEffect(() => {
    // Update experienceData whenever userData changes
    setExperiences(userData.experience || [{ role: '', company:'',description: '' }]);
  }, [userData]);
  

// const handleAddField = () => {
//     setProjects([...projects, { id: projects.length + 1, value: '' }]);
//   };
const handleAddFieldExp = () => {
    setExperiences([...experiences, { role: '', company:'',description: '' }]);
    //userData.experience=experiences
  };

// const handleRemoveField = (id) => {
//     setProjects(projects.filter((project) => project.id !== id));
//   };
const handleRemoveFieldExp = (index) => {
    //setExperiences((prev_exp) => prev_exp.filter((experience,i) => i !== index))
    const updatedExperienceData = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperienceData);
      

    
    
  };

// const handleChange = (id, value) => {
//     setProjects(
//       projects.map((project) =>
//         project.id === id ? { ...project, value } : project
//       )
//     );
//   };

const handleclickChangeExp = (event) =>{
    const all_exp=[];
    experiences.map((experience,index) =>
     all_exp.push(experience)
    )
    userData.experience=all_exp;
    console.log(userData,experience);
    setStep(currentStep+1);
    event.preventDefault();   

    
}
const handleclickChangeExpPrev = (event) =>{
  setStep(currentStep-1);
  event.preventDefault();   
}
const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = experiences.map((experience, i) =>
      i === index ? { ...experience, [field]: value } : experience
    );
    setExperiences(updatedExperiences);
    const updatedUserData = { ...userData, experience: updatedExperiences };
    setUserData(updatedUserData);
  };

  return (
    <div className="container">
        <div className="title">Experience</div>      
      <form>       
        
        <div id="experience-group">
          {experiences.map((experience, index) => (
            <div key={index} className="form-group">
              <label htmlFor="experience">Role</label>
              <input
                placeholder='Software Engineer'
                type="text"
                name="experience[]"
                value={experience.role}
                required
                onChange={(e) => handleExperienceChange(index, 'role', e.target.value)}
              />
              <p></p>
              <label htmlFor="experience">Company</label>
              <input
                placeholder='Google'
                type="text"
                name="experience[]"
                value={experience.company}
                required
                onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
              />
              <p></p>
              <label htmlFor="experience">Description</label>
              <input
                type="text"
                name="experienceDescription[]"
                value={experience.description}
                required
                onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
              />
              <div className="btn-container">
              {experiences.length > 1 && (
                <span
                  className="remove-btn"
                  onClick={() => handleRemoveFieldExp(index)}>- Remove
                </span>
              )}
              <span
                  className="remove-btn"
                  onClick={handleAddFieldExp}>+ Add
                </span>
                </div>
            </div>
          ))}
        </div>
        <div className="button-container">
          <div className="">                
              <input id="prev-btn" type="button" value="Prev" onClick={handleclickChangeExpPrev}/>
          </div>
          
          <div className="">                
              <input id="add-btn" type="button" value="Next" onClick={handleclickChangeExp}/>
          </div>
        </div>
      </form>
    </div>
    
  );
};

export default SecondStepTemplate;
