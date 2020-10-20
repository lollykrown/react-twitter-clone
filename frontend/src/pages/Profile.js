import React from 'react'
import Title from "../components/reusables/Title";
import Tweet from "../components/Tweet";
import styled from "styled-components";
import dp from '../dp.jpg';
import { Link } from "react-router-dom";

export default function Profile() {

    return (
        <ProfileWrapper className="home col-sm-10 col-md-10 col-lg-6">
            <Title title="oluwakayy" username='@oluwakayy' icon="null" />
            <div className="parent">
                <div className="top-image">
                    <img
                        className="img-fluid img-bd"
                        src={dp}
                        alt="backdrop poster"
                    />
                </div>

                <div className="bg">
                    <div className="d">
                        <div className="dp">
                            <img
                                src={dp}
                                className="card-img img-fluid"
                                alt="poster"
                            />
                        </div>
                        <div className="end">
                            <Link className="link" to="/">
                                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                            </Link>  
                            <Link className="link" to="/notifications">
                                <i className="far fa-bell" aria-hidden="true"></i>
                            </Link>
                            <button className="btn link ml-auto text-capitalize">following</button>
                        </div>

                    </div>
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
    top:5px;
    z-index:-1;
    max-height:40vh
  }
  
  .bg {
    background-color: transparent;
    position: absolute;
    width: 90%;
    left: 1.75rem;
    top: 12rem;
    z-index: 1;
  }

  .d{
    display:flex;
    justify-content: space-between;
  }
  .end{
    margin: auto 0;  
  }
  .card-img, .dp {
    border-radius: 12rem;
  }
.dp {
    border: 8px solid var(--mainWhite);
  }
.link{
    display:inline;
}

.btn{
    background-color: #1da1f2;
    border-radius: 1.5rem;
    font-weight:700 ;
    padding:.25rem .5rem;
    font-size: 1rem;
    color: var(--mainWhite);
  }
`;

