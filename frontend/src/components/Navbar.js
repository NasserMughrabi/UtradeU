import { Link } from "react-router-dom";
import {FaHome} from "react-icons/fa";
import {FaBell} from "react-icons/fa";
import {FaComments} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav class='navbar navbar-expand-lg navbar-light bg-light'>
        <div class='container-fluid'>
          <Link class='navbar-brand' to='/' variant='access'>
            UtradeU
          </Link>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
              <li class='nav-item'>
                <Link class='nav-link active' to='/profile/jacob' variant='profile'>
                  Profile
                </Link>
              </li>
              <li class='nav-item'>
                <Link class='nav-link active' to='/home' variant='home'>
                  Home
                </Link>
              </li>
              <li class='nav-item'>
                <Link class='nav-link active' to='/chat' variant='chat'>
                  Chat
                </Link>
              </li>
            </ul>
            <form class='d-flex'>
              <input
                class='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button class='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
