import React, { useState } from 'react';
import Loader from 'react-loaders';
import './About.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')  
  const strAbout = ['A','b','o','u','t',' ','m','e'];

  setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)
  

  return (
    <>
      <div className='container about-page'>
          <div className='text-zone'>
              <h1>
                  <AnimatedLetters letterClass={letterClass} strArray={strAbout} idx={15}/>
              </h1>

              <p>
              I have the ambition to try and assert myself in the field of telesale and contribute outstanding achievements to the future company.
              </p>
              <p align="LEFT">
              I have good persuasion, negotiation and problem solving skills. Besides, I am also a confident person who loves challenges and new experiences. Ability to work in a highly competitive environment
              
              </p>
              <p>
              
              </p>
          </div>

          <div className='stage-cube-cont'>
            <div className='cubespiner'>
              <div className='face1'>
                <FontAwesomeIcon icon={faNodeJs} color='#dd0031'/>
              </div>
              <div className='face2'>
                <FontAwesomeIcon icon={faHtml5} color='#f06529'/>
              </div>
              <div className='face3'>
                <FontAwesomeIcon icon={faCss3} color='#28a4d9'/>
              </div>
              <div className='face4'>
                <FontAwesomeIcon icon={faReact} color='#5ed4f4'/>
              </div>
              <div className='face5'>
                <FontAwesomeIcon icon={faJsSquare} color='#efd81d'/>
              </div>
              <div className='face6'>
                <FontAwesomeIcon icon={faGitAlt} color='#ec4d2f'/>
              </div>
            </div>
          </div>
      </div>
      <Loader type='pacman'/>
    </>

  )
}

export default About