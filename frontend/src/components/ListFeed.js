import React, { useEffect } from 'react'
import "./../styles/listfeed.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState} from 'react'
import axios from 'axios'


const ListFeed = () => {

    const [postData, setPostData] = useState(null);
    useEffect(() => {
        // axios.get("https://randomuser.me/api/")
        //   .then((response) => setProfileData(response.data.results[0]))
        axios.get(`http://localhost:8080/post`)
          .then((response) => console.log(response))
          .then((response) => setPostData(response.data[0].description))
          .catch((error) => console.log(error));
    }, []);


    return (
    <section class='vh-100'>
        {/* <!-- Navbar --> */}
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  {/* <!-- Container wrapper --> */}
  <div class="container-fluid">
    {/* <!-- Toggle button --> */}
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    
    >
      <i class="fas fa-bars"></i>
    </button>

    {/* <!-- Collapsible wrapper --> */}
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <!-- Navbar brand --> */}
      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="/images/logo.png"
          height="50"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      {/* <!-- Left links --> */}
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Chat</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Notifications</a>
        </li>
        
      </ul>
      {/* <!-- Left links --> */}
    </div>
    {/* <!-- Collapsible wrapper --> */}

    {/* <!-- Right elements --> */}
    <div class="d-flex align-items-center">
      {/* <!-- Icon --> */}
      <a class="text-reset me-3" href="#">
        <i class="fas fa-shopping-cart"></i>
      </a>

      {/* <!-- Notifications --> */}
      <div class="dropdown">
        <a
          class="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-bell"></i>
          <span class="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a class="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div>
      {/* <!-- Avatar --> */}
      <div class="dropdown">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            class="rounded-circle"
            height="25"
            alt="Blank Profile Pic"
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a class="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
    {/* <!-- Right elements --> */}
  </div>
  {/* <!-- Container wrapper --> */}
</nav>
{/* <!-- Navbar --> */}

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

<div class="container mt-6 mb-1">
<div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
    {/* <i class="fa fa-search"></i> */}
    {/* <i class="fa fa-search" aria-hidden="true"></i> */}
    {/* <FontAwesomeIcon icon={['fab', 'apple']} /> */}
    <FontAwesomeIcon icon="fas fa-search" />
  </span>
</div>
</div>


    <div class="container mt-4 mb-5">
    <div class="d-flex justify-content-center row">
        <div class="col-md-8">
            <div class="feed p-2">
                <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white border">
                    <div class="feed-text px-">
                        <h6 class="text-black-50 mt-2">Create a Post</h6>
                    </div>
                    <div class="feed-icon px-2"><i class="fa fa-long-arrow-up text-black-50"></i></div>
                </div>
                <div class="bg-white border mt-2">
                    <div>
                        <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                            <div class="d-flex flex-row align-items-center feed-text px-2"><img class="rounded-circle" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width="45"/>
                                <div class="d-flex flex-column flex-wrap ml-2"><span class="font-weight-bold">Thomson ben</span><span class="text-black-50 time">2 hr ago</span></div>
                            </div>
                            <div class="feed-icon px-2"><i class="fa fa-ellipsis-v text-black-50"></i></div>
                        </div>
                    </div>
                    <div class="feed-image p-2 px-3"><img class="img-fluid img-responsive" src="https://cdn.thewirecutter.com/wp-content/media/2022/05/sofa-buying-guide-2048px-67.jpg"/></div>
                    <div class="like p-2 cursor"><h2>{postData && postData.description}</h2></div>
                    <div class="d-flex justify-content-end socials p-2 py-3"><i class="fa fa-thumbs-up"></i><i class="fa fa-comments-o"></i><i class="fa fa-share"></i></div>
                    <div class="bg-white">
                    <div class="d-flex flex-row fs-12">
                        <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">Like</span></div>
                        <div class="like p-2 cursor"><i class="fa fa-commenting-o"></i><span class="ml-1">Comment</span></div>
                        <div class="like p-2 cursor"><i class="fa fa-share"></i><span class="ml-1">Share</span></div>
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


