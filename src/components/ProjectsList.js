import React from 'react';
import './ProjectsList.css'

const ProjectList = (props)=>{
    console.log(props)
    return(
        <div>
            <a className='project' href="https://web-module-project-async-redux-liart.vercel.app/" target='_blank'>My First Project</a>
        </div>
    )
}
export default ProjectList;