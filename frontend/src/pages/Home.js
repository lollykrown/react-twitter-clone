import React from "react";
import styled from "styled-components";
import Title from "../components/reusables/Title";
import NewTweet from "../components/NewTweet";
import twitter from '../twitter.png';
import Tweet from "../components/Tweet";
import kay from '../kay.jpg';
import yfc from '../yfc.mp4';

export default function () {
  let images = [];
  images.push(kay)
  return (
    <HomeContainer className="home col-sm-10 col-md-10 col-lg-6">
      <Title title="home" icon={twitter} />
        <NewTweet/>
        <Tweet images={images}/>
        <Tweet video={yfc}/>
        <Tweet />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`


`;