
import React from 'react';
import { Element } from 'react-scroll';
import img4 from '../assets/med.jpg';
import img3 from '../assets/can.jpg';
import img2 from '../assets/air1.jpg';
import Projects from '../Projects/Projects';
import './ProjectContainer.css';

const ProjectContainer = () => {
    const client_projects = [
        {
            img: img4,
            title: "Medical Insurance Cost Prediction",
            des: "The efficiency of insurance policy terms in the insurance industry can be enhanced using machine learning (ML). In this work, we use individual and local health data to forecast insurance amounts for various categories of people.",
            link: "#", 
        },
        {
            img: img2,
            title: "Airline Reservation Systems",
            des: "It is a platform that enables travelers to book flights, check seat availability, compare prices, and make payments for airline tickets from the comfort of their homes or offices.",
            link: "https://www.linkedin.com/posts/nithishkumar-suresh-b42a3b23a_pegasystems-talentsprint-cit-activity-7073943473552310272-yRJM?utm_source=share&utm_medium=member_android", 
        },
        {
            img: img3,
            title: " Canteen Automation System",
            des: "What,we propose is a Canteen Automation System, which is a technique of ordering foods online applicable in any food delivery industry. The main advantage of this system is that it greatly simplifies the ordering process for both the customer and the canteen.",
            link: "https://www.linkedin.com/posts/nithishkumar-suresh-b42a3b23a_pegasystems-talentsprint-citchennai-activity-7085176630368768000-6U6t?utm_source=share&utm_medium=member_android", 
        },
    ];

    return (
        <Element className='ProjectContainer' id="Projects">
            <h1>Projects</h1> 
            <p>Here are some projects which I have done to make people's lives easier.</p>
            <div className='Project_dis'>
                {client_projects.map((project, index) => (
                    <Projects
                        key={index}
                        img={project.img}
                        title={project.title}
                        des={project.des}
                        link={project.link}
                    />
                ))}
            </div>
        </Element>
    );
};

export default ProjectContainer;
