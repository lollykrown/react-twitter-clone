import React, { useState, useRef, useEffect, useContext } from 'react'
import Title from "../components/reusables/Title";
import Tweet from "../components/Tweet";
import styled from "styled-components";
import { Link, withRouter, useLocation } from "react-router-dom";
import axios from 'axios'
import moment from 'moment';
import { DataContext } from "../contexts/dataContext";

const Profile = (props) => {
    const { tweets, user, addUser } = useContext(DataContext)

    let act = props.location.pathname || '';

    let loc = useLocation();
    const nameSlash = loc.pathname;
    const name = nameSlash.substring(1, nameSlash.length);
    const userName = name || localStorage.getItem('username');

    const signal = useRef(axios.CancelToken.source());

    const goBack = () => {
        props.history.goBack()
    }
    useEffect(() => {

        const getUser = async (str) => {
            const url = `http://localhost:5000/${str}`;
            try {
                const res = await axios.get(url, {
                    withCredentials: true,
                    cancelToken: signal.current.token
                })

                console.log(res.data)
                addUser(res.data.user)
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message);
                } else {
                    throw error
                }
            }
        };

        getUser(userName)
        return () => {
            console.log('unmount and cancel running axios request');
            signal.current.cancel('Operation canceled by the user.');
        };
    }, [userName])

    const { _id: userId, username, profileName, bio, profilePictureUrl, backdropUrl, dateJoined, followers,
        followersCount, following, followingCount, tweetsCount, location, website, birthDay } = user;

    const followButton = async (username, action) => {
        const url = `http://localhost:5000/${username}/${action}`;
        try {
            const res = await axios.post(url, { userId: userId }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true,
                cancelToken: signal.current.token
            })
            console.log('following', res.data)

            if (!res.status) {
                console.log(res.data.message)
                return;
            }
        } catch (err) {
            if (axios.isCancel(err)) {
                console.log('Get request canceled');
                console.log(err.message)
            } else {
                console.log(err.message)
                //setErrors(err.message)
            }
        }


        return () => {
            console.log('unmount and cancel running axios request');
            signal.current.cancel('Operation canceled by the user.');
        };
    }
    return (
        <ProfileWrapper className="home col-sm-10 col-md-10 col-lg-6">
            <Title title="profile" titl={profileName} back={goBack} username={`${tweetsCount}k tweets`} />
            <div className="parent">
                <div className="top-image">
                    <img
                        className="img-fluid img-bd"
                        src={backdropUrl}
                        alt="backdrop poster"
                    />
                </div>

                <div className="bg">
                    <div className="d">
                        <div className="dp">
                            <img
                                src={profilePictureUrl}
                                className="img img-fluid"
                                alt="poster"
                            />
                        </div>
                        <div className="end">
                            <Link className="link" to="/">
                                <i className="p fa fa-ellipsis-h" aria-hidden="true"></i>
                            </Link>
                            <Link className="link" to="/notifications">
                                <i className="p far fa-bell" aria-hidden="true"></i>
                            </Link>
                            {(name !== localStorage.getItem('username')) ?
                                <button onClick={() => followButton(localStorage.getItem('username'), 'following')} className="btn link ml-auto text-capitalize">
                                    following
                            </button> : null}
                        </div>

                    </div>
                    <p className="name">{profileName}</p>
                    <p className="username">@{username}</p>
                    <p className="bio">{bio}</p>

                    <div className="d-flex pl-0 bio">
                        {location && <div className="mr-2">
                            <i className="li fa fa-map-marker mr-2" aria-hidden="true" />
                            <span className="sga">{location}</span>
                        </div>}
                        {website && <div className="mr-2">
                            <i className="li fa fa-link mr-2" aria-hidden="true" />
                            <span className="sga">{website}</span>
                        </div>}
                        {birthDay && <div className="mr-2">
                            <i className="li fa fa-map-pin mr-2" aria-hidden="true" />
                            <span className="sga">Born {moment(birthDay).format('MMMM d')}</span>
                        </div>}
                        {dateJoined && <div className="">
                            <i className="li far fa-calendar-plus mr-2" aria-hidden="true" />
                            <span className="sga">Joined {moment(dateJoined).format('MMMM YYYY')}</span>
                        </div>}
                    </div>

                    <div className="d-flex pl-0">
                        <Link className="mr-4" to={`/${username}/followers`}>
                            <span className="digit">{followersCount}</span>
                            <span className="text-capitalize username"> following</span>
                        </Link>
                        <Link to={`/${username}/followers`}>
                            <span className="digit">{followingCount}</span>
                            <span className="text-capitalize username"> followers</span>
                        </Link>
                    </div>
                </div>
                {/* <div className="u">
                    <ul className="nav nav-fill ">
                        <li className="nav-item tab-cont">
                            <Link className={`nav-link text-capitalize tab acti`} to="/profile/tweets">tweets</Link>
                        </li>
                        <li className="nav-item tab-cont">
                            <Link className={`nav-link text-capitalize tab ${act === "/profile/with_replies" ? 'acti' : ''}`} to="/profile/with_replies">tweets &amp; replies</Link>
                        </li>
                        <li className="nav-item tab-cont">
                            <Link className={`nav-link text-capitalize tab ${act === "/profile/media" ? 'acti' : ''}`} to="/profile/media">media</Link>
                        </li>
                        <li className="nav-item tab-cont">
                            <Link className={`nav-link text-capitalize tab ${act === "/profile/likes" ? 'acti' : ''}`} to="/profile/likes">likes</Link>
                        </li>
                    </ul>
                </div> */}

                <nav className="u">
                    <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                        <a className={`nav-item nav-link text-capitalize acti`} id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">tweets</a>
                        <a className={`nav-item nav-link text-capitalize ${act === "/profile/likes" ? 'acti' : ''}`} id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">tweets &amp; replies</a>
                        <a className="nav-item nav-link text-capitalize" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">media</a>
                        <a className="nav-item nav-link text-capitalize" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">likes</a>
                    </div>
                </nav>
                <div className="up tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        {tweets.map((tweet, i) => <Tweet key={i} tweet={tweet} />)}
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        fdsfghjhgfdhg
                    </div>
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        last
                    </div>
                </div>
            </div>

            {/* <Tweet tweet={tweet} name='nurse kay' username='@oluwakayy'/>  */}
        </ProfileWrapper>
    )
}
export default withRouter(Profile)

const ProfileWrapper = styled.div`
.top-image, .img-bd {
    position:relative;
    width:100%;
    z-index:-1;
    max-height:200px;
  }
  
  .bg {
    background-color: transparent;
    position: absolute;
    width: 90%;
    left: 1rem;
    top: 10.5rem;
    z-index: 1;
  }
  .d{
    display:flex;
    justify-content: space-between;
  }
  .end{
    align-self:flex-end;
    padding-bottom:.75rem;
  }
  .img, .dp {
    border-radius: 12rem;
    width:150px;
  }
  .img{
      height:140px;
  }
.dp {
    border: 6px solid var(--mainWhite);
  }
.link{
    display:inline;
}
a{
    text-decoration:none;
    color: var(--mainBlue);
}
.p{
    font-size: 1.25rem;
    color: var(--mainBlue);
    border: 1px solid var(--mainBlue);
    border-radius: 1.5rem;
    padding: .7rem;
    width: max-content;
    margin: .125rem .5rem .125rem 0;
}
.btn{
    background-color: #1da1f2;
    border-radius: 1.5rem;
    font-weight:700 ;
    padding:.35rem .75rem;
    font-size: 1rem;
    color: var(--mainWhite);
  }
  .name, .username{
    line-height: .4;
  }
  .bio{
      line-height:1.2;
      font-size:.9rem;
  }
  .name{
    margin-top:.5rem;
    font-weight:700 ;
    font-size: 1.125rem;
  }
  .username, .sga{
    color:var(--grey);
  }
  .digit{
      font-weight:700;
      color:var(--mainDark);
  }
  .li{
      color:var(--mainBlue);
      font-size: 1.125rem;
  }

  .u {
    position: absolute;
    width: 100%;
    top:31rem;
    border-bottom:.125rem solid var(--search);
  }
  .up {
    position: absolute;
    width: 100%;
    top:33.5rem;
    padding:1rem;
  }
  .nav-item{
    font-weight:700;
    color: var(--grey);
    border:none;
    padding:.75rem 0;
  }
  .nav-item:hover{
    background-color: var(--lightBlue);
    color: var(--mainBlue);
  }
  .acti{
    border-bottom:.15rem solid var(--mainBlue);
    color: var(--mainBlue);
  }
`;

