import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './Contact.scss';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {

    const refForm = useRef();
    const position = [10.8777622,106.8011063];

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_rrxlrci',
            'template_e71x8wq',
            refForm.current,
            '-lQk6qV2Vgjx71IuR'
        ).then(
            () => {
                alert('Message successfully sent!');
                window.location.reload(false);
            },
            () => {
                alert('Failed to send the message, you need to try again');
            }
        )
    }

    const [letterClass, setLetterClass] = useState('text-animate');
    const strContact = ['C','o','n','t','a','c','t',' ','M','e'];

    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)
    

  return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={strContact} idx={15}/>
                </h1>

                <p>
                Phone: 0784643202
                Email: juliabekool@gmail.com

                </p>
                    
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message'></textarea>
                            </li>
                            <li>
                                <input type='submit' name='submit' value='SEND' className='flat-button' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

            <div className='info-map'>
                Bao Chau,
                <br/>
                VietNam,
                <br/>
                International University 
                <br/>
                Thu Duc, Ho Chi Minh city
                <span>juliabekool@gmail.com</span>
            </div>

            <div className='map-wrap'>
                <MapContainer center={position} zoom={16} key={new Date().getTime()}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            Bao Chau lives here,
                            <br/>
                            Come for a cup of coffee
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>

        <Loader type='pacman'/>
    </>
  )
}

export default Contact