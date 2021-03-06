import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Topbar from './components/shared/Topbar';
import Sidebar from './components/shared/Sidebar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Hobbies from './components/pages/Hobbies';
import Blog from './components/pages/Blog';
import BlogPage from './components/pages/BlogPage';
import NoMatch from './components/shared/NoMatch'

const App = () => (
  <div className="main-container">
    <Topbar />
      <div className="wrapper">
        <Sidebar />
        <div className="page">
          <Switch>
            <Route to exact path='/' component={Home}/>
            <Route to exact path='/About' component={About}/>
            <Route to exact path='/Contact' component={Contact}/>
            <Route to exact path='/Projects' component={Projects}/>
            <Route to exact path='/Skills' component={Skills}/>
            <Route to exact path='/Hobbies' component={Hobbies}/>
            <Route to exact path='/Blog' component={Blog}/>
            <Route to exact path='/Blog/:id' component={BlogPage}/>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
  </div>
)
export default App;
