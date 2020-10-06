import React from 'react'
import styled from "styled-components";

export default function SideBar() {
    return (
        <SidebarContainer className="sidebar it col-lg-4 d-none d-lg-block">
            <form className="form-inline search-form mb-2">
            <input
            className="form-control search"
            type="search"
            placeholder="&#128269; Search Twitter"
            aria-label="Search"
            />
    </form>
        </SidebarContainer>
    )
}
const SidebarContainer = styled.div`
    margin-left: 1.75rem;
    background-color: goldenrod;
    padding:0:

    .search-form{
        width:100%;
    }
    .search{
        width:100%;
        border-radius: 1rem;
        background-color: var(--search);
    }
`;