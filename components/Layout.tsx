import Image from 'next/image';
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

const StyledImage = styled.section`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const Layout: React.FC = () => {
  return (
    <>
      <StyledReset>
        <StyledLayout>
          <StyledImage>
            <Image
              height={750}
              src="/images/Dominyc.png"
              width={1000}
            />
          </StyledImage>
        </StyledLayout>
      </StyledReset>
    </>
  );
};

export default Layout;
