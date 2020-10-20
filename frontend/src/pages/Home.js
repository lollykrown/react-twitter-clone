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
  const url = "http://localhost:5000/tweets";

  const [ tweets, setTweets ] = useState([])

  const signal = useRef(axios.CancelToken.source());


  useEffect(() => {

    const getTweets = async () => {    
  
      try {
        const res = await axios.get(url,  { cancelToken: signal.current.token });
        console.log(res.data)
        setTweets(res.data)
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message);
        } else {
          throw error
        }
      }
    };
    
    getTweets()
    return () => {
      console.log('unmount and cancel running axios request');
      signal.current.cancel('Operation canceled by the user.');
    };
  }, [url])

  const twee = `The government wants us to believe they are working to meet our 
  demands but they can’t even guarantee the safety and security of peaceful protesters 
  and innocent citizens from thugs!! What exactly do they think we have been fighting 
  for??? #EndSARS
  `;

  const tweet = {
    tweet:twee,
    user:{
      username:'oluwakayy',
      name:'nurse kay',
      profilePictureUrl:'https://res.cloudinary.com/lollykrown/image/upload/v1603210482/Portfolios/10929554_10152805944389900_8055332835260610135_n.jpg'
    },
    createdAt: Date.now()
  }
  let images = [];
  images.push(dp,dp, dp, dp)
  return (
    <HomeContainer className="home col-sm-10 col-md-10 col-lg-6">
      <Title title="home" icon={twitter} />
        <NewTweet/>
        {tweets.map((tweet, i) => <Tweet key={i} tweet={tweet}/>)}
        <Tweet tweet={tweet} images={images}/>
        <Tweet tweet={tweet}/>
        <Tweet tweet={tweet} video={word}/>
        
        <Tweet tweet={tweet}/>
        <Tweet tweet={tweet} images={[dp,dp]}/>


    </HomeContainer>
  );
}

const HomeContainer = styled.div`
// position:relative;

`;