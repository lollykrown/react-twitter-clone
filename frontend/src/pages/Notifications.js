import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Notifications(props) {
  
    let act = props.location.pathname || ''
    console.log(act)

    return (
        <NotificationContainer className="home col-sm-10 col-md-10 col-lg-6 ">
        <div className="d-flex bord">
          <p className="title text-capitalize">Notifications</p>
          <i className="fa fa-cog" aria-hidden="true"></i>
        </div>

        <div className="">
          <ul className="nav nav-fill ">
            <li className="nav-item tab-cont">
              <Link className={`nav-link text-capitalize tab ${act === "/notifications"? 'acti': ''}`} to="/notifications">all</Link>
            </li>
            <li className="nav-item tab-cont">
              <Link className={`nav-link text-capitalize tab ${act === "/notifications/mentions"? 'acti': ''}`} to="/notifications/mentions">mentions</Link>
            </li>
          </ul>
        </div>
        <div className="all">

        </div>
      </NotificationContainer>
    );
}

const NotificationContainer = styled.div`

.tab-cont{
  border-bottom:.125rem solid var(--search);
  padding:0;
}
.tab{
  padding:.75rem 0;
  font-size: .9rem;
  font-weight:700;
  color: var(--grey);
  border-bottom:none;
}
.tab:hover{
  background-color: var(--lightBlue);
  color: var(--mainBlue);
}
.acti{
  border-bottom:.15rem solid var(--mainBlue);
  color: var(--mainBlue);
}
.d-flex{
  padding: .25rem .75rem 0 .75rem;
  margin-bottom:.5rem;
}
.fa{
  margin-left:auto;
  font-size:1.25rem;
  line-height:inherit;
  padding: 0 .5rem;
  color: var(--mainBlue);
}
.fa:hover{
  background-color: var(--lightBlue);
  border-radius: 2rem;
  padding: 0 .5rem;
}
.title{
  font-weight:800;
  font-size: 1.1rem;
  margin-block-end:0;
  margin-top:.25rem;
}
`;