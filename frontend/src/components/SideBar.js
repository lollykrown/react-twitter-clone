import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import dp from '../dp.jpg';
import Avatar from "./reusables/Avatar";

export default function SideBar() {
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
            <div className="trends mt-2">
                <div className="d-flex ">
                    <p className="title text-capitalize">Trends for you</p>
                    <i className="fas fa-cog" aria-hidden="true"></i>
                </div>
                <div className="trending-topic">
                    <p className="ti">Trending in nigeria</p>
                    <p className="topic">#TachaOurNipple</p>
                    <p className="no">32.7k Tweets</p>
                </div>
                <div className="trending-topic">
                    <p className="ti">Trending in nigeria</p>
                    <p className="topic">#LagosProtests</p>
                    <p className="no">11.5k Tweets</p>
                </div>
                <div className="trending-topic">
                    <p className="ti">Trending in nigeria</p>
                    <p className="topic">#room402</p>
                    <p className="no">32.7k Tweets</p>
                </div>
                <div className="trending-topic">
                    <p className="ti">Trending in nigeria</p>
                    <p className="topic">#Didi</p>
                    <p className="no">29k Tweets</p>
                </div>
                <div className="trending-topic">
                    <p className="ti">Trending in nigeria</p>
                    <p className="topic">#room306</p>
                    <p className="no">18.7k Tweets</p>
                </div>
                <div className="show ">
                    <Link to='/' className="link">Show more</Link>
                </div>
            </div>
            <div className="trends mt-3">
                <p className="whoto text-capitalize">Who to follow</p>

                <div className="follow trending-topic">
                    <div className="col-3"><Avatar src={dp} alt="avatar" /></div>
                    <div className="col-6 ">
                        <p className="name text-capitalize">nurse kay</p>
                        <p className="username text-capitalize">@oluwakayy</p>
                        <p className="ti d-none">promoted</p>
                    </div>
                    <button className="btn col-3">tweet</button>
                </div>
                <div className="trending-topic mt-1">
                    <p className="ti">Trending in nigeria</p>
                    <p className="topic">#TachaOurNipple</p>
                    <p className="no">32.7k Tweets</p>
                </div>
                <div className="trending-topic mt-1">
                    <p className="ti">Trending in nigeria</p>
                    <p className="topic">#LagosProtests</p>
                    <p className="no">11.5k Tweets</p>
                </div>
                <div className="trending-topic mt-1">
                    <p className="ti">Trending in nigeria</p>
                    <p className="topic">#room402</p>
                    <p className="no">32.7k Tweets</p>
                </div>
                <div className="trending-topic mt-1">
                    <p className="ti">Trending in nigeria</p>
                    <p className="topic">#Didi</p>
                    <p className="no">29k Tweets</p>
                </div>
                <div className="trending-topic mt-1">
                    <p className="ti">Trending in nigeria</p>
                    <p className="topic">#room306</p>
                    <p className="no">18.7k Tweets</p>
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
    .title, .whoto{
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
    .ti, .no, .username{
        font-size:.75rem;
        color:var(--grey);
        margin:0;
    }
    .topic, .name{
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

`;