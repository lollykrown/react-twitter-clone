import React from "react";
import styled from "styled-components";
import Title from "../components/reusables/Title";
import NewTweet from "../components/NewTweet";
import twitter from '../twitter.png';
import Tweet from "../components/Tweet";
import dp from '../dp.jpg';
import word from '../word.mp4';

export default function () {
  let images = [];
  images.push(dp,dp, dp, dp)
  return (
    <HomeContainer className="home col-sm-10 col-md-10 col-lg-5">
      <Title title="home" icon={twitter} />
        <NewTweet/>
        <Tweet images={images}/>
        <Tweet />
        <Tweet video={word}/>
        <Tweet />
        <Tweet images={[dp]}/>
        <Tweet />

    </HomeContainer>
  );
}

const HomeContainer = styled.div`
// position:relative;

`;