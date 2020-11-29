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

const Contact: React.FC = () => {
  return (
    <Layout>
      <StyledMain>
        Cutlass Harris
      </StyledMain>
    </Layout>
  );
};

export default Contact;
