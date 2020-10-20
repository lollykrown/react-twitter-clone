import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Title from "../components/reusables/Title";
import NewTweet from "../components/NewTweet";
import twitter from '../twitter.png';
import Tweet from "../components/Tweet";
import dp from '../dp.jpg';
import word from '../word.mp4';
import axios from 'axios'

export default function () {
  // const url = "http://localhost:5000/tweets";

  // const [ tweets, setTweets ] = useState('')

  // const signal = useRef(axios.CancelToken.source());


  // useEffect(() => {

  //   const getMovies = async () => {    
  
  //     try {
  //       const res = await axios.get(url,  { cancelToken: signal.current.token });
  //       console.log(res.data)
  //       setTweets(res.data)
  //     } catch (error) {
  //       if (axios.isCancel(error)) {
  //         console.log('Request canceled', error.message);
  //       } else {
  //         throw error
  //       }
  //     }
  //   };
    
  //   getMovies()
  //   return () => {
  //     console.log('unmount and cancel running axios request');
  //     signal.current.cancel('Operation canceled by the user.');
  //   };
  // }, [url])

  const tweet = `This whole #EndSARS is just for the media, this happened yesterday in Glover street in Ebute-Metta. 
  We are jokers in this country, this guy trains kids how to ride a unicycle every weekend for free.
  I swear I am done with this country.
  `;

  let images = [];
  images.push(dp,dp, dp, dp)
  return (
    <HomeContainer className="home col-sm-10 col-md-10 col-lg-6">
      <Title title="home" icon={twitter} />
        <NewTweet/>
        {/* {tweets.map(tweet => <Tweet tweet={tweet}/>)} */}
        <Tweet name='nurse kay' username='@oluwakayy' tweet={tweet}/>
        <Tweet name='nurse kay' username='@oluwakayy' tweet='pics' images={images}/>
        <Tweet name='nurse kay' username='@oluwakayy' tweet='video' video={word}/>
        <Tweet name='nurse kay' username='@oluwakayy' tweet={tweet}/>
        <Tweet name='nazarite&#8482;' username='lollykrown' tweet='pic' images={[dp,dp]}/>
        <Tweet name='nurse kay' username='@oluwakayy' tweet={tweet}/>

    </HomeContainer>
  );
}

const HomeContainer = styled.div`
// position:relative;

`;