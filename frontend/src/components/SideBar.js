import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SideBar() {
    return (
        <SidebarContainer className="sidebar it col-lg-3 d-none d-lg-block">
            <form className="form-inline search-form mb-2">
                <input
                className="form-control search"
                type="search"
                placeholder="&#128269; Search Twitter"
                aria-label="Search"
                />
            </form>
            <div className="trends mt-3">
                <div className="d-flex ">
                    <p className="title text-capitalize">Trends for you</p>
                    <i className="fas fa-cog" aria-hidden="true"></i>
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
                <div className="trending-topic mt-1">
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
        width:100%;
        border-radius: 1rem;
        background-color: var(--search);
    }
    .trends{
        background-color: var(--sidebarBg);
        margin-left: 1.25rem;
        border-radius: .5rem;
        padding: .5rem 0;

    }
    .d-flex{
        border-bottom: .1rem solid var(--search);
        padding: 0 .75rem;
    }
    .title{
        font-weight:800 ;
        font-size: 1rem;
        margin-bottom:.25rem;
    }
    .fas{
        margin-left:auto;
        font-size:1rem;
        margin-top: .5rem;
    }
    .trending-topic{
        border-bottom: .1rem solid var(--search);
        padding: .5rem .75rem;
    }
    .ti, .no{
        font-size:.75rem;
        color:var(--grey);
        margin:0;
    }
    .topic{
        font-weight:700;
        font-size:.91rem;
        margin:0;
    }
    .link{
        font-size:.91rem;
        text-decoration:none;
    }
    .trending-topic:hover, .link:hover{
        background-color: var(--search);  
    }
`;