import React from 'react'
import {useState, useRef} from "react"
import "./../styles/post.css"
import axios from 'axios'

const Post = () => {

  const [post, setPost] = useState({
    poster: "",
    content: "",
    likes: 0,
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({...post, [name]: value});
  }

  // when user clicks submit, set post object to express server using the localhost.
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/createPost", post) // I need this URL from Jacob
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <main className='home'>
      <section className="column-1"></section>
      <section className="column-2 list">
        <article className="create-post">
          <form onSubmit={handleSubmit}>
              <textarea className="form-control" name="content" value={post.content} id="post-content" placeholder="New Post" rows="4" onChange={handleChange}></textarea>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </article>
      </section>
      <section className="column-3 chat"></section>
    </main>
  )
}

export default Post