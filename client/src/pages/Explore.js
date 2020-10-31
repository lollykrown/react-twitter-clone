import React from 'react'
import styled from "styled-components";
import Title from "../components/reusables/Title";
import Trends from '../components/reusables/Trends'

export default function Explore() {
    return (
        <ExploreContainer className="home col-sm-10 col-md-10 col-lg-6">
            <Title title="explore" icon="null" />
            <div className="banner-cont">
                {/* <img className="banner" src={dp} alt="banner"/> */}
                <p className="name text-capitalize">COVID-19 &#8231; LIVE</p>
                <p className="username text-capitalize">Updates on Covid-19 in Nigeria</p>
            </div>
            <Trends />

            <div className="">
                <p>explore</p>
            </div>
      </ExploreContainer>
    );
}

const ExploreContainer = styled.div`

.banner-cont{
    position:relative;
    height:36%;
    width:100%;
    background-color: rgba(0,0,0, 0.3);
    background-image: radial-gradient(#E8F5FE 15%, #698192 85%);
}
.banner{
    width:100%;
    height:100%;
}
.name{
    position: absolute;
    bottom:1rem;
    left:1rem;
    color: var(--mainWhite);
}
.username{
    position: absolute;
    bottom:0;
    left:1rem;    
    color: var(--mainWhite);
    font-weight:800;
}
`;