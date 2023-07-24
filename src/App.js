import React, {useContext} from 'react'
import Home from './components/Home'
import Resume from './components/Resume'
//import Download from './components/Download'
import Cv from './components/Cv'
import CoverLetter from './components/CoverLetter'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
//import StepContext from './StepContext';
import MainState from './components/MainState'

function App() {
  return (
    <div>
      <MainState>
      <Navbar />      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/resume" element={<Resume />}></Route>      
        <Route path="/cv" element={<Cv />}></Route>
        <Route path="/coverletter" element={<CoverLetter />}></Route>
      </Routes>   
      </MainState>
        
    </div>
  )
}

export default App
