import React from 'react'
import { useTranslation } from 'react-i18next';
import saly from '../../images/Saly.png';
import group from '../../images/Group.png';
import twitter from '../../images/btwitter.png';
import linkedin from '../../images/blinkedin.png';
import medium from '../../images/bmedium.png';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className='hero'>
        <div className='hero__display'>
        <div className='hero__txt'>
            <h1 id="red">Blog Posts</h1>
            <h1>I think so, this is it.</h1>
            
        </div>
        <div className='p'>
        <p>Design begins after I begin to think about how to present an <br></br>experience most successfully, whether a <br></br>button I put in can solve a problem. The only point in design is not <br></br>ui design, if the user does not have a good <br></br>experience at the end of the product, the design will be <br></br>considered unsuccessful in my opinion.</p>
        </div>
        <div className='hero__img'>
            <img id="img1" src={group} alt="group"/>
            <img id="img2" src={saly} alt="saly"/>
        </div>
        </div>
      <div className='btnLinks'>
        <img src={twitter}/>
        <img src={linkedin}/>
        <img src={medium}/>
      </div>
    </div>
  )
}

export default Hero