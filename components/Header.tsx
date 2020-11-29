import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  align-items: center;  
  display: flex;
  height: 6rem;
  justify-content: space-around;

  &:hover {
    background-color: #F8D736;
    transition: background-color 1s;

    & > li > a {
      color: #000;
      transition: color 1s;
    }
  }
`;

const StyledListItem = styled.li`
  & > a {
    color: #F8D736;
    text-decoration: none;
  }

  cursor: pointer;
  font-size: 3rem;
`;

const Header: React.FC = () => {
  return (
    <nav>
      <StyledList>
        <StyledListItem>
          <Link href="/about">
            About
          </Link>
        </StyledListItem>
        <StyledListItem>
          <Link href="/news">
            News
          </Link>
        </StyledListItem>
        <StyledListItem>
          <Link href="/contact">
            Contact 
          </Link>
        </StyledListItem>
      </StyledList>
    </nav>
  );
};

export default Header;
