import React from 'react';
import '../Styles/AboutMe.css';

function AboutMe() {
    return (
        <div className='body'> 
            <p className='photoContainer'>Nicholas Gianino</p>
            <div className='photoContainer'>
                <img src="images/me.png" alt="Me" className='myPhoto' />
            </div>      
            <div className='photoBorder'></div>      
            <div>
                <p>ABOUT ME WILL GO HERE</p>
            </div>
        </div>
    );
};

export default AboutMe;