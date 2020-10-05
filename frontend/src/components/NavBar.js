import React from 'react'
import twitter from '../twitter.png';
import home from './home.svg';

import { Link } from "react-router-dom";
import { HomeIcon } from "./Icons";

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
                        <Link className="nav-link" to="/explore">
                            <i class="fa fa-home" aria-hidden="true"></i> 
                            <span className="text-capitalize ml-3 d-none d-lg-inline">home</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/explore">
                            <i class="fa fa-hashtag" aria-hidden="true"></i> 
                            <span className="text-capitalize ml-3 d-none d-lg-inline">explore</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/explore">
                            <i class="fa fa-bell" aria-hidden="true"></i>
                            <span className="text-capitalize ml-3 d-none d-lg-inline">notifications</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/explore">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            <span className="text-capitalize ml-3 d-none d-lg-inline">messages</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/explore">
                            <i class="fa fa-bookmark" aria-hidden="true"></i>
                            <span className="text-capitalize ml-3 d-none d-lg-inline">bookmarks</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/explore">
                            <i class="fa fa-bookmark" aria-hidden="true"></i>
                            <span className="text-capitalize ml-3 d-none d-lg-inline">list</span>
                        </Link>                    
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/explore">
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <span className="text-capitalize ml-3 d-none d-lg-inline">profile</span>
                        </Link>                    
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/explore">
                            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                            <span className="text-capitalize ml-3 d-none d-lg-inline">more</span>
                        </Link>                    
                    </li>
                </ul>
                <button className="btn text-capitalize">tweet</button>
        </div>
    )
}
