import React, { useEffect } from 'react'
import "./../styles/listfeed.css";
import {useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

//icons
import { FaSearch } from "react-icons/fa";
import {FaComment} from "react-icons/fa";
import {FaThumbsUp} from "react-icons/fa";
import {FaShare} from "react-icons/fa";


const ListFeed = () => {

    const [postData, setPostData] = useState({
        description: ""
      });
    useEffect(() => {
        // axios.get("https://randomuser.me/api/")
        //   .then((response) => setProfileData(response.data.results[0]))
        axios.get(`http://localhost:8080/post`)
          //.then((response) => console.log(response))
          .then((response) => setPostData({description:response.data[0].description}))
          .catch((error) => console.log(error));
    }, []);

    return (
    <section class='vh-100'>


<div class="d-flex flex-row justify-content-between align-items-center p-0 bg-white border">
<img src={process.env.PUBLIC_URL + "/images/logo.png"}
    alt='login form'
    class='img-fluid'
    style={{
        borderRadius: "1rem 0 0 1rem",
        width: "378px",
        marginLeft: "auto",
        marginRight: "auto",
    }}/>
</div>

{/* Search Bar */}
<div class="container mt-6 mb-1">
<div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
    <FaSearch/>
  </span>
</div>
</div>


    <div class="container mt-4 mb-5">
    <div class="d-flex justify-content-center row">
        <div class="col-md-8">
            <div class="feed p-2">
                <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white border">
                    <div class="feed-text px-">
                        <form action = "http://localhost:3000/post/">
                        <button class='btn btn-outline-success' type='submit'>Create a Post</button>
                        </form>
                    </div>
                    <div class="feed-icon px-2"><i class="fa fa-long-arrow-up text-black-50"></i></div>
                </div>
                <div class="bg-white border mt-2">
                    <div>
                        <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                            <div class="d-flex flex-row align-items-center feed-text px-2"><img class="rounded-circle" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width="45"/>
                                <div class="d-flex flex-column flex-wrap ml-2"><span class="font-weight-bold">User</span><span class="text-black-50 time">2 hr ago</span></div>
                            </div>
                            <div class="feed-icon px-2"><i class="fa fa-ellipsis-v text-black-50"></i></div>
                        </div>
                    </div>
                    <div class="feed-image p-2 px-3"><img class="img-fluid img-responsive" src="https://cdn.thewirecutter.com/wp-content/media/2022/05/sofa-buying-guide-2048px-67.jpg"/></div>
                    <div class="like p-2 cursor"><h6>{(postData && postData.description)}</h6></div> 
                     {/* <div class="like p-2 cursor"><h6>{postData.description.map( descript => {return <ListFeed description={descript.description}/>})}</h6></div> */}
                    <div class="d-flex justify-content-end socials p-2 py-3"><i class="fa fa-thumbs-up"></i><i class="fa fa-comments-o"></i><i class="fa fa-share"></i></div>
                    <div class="bg-white">
                    <div class="d-flex flex-row fs-12">
                        <div class="like p-2 cursor"><FaThumbsUp/><span class="ml-1">Like</span></div>
                        <div class="like p-2 cursor"><FaComment/><span class="ml-1">Comment</span></div>
                        <div class="like p-2 cursor"><i class="fa fa-share"><FaShare/></i><span class="ml-1">Share</span></div>
                    </div>

                    <div class="d-flex flex-row fs-12">
                        <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">20 Likes</span></div>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
        
    </div>
    
</div>

        </section>
    );
};

export default ListFeed;


