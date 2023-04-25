import "./../styles/listfeed.css";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { PostsContext } from "./PostsContext";
import Comments from "./Comments";

//icons
import { FaSearch } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const ListFeed = () => {
  //const [posts, setPosts] = useState(null);
  const [pictures, setPictures] = useState([]);
  const [posts, setPosts] = useContext(PostsContext);

  // Get all posts from backend/express.js
  useEffect(() => {
    axios
      .get(`http://localhost:8080/posts?`)
      .then((response) => setPosts(response.data.reverse()))
      // .then((response) => console.log(response.data.reverse()[0]))
      .catch((error) => console.log(error));
      
  }, []); // this will have to change later to use sockets for real-time communication. We don't really need to show this, but we can do that. Remove posts because this is not the optimal way of doing it.
  
  return (
    <section class='vh-100'>
      {posts &&
        posts.map((post) => {
          return (
            <article className='post-article'>
              <div class='container mt-4 mb-5'>
                <div class='d-flex justify-content-center row'>
                  <div id='col-md-8-id' class='col-md-8'>
                    <div class='feed p-2'>
                      <div class='bg-white border mt-2'>
                        <div>
                          <div class='d-flex flex-row justify-content-between align-items-center p-2 border-bottom'>
                            <div class='d-flex flex-row align-items-center feed-text px-2'>
                              <img
                                class='rounded-circle'
                                src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                                width='45'
                              />
                              <div class='d-flex flex-column flex-wrap ml-2'>
                                <span class='font-weight-bold'>
                                  {post.user || "User"}
                                </span>
                                <span class='text-black-50 time'>2 hr ago</span>
                              </div>
                            </div>
                            <div class='feed-icon px-2'>
                              <i class='fa fa-ellipsis-v text-black-50'></i>
                            </div>
                          </div>
                        </div>
                        <div class='feed-image p-2 px-3'>
                          {
                            post.pictureURL ? <img
                            class='img-fluid img-responsive'
                            src={`http://localhost:8080/uploads/${post.pictureURL}`}
                          /> : <img
                          class='img-fluid img-responsive'
                          src='https://cdn.thewirecutter.com/wp-content/media/2022/05/sofa-buying-guide-2048px-67.jpg'

                        />
                          }
                          
                        </div>
                        <div class='like p-2 cursor'>
                          <h6>{post.description}</h6>
                        </div>
                        <div class='like p-2 cursor'>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dolorum mollitia doloribus doloremque,
                          consectetur sint quas assumenda ipsa, iusto quisquam
                          perferendis iure qui quos obcaecati vel amet sit
                          molestias? Sequi, error?
                        </div>

                        <div class='d-flex justify-content-end socials p-2 py-3'>
                          <i class='fa fa-thumbs-up'></i>
                          <i class='fa fa-comments-o'></i>
                          <i class='fa fa-share'></i>
                        </div>
                        <div class='bg-white'>
                          <div class='d-flex flex-row fs-12'>
                            <div class='like p-2 cursor'>
                              <FaThumbsUp />
                              <span class='ml-1'> Like</span>
                            </div>
                            <div class='like p-2 cursor'>
                              <a href="/comments">
                              <FaComment />
                              <span class='ml-1'> Comment</span>
                              </a>
                            </div>
                            <div class='like p-2 cursor'>
                              <i class='fa fa-share'>
                                <FaShare />
                              </i>
                              <span class='ml-1'> Share</span>
                            </div>
                            <div class='like p-2 cursor'>
                              <a href="/chat">
                              <i class='fa fa-envelope'>
                                <FaEnvelope />
                              </i>
                              <span class='ml-1'> Message the Seller</span>
                              </a>
                            </div>
                          </div>

                          <div class='d-flex flex-row fs-12'>
                            <div class='like p-2 cursor'>
                              <i class='fa fa-thumbs-o-up'></i>
                              <span class='ml-1'>{post.likes} Likes</span>
                            </div>
                          </div>
                {/* Comments */}
                          <div class="media-block">
                <a class="media-left" href="#"><img class="img-circle img-sm" alt="Profile Picture" src="https://bootdey.com/img/Content/avatar/avatar2.png"/></a>
                <div class="media-body">
                  <div class="mar-btm">
                    <a href="#" class="btn-link text-semibold media-heading box-inline">Bobby Marz</a>
                    <p class="text-muted text-sm"><i class="fa fa-mobile fa-lg"></i>  7 min ago</p>
                  </div>
                  {/*<p> {post.comments.commenter} </p>*/}
                  <div class="pad-ver">
                    <div class="btn-group">
                      <a class="btn btn-sm btn-default btn-hover-success active" href="#"><i class="fa fa-thumbs-up"></i> Like </a>
                      <a class="btn btn-sm btn-default btn-hover-danger" href="#"><i class="fa fa-thumbs-down"></i></a>
                    </div>
                    <a class="btn btn-sm btn-default btn-hover-primary" href="#">Comment</a>
                  </div>
                </div>
              </div>
              {/* Comments */}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
    </section>
  );
};

export default ListFeed;
