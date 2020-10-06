import React from 'react'
import styled from "styled-components";
import Avatar from './reusables/Avatar'
import kay from '../kay.jpg';

export default function Tweet() {
    return (
        <HomeContainer >
            <Avatar src={kay} alt="avatar" />
            <div className="tweet-container">
                <div className="top">
                    <p className="mr-2 name text-capitalize">nazarite&#8482;</p>
                    <p className="mr-2 username text-capitalize">username</p>
                    <p className="mr-2">time</p>
                    <i class="fa fa-angle-down dropdown" aria-hidden="true"></i>
                </div>
            </div>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
padding: .75rem;
display: flex;

.top{
    display: flex;
}
.dropdown{
    position:absolute;
    right:.75rem;;
}
.name{
    font-weight:700 ;
  }
  .username{
    color:var(--grey);
  }
`;