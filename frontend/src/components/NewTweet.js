import React from "react";
import styled from "styled-components";
// import { toast } from "react-toastify";
import TextareaAutosize from "react-textarea-autosize";
// import { useQuery, useMutation } from "@apollo/react-hooks";
// import { UploadFileIcon } from "../Icons";
// import { displayError } from "../../utils";
import Avatar from "./Avatar";
// import { uploadImage } from "../../utils";
import dp from '../dp.jpg';

const NewTweet = () => {
  return (
    <Wrapper>
      <Avatar src={dp} alt="avatar" />
      <form >
        <div className="new-tweet">
          <TextareaAutosize
            max="160"
            cols="48"
            placeholder="What's happening?"
            type="text"
            className="text-area"
            // value={tweet.value}
            // onChange={tweet.onChange}
          />
        <div className="globe">
          <i className="fa fa-globe mr-2" aria-hidden="true"></i> 
          <span>Everyone can reply</span>
        </div>
          <div className="new-tweet-action">
            <div className="blue">
              <label htmlFor="file-input">
                <i className="fa fa-image mr-3" aria-hidden="true"></i> 
                {/* <input id="file-input" accept="image/*" type="file"  /> */}
              </label>
              <label htmlFor="gif-input">
                <i className="fa fa-file mr-3" aria-hidden="true"></i> 
                {/* <input id="gif-input" accept="image/*" type="file"  /> */}
              </label>
              <label htmlFor="smiley">
                <i className="fa fa-smile mr-3" aria-hidden="true"></i> 
                {/* <input id="smiley" accept="image/*" type="file"  /> */}
              </label>
              <label htmlFor="schedule">
                <i className="fa fa-calendar-plus mr-3" aria-hidden="true"></i> 
                {/* <input id="schedule" accept="image/*" type="file"  /> */}
              </label>
                <button className="tweet-btn mr-0" disabled="true">
                Tweet
              </button>
            </div>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 1rem 1rem;
  border-bottom: .75rem solid var(--search);

  .fa{
    cursor: pointer;
    font-size: 1.35rem;
  }
  textarea {
    width: 100%;
    border:none;
    font-size: 1.23rem;
    margin-bottom: .75rem;
  }

  .tweet-btn{
    background-color: #1da1f2;
    margin-right: 0;
    padding:.5rem 1.5rem;
    border-radius: 1.5rem;
    font-weight:700 ;
    font-size: 1rem;
    color: var(--mainWhite);
  }
  .blue{
    color: var(--mainBlue)
  }
  .globe{
    font-weight:700;
    color: var(--mainBlue);
    padding-bottom: .75rem;
    margin-bottom: 1rem;
    padding-left: .5rem;
    border-bottom: .12rem solid var(--search);
  }
`;
export default NewTweet;
