import React from 'react'
import styled from "styled-components";
import Title from "../components/reusables/Title";
import dp from '../dp.jpg';

export default function Explore() {
    return (
        <ExploreContainer className="home col-sm-10 col-md-10 col-lg-6">
            <Title title="explore" icon="null" />
            <div className="banner-cont">
            <img className="banner" src={dp} alt="banner"/>

            </div>
            <div className="">
            <p>explore</p>
            </div>
      </ExploreContainer>
    );
}

const ExploreContainer = styled.div`

.banner-cont{
    height:28%
}
.banner{
    width:100%;
    height:100%
}

`;