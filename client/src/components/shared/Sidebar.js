import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/sidebar.css'
// import MenuExpand from '../../img/menu-closed-button.svg'

const Sidebar = () => (
<>
<div className="sidebar">
  <Link to="/">Home</Link>
  <Link to="/About">About</Link>
  <Link to="/Hobbies">Hobbies</Link>
  <Link to="/Skills">Skills</Link>
  <Link to="/Projects">Projects</Link>
</div>
{/* <img src={MenuExpand} className="expand-menu"></img> */}
</>
)

export default Sidebar;