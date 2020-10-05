import React from "react";
import styled from "styled-components";
import Title from "../components/Title";

export default function () {
  return (
    <HomeContainer className="home col-sm-10 col-md-10 col-lg-6">
      <Title title="title" icon="icon" />

      <div className="">
        <p>home</p>
      </div>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`


`;