import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/sidebar.css'

const Sidebar = () => (
<>
<div className="sidebar">
  <Link to="/">Home</Link>
  <Link to="/About">About</Link>
  <Link to="/Skills">Skills</Link>
  <Link to="/Hobbies">Hobbies</Link>
  <Link to="/Projects">Projects</Link>
  <Link to="/Blog">Blog</Link>
</div>
</>
)

export default Sidebar;