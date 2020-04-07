import React from 'react';
import './App.css';
import { SocialIcon } from 'react-social-icons';
import me from './images/michaelhenry.jpeg';
import resume from  './images/Resume.pdf'

function App() {
  return (
    <div className="App">
      <div className="top">
        <div className='social-icons'>
        <h1 className="myName">Michael Henry</h1>

        <SocialIcon url='mailto:mhenry16@u.rochester.edu' bgColor= "#5b0E2D" style={{ height: 25, width: 25}} />
        <SocialIcon url='https://www.facebook.com/michael.henry.549' bgColor= "#5b0E2D" style={{ height: 25, width: 25 }} />
        <SocialIcon url='https://www.linkedin.com/in/michael-henry-21853a121/' bgColor= "#5b0E2D" style={{ height: 25, width: 25 }} />
        <SocialIcon url='https://github.com/mhenry16' bgColor= "#5b0E2D" style={{ height: 25, width: 25 }} />

        </div>
      </div>
      <div>
        <img className='picOfMe' src={me} alt='' />
      </div>
      <div className="bottom">
        <div className='content'>
        <p className='textAboutMe'>A software developer who does cool stuff sometimes, check out my resume <a href={resume} target='_blank' rel="noopener noreferrer">here</a></p>
        </div>
      </div>
    </div>
  );
}

export default App;
