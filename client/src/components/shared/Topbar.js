import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'
import '../../css/topbar.css';

const Topbar = () => (
<>
<nav className="topbar">
  <div className="name">
    <Link to="/">Aaron Cookson</Link>
  </div>
  <div className="links">
    <div>
      <Icon name='twitter' color="white"/>
    </div>
    <Link to="/Contact">Contact Me</Link>
    <Link to="/Resume">Resume</Link>
  </div>
</nav>
</>
)

export default Topbar;