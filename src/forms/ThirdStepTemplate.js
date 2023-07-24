import React ,{useState,useContext,useEffect} from 'react'
import './SecondStepStyle.css';
import MainContext from '../components/MainContext'

const ThirdStepTemplate = () => {
  const [currentStep,setStep,userData,setUserData] = useContext(MainContext);
  const {
    projectsList,    
    } = userData
  const [projects, setProjects] = useState(() => {
      // Try to get projectsList from localStorage; use empty array as default
      const storedProjects = localStorage.getItem('projectsList');
      return storedProjects ? JSON.parse(storedProjects) : [{ title: '', description: '' }];
    });
  //const [projects, setProjects] = useState(userData.projectsList ||[{ title:'',description:'' }]);
  useEffect(() => {
    // Update experienceData whenever userData changes
    setProjects(userData.projectsList || [{ title:'' ,description: '' }]);
  }, [userData.projectsList]);
  
const handleAddFieldExp = () => {
  setProjects([...projects, { title:'',description:'' }]);
  };
const saveProjectsToLocalStorage = (projects) => {
    localStorage.setItem('projectsList', JSON.stringify(projects));
  };
const handleRemoveFieldExp = (index) => {
    //setExperiences((prev_exp) => prev_exp.filter((experience,i) => i !== index))
    //const updatedProjectData = projects.filter((_, i) => i !== index);
    //setProjects(updatedProjectData);
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
    saveProjectsToLocalStorage(updatedProjects);
    console.log(updatedProjects)
};

const handleclickChangeExpPrev = (event) =>{
    setStep(currentStep-1);
    event.preventDefault();   
}
  
const handleclickChangeExp = (event) =>{
  const all_projects=[];
  projects.map((project,index) =>
   all_projects.push(project)
  )
  userData.projectsList=all_projects;
  console.log(userData.projectsList);
  setStep(currentStep+1);
  event.preventDefault();   
};
const handleExperienceChange = (index, field, value) => {
  const updatedprojects = projects.map((project, i) =>
    i === index ? { ...project, [field]: value } : project
  );
  setProjects(updatedprojects);
  const updatedUserData = { ...userData, projectsList: updatedprojects };
  setUserData(updatedUserData);
  console.log(userData.projectsList)
  
};


  return (
    <div className="container">
        <div className="title">Projects</div>
      <form>
        
        
        <div id="projects-group">
          {projects.map((project,index) => (
            <div key={index} className="form-group">
              <label htmlFor="project">Title:</label>
              <input
                type="text"
                name="project[]"
                value={project.title}
                required
                onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
              />
              <label htmlFor="project">Description</label>
              <input
                type="text"
                name="project[]"
                value={project.description}
                required
                onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
              />
              <div className="btn-container">
              {projects.length > 1 && (
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

export default ThirdStepTemplate;
