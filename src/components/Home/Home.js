import React, { useState} from 'react';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom'
import './Home.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Loader from 'react-loaders';

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate-hover');
  const nameArray = ['h','a','n','h',' ','Q','u','a','n','g'];
  const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r'];

  setTimeout(() => {
    setLetterClass('text-animate-hover')
  }, 3000)
  

  return (
    <>
      <div className='container home-page'>
          <div className='text-zone'>
              <h1>
                <span className={letterClass}>H</span> 
                <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt='developer'/>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={25}/>
              </h1>

              <h2>Full-Stack Developer / JavaScript Fresher</h2>
              <Link to='/portfolio/contact' className='flat-button'>CONTACT ME</Link>
          </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Home