import React from "react";
import styled from "styled-components";
// import { toast } from "react-toastify";
import TextareaAutosize from "react-textarea-autosize";
import Avatar from "./reusables/Avatar";
import dp from '../dp.jpg';

const NewTweet = () => {
  return (
    <Wrapper>
      <Avatar src={dp} alt="avatar" />
      <form className="form">
        <TextareaAutosize
          autoFocus
          max="160"
          cols="55"
          placeholder="What's happening?"
          type="text"
          className="text-area ml-2"
          // value={tweet.value}
          // onChange={tweet.onChange}
        />
        <div className="globe pr-2">
          <i className="fa fa-globe ml-2" aria-hidden="true"></i> 
          <span className="small-text ml-1">Everyone can reply</span>
        </div>
        <div className="blue mt-1">
          <label htmlFor="file-input">
                <i className="far fa-image" aria-hidden="true"></i> 
                {/* <input id="file-input" accept="image/*" type="file"  /> */}
              </label>
          <label htmlFor="gif-input">
                <i className="far fa-file" aria-hidden="true"></i> 
                {/* <input id="gif-input" accept="image/*" type="file"  /> */}
              </label>
          <label htmlFor="smiley">
                <i className="far fa-smile" aria-hidden="true"></i> 
                {/* <input id="smiley" accept="image/*" type="file"  /> */}
              </label>
          <label htmlFor="schedule">
                <i className="far fa-calendar-plus" aria-hidden="true"></i> 
                {/* <input id="schedule" accept="image/*" type="file"  /> */}
              </label>
          <button className="tweet-btn mr-0" disabled={true}>
            Tweet
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 1rem 0 0 1rem;
  border-bottom: .75rem solid var(--search);
  margin-right: .5rem;

  .far{
    cursor: pointer;
    font-size: 1.35rem;
    padding: .5rem .75rem;
  }
  .far:hover{
    background-color: var(--lightBlue);
    border-radius: 2rem;
    width: max-content;
    padding: .5rem .75rem;
  }
  textarea {
    width: 100%;
    border:none;
    font-size: 1.23rem;
    margin-bottom: .75rem;
    resize:none;
  }
  .tweet-btn{
    float:right;
    border:none;
    background-color: #1da1f2;
    padding:.3rem 1.25rem;
    border-radius: 1.5rem;
    font-weight:700 ;
    font-size: 1rem;
    color: var(--mainWhite);
  }
  .tweet-btn:disabled {
    background: var(--disabledBlue);
  }
  .blue{
    color: var(--mainBlue)
  }
  .globe{
    font-weight:700;
    font-size: .9rem;
    color: var(--mainBlue);
    border-bottom: .12rem solid var(--search);
  }
  .globe:hover{
    background-color: var(--lightBlue);
    border-radius: 2rem;
    width: max-content;
  }
`;
export default NewTweet;
