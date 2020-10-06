import React from 'react'
import styled from "styled-components";

export default function SideBar() {
    return (
        <SidebarContainer className="sidebar it col-lg-3 d-none d-lg-block">
            <p>Hello from side bar</p>
        </SidebarContainer>
    )
}
const SidebarContainer = styled.div`

`;