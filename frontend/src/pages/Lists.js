import React from 'react'
import Title from "../components/reusables/Title";
import styled from "styled-components";

export default function Lists() {

    const empty = (
        <ListWrapper>
            <p className="title">Pinned</p>
            <div className="line" />
            <div className="cont"><p className="det">Nothing to see here — pin up to five of your favorite Lists to access them quickly.</p></div>
        </ListWrapper>
    )

    return (
        <div className="home col-sm-10 col-md-10 col-lg-6" >
            <Title title="lists"  username='@oluwakayy' />
            {empty}         
        </div>
    )
}
const ListWrapper = styled.div`
border-bottom: .75rem solid var(--search);

.title{
    font-weight:800;
    font-size: 1.125rem;
    margin: 0.125rem .5rem;
}

.line{
    border-bottom: .1rem solid var(--search);
}
.cont{
    padding: 1.5rem 3em .5rem 3rem;
}
.det{
    color: var(--grey);
    font-size: .9rem;
    text-align:center;
}

`


