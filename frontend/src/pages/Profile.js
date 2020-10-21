import React from 'react'
import Title from "../components/reusables/Title";
import Tweet from "../components/Tweet";
import styled from "styled-components";
import dp from '../dp.jpg';
import { Link } from "react-router-dom";

export default function Profile(props) {
    let act = props.location.pathname || '';
    const pic='https://res.cloudinary.com/lollykrown/image/upload/v1533672970/samples/bike.jpg'


    return (
        <ProfileWrapper className="home col-sm-10 col-md-10 col-lg-6">
            <Title title="profile" titl="Nurse Kay" username='3,378 Tweets' />
            <div className="parent">
                <div className="top-image">
                    <img
                        className="img-fluid img-bd"
                        src={pic}
                        alt="backdrop poster"
                    />
                </div>

                <div className="bg">
                    <div className="d">
                        <div className="dp">
                            <img
                                src={dp}
                                className="img img-fluid"
                                alt="poster"
                            />
                        </div>
                        <div className="end">
                            <Link className="link" to="/">
                                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                            </Link>
                            <Link className="link" to="/notifications">
                                <i className="far fa-bell" aria-hidden="true"></i>
                            </Link>
                            <button className="btn link ml-auto text-capitalize">following</button>
                        </div>

                    </div>
                    <p className="name">Nurse Kay</p>
                    <p className="username">@oluwakayy</p>
                    <p className="bio">Jesus junkie. Nurse. &#128137; &#128138; Software developer. Lazy writer.<br/><br/>
                    Redeeming the image of a Nigerian Nurse, one person at a time. <span className="blue">#Arsenal</span></p>

                    <div className="d-flex pl-0">
                        <p className="text-bold mr-4">2,124<span className="text-capitalize username"> following</span></p>
                        <p className="text-bold">2,325<span className="text-capitalize username"> followers</span></p>

                    </div>
                </div>
                <div className="u">
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
                    </div>
            </div>

            {/* <Tweet tweet={tweet} name='nurse kay' username='@oluwakayy'/>  */}
        </ProfileWrapper>
    )
}


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

  .u {
    position: absolute;
    width: 100%;
    top:31rem;
  }
  .d{
    display:flex;
    justify-content: space-between;
  }
  .end{
    align-self:flex-end;
    padding-bottom:1rem;
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
.fa, .far{
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
  .username{
    color:var(--grey);
  }
`;

