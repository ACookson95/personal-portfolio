import React, { Component } from 'react';
import '../../css/blog.css';

class BlogForm extends Component {

  state = { title: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addBlog(this.state)
    this.props.toggleAddBlog()
    this.setState({ title: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <div>
          Blog Title:
          <input 
            type='input'
            name='title'
            value={this.state.title}
            label='Blog Title'
            onChange={this.handleChange}
          />
        </div>
      </form>
    )
  }
}

export default BlogForm