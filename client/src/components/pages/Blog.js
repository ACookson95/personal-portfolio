import React, {Component} from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom'
import BlogNav from './BlogNav'

class Blog extends Component {

  state = { blogs: [] }

  componentDidMount() {
    axios.get('/api/blogs')
      .then( res => {
        this.setState({ blogs: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  } 

  

  render() {
    return(
      <div>
        <div>
          <h1>Blogs</h1>
          <h1>+</h1>
        </div>
      {this.state.blogs.map( b =>
        <BlogNav 
        key={b.id}
        {...b}
        />
        )}
      </div>
    )
  }

}
export default Blog;
