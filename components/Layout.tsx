import React from 'react';
import styled from 'styled-components';

import CSSReset from './CSSReset';
import Header from './Header';

const StyledLayout = styled.main`
  background-color: #000;
  color: #F8D736;
  font-family: 'Permanent Marker', cursive;
  height: 100vh;
  width: 100vw;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <CSSReset />
      <StyledLayout>
        <Header />
        {children}
      </StyledLayout>
    </>
  );
};

export default Layout;
