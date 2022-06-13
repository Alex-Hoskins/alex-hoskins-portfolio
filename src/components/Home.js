import React from 'react';
import About from './About';
import './Home.css';

const Home =()=>{
    let title = '<Alex-Hoskins/>'
    return(
       <div className="home">
        <div class="homeImg">
          <img src="https://lh3.googleusercontent.com/pw/AM-JKLUUOtoXWPYzd-umzXj3jshAZo6G7J5TFRZ3wdh6g7UK8fp5LDCm4jf7zus_fHO9Fhd2FkJAdBFmxOBNqdqC4h6R7id0ej7swxkGCUCEZ9PZOe_6bv10IW9dcDFNZsDNWwmGOigP_FHsx6u8qBbRwGU=w1065-h710-no?authuser=0"  alt="" width="300" height="300" />
        </div>
        <div class="wrapper">
          <div class="static-txt">I'm a</div>
          <ul class="dynamic-txts">
            <li><span>Developer</span></li>
            <li><span>Innovator</span></li>
            <li><span>Designer</span></li>
            <li><span>Leader</span></li>
            <li><span></span></li>
          </ul>
        </div>
        <h1>{title}</h1>
        <img className='bridgeImg' src="https://lh3.googleusercontent.com/4Vq_EYfeobEke5L_HkQQHza3R5X1oxIgCIfwhoZtt4TbBtSijQ5UJhmnhBuyiad2VBYSfXMgJ19ecT1TT_0f3zaarBIk8a937_87yE33HaGjI-zRv7o4CTBBrfpWyYG9CJ47Td5B=w2400" alt="black bridge" />
        <About/>
       </div>
       
    )
}

export default Home