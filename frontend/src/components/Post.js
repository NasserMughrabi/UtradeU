/**
 * @author Nasser Mughrabi
 * @description This is the create post component. It's responsible for the look and functionality of creating a post
 *
 */

import React from "react";
import { useState, useRef, useContext } from "react";
import "./../styles/post.css";
import axios from "axios";
import { FaFile } from "react-icons/fa";
import { PostsContext } from "./PostsContext";

const Post = () => {
  // post object to keep track of post related data
  const [post, setPost] = useState({
    description: "",
    likes: 0,
  });

  // posts state from postsContext
  const [posts, setPosts] = useContext(PostsContext);

  // setPost as post fields change without losing other fields' data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  // when user clicks submit, post object will be sent to express server.
  const handleSubmit = (e) => {
    e.preventDefault();

    if (post.description == "") {
      return;
    } else {
      setPost({ ...post, description: "" });
    }

    axios
      .post("http://localhost:8080/createPost", post) // Discuss with Jacob why this isn't working anymore
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    // re-render the home component/page after creating a post
    setPosts([post, ...posts]);
  };

  // state and onchange function to handle uploading image(s) when creating a post
  const [images, setImages] = useState(null);
  const handleImageChange = (e) => {
    const files = e.target.files;
    const urls = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (event) => {
        urls.push(event.target.result);
        setShowSpinner(true); // show spinner as images loading

        if (urls.length === files.length) {
          setImages(urls);
          setShowSpinner(false); // hide spinner as images loaded
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // state to handle loading images spinner
  const [showSpinner, setShowSpinner] = useState(false);

  return (
    <article className='create-post'>
      <form onSubmit={handleSubmit}>
        <textarea
          className='form-control'
          name='description'
          value={post.description}
          id='post-content'
          placeholder='New Post'
          rows='4'
          onChange={handleChange}
        ></textarea>
        {showSpinner && (
          <div>
            <div class='spinner-border text-primary' role='status'>
              <span class='visually-hidden'>Loading...</span>
            </div>
            <span className='loading-images'>Loading Images... </span>
          </div>
        )}
        {images && (
          <div class='col-md-4' id='col-md-4-id'>
            <div class='profile-img' id='profile-img-id'>
              {images.map((image) => {
                return (
                  <img
                    src={image}
                    className='uploaded-image'
                    alt='Uploaded image'
                  />
                );
              })}
            </div>
          </div>
        )}
        <div class='post-btn-image'>
          <button type='submit' className='btn btn-primary' id='post-left-btn'>
            Post
          </button>
          <input
            class='form-control'
            id='post-right-image'
            type='file'
            onChange={handleImageChange}
            multiple
          />
        </div>
      </form>
    </article>
  );
};

export default Post;
