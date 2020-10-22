import React, {useRef} from 'react'
import styled from "styled-components";
import Avatar from './reusables/Avatar'
import { Link } from "react-router-dom";
import moment from 'moment';
import axios from 'axios'

export default function Tweet(props) {
    const { _id:tweetId, tweet, user, createdAt, comments, likes, retweets } = props.tweet
    const { _id:userId, username, profileName, profilePictureUrl } = user
    const images = props.images
    const video = props.video

    const img = (images && images.length > 1)? images.map((el, i) => {
    return <div className="gride" key={i} ><img className="tweet-image mb-2" src={el} alt="tweet-img"/></div>
    }):(images && images.length === 1)? <img className="tweet-image mb-2" src={images} alt="tweet-img"/>:null;

    const vid = video && <video controls autoPlay muted className="mb-1 tweet-image" src={video} alt="tweet-img"/>

    const signal = useRef(axios.CancelToken.source());

    const likeButton = async(id, userId, action) => {
      console.log(id, userId)
      const url = `http://localhost:5000/tweet/${action}/${id}`;
      try {
          const res = await axios.post(url, {userId: userId}, {
            headers: {
              'Content-Type': 'application/json'
            },
            withCredentials:true,
            cancelToken: signal.current.token })
          console.log(res)
          if (!res.status) {
              console.log(res.data.message)
              return;
          }
      } catch (err) {
          if (axios.isCancel(err)) {
              console.log('Get request canceled');
              console.log(err.message)
          } else {
              console.log(err.message)
              //setErrors(err.message)
          }
      }
    
      
      return () => {
          console.log('unmount and cancel running axios request');
          signal.current.cancel('Operation canceled by the user.');
        };
    }
    return (
        <HomeContainer >
            <Link to={`/${username}`}><Avatar src={profilePictureUrl} alt="avatar" /></Link>
            <div className="tweet-container">
                <div className="top">
                    <Link to={`/${username}`}>
                      <p className="mr-2 user text-capitalize">{profileName}</p>
                    </Link>
                    <Link to={`/${username}`}>
                        <p className="mr-2 nam text-capitalize">@{username}</p>
                    </Link>
                    <p className="mr-2 time">&#8231; {moment(createdAt).fromNow()}</p>
                    <i className="fa fa-angle-down dropdown" aria-hidden="true"></i>
                </div>
                <p className="mr-2 tweet">{tweet}</p>
                {img}
                {vid}
                <div className="top bottom">
                  <div className="no comment"><i className="far fa-comment " aria-hidden="true" />{comments && <span className="com">{comments}</span>}</div>
                  <div className="no retweet" onClick={()=> likeButton(tweetId, userId, 'retweets')}><i className="fa fa-retweet mt-2"  aria-hidden="true" />{retweets && <span className="ret">{retweets}</span>}</div>
                  <div className="no heart" onClick={()=> likeButton(tweetId, userId, 'likes')}><i className="far fa-heart " aria-hidden="true" />{likes && <span className="hea">{likes}</span>}</div>
                  <div className="no share"><i className="fa fa-share-alt " aria-hidden="true" /><span className="sga"></span></div>
                </div>
            </div>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
padding: .75rem .75rem 0 .75rem;
display: flex;
border-bottom: .1rem solid var(--search);
transition: 1s;
:hover{
    background-color: var(--hover);  
}

.fa{
    font-style:inherit;
    line-height:inherit;
}
.tweet-container{
    padding-top:.5rem;
    width:100%;
}
.top{
    display: flex;
}
.dropdown{
    position:absolute;
    right:.75rem;;
    padding:.5rem;
}
.dropdown:hover{
    background-color: var(--lightBlue);
    border-radius: 2rem;
    padding:.5rem;
  }
.nam, .user, .time, .fa{
    line-height: .1;
    font-size:.91rem;
}
.user{
    font-weight:700;
    font-size:.91rem;
    color:var(--mainDark);
  }
  .nam{
    color:var(--grey);
  }
  .tweet{
    line-height: 1.25;
    padding-top:0;
    font-size:.91rem;
  }
.fa-retweet, .fa-comment, .fa-heart, .fa-share-alt {
    font-size: 1.35rem;
    color: var(--grey);
    padding:.4rem;
}
.fa-share-alt {
  padding:.5rem;
  margin-top:.5rem;
}

.bottom{
    justify-content: space-between;
}
.comment:hover .fa-comment{
    background-color: var(--lightBlue);
    border-radius: 2rem;
    color: var(--mainBlue);
    padding:.4rem;
  }
  .comment:hover .com{
    color: var(--mainBlue);
  }
  .retweet:hover .fa-retweet{
    background-color: #E0F1E8;
    border-radius: 2rem;
    color: #55CE8B;
    padding:.4rem;
  }
  .retweet:hover .ret{
    color: #55CE8B;
  }
  .heart:hover .fa-heart{
    background-color: #F5E2E8;
    border-radius: 2rem;
    color: #E0255F;
    padding:.4rem;
  }
  .heart:hover{
    color: #E0255F;
  }
  .share:hover .fa-share-alt{
    background-color: var(--lightBlue);
    border-radius: 2rem;
    color: var(--mainBlue);
    padding:.5rem;
  }
  .share:hover{
    color: var(--mainBlue);
  }
  .tweet-image{
      width:100%;
  }
  .no{
    margin-right:auto;
    margin-top:.25rem;
    font-size: .9rem;
  }
  .gride, .tweet-image{
    display:inline-grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr auto;
    border-radius: 1rem;
  }
`;