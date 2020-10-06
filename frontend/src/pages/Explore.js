import React from 'react'
import styled from "styled-components";
import Title from "../components/reusables/Title";

export default function Explore() {
    return (
        <ExploreContainer className="home col-sm-10 col-md-10 col-lg-5">
            <Title title="explore" icon="null" />
            <div className="">
            <p>explore</p>
            </div>
      </ExploreContainer>
    );
}

const ExploreContainer = styled.div`


`;