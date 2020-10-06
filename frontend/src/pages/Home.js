import React from "react";
import styled from "styled-components";
import Title from "../components/reusables/Title";
import NewTweet from "../components/NewTweet";
import twitter from '../twitter.png';
import Tweet from "../components/Tweet";
import kay from '../kay.jpg';
import dp from '../dp.jpg';
import word from '../word.mp4';

export default function () {
  let images = [];
  images.push(kay,dp)
  return (
    <HomeContainer className="home col-sm-10 col-md-10 col-lg-5">
      <Title title="home" icon={twitter} />
        <NewTweet/>
        <Tweet />
        <Tweet video={word}/>
        <Tweet />
        <Tweet images={kay}/>
        <Tweet />

    </HomeContainer>
  );
}

const HomeContainer = styled.div`
// position:relative;

`;