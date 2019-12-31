import React, {Component} from 'react'
import BlogNav from './BlogNav'
import Blog from './Blog'


class BlogPage extends Component {

  render() {
    return(
      <div>
      <BlogNav />
      <h1>
        {this.props.location.state.title} Blog Page
      </h1>

      <p>loop through all of the posts here.</p>
    </div>
    )
  }
}

export default BlogPage