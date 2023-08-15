import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';




function About() {
  return (
    <div className="about-container">
     
      <div  className="content" >
      <h1 >K & A PHOTOGRAPHY</h1>
        <p>
        Hi, we are Your Visual Storyteller
        <br />
         Welcome to our corner of creativity! we are passionate photographers with a love for capturing life's most beautiful moments.
         <p><strong>Embarking on a Photographic Journey</strong></p>

        our fascination with photography began during a backpacking trip through Europe. Armed with a simple point-and-shoot camera,
         I found myself captivated by the way a single photograph could encapsulate an entire experience. 
       That was the spark that ignited my journey into the world of photography.
        </p>

        <br />
        <br />
        <ul className="list">
          <li>
            <FontAwesomeIcon icon={faPhone} className="icon" />
            +21629494524
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} className="icon-facebook" />
            https://www.facebook.com/profile.php?id=61550103963683
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} className="icon-envelope" />
            portfoliophotography9@gmail.com
          </li>
        </ul>
      </div>
      <div className="image-container">
        <img
          src="https://th.bing.com/th/id/R.428c5d1ee95a10ebbe389ddc9fe4835c?rik=A0fMqUgFR%2f3qpg&pid=ImgRaw&r=0"
          alt="About Me"
          className="about-image"
        />
      </div>
    </div>
  );
}

export default About;
