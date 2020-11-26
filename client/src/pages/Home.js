import React, { useContext } from "react";
import styled from "styled-components";
import Title from "../components/reusables/Title";
import NewTweet from "../components/NewTweet";
import twitter from '../twitter.png';
import Tweet from "../components/Tweet";
import dp from '../dp.jpg';
import word from '../word.mp4';
import { DataContext } from "../contexts/dataContext";
import { REQUEST_STATUS } from "../reducers/request";
import Loading from '../components/reusables/Loader'

export default function () {
  const { tweets, status, error } = useContext(DataContext);

  const success = status === REQUEST_STATUS.SUCCESS;
  const isLoading = status === REQUEST_STATUS.LOADING;
  const hasError = status === REQUEST_STATUS.ERROR;

  const twee = `The government wants us to believe they are working to meet our 
  demands but they can’t even guarantee the safety and security of peaceful protesters 
  and innocent citizens from thugs!! What exactly do they think we have been fighting 
  for??? #EndSARS
  `;

  const tweet = {
    tweet: twee,
    comments: 12,
    retweets: 23,
    likes: 76,
    user: {
      profileName: 'nurse kay',
      username: 'oluwakayy',
      profilePictureUrl: 'https://res.cloudinary.com/lollykrown/image/upload/v1533672970/samples/bike.jpg'
    },
    createdAt: Date.now()
  }

  let images = [];
  images.push(dp, dp, dp, dp)
  return (
    <HomeContainer className="home col-sm-10 col-md-10 col-lg-6">
      <Title title="home" icon={twitter} />
      <NewTweet dp={tweet.user.profilePictureUrl} />
      {isLoading && <div>Loading... <Loading className="mx-6"/></div>}
      {hasError && (
        <div>
          Loading error... Check your internet connection
          <br />
          <b>ERROR: {error.message}</b>
        </div>
      )}
      {success && 
      (<>{tweets.map((tweet, i) => <Tweet key={i} tweet={tweet} />)}
      <Tweet tweet={tweet} images={images} />
      <Tweet tweet={tweet} />
      <Tweet tweet={tweet} video={word} />

      <Tweet tweet={tweet} />
      <Tweet tweet={tweet} images={[dp, dp]} />
      </>)
      }

    </HomeContainer>
  );
}


const HomeContainer = styled.div`
// position:relative;
`;