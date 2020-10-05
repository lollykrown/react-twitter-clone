import React from 'react'
import styled from "styled-components";

export default function Title({title, icon}) {
    const iconEl = icon && <img src={icon} className="ml-auto" height="30" alt="icon"/>

    const noti = (title === 'notifications')? <i className="fa fa-cog" aria-hidden="true"></i>:null

    return (
        <TitleContainer className="d-flex ">
            <p className="title text-capitalize">{title}</p>
            {/* {iconEl} */}
            {noti}
        </TitleContainer>
    )
}

const TitleContainer = styled.div`
border-bottom: .1rem solid var(--search);
padding: .5rem .75rem 0 .75rem;

.fa{
    margin-left:auto;
    font-size:1.5rem;
    margin-top: .5rem;
}
.title{
    font-weight:800 ;
    font-size: 1.25rem;
}

`;