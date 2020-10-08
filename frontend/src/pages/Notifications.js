import React from 'react'
import styled from "styled-components";
import Title from "../components/reusables/Title";

export default function Notifications() {
    return (
        <NotificationContainer className="home col-sm-10 col-md-10 col-lg-6 ">
        <Title title="notifications" icon="null"/>
        <div className="">
          {/* <ul class="nav nav-fill">
            <li class="nav-item">
              <a class="nav-link " href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul> */}
        </div>
      </NotificationContainer>
    );
}

const NotificationContainer = styled.div`

`;