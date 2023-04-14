/**
 * @author Nasser Mughrabi
 * @description This is the create post component. It's responsible for the look and functionality of creating a post
 *
 */

import React from "react";
import { useState, useRef } from "react";
import "./../styles/post.css";
import axios from "axios";

const Post = () => {
  // post object to keep track of post related data
  const [post, setPost] = useState({
    poster: "",
    content: "",
    likes: 0,
  });

  // This function will reset the post object every time the user make any change to the post
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  // when user clicks submit, post object will be sent to express server.
  const handleSubmit = (e) => {
    e.preventDefault();

    if (post.content == '') {
      return;
    }

    axios
      .post("http://localhost:8080/createPost", post) // I need this URL from Cameron
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <article className='create-post'>
      <form onSubmit={handleSubmit}>
        <textarea
          className='form-control'
          name='content'
          value={post.content}
          id='post-content'
          placeholder='New Post'
          rows='4'
          onChange={handleChange}
        ></textarea>
        <button type='submit' className='btn btn-primary'>
          Post
        </button>
      </form>
    </article>
  );
};

export default Post;
