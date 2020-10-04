import React from 'react'
import logo from '../logo.svg';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="sidenav">
            <ul className="nav flex-column">
                <Link className="nav-item" to="/">
                    <img src={logo} alt="logo" height="40"/>
                </Link>
                <li className="nav-item">
                    <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/explore">Explore</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Notifications</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link " href="/">Messages</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Bookmarks</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">List</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/profile">Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">More</a>
                </li>
            </ul>
        </div>
    )
}
