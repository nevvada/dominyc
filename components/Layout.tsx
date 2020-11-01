import React from 'react';
import styled from 'styled-components';

const StyledReset = styled.body`
  box-sizing: border-box;
  margin: 0 !important;
`;

const StyledLayout = styled.main`
  background-color: #000;
  height: 100vh;
  width: 100vw;
`;

const Layout: React.FC = () => {
  return (
    <>
      <StyledReset>
        <StyledLayout />
      </StyledReset>
    </>
  );
};

export default Layout;
