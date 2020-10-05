import React from 'react'
import twitter from '../twitter.png';

import { Link } from "react-router-dom";

export default function navbar() {
    return (
        <div className="navbar it col-2 col-lg-3">
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
                        <Link className="nav-link" to="/list">
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
                    <div className="mt-2"><img src={twitter} height="30" alt="profile_pic" /></div>
                    <div className="ml-3 mt-2 d-none d-lg-block ">
                        <p className="name text-capitalize">name</p>
                        <p className="username">@username</p>
                    </div>
                    {/* <img src={twitter} height="20" alt="dropdown" className="mr-0"/> */}
                </div>

        </div>
    )
}
