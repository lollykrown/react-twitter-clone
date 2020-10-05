import React from 'react'
import styled from "styled-components";
import Title from "../components/Title";

export default function Notifications() {
    return (
        <NotificationContainer className="home col-sm-10 col-md-10 col-lg-6">
        <Title title="notifications" icon="null" />
        <div className="">
          <p>home</p>
        </div>
      </NotificationContainer>
    );
}

const NotificationContainer = styled.div`


`;