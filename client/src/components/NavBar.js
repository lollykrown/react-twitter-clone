import React, { useContext } from 'react'
import styled from "styled-components";
import twitter from '../twitter.png';
import { Link, withRouter } from "react-router-dom";
import Avatar from "./reusables/Avatar";
import { UserContext } from '../contexts/UserContext';

const NavBar = (props) => {
    const { user } = useContext(UserContext);
    const { username, profileName, profilePictureUrl } = user
   
    let act = props.location.pathname || ''
    return (
        <NavbarContainer className="navbar col-sm-2 col-md-2 col-lg-2">
            <ul className="nav flex-column">
                <li className=''>
                        <Link className="logo-container" to="/">
                            <img src={twitter} alt="logo" className="logo" height="30"/>
                        </Link>
                    </li>
                <li className="nav-item d-flex">
                        <Link className={`nav-link ${act === "/"? 'active': ''}`} to="/">
                            <i className="fa fa-home" aria-hidden="true"></i> 
                            <span className="text-capitalize ml-3 d-none d-lg-inline">home</span>
                        </Link>
                    </li>
                <li className='nav-item'>
                        <Link className={`nav-link ${act === "/explore"? 'active': ''}`} to="/explore">
                            <i className="fa fa-hashtag" aria-hidden="true"></i> 
                            <span className="text-capitalize ml-3 d-none d-lg-inline">explore</span>
                        </Link>
                    </li>
                <li className="nav-item">
                        <Link className={`nav-link ${act === "/notifications"? 'active': ''}`} to="/notifications">
                            <i className="far fa-bell" aria-hidden="true"></i>
                            <span className="text-capitalize ml-3 d-none d-lg-inline">notifications</span>
                        </Link>
                    </li>
                <li className="nav-item">
                        <Link className={`nav-link ${act === "/messages"? 'active': ''}`} to="/messages">
                            <i className="far fa-envelope" aria-hidden="true"></i>
                            <span className="text-capitalize ml-3 d-none d-lg-inline">messages</span>
                        </Link>
                    </li>
                <li className="nav-item">
                        <Link className={`nav-link ${act === "/bookmarks"? 'active': ''}`} to="/bookmarks">
                            <i className="far fa-bookmark" aria-hidden="true"></i>
                            <span className="text-capitalize ml-3 d-none d-lg-inline">bookmarks</span>
                        </Link>
                    </li>
                <li className="nav-item">
                        <Link className={`nav-link ${act === "/lists"? 'active': ''}`} to="/lists">
                            <i className="far fa-list-alt" aria-hidden="true"></i>
                            <span className="text-capitalize ml-3 d-none d-lg-inline">lists</span>
                        </Link>                    
                    </li>
                <li className="nav-item">
                        <Link className={`nav-link ${act === `/${username}`? 'active': ''}`} to={`${username}`}>
                            <i className="far fa-user" aria-hidden="true"></i>
                            <span className="text-capitalize ml-3 d-none d-lg-inline">profile</span>
                        </Link>                    
                    </li>
                <li className="nav-item">
                        <Link className="nav-link" to="/">
                            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                            <span className="text-capitalize ml-3 d-none d-lg-inline">more</span>
                        </Link>                    
                    </li>
                <li className="nav-item d-lg-none ">
                    <Link className="nav-link share-btn" to="/">
                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                    </Link>                    
                </li>
            </ul>
            <button className="btn text-capitalize d-none d-lg-inline mr-4">tweet</button>

            <Link to={`${username}`} className="col-2 col-lg-3 profile-container d-none d-lg-flex  mb-0 ">
                <div className="mt-1"><Avatar src={profilePictureUrl} alt="avatar" /></div>
                <div className="mt-3 d-none d-lg-block ">
                    <p className="name text-capitalize">{profileName}</p>
                    <p className="username text-capitalize">{username}</p>
                </div>
                {/* <i className="fa fa-angle-down dropdown" aria-hidden="true"></i> */}
            </Link>

        </NavbarContainer>
    )
}

const NavbarContainer = styled.div`
max-height: 100vh;
// overflow-y: hidden;
// z-index: 1;
// width:max-content;
// position:fixed;
padding: 0 !important;

  .navbar{
    padding: 0 1rem 0 1rem !important;
  }
  .logo{
    padding: .2rem 1.25rem;
    margin: 0;
  }
  .nav-link{
    font-weight:700 ;
    font-size: 1.125rem;
    color: var(--mainDark);
    padding: .5rem 0 .5rem 1.25rem;
    width: max-content;
    margin: .125rem 0;
  }
  .nav-link:hover, .nav-link:active{
    color: var(--mainBlue);
  }
  .nav-link:hover{
    background-color: var(--lightBlue);
    border-radius: 1.5rem;
    padding: .5rem 1.25rem;
  }
  .active{
    color: var(--mainBlue);
  }
  .logo-container:hover{
    background-color: var(--lightBlue);
    border-radius: 1.5rem;
    padding: 1rem 0;  
  }

  .btn{
    width:100%;
    background-color: #1da1f2;
    margin: 1rem .75rem;
    padding:.75rem 0;
    border-radius: 1.5rem;
    font-weight:700 ;
    font-size: 1rem;
    color: var(--mainWhite);
  }
  .share-btn{
    background-color: var(--mainBlue);
    border-radius: 1.5rem;
    font-size: 1.5rem;
    color: var(--mainWhite);
    padding: .6rem 1.25rem;
    margin: .125rem 0;
  }
  .btn:hover, .share-btn:hover{
    background-color: var(--btnHover);
    color: var(--mainWhite);
  }
  .profile-container{
    margin: 1rem .25rem;
    padding-top: .5rem;
  }
  .profile-container:hover{
    background-color: var(--lightBlue);
    border-radius: 2rem;
    min-width:100%;
  }
  .dropdown{
    // position:absolute;
    margin-left:auto;
    padding:.5rem;
  }
  .name, .username{
    line-height: .1;
  }
  .name{
    font-weight:700 ;
    font-size: 1.125rem;
    color:var(--mainDark);
  }
  .username{
    color:var(--grey);
  }
`;

export default withRouter(NavBar)