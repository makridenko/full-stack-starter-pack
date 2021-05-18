/* React */
import React from 'react';

/* Styles */
import styled, { keyframes } from 'styled-components';

/* Icons */
import {ReactComponent as FaceIcon} from './icons/face.svg'

/* Styled Components */
const rotateAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const StyledFace = styled.div`
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 336px;
        height: 474px;
        animation: ${rotateAnimation} 2s linear infinite;
    }
`;

const Face = () => (
    <StyledFace>
        <FaceIcon />
    </StyledFace>
);

export default Face;