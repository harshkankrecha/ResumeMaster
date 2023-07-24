import React ,{useState,useContext,useEffect} from 'react'
import './SecondStepStyle.css';
import MainContext from '../components/MainContext'
import axios from "axios"
import { saveAs } from "file-saver";

const FifthStepTemplate = () => {
  const [currentStep,setStep,userData,setUserData] = useContext(MainContext);  
  const [skills, setSkills] = useState(() => {
      // Try to get projectsList from localStorage; use empty array as default
      const storedSkills = localStorage.getItem('skillsList');
      return storedSkills ? JSON.parse(storedSkills) : [{ skill:'' }];
    });
    const [achievements, setAchievements] = useState(() => {
      // Try to get projectsList from localStorage; use empty array as default
      const storedAchievements = localStorage.getItem('achievementsList');
      return storedAchievements ? JSON.parse(storedAchievements) : [{ achievement:'' }];
    });
  //const [projects, setProjects] = useState(userData.projectsList ||[{ title:'',description:'' }]);
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
  useEffect(() => {
    // Update experienceData whenever userData changes
    setSkills(userData.skillsList || [{ skill:'' }]);
  }, [userData.skillsList]);
  
  useEffect(() => {
    // Update experienceData whenever userData changes
    setAchievements(userData.achievementsList || [{ achievement:'' }]);
  }, [userData.achievementsList]);
  
  
  
const handleAddFieldExp = () => {
  setSkills([...skills, { skill:'' }]);
  
  };
const handleAddFieldAch = () => {    
    console.log('called');
    setAchievements([...achievements, { achievement: '' }]);
    };
const saveSkillsToLocalStorage = (skills) => {
    localStorage.setItem('skillsList', JSON.stringify(skills));
  };
  const saveAchievementsToLocalStorage = (achievements) => {
    localStorage.setItem('achievementsList', JSON.stringify(achievements));
  };
const handleRemoveFieldExp = (index) => {
    //setExperiences((prev_exp) => prev_exp.filter((experience,i) => i !== index))
    //const updatedProjectData = projects.filter((_, i) => i !== index);
    //setProjects(updatedProjectData);
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
    saveSkillsToLocalStorage(updatedSkills);
    console.log(updatedSkills)
};
const handleRemoveFieldAch = (index) => {
  //setExperiences((prev_exp) => prev_exp.filter((experience,i) => i !== index))
  //const updatedProjectData = projects.filter((_, i) => i !== index);
  //setProjects(updatedProjectData);
  const updatedAchievements = [...achievements];
  updatedAchievements.splice(index, 1);
  setAchievements(updatedAchievements);
  saveAchievementsToLocalStorage(updatedAchievements);
  console.log(updatedAchievements)
};
const handleclickChangeExpPrev = (event) =>{
    setStep(currentStep-1);
    event.preventDefault();   
}
  
const handleclickChangeExp = (event) =>{
  const all_skills=[];
  skills.map((skill,index) =>
   all_skills.push(skill)
  )
  userData.skillsList=all_skills;
  console.log(userData.skillsList);
  setStep(currentStep+1);
  event.preventDefault();   
};
const handleclickChangeAch = (event) =>{
  const all_achievements=[];
  achievements.map((achievement,index) =>
  all_achievements.push(achievement)
  )
  userData.achievementsList=all_achievements;
  console.log(userData.achievementsList);
  setStep(currentStep+1);
  event.preventDefault();   
};
const handleExperienceChange = (index, field, value) => {
  const updatedskills = skills.map((skill, i) =>
    i === index ? { ...skill, [field]: value } : skill
  );
  setSkills(updatedskills);
  const updatedUserData = { ...userData, skillsList: updatedskills };
  setUserData(updatedUserData);
  console.log(userData.skillsList);  
};
const handleAchievementsChange = (index, field, value) => {
  const updatedachievements = achievements.map((achievement, i) =>
    i === index ? { ...achievement, [field]: value } : achievement
  );
  setAchievements(updatedachievements);
  const updatedUserData = { ...userData, achievementsList: updatedachievements };
  setUserData(updatedUserData);
  console.log(userData.achievementsList);  
};


  return (
    <div className="container">
      <div className="title">Skills</div>
      <form>       
        <div id="projects-group">
          {skills.map((skill,index) => (
            <div key={index} className="form-group">
              <label htmlFor="skill">Skill</label>
              <input
                type="text"
                name="skill[]"
                value={skill.skill}
                required
                onChange={(e) => handleExperienceChange(index, 'skill', e.target.value)}
              />
              
              <div className="btn-container">
              {skills.length > 1 && (
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
        
        
      </form>
      <div className="title">Achievements</div>
      <form>       
        <div id="achievements-group">
          {achievements.map((achievement,index) => (
            <div key={index} className="form-group">
              <label htmlFor="achievement">Achievement</label>
              <input
                type="text"
                name="achievement[]"
                value={achievement.achievement}
                required
                onChange={(e) => handleAchievementsChange(index, 'achievement', e.target.value)}
              />
              
              <div className="btn-container">
              {achievements.length > 1 && (
                <span
                  className="remove-btn"
                  onClick={() => handleRemoveFieldAch(index)}>- Remove
                </span>
              )}
              <span
                  className="remove-btn"
                  onClick={handleAddFieldAch}>+ Add
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
              <input id="add-btn" type="button" value="Submit" onClick={submitData}/>
          </div>
        </div>
        
      </form>
      
    </div>
    
  );
};

export default FifthStepTemplate;