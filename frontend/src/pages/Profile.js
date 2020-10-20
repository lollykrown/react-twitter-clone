import React from 'react'
import Title from "../components/reusables/Title";
import Tweet from "../components/Tweet";
import styled from "styled-components";
import dp from '../dp.jpg';
import { Link } from "react-router-dom";

export default function Profile() {

    return (
        <ProfileWrapper className="home col-sm-10 col-md-10 col-lg-6">
            <Title title="profile" titl="oluwakayy" username='@oluwakayy'/>
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
                    <p className="namee">Nurse Kay</p>
                    <p className="usernamee">@oluwakayy</p>
                    <p className="bio">God first and Always!<br/>
                    &#128138; 	&#128137; <br/>
                    Bird set free | software developer <br/>
                    <span className="blue">#Arsenal</span></p>

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
    max-height:230px;
  }
  
  .bg {
    background-color: transparent;
    position: absolute;
    width: 90%;
    left: 1.75rem;
    top: 13.5rem;
    z-index: 1;
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
  }
.dp {
    border: 6px solid var(--mainWhite);
  }
  .img{
    width:150px;
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
  .namee, .usernamee{
    line-height: .4;
  }
  .bio{
      line-height:1.2;
      font-size:.9rem;
  }
  .namee{
    margin-top:.5rem;
    font-weight:700 ;
    font-size: 1.125rem;
  }
  .usernamee{
    color:var(--grey);
  }
`;

