import React from 'react'
import styled from "styled-components";

export default function Title({title, icon, username}) {

    const iconEl = (icon && title === 'home') && <img src={icon} className="icon ml-auto" alt="icon"/>

    const tit = (title !== 'explore' && title !== 'bookmarks' && title !== 'lists') && <p className="title text-capitalize">{title}</p>

    const bookmarks = (title === 'bookmarks' || title === 'lists') && (
        <div className="cont">
            <div>
                <p className="title text-capitalize">{title}</p>
                <p className="username text-capitalize">{username}</p>
            </div>
            <div className="fa"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></div>
        </div>
        )


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
        <TitleContainer className="d-flex">
            {bookmarks}
            {tit}
            {search}
            {settings}
            {iconEl}
        </TitleContainer>
    )
}

const TitleContainer = styled.div`
padding: .25rem .75rem 0 .75rem;
border-bottom:.1rem solid var(--search);

    .fa{
        margin-left:auto;
        font-size:1.25rem;
        line-height:inherit;
        padding: 0 .5rem;
        color: var(--mainBlue);
    }
    .fa-cog:hover{
        background-color: var(--lightBlue);
        border-radius: 2rem;
        padding: 0 .5rem;
    }
    .fa-ellipsis-h{
        paddin:bottom:.125rem;
        margin-top:.5rem;
    }
    .fa-ellipsis-h:hover{
        display:block;
        paddin:bottom:.125rem;
        background-color: var(--lightBlue);
        margin-top:.5rem;
        border-radius: 2rem;
    }
    .title{
        font-weight:800;
        font-size: 1.125rem;
        margin-block-end:0;
        margin-top:.25rem;
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
    }
    .cont{
        display:flex;
        width:100%;
    }
    .username{
        color: var(--grey);
        font-size: .75rem;
        margin-bottom:0;
    }
}
`;