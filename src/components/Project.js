import React from 'react';
import './ProjectsList.css';

const Project = (props)=>{
    console.log(props)
    return(
        <div className='project'>
            <div className='project_left'>
                <h3>{props.project_name}</h3>
                <h4>{props.project_tech_stack}</h4>
                <p>{props.project_description}</p>
                <a href={props.project_url} target='_blank'>{props.project_url}</a>
            </div>
            <img src={props.project_img} alt={props.project_name}/>
        </div>
    )
}
export default Project;