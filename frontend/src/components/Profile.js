/**
 * @author Nasser Mughrabi
 * @description This is the profile page component. It's responsible for the look and functionality of the page
 *
 */

import React, { useEffect } from "react";
import "./../styles/profile.css";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Dropzone from "react-dropzone";


const Profile = () => {
  // use a profileData object to store the json object recieved from the server/DB
  const [profileData, setProfileData] = useState(null);
  const firstName = useParams().firstName.charAt(0).toUpperCase()+ useParams().firstName.slice(1);

  const [image, setImage] = useState(null);


  useEffect(() => {
    axios
      .get(`http://localhost:8080/profile/${firstName}`) // url will be variable as we go to production env.
      .then((response) => setProfileData(response.data)) // rerender the component everytime he data fetched
      .catch((error) => console.log(error));
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    }

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <div class='container emp-profile'>
      <form method='post'>
        <div class='row'>
          <div class='col-md-4'>
            <div class='profile-img'>
              {!image && <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' alt='Uploaded image' />} {/*Default image */}
              {image && <img src={image} alt='Uploaded image' />} {/*Uploaded image */}
              <div class='file btn btn-lg btn-primary'>
                Change Photo
                <input type='file' name='file' onChange={handleImageChange} />
              </div>
            </div>
          </div>
          <div class='col-md-6'>
            <div class='profile-head'>
              {profileData && (
                <h5>
                  {profileData.firstName} {profileData.lastName}
                </h5>
              )}
              <h6>Computer Science</h6>
              <p class='proile-rating'>
                RATING : <span>8/10</span>
              </p>
              <ul class='nav nav-tabs' id='myTab' role='tablist'>
                <li class='nav-item'>
                  <a
                    class='nav-link active'
                    id='home-tab'
                    data-toggle='tab'
                    href='#home'
                    role='tab'
                    aria-controls='home'
                    aria-selected='true'
                  >
                    About
                  </a>
                </li>
                <li class='nav-item'>
                  <a
                    class='nav-link'
                    id='profile-tab'
                    data-toggle='tab'
                    href='#profile'
                    role='tab'
                    aria-controls='profile'
                    aria-selected='false'
                  >
                    Items
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class='col-md-2'>
            <input
              type='submit'
              class='profile-edit-btn'
              name='btnAddMore'
              value='Edit Profile'
            />
          </div>
        </div>
        <div class='row'>
          <div class='col-md-4'>
            <div class='profile-work'>
              <p>Bio</p>
              {profileData && <a href=''>{profileData.bio}</a>}
              <br />
              <p>Service</p>
              {profileData &&
                profileData.services.map((service) => {
                  return (
                    <>
                      <a href=''>{service}</a>
                      <br />
                    </>
                  );
                })}
            </div>
          </div>
          <div class='col-md-8'>
            <div class='tab-content profile-tab' id='myTabContent'>
              <div
                class='tab-pane fade show active'
                id='home'
                role='tabpanel'
                aria-labelledby='home-tab'
              >
                {/* <div class="row">
                                            <div class="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Kshiti123</p>
                                            </div>
                                        </div> */}
                <div class='row'>
                  <div class='col-md-6'>
                    <label>Name</label>
                  </div>
                  <div class='col-md-6'>
                    {profileData && (
                      <p>
                        {profileData.firstName} {profileData.lastName}
                      </p>
                    )}
                  </div>
                </div>
                <div class='row'>
                  <div class='col-md-6'>
                    <label>Email</label>
                  </div>
                  <div class='col-md-6'>
                    {profileData && <p>{profileData.email}</p>}
                  </div>
                </div>
                <div class='row'>
                  <div class='col-md-6'>
                    <label>Phone</label>
                  </div>
                  <div class='col-md-6'>
                    {profileData && <p>{profileData.phoneNumber}</p>}
                  </div>
                </div>
                <div class='row'>
                  <div class='col-md-6'>
                    <label>Major</label>
                  </div>
                  <div class='col-md-6'>
                    {profileData && <p>{profileData.major}</p>}
                  </div>
                </div>
              </div>
              {/* here go the items */}
              <div
                class='tab-pane fade'
                id='profile'
                role='tabpanel'
                aria-labelledby='profile-tab'
              >
                <div class='row'>
                  <div class='col-md-6'>
                    <label>Experience</label>
                  </div>
                  <div class='col-md-6'>
                    <p>Expert</p>
                  </div>
                </div>
                <div class='row'>
                  <div class='col-md-6'>
                    <label>Hourly Rate</label>
                  </div>
                  <div class='col-md-6'>
                    <p>10$/hr</p>
                  </div>
                </div>
                <div class='row'>
                  <div class='col-md-6'>
                    <label>Total Projects</label>
                  </div>
                  <div class='col-md-6'>
                    <p>230</p>
                  </div>
                </div>
                <div class='row'>
                  <div class='col-md-6'>
                    <label>English Level</label>
                  </div>
                  <div class='col-md-6'>
                    <p>Expert</p>
                  </div>
                </div>
                <div class='row'>
                  <div class='col-md-6'>
                    <label>Availability</label>
                  </div>
                  <div class='col-md-6'>
                    <p>6 months</p>
                  </div>
                </div>
                <div class='row'>
                  <div class='col-md-12'>
                    <label>Your Bio</label>
                    <br />
                    <p>Your detail description</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
