import React from 'react';
import styled from 'styled-components'


const Contact =()=>{

    return(
       <StyledContact>
                <a href="https://www.linkedin.com/in/alex-hoskins-dev" target='_blank'>LinkedIn <img src="https://www.pinclipart.com/picdir/big/574-5743993_linkedin-icon-white-png-clipart.png" width="40" alt="linkedin logo black png" /></a>
                <a href="https://www.github.com/Alex-Hoskins" target='_blank'>GitHub <img src="https://www.pinclipart.com/picdir/big/158-1581614_github-clipart.png" width="40" alt="512x512 logo github icon" /></a>
                <a href="mailto:alexrhoskins@gmail.com">Email <img src="https://www.pinclipart.com/picdir/big/341-3417070_00971-56-9357390-in-dringenden-notfllen-00971-50.png" width="40" alt="512x512 logo github icon" /></a>
       </StyledContact>
       
    )
}

export default Contact;

const StyledContact=styled.div`
    background-image:url('https://images.unsplash.com/photo-1581922819941-6ab31ab79afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80');
    min-width:100vw;
    min-height:100vh;
    background-size:cover;
    background-repeat:no-repeat;
    background-position:top;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    padding-top:20vh;
    a{
        color:#FC6D6D;
        font-size:3rem;
        font-weight:bolder;
        text-decoration-color:black;
        background-color:black;
        margin:10px;
        padding-left:10px;
        padding-right:10px;
        border-radius:7px;
        width:320px;
        height:80px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        text-align:center;
        padding-left:20px;
        padding-right:20px;
        &:hover{
            font-size:3.1rem;
            text-decoration:underline;
            text-decoration-color:white;
        }
        
    }
    h3{
        color: #FC6D6D;
        text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black;
        font-size:1.8rem;
    }
    
`

