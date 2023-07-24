import React ,{useState,useContext,useEffect} from 'react'
import './SecondStepStyle.css';
import MainContext from '../components/MainContext'
const FourthStepTemplate = () => {
  const [currentStep,setStep,userData,setUserData] = useContext(MainContext);
  
  const [educations, setEducations] = useState(() => {
      // Try to get projectsList from localStorage; use empty array as default
      const storedEducations = localStorage.getItem('educationList');
      return storedEducations ? JSON.parse(storedEducations) : [{'university':"","course":"","percentage":"","degree":"","startdate":"","enddate":""}];
    });
  //const [projects, setProjects] = useState(userData.projectsList ||[{ title:'',description:'' }]);
  useEffect(() => {
    // Update experienceData whenever userData changes
    setEducations(userData.educationList || [{'university':"","course":"","percentage":"","degree":"","startdegree":"","enddegree":""}]);
  }, [userData.educationList]);
  
const handleAddFieldExp = () => {
  setEducations([...educations, {'university':"","course":"","percentage":"","degree":"","startdegree":"","enddegree":""}]);
  };
const saveEducationsToLocalStorage = (educations) => {
    localStorage.setItem('educationList', JSON.stringify(educations));
  };
const handleRemoveFieldExp = (index) => {
    //setExperiences((prev_exp) => prev_exp.filter((experience,i) => i !== index))
    //const updatedProjectData = projects.filter((_, i) => i !== index);
    //setProjects(updatedProjectData);
    const updatedEducations = [...educations];
    updatedEducations.splice(index, 1);
    setEducations(updatedEducations);
    saveEducationsToLocalStorage(updatedEducations);
    console.log(updatedEducations)
};
const handleclickChangeExpPrev = (event) =>{
    setStep(currentStep-1);
    event.preventDefault();   
}
  
const handleclickChangeExp = (event) =>{
  const all_edu=[];
  educations.map((education,index) =>
  all_edu.push(education)
  )
  userData.educationList=all_edu;
  console.log(userData.educationList);
  setStep(currentStep+1);
  event.preventDefault();   
};
const handleExperienceChange = (index, field, value) => {
  const updatededucations = educations.map((education, i) =>
    i === index ? { ...education, [field]: value } : education
  );
  setEducations(updatededucations);
  const updatedUserData = { ...userData, educationList: updatededucations };
  setUserData(updatedUserData);
  console.log(userData.educationList);  
};


  return (
    <div className="container">
        <div className="title">Education</div>
      <form>       
        <div id="projects-group">
          {educations.map((education,index) => (
            <div key={index} className="form-group">
              <div className="field-containers">
                <div>
              <label htmlFor="education">University</label>
              <input
                type="text"
                name="education[]"
                value={education.title}
                required
                onChange={(e) => handleExperienceChange(index, 'university', e.target.value)}
              />
              </div>
              <div>
              <label htmlFor="education">Degree</label>
              <input
                type="text"
                name="education[]"
                value={education.degree}
                required
                onChange={(e) => handleExperienceChange(index, 'degree', e.target.value)}
              />
              </div>
              </div>
              <div className="field-containers">
                <div>
              <label htmlFor="education">Specialization</label>
              <input
                type="text"
                name="education[]"
                value={education.course}
                required
                onChange={(e) => handleExperienceChange(index, 'course', e.target.value)}
              />
              </div>
              <div>
              <label htmlFor="education">Percentage</label>
              <input
                type="text"
                name="education[]"
                value={education.percentage}
                required
                onChange={(e) => handleExperienceChange(index, 'percentage', e.target.value)}
              />
              </div>
              </div>
              <div className="field-containers">
              <div>
              <label htmlFor="education">Start Date</label>
              <input
                type="date"
                name="education[]"
                value={education.startdate}
                className="input-field"
                required
                onChange={(e) => handleExperienceChange(index, 'startdate', e.target.value)}
              />
              </div>
              <div>
              <label htmlFor="education">End Date</label>
              <input
                type="date"
                name="education[]"
                value={education.enddate}
                required
                onChange={(e) => handleExperienceChange(index, 'enddate', e.target.value)}
              />
              </div>
              </div>
              <div className="btn-container">
              {educations.length > 1 && (
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

export default FourthStepTemplate;