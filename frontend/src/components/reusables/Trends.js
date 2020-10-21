import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Trends() {
    return (
        <TrendsContainer className="trends mt-2">
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
                    <Link to='/explore' className="link">Show more</Link>
                </div>
            </TrendsContainer>
            
    )
}

const TrendsContainer = styled.div`
    .trends{
        background-color: var(--sidebarBg);
        margin-left: 1.25rem;
        border-radius: .75rem;
        padding: .4rem 0 0 0;

    }
    .d-flex{
        border-bottom: .1rem solid var(--search);
        padding: 0 .75rem;
    }
    .title{
        font-weight:800;
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
`;
