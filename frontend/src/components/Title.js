import React from 'react'
import styled from "styled-components";

export default function Title({title, icon}) {
    const iconEl = icon && <img className="ml-auto" alt="icon"/>

    return (
        <TitleContainer className="d-flex ">
            <p className="title text-capitalize">{title}</p>
            {iconEl}
        </TitleContainer>
    )
}

const TitleContainer = styled.div`
border-bottom: .1rem solid var(--search);
padding: .5rem .75rem 0 .75rem;

.title{
    font-weight:800 ;
    font-size: 1.25rem;
}

`;