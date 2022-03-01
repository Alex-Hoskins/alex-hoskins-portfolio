import React from 'react';
import styled from 'styled-components'


const Contact =()=>{

    return(
       <StyledContact>
           <h2>Contact Info</h2>
            <a href="https://www.linkedin.com/in/alex-hoskins-dev" target='_blank'><img src="https://www.pinclipart.com/picdir/big/574-5743993_linkedin-icon-white-png-clipart.png" width="70" alt="linkedin logo black png" /></a>
            <a href="https://www.github.com/Alex-Hoskins" target='_blank'><img src="https://www.pinclipart.com/picdir/big/158-1581614_github-clipart.png" width="70" alt="512x512 logo github icon" /></a>
       </StyledContact>
       
    )
}

export default Contact;

const StyledContact=styled.div`
    background-image:url('https://images.squarespace-cdn.com/content/v1/54adce11e4b0b378c6c86a66/1478186291208-7CNB463PUX2XNM805SQ5/San+Francisco_California_city+streets+map+drawing_TurnoftheCenturies_etsy.jpg?format=750w');
    background-color:black;
    margin-top:5%;
    width:100vw;
    min-height:100vh;
    background-size:100vw;
    background-repeat:no-repeat;
    background-position:center;
    display:flex;
    justify-content:center;
`

