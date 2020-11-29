import { createGlobalStyle } from 'styled-components'

const CSSReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    margin: 0 !important;
  }

  ul {
    list-style: none;
  }
`;

export default CSSReset;
