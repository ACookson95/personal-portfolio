import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BlogForm from './BlogForm';
import PostForm from './PostForm';
import DeleteButton from '../../img/delete.svg';
import DeleteBlueButton from '../../img/delete-blue.svg';
import AddItem from '../../img/plus.svg'
import EditButton from '../../img/edit.svg';
import '../../css/blog.css';

class BlogPage extends Component {

  state = { 
    blogs: [],
    posts: [],
    addingBlog: false,
    addingPost: false
  }


  componentDidMount() {
    axios.get('/api/blogs')
      .then( res => {
        this.setState({ blogs: res.data})
      })
      .catch( err => {
        console.log(err)
      })
      axios.get(`/api/blogs/${this.props.location.state.id}/posts`)
        .then( res => {
          this.setState({ posts: res.data})
          console.log(this.state.blogs)
        })
        .catch( err => {
          console.log(err)
        })
        
    } 

  getPosts =(i) => {
    axios.get(`/api/blogs/${this.state.blogs[i].id}/posts`)
      .then( res => {
        this.setState({ posts: res.data })
      })
      .catch( err => {
      })
    }

  toggleAddBlog = () => { this.setState({ addingBlog: !this.state.addingBlog }) }
  
  toggleAddPost = () => { this.setState({ addingPost: !this.state.addingPost }) }

  resetPost = () => {
    this.setState({posts: []})
  }

  addBlog = (blog) => {
    axios.post('/api/blogs', blog)
      .then( res => {
        const { blogs } = this.state
        this.setState({ blogs: [...blogs, res.data]})
      })
      .catch( err => {
        console.log(err)
      })
  }

  deleteBlog = (id) => {
    axios.delete(`/api/blogs/${id}`)
    .then( res => {
      const { blogs } = this.state
      this.setState({blogs: blogs.filter( b => b.id !== id)})
    })
    .catch( err => {
      console.log(err)
    })
  }

  addPost = (post) => {
    axios.post(`/api/blogs/${this.props.location.state.id}/posts`, post)
      .then( res => {
        const { posts } = this.state
        this.setState({ posts: [...posts, res.data] })
      })
      .catch(err =>
        console.log(err)
      )}

  deletePost = (blog_id, id) => {
    axios.delete(`/api/blogs/${blog_id}/posts/${id}`)
    .then( res => {
      const { posts } = this.state
      this.setState({posts: posts.filter( p => p.id !== id)})
    })
    .catch( err => {
      console.log(err)
    })
  }

  render() {
    return(
      <div>
       <div className="blog-nav">
          {
            this.state.blogs.map( (b, i) => 
            <div key={b.id} className="blog-nav-item">
              <Link
              to ={{
                pathname: `/Blog/${b.id}`,
                state: {...b}
              }}
              onClick={() => this.getPosts(i)}
              >
                {b.title}
              </Link>
              <img src={DeleteButton} onClick={() => this.deleteBlog(b.id)} width="15px"/>
              <img src={EditButton} width="15px"/>
            </div>
            )
          }
        <img src={AddItem} onClick={this.toggleAddBlog} width="20px"/>
        </div>
        {this.state.addingBlog === true ? <BlogForm addBlog={this.addBlog} toggleAddBlog={this.toggleAddBlog}/>: <></>}
      <h1>
        {this.props.location.state.title} Blog Page
      </h1>
      <button onClick={() => this.toggleAddPost()}>Create Post</button>
      { this.state.addingPost === false ?
        this.state.posts.map( p =>
          <div key={p.id} className="post-card">
            <div className="header">
              <img src={p.img_link}/>
                <div className="description">
                  <div className="menu">
                    <img src={DeleteBlueButton} onClick={() => this.deletePost(p.blog_id,p.id)}/>
                  </div>
                  <div>
                    <h1>{p.title}</h1>
                    <div>by {p.author}</div>
                  </div>
                </div>
            </div>
            <div className="body">{p.body}</div>
          </div>
        )
      :
      <PostForm  addPost={this.addPost} toggleAddPost={this.toggleAddPost} />
      }
    </div>
    )
  }
}

export default BlogPage