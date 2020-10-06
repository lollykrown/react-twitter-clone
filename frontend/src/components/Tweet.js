import React from 'react'
import styled from "styled-components";
import Avatar from './reusables/Avatar'
import kay from '../kay.jpg';

export default function Tweet({images, video}) {

    const img = (images && images.length > 1)? images.map(i => {
    return <div className="gride"><img className="tweet-image mb-2" src={i} alt="tweet-img"/></div>
    }):(images && images.length === 1)? <img className="tweet-image mb-2" src={images} alt="tweet-img"/>:null;

    const vid = video && <video controls autoplay muted className="mb-1 tweet-image" src={video} alt="tweet-img"/>

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
                    <i className="far fa-comment " aria-hidden="true" /><span className="figures">29</span>
                    <i className="fa fa-retweet mt-2"  aria-hidden="true" /><span className="figures">206</span>
                    <i className="far fa-heart " aria-hidden="true" /><span className="figures">560</span>
                    <i className="far fa-share-square " aria-hidden="true" /><span className="figures">12</span>
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
    line-height: 1.25;
    padding-top:0;
    font-size:.91rem;
  }
.fa-retweet, .fa-comment, .fa-heart, .fa-share-square {
    font-size: 1.35rem;
    color: var(--grey);
    padding:.4rem;
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
  .fa-heart:hover .figures:hover{
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
  .figures{
    margin-right:auto;
    margin-top:.25rem;
    font-size: .9rem;
  }
  .gride{
    display:inline-grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr auto;
  }
`;