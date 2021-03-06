import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css'

const Navigation = () =>{
    const title = '<Alex-Hoskins/>'
    return(
        <nav className='navigation'>
            <div className='nav-box column'>
                <Link className='links' to='/'><span>Home</span></Link>
                <Link className='links' to='/projects'><span>Projects</span></Link>
                <Link className='links' to='/contact'><span>Contact</span></Link>
            </div>
            <div className='navTitle'>
                <p>{title}</p>
            </div>
            <div className='nav-box'>
                <a href="https://www.linkedin.com/in/alex-hoskins-dev" target='_blank'><img src="https://www.pinclipart.com/picdir/big/574-5743993_linkedin-icon-white-png-clipart.png" width="25" alt="linkedin logo black png" /></a>
                <a href="https://www.github.com/Alex-Hoskins" target='_blank'><img src="https://www.pinclipart.com/picdir/big/158-1581614_github-clipart.png" width="25" alt="512x512 logo github icon" /></a>
                <a href="mailto:alexrhoskins@gmail.com"><img src="https://www.pinclipart.com/picdir/big/341-3417070_00971-56-9357390-in-dringenden-notfllen-00971-50.png" width="25" alt="512x512 logo github icon" /></a>
            </div>    
        </nav>
    )
}

export default Navigation;