import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import Avatar from "./reusables/Avatar";
import Trends from "./reusables/Trends";

export default function SideBar() {
    const profilePictureUrl='https://res.cloudinary.com/lollykrown/image/upload/v1533672970/samples/bike.jpg'

    return (
        <SidebarContainer className="sidebar it col-lg-3 d-none d-lg-block">
            <form className="form-inline search-form mb-2 mt-1">
                <input
                className="form-control search"
                type="search"
                placeholder="&#128269; Search Twitter"
                aria-label="Search"
                />
            </form>
            <Trends />
            <div className="trends mt-3">
                <p className="whoto text-capitalize">Who to follow</p>

                <div className="follow trending-topic">
                    <div className=""><Avatar src={profilePictureUrl} alt="avatar" /></div>
                    <div className=" ">
                        <p className="name text-capitalize">nurse kay</p>
                        <p className="username text-capitalize">@oluwakayy</p>
                        <p className="ti d-none">promoted</p>
                    </div>
                    <button className="btnn ml-auto text-capitalize">follow</button>
                </div>
                
                <div className="follow trending-topic">
                    <div className=""><Avatar src={profilePictureUrl} alt="avatar" /></div>
                    <div className=" ">
                        <p className="name text-capitalize">nurse kay</p>
                        <p className="username text-capitalize">@oluwakayy</p>
                        <p className="ti d-none">promoted</p>
                    </div>
                    <button className="btnn ml-auto text-capitalize">follow</button>
                </div>
                
                <div className="follow trending-topic">
                    <div className=""><Avatar src={profilePictureUrl} alt="avatar" /></div>
                    <div className=" ">
                        <p className="name text-capitalize">nurse kay</p>
                        <p className="username text-capitalize">@oluwakayy</p>
                        <p className="ti d-none">promoted</p>
                    </div>
                    <button className="btnn ml-auto text-capitalize">follow</button>
                </div>
                <div className="show mt-1">
                    <Link to='/' className="link">Show more</Link>
                </div>
            </div>
        </SidebarContainer>
    )
}
const SidebarContainer = styled.div`
    padding:0;

    .search-form{
        width:100%;
    }
    .search{
        margin-left: 1.25rem;
        border:none;
        width:100%;
        border-radius: 1rem;
        background-color: var(--search);
    }
    .trends{
        background-color: var(--sidebarBg);
        margin-left: 1.25rem;
        border-radius: .75rem;
        padding: .4rem 0 0 0;

    }
    .d-flex, .whoto{
        border-bottom: .1rem solid var(--search);
        padding: 0 .75rem;
    }
    .whoto{
        font-weight:800 ;
        font-size: 1rem;
        margin-bottom:.25rem;
    }
    .fas{
        margin-left:auto;
        font-size:1rem;
        color: var(--mainBlue);
        padding: 0 .5rem;
        line-height:inherit;
    }

    .fas:hover{
        background-color: var(--lightBlue);
        border-radius: 2rem;
        padding: 0 .5rem;
    }
    .trending-topic{
        border-bottom: .1rem solid var(--search);
        padding: .35rem .75rem;
    }
    .ti, .username{
        font-size:.75rem;
        color:var(--grey);
        margin:0;
    }
    .name{
        font-weight:700;
        font-size:.91rem;
        margin:0;
    }
    .link{
        font-size:.91rem;
        text-decoration:none;
    }
    .trending-topic:hover, .show:hover{
        background-color: var(--search);  
    }
    .show{
        padding: .5rem .75rem;
    }
    .show:hover{
        background-color: var(--search);  
        border-bottom-left-radius: .75rem;
        border-bottom-right-radius: .75rem;
    }
    .follow{
        display:flex;
    }
    .btnn{
        margin-top:1rem;
        height:max-content;
        padding: 0 .75rem !important;
        border-radius: .75rem;
        border: solid .1rem var(--mainBlue);
        font-weight:700 ;
        font-size: .75rem;
        color: var(--mainBlue);
      }
      .btnn:hover{
        background-color: var(--disabledBlue);
        padding: 0 .75rem !important;
        font-size: .75rem;
      }

`;
