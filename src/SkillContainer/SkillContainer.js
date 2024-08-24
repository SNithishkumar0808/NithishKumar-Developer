import React from 'react';
import { Element } from 'react-scroll';
import img4 from '../assets/skill4.jpg'; 
import LinearProgress from '@mui/material/LinearProgress'; 
import "./SkillContainer.css"
const SkillContainer = () => {
  return (
    <div>
      <Element className="SkillContainer" id="Skill">
        <div className="inner">
            <img src={img4} alt='' />
        </div>
        <div className='Skill-text'>
          <h2>SKILL SET</h2>
          <div className='SkillSet'>
              <h5>HTML</h5>
              <div className='Slider1'>
                  <LinearProgress variant="determinate" value={90} />
              </div>
          </div>
          <div className='SkillSet'>
              <h5>CSS</h5>
              <div className='Slider2'>
                  <LinearProgress variant="determinate" value={75} />
              </div>
          </div>
          <div className='SkillSet'>
              <h5>JavaScript</h5>
              <div className='Slider3'>
                  <LinearProgress variant="determinate" value={80} />
              </div>
          </div>
          <div className='SkillSet'>
              <h5>Java</h5>
              <div className='Slider4'>
                  <LinearProgress variant="determinate" value={70} />
              </div>
          </div>
          <div className='SkillSet'>
              <h5>React</h5>
              <div className='Slider5'>
                  <LinearProgress variant="determinate" value={90} />
              </div>
          </div>
          <div className='SkillSet'>
              <h5>SQL</h5>
              <div className='Slider6'>
                  <LinearProgress variant="determinate" value={80} />
              </div>
          </div>
          <div >
          <h1 className='cer'>Certificates</h1>
          <label className='li'>
            <h4 >* Pega System Architect (PCSA)</h4>
            <h4>* Pega Senior System Architect (PCSSA)</h4>
          </label>
        </div>
        </div>
      </Element>
    </div>
  );
}

export default SkillContainer;
