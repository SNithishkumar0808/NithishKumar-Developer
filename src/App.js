import React from 'react'
import Header from './components/Header.js'
import TopContainer from './TopContainer/TopContainer.js'
import SkillContainer from './SkillContainer/SkillContainer.js'
import ProjectContainer from './ProjectContainer/ProjectContainer.js'
import "./App.css"
import Contact from './Contact/Contact.js'
const App = () => {
  return (
    <div>
      <Header/>
      <TopContainer/>
      <SkillContainer/>
      <ProjectContainer/>
      <Contact/>
    </div>
  )
}

export default App
