import React from 'react'
import styled from "styled-components";
import Avatar from './reusables/Avatar'
import kay from '../kay.jpg';

export default function Tweet({images, video}) {
    const img = images && <img className="tweet-image" src={images} alt="tweet-img"/>
    const vid = video && <video controls autoplay className="tweet-image" src={video} alt="tweet-img"/>

    return (
        <HomeContainer >
            <Avatar src={kay} alt="avatar" />
            <div className="tweet-container">
                <div className="top">
                    <p className="mr-2 name text-capitalize">nazarite&#8482;</p>
                    <p className="mr-2 username text-capitalize">@lollykrown</p>
                    <p className="mr-2 time">&#8231; 2hr</p>
                    <i className="fa fa-angle-down dropdown" aria-hidden="true"></i>
                </div>
                <p className="mr-2 tweet">This whole #EndSARS is just for the media, this happened yesterday in Glover street in Ebute-Metta. 
                We are jokers in this country, this guy trains kids how to ride a unicycle every weekend for free.
                I swear I am done with this country.</p>
                {img}
                {vid}
                <div className="top bottom">
                    <i className="far fa-comment " aria-hidden="true"></i>
                    <i className="fa fa-retweet mt-2"  aria-hidden="true"></i>
                    <i className="far fa-heart " aria-hidden="true"></i>
                    <i className="far fa-share-square " aria-hidden="true"></i>
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

.tweet-container{
    padding-top:.5rem;
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
.name, .username, .time, .fa{
    line-height: .1;
}
.name{
    font-weight:700;
  }
  .username{
    color:var(--grey);
  }
  .tweet{
    line-height: 1;
    padding-top:0;
  }
.fa-retweet, .fa-comment, .fa-heart, .fa-share-square {
    font-size: 1.35rem;
    color: var(--grey);
    padding:.4rem;
}
.fa-share-square {
    margin-right:4rem;
}
.bottom{
    justify-content: space-between;
}
.fa-comment:hover{
    background-color: var(--lightBlue);
    border-radius: 2rem;
    color: var(--mainBlue);
    padding:.4rem;
    transition: 1s;
  }
  .fa-retweet:hover{
    background-color: #E0F1E8;
    border-radius: 2rem;
    color: #55CE8B;
    padding:.4rem;
    transition: 1s;
  }
  .fa-heart:hover{
    background-color: #F5E2E8;
    border-radius: 2rem;
    color: #E0255F;
    padding:.4rem;
    transition: 1s;
  }
  .fa-share-square:hover{
    background-color: var(--lightBlue);
    border-radius: 2rem;
    color: var(--mainBlue);
    padding:.4rem;
    transition: 1s;
  }
  .tweet-image{
      width:100%;
  }
`;