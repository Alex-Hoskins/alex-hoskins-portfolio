import React from 'react';
import './ProjectsList.css';
import Project from './Project'

const workspace = {
    project_name:'WorkSpace', 
    project_description:'Designed a web app where users can save open office spaces posted by users to meet the office needs of remote workers.', 
    project_tech_stack:'React | JavaScript | Node | Express | Redux | CSS | HTML',
    project_url:'https://workspace-zeta.vercel.app/',
    project_img:'https://lh3.googleusercontent.com/WrDgUFSQoXfxhAT1V3ZINn7qAuTg6VjvTklmtduIdsGSbINoP5EgIEZcigV1syVcnfBZU2GRibqi1-27DgbhTC8hpRruKPydg4qvGa4WCnvNzn8ndstUewE76xSu-OriHi3gyG4DNQ=w2400'
}
const african_marketplace = {
    project_name:'African Marketplace', 
    project_description:'Created an African themed marketplace application where users can add and save items to buy.', 
    project_tech_stack:'React | JavaScript | Node | Express | PostgreSQL | CSS | HTML',
    project_url:'https://african-marketplace-khaki.vercel.app/',
    project_img:'https://lh3.googleusercontent.com/A169yBdnrC9g5MQK8-9iquU6cpQpqPjD5OT0WR04BFG6zUvdGxN099UEkVglzBoMumcU6cOz-SGgUo-zITVpGkanZ-4koshjC-a8ZsDl7EogP3reQjCPXpnuyo8WV6q0yUNrVDU5zA=w2400'
}
const underdog_devs = {
    project_name:'Underdog Devs', 
    project_description:'Underdog Devs is a non-profit seeking to help under represented aspiring devs by matching them with mentors. I contributed to the backend engineering on this project.', 
    project_tech_stack:'Node | Express | JavaScript | PostgreSQL',
    project_url:'https://a.underdogdevs.dev/login',
    project_img:"https://lh3.googleusercontent.com/c7rkiZcisRBebJ6SsCP6_409yggqWtNCHkWRzstnzmumM7wlzlREMWoIIUmg_x8pk77iZOJdZG4hO8VULd4VhFf3N42cFDCx4CYgTbuZ8U2AbR3eNDTv5wFXtDMY7ACoe_9ZvyA06w=w600-h315-p-k"
}
const resume = {
    project_name:'Resume', 
    project_description:'Check it out!', 
    project_tech_stack:'You can see my resume',
    project_url:'https://docs.google.com/document/d/1Kx2bUrhq8zvohd1oYA_4KzqYfW32f7Gyl4KIi71-vsQ/edit?usp=sharing',
    project_img:"https://lh3.googleusercontent.com/2mfqmJ-GrbABSRw7hXvmWP-nmZJOiIVr6sj8BPfmZVHDX1FKOoGNVbf5cOKzJUtOm0I9ic142ajwKx_9G3Mlw9gTPcFVldAu8tDfx7mlxzt_VG2qcoaTkmo1bY1Aw0oz1MkuOGKT-g=w2400?source=screenshot.guru",
}


const myProjects = [
    underdog_devs,
    workspace,
    african_marketplace,
    resume
]

const ProjectList = (props)=>{
    console.log(props)
    return(
        <div className='featured_projects'>
            <div className='project_list'>
                {myProjects.map(proj =>{
                    return <Project project_name={proj.project_name} project_description={proj.project_description} project_tech_stack={proj.project_tech_stack} project_url={proj.project_url} project_img={proj.project_img}/>
                })}
            </div>
        </div>
    )
}
export default ProjectList;

