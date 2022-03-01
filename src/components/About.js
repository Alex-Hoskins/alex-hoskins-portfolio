import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';


const About =()=>{
    const navigate = useNavigate();

    const contactPush=()=>{
        navigate('./contact')
    }
    return(
       <AboutStyle>
           <img src="" alt="" />
           <h2>Hello and welcome to my website.</h2>
           <p>I’m Alex Hoskins, a Full Stack Web Developer formally trained in computer science, software engineering, and web development. I’m currently working with an awesome non-profit called Underdog Devs as a Backend Engineer. I am interested in learning about opportunities where my combined software development skills and specialized communication skills will contribute to team motivation and cloud-native product solutions. Feel free to look around and if you would like to chat, you can do so <span onClick={contactPush}>here</span>.</p>
           <LanguageDiv>
               <img src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-best-web-design-psd-html-cms-development-ecommerce-6.png" alt="React" width='35%'/>
               <img src="https://camo.githubusercontent.com/8e14ab6f6c4539c74e8ad926ff05173474250c4e/68747470733a2f2f7777772e62617074697374652d646f6e6175782e66722f72656163742d72656475782d636f6e636570742f72656163742d72656475782e706e67" alt="Redux" width='30%' height='auto'/>
           </LanguageDiv>
       </AboutStyle>
    )
}

export default About;

const AboutStyle = styled.div`
    width:100%;
    background-color: #343F4F;;
    padding-left:20%;
    padding-right:20%;
    min-height:100vh;
    h2{
        font-family: 'Poppins';
        font-size:2rem;
        color:#FC6D6D;
        text-align:center;
        border-bottom:2px solid #343F4F;
        padding-bottom:15px;
    }
    p{
        color:#FFF;
        font-size:1.2rem;
    }
    span{
        font-weight:bold;
        color:#FFF;
    }
    span:hover {
        cursor:pointer;
        text-decoration:underline;
        text-decoration-color:#FC6D6D;
    }
`
const LanguageDiv = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    margin-top:10%;
   margin-bottom:10%;
`