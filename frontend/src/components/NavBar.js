import React from 'react'
import styled from "styled-components";
import twitter from '../twitter.png';
import kay from '../kay.jpg';
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

export default function navbar() {
    return (
        <NavbarContainer className="navbar it col-2 col-lg-3">
            <ul className="nav flex-column">
                <li className="">
                        <Link className="logo-container" to="/">
                            <img src={twitter} alt="logo" className="logo" height="30"/>
                        </Link>
                    </li>
                <li className="nav-item d-flex">
                        <Link className="nav-link" to="/home">
                            <i className="fa fa-home" aria-hidden="true"></i> 
                            <span className="text-capitalize ml-3 d-none d-lg-inline">home</span>
                        </Link>
                    </li>
                <li className="nav-item">
                        <Link className="nav-link" to="/explore">
                            <i className="fa fa-hashtag" aria-hidden="true"></i> 
                            <span className="text-capitalize ml-3 d-none d-lg-inline">explore</span>
                        </Link>
                    </li>
                <li className="nav-item">
                        <Link className="nav-link" to="/notifications">
                            <i className="fa fa-bell" aria-hidden="true"></i>
                            <span className="text-capitalize ml-3 d-none d-lg-inline">notifications</span>
                        </Link>
                    </li>
                <li className="nav-item">
                        <Link className="nav-link" to="/messages">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <span className="text-capitalize ml-3 d-none d-lg-inline">messages</span>
                        </Link>
                    </li>
                <li className="nav-item">
                        <Link className="nav-link" to="/bookmarks">
                            <i className="fa fa-bookmark" aria-hidden="true"></i>
                            <span className="text-capitalize ml-3 d-none d-lg-inline">bookmarks</span>
                        </Link>
                    </li>
                <li className="nav-item">
                        <Link className="nav-link" to="/lists">
                            <i className="fa fa-bookmark" aria-hidden="true"></i>
                            <span className="text-capitalize ml-3 d-none d-lg-inline">list</span>
                        </Link>                    
                    </li>
                <li className="nav-item">
                        <Link className="nav-link" to="/profile">
                            <i className="fa fa-user" aria-hidden="true"></i>
                            <span className="text-capitalize ml-3 d-none d-lg-inline">profile</span>
                        </Link>                    
                    </li>
                <li className="nav-item">
                        <Link className="nav-link" to="/">
                            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                            <span className="text-capitalize ml-3 d-none d-lg-inline">more</span>
                        </Link>                    
                    </li>
            </ul>
            <button className="btn text-capitalize mb-4">tweet</button>

            <div className="col-2 col-lg-3 profile-container d-flex mt-4 mb-0">
                <div className="mt-1"><Avatar src={kay} alt="avatar" /></div>
                <div className="mt-3 d-none d-lg-block ">
                    <p className="name text-capitalize">nazarite&#8482;</p>
                    <p className="username text-capitalize">@lollykrown</p>
                </div>
                {/* <img src={twitter} height="20" alt="dropdown" className="mr-0"/> */}
            </div>

        </NavbarContainer>
    )
}

const NavbarContainer = styled.div`
  .navbar{
    padding: 0 1rem;
  }
  .logo{
    padding: .2rem 1.25rem;
    margin: .75rem 0;
  }
  .nav-link{
    font-weight:700 ;
    font-size: 1.25rem;
    color: var(--mainDark);
    padding: .6rem 0 .6rem 1.25rem;
    margin: .2rem 0;
  }
  .nav-link:hover, .nav-link:active{
    color: var(--mainBlue);
  }
  .nav-link:hover{
    background-color: var(--lightBlue);
    border-radius: 1.5rem;
    width: max-content;
    padding: .6rem 1.25rem;
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
  .btn:hover{
    background-color: var(--btnHover);
    color: var(--mainWhite);
  }
  .profile-container{
    margin: 1rem .25rem;
    padding:.75rem .5;
  }
  .profile-container:hover{
    background-color: var(--lightBlue);
    border-radius: 1.5rem;
    padding:3rem .5 !important;
    min-width:100%;
  }
  .name, .username{
    line-height: .1;
  }
  .name{
    font-weight:700 ;
    font-size: 1.125rem;
  }
`;