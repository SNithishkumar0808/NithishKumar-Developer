import React from 'react'
import "./TopContent.css";
import { Link } from 'react-scroll';
const Topcontent = () => {
  return (
    <div className='TopContent'>
      <div className='TopContent_Container'>
         <h1>Mr.S.Nithish Kumar</h1>
         <p>Software Engineer</p>
         <a href="https://drive.google.com/file/d/1oJOQyK1bKXiz7tDJ8rX63s890TOwUY7W/view?usp=drivesdk">
            <button className='Down'>Download CV</button>
         </a>
         <Link to ="Projects" smooth={true} duration ={500}>
         <button className='Work'>My Work</button>
         </Link>
      </div>
    </div>
  )
}

export default Topcontent
