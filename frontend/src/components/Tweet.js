import React from 'react'
import styled from "styled-components";
import Avatar from './reusables/Avatar'
import dp from '../dp.jpg';

export default function Tweet({name, username, images, video,tweet}) {

    const img = (images && images.length > 1)? images.map((el, i) => {
    return <div className="gride" key={i} ><img className="tweet-image mb-2" src={el} alt="tweet-img"/></div>
    }):(images && images.length === 1)? <img className="tweet-image mb-2" src={images} alt="tweet-img"/>:null;

    const vid = video && <video controls autoPlay muted className="mb-1 tweet-image" src={video} alt="tweet-img"/>

    return (
        <HomeContainer >
            <Avatar src={dp} alt="avatar" />
            <div className="tweet-container">
                <div className="top">
                    <p className="mr-2 name text-capitalize">{username}</p>
                    <p className="mr-2 username text-capitalize">{name}</p>
                    <p className="mr-2 time">&#8231; 2hr</p>
                    <i className="fa fa-angle-down dropdown" aria-hidden="true"></i>
                </div>
                <p className="mr-2 tweet">{tweet}</p>
                {img}
                {vid}
                <div className="top bottom">
                  <div className="no comment"><i className="far fa-comment " aria-hidden="true" /><span className="com">29</span></div>
                  <div className="no retweet"><i className="fa fa-retweet mt-2"  aria-hidden="true" /><span className="ret">206</span></div>
                  <div className="no heart"><i className="far fa-heart " aria-hidden="true" /><span className="hea">560</span></div>
                  <div className="no share"><i className="far fa-share-square " aria-hidden="true" /><span className="sga">12</span></div>
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
    font-size:.91rem;
}
.name{
    font-weight:700;
    font-size:.91rem;
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
  .share:hover .fa-share-square{
    background-color: var(--lightBlue);
    border-radius: 2rem;
    color: var(--mainBlue);
    padding:.4rem;
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
  .gride{
    display:inline-grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr auto;
  }
`;