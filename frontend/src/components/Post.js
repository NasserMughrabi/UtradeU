import React from 'react'
import {useState, useRef} from "react"
import "./../styles/post.css"

const Post = () => {

  const [post, setPost] = useState({
    poster: "",
    content: "",
    likes: 0,
  })

  const contentEl = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setPost({
      content: contentEl.current.value,
      likes: 0,
    });
  }

  // console.log(post);
  
  return (
    <main className='home'>
      <section className="column-1"></section>
      <section className="column-2 list">
        <article className="create-post">
          <form onSubmit={handleSubmit}>
              <textarea ref={contentEl} className="form-control" name="postContent" id="post-content" placeholder="New Post" rows="4"></textarea>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </article>
      </section>
      <section className="column-3 chat"></section>
    </main>
  )
}

export default Post