import React from 'react';
import './ProjectsList.css';

const Project = (props)=>{
    return(
        <a className='projLink' href={props.project_url} target='_blank'>
        <div className='project'>
            <div className='project_left'>
                <h3>{props.project_name}</h3>
                <h4>{props.project_tech_stack}</h4>
                <p>{props.project_description}</p>
                {props.project_name === "Resume" && (
                        <a href="Alex_Hoskins_Resume.pdf" download="Alex_Hoskins_Resume.pdf">
                            <button className="download-button" >Download My Resume</button>
                        </a>
                )}
            </div>
            <img src={props.project_img} alt={props.project_name}/>
        </div>
        </a>
    )
}
export default Project;