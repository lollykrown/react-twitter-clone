import React from 'react'
import styled from "styled-components";

export default function Title({title, icon}) {
    const iconEl = (icon && title === 'home') && <img src={icon} className="icon ml-auto" alt="icon"/>

    const tit = (title !== 'explore') && <p className="title text-capitalize">{title}</p>

    const settings = ((title === 'notifications') || (title ==='explore'))? <i className="fa fa-cog" aria-hidden="true"></i>:null

    const search = (title === 'explore')? (
        <form className="form-inline search-form mb-2">
        <input
        className="form-control search"
        type="search"
        placeholder="&#128269; Search Twitter"
        aria-label="Search"
        />
    </form>):null

    return (
        <TitleContainer className="d-flex ">
            {tit}
            {search}
            {iconEl}
            {settings}
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
        color: var(--mainBlue)
    }
    .title{
        font-weight:800 ;
        font-size: 1.25rem;
    }
    .search-form{
        width:90%;
    }
    .search{
        width:100%;
        border-radius: 1rem;
        background-color: var(--search);
    }
    .icon{
        border-radius: 2rem;
        padding: .5rem;
        height:42px;
        width:42px;
    }
    .icon:hover{
        background-color: var(--lightBlue);
        border-radius: 2rem;
        padding: .5rem;
}
`;