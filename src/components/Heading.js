import React from 'react'
import styled from 'styled-components';

function Heading() {
        const StyledHeader = styled.header`
            width: 100%;
            top: 0;
            background-color: rgb(131, 131, 131);
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: whitesmoke;
        `
        const StyledH1 = styled.h1`
            margin: 0;
        `
        return (
            <StyledHeader>
                <StyledH1>CV-Maker</StyledH1>
            </StyledHeader>
        )
}

export default Heading;