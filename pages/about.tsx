import React from 'react'
import styled from 'styled-components';

import Layout from '../components/Layout';

const StyledMain = styled.main`
  align-items: center;
  display: flex;
  font-size: 3rem;
  height: 80%;
  justify-content: center;
`;

const About: React.FC = () => {
  return (
    <Layout>
      <StyledMain>
        A Colter Harris Funnie
      </StyledMain>
    </Layout>
  )
}

export default About;
