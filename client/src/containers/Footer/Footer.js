/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Styled Components */
const StyledFooter = styled.div`
    bottom: 0;
    position: fixed;
    width: 100%;

    a {
        text-decoration: none;
        color: #ff5991;
    }
`;

const Footer = () => (
    <StyledFooter>
        <p>from <a href="https://github.com/makridenko">@makridenko</a> with 💖</p>
    </StyledFooter>
);

export default Footer;