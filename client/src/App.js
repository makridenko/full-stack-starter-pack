/* React */
import React from 'react';

/* Containers */
import Footer from '@containers/Footer';

/* Components */
import Face from '@components/Face';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { GlobalStyles } from './ui-kit/global-styles';

/* Styled Components */
const StyledApp = styled.div`
  text-align: center;

  p {
    font-size: 24px;
    color: #fff;
  }
`;

const App = () => (
  <StyledApp>
    <GlobalStyles />
    <p>client is ready!</p>
    <Face />
    <Footer />
  </StyledApp>
);

export default App;
