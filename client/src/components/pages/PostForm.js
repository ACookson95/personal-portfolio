import React, { Component } from 'react';

class BlogForm extends Component {

  state = { 
    title: '',
    img_link: '',
    author: '',
    body: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addPost(this.state)
    this.props.toggleAddPost()
    this.setState({ 
      title: '',
      img_link: '',
      author: '',
      body: ''    
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <div>
          Title:
          <input 
            type='input'
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <div>
          Image Address:
          <input 
            type='input'
            name='img_link'
            value={this.state.img_link}
            onChange={this.handleChange}
          />
        </div>
        <div>
          Author:
          <input 
            type='input'
            name='author'
            value={this.state.author}
            onChange={this.handleChange}
          />
        </div>
        <div>
          Body:
          <textarea
            name='body'
            value={this.state.body}
            onChange={this.handleChange}
          />
        </div>
          <input type="submit"/>
      </form>
    )
  }
}

export default BlogForm