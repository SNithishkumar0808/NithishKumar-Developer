
import React, { useState } from 'react';
import "./Project.css";

const Projects = ({ img, title, des, link }) => {
    const [show, setShow] = useState(false);

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="ProjectLink">
            <div 
                className='Project' 
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
            >
                {show ? (
                    <div className="ProjectInfo">
                        <h4>{title}</h4>
                        <p>{des}</p>
                    </div>
                ) : (
                    <img src={img} alt={title} className="ProjectImage" />
                )}
            </div>
        </a>
    );
};

export default Projects;
