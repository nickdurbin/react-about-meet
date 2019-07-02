import React from 'react';

// Font Awesome Style Imports

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import * as Brands from '@fortawesome/fontawesome-brands-solid';

// Image for the Meet Us cards.
import Aaron from '../Aaron.png';
import Carl from '../Carl.png';
import Clif from '../Clif.png';
import Jay from '../Jay.png';
import Nick from '../Nick.png';
import Robert from '../Robert.png';
import Linkedin from '../linkedin-brands.svg';
import Github from '../github-brands.svg';

 
function About () {
  return (
    // This is the About Us Section Main Container
      <div className="about-section"> 
        <div className="about-container">
          <div className="about-header">
            <h2>About LYBL</h2> 
            <hr />
          </div>
        <div className="about-text">
          <p>Here at LYBL we take pride in living life to fullest. Whether it be a nice vacation to an exotic location or simply a night out in your home town, LYBL has you covered. We value the most important commodity you have - your time. Let us do all the hardwork for you and plan your day or night. We want to thank you for stopping by our site but before you go we do have one favor to ask, and that is simply to make sure that you Live Your Best Life!</p>
        </div>
      </div>

      {/* This is the Meet Our Team Section Container */}
      <div className="meet-section">
        <div className="meet-top">

          <div className="meet-card">
            <div className="card-img-container">
              <img src={Aaron} className="card-img" alt="logo" />
            </div>
            <div className="card-text">
              <h3>Aaron Spurgeon</h3>
              <p>
                Full-Stack Web Developer. 
              </p>
              <FontAwesomeIcon icon={Github} />
              <FontAwesomeIcon icon={Linkedin} />
            </div>
          </div>

          <div className="meet-card">
            <div className="card-img-container">
              <img src={Carl} className="card-img" alt="logo" />
            </div>
            <div className="card-text">
              <h3>Carl Redding</h3>
              <p>
                Full-Stack Web Developer.<br />
                UI/UX Design.
              </p>
            </div>
          </div>

          <div className="meet-card">
            <div className="card-img-container">
              <img src={Clif} className="card-img" alt="logo" />
            </div>
            <div className="card-text">
              <h3>Clif Hodges</h3>
              <p>
                Full-Stack Web Developer.<br />
                UI/UX Design.
              </p>
            </div>
          </div>

        </div>

        <div className="meet-bottom">
          <div className="meet-card">
            <div className="card-img-container">
              <img src={Jay} className="card-img" alt="logo" />
            </div>
            <div className="card-text">
              <h3>Jay Leach</h3>
              <p>
                Full-Stack Web Developer.
              </p>
            </div>
          </div>

          <div className="meet-card">
            <div className="card-img-container">
              <img src={Nick} className="card-img" alt="logo" />
            </div>
            <div className="card-text">
              <h3>Nick Durbin</h3>
              <p>
                Full-Stack Web Developer.
              </p>
            </div>
          </div>

          <div className="meet-card">
            <div className="card-img-container">
              <img src={Robert} className="card-img" alt="logo" />
            </div>
            <div className="card-text">
              <h3>Robert Allen</h3>
              <p>
                Full-Stack Web Developer.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>   
  )
}

export default About;