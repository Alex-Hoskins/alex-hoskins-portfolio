import React from 'react';
import './ProjectsList.css';
import Project from './Project'

const workspace = {
    project_name:'WorkSpace', 
    project_description:'Designed a web app where users can save open office spaces posted by users to meet the office needs of remote workers.', 
    project_tech_stack:'React | JavaScript | Node | Express | Redux | CSS | HTML',
    project_url:'https://workspace-zeta.vercel.app/',
    project_img:'/workspace_image.png'
}
const african_marketplace = {
    project_name:'African Marketplace', 
    project_description:'Created an African themed marketplace application where users can add and save items to buy.', 
    project_tech_stack:'React | JavaScript | Node | Express | PostgreSQL | CSS | HTML',
    project_url:'https://african-marketplace-khaki.vercel.app/',
    project_img:'/african_marketplace.png'
}

const resume = {
    project_name:'Resume', 
    project_description:'Check it out!', 
    project_tech_stack:'You can see my resume',
    project_url:'Alex_Hoskins_Resume.pdf',
    project_img:"markus-winkler-7iSEHWsxPLw-unsplash.jpg"
}


const myProjects = [
    workspace,
    african_marketplace,
    resume
]

const ProjectList = (props)=>{
    return(
        <div className='featured_projects'>
            <h2>Featured Projects</h2>
            <div className='project_list'>
                {myProjects.map(proj =>{
                    return <Project project_name={proj.project_name} project_description={proj.project_description} project_tech_stack={proj.project_tech_stack} project_url={proj.project_url} project_img={proj.project_img}/>
                })}
            </div>
        </div>
    )
}
export default ProjectList;

