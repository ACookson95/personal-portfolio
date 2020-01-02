import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

class Blog extends Component {

  state = { 
    blogs: [],
    firstBlog: {},
    firstBlogID: ''
  }

  componentDidMount() {
    axios.get('/api/blogs')
      .then( res => {
        this.setState({ blogs: res.data})
        this.firstBlog()
      })
      .catch( err => {
        console.log(err)
      })
  } 

  firstBlog = () => {
    this.setState({
      firstBlog: this.state.blogs[0],
      firstBlogID: this.state.blogs[0].id
    })
  }

  

  render() {
    return(
      <div>
        <Redirect to={{
          pathname: `/Blog/${this.state.firstBlogID}`,
          state: {...this.state.firstBlog}
        }} 
        key={this.state.firstBlogID}/>
      </div>
    )
  }

}
export default Blog;
