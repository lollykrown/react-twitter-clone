import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import NewTweet from "../components/NewTweet";
import twitter from '../twitter.png';

export default function () {
  return (
    <HomeContainer className="home col-sm-10 col-md-10 col-lg-6">
      <Title title="home" icon={twitter} />
    <NewTweet/>
      <div className="">
        <p>home</p>
      </div>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`


`;