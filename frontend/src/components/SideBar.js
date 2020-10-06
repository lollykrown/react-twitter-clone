import React from 'react'
import styled from "styled-components";

export default function SideBar() {
    return (
        <SidebarContainer className="sidebar it col-lg-3 d-none d-lg-block">
            <form className="form-inline search-form mb-2">
                <input
                className="form-control search"
                type="search"
                placeholder="&#128269; Search Twitter"
                aria-label="Search"
                />
            </form>
            <div className="trends mt-3">
                <p>Trends for you</p>

                <div>
                    <p>Trending in nigeria</p>
                    <p>#TachaOurNipple</p>
                    <p>32.7k Tweets</p>
                </div>
            </div>
        </SidebarContainer>
    )
}
const SidebarContainer = styled.div`
    margin-left: 1.25rem;
    padding:0;

    .search-form{
        width:100%;
    }
    .search{
        width:100%;
        border-radius: 1rem;
        background-color: var(--search);
    }
    .trends{
        background-color: var(--sidebarBg);
        border-radius: .5rem;
        padding: .5rem;

    }
`;