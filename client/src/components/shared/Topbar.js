import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/topbar.css';
import facebook from '../../img/social/facebook.svg'
import twitter from '../../img/social/twitter.svg'
import instagram from '../../img/social/instagram.svg'
import linkedin from '../../img/social/linkedin.svg'
import github from '../../img/social/github.svg'

const Topbar = () => (

<nav className="topbar">

  <div className="name">
    <Link to="/">Aaron Cookson</Link>
  </div>

  <div className="link-wrapper">
    <div className="social">
      <a href="https://www.facebook.com/Cookson.Aaron" target="_blank"><img src={facebook}/></a>
      <a href="https://www.twitter.com/aaroncookson?lang=en" target="_blank"><img src={twitter}/></a>
      <a href="https://www.instagram.com/aaron_cookson/" target="_blank"><img src={instagram}/></a>
      <a href="https://www.linkedin.com/in/aaron-cookson-127601193/" target="_blank"><img src={linkedin}/></a>
      <a href="https://www.github.com/ACookson95" target="_blank"><img src={github}/></a>
    </div>

    <div className="links">
      <Link to="/Blog">Blog</Link>
      <Link to="/Contact">Contact Me</Link>
      <Link to="/Resume">Resume</Link>
    </div>
  </div>

</nav>
)

export default Topbar;