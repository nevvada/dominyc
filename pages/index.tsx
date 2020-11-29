import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';

const StyledImage = styled.section`
  align-items: center;
  display: flex !important;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const HomePage: React.FC = () => {
  return (
    <Layout>
      <StyledImage>
        <Image
          height={750}
          src="/images/Dominyc.png"
          width={1000}
        />
      </StyledImage>
    </Layout>
  );
};

export default HomePage;
