import React from 'react'
import styled from 'styled-components'

function Footer() {
        const StyledFooter = styled.footer`
            width: 100%;
            bottom: 0;
            background-color: rgb(131, 131, 131);
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: whitesmoke;
        `
        return (
            <StyledFooter>
                <h3>© 2021 - James Reed</h3>
            </StyledFooter>
        )
}

export default Footer