import reboot from 'styled-reboot';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle: Function = createGlobalStyle`
  ${reboot}

  body {
    padding: 2rem;
  }
`;

export default GlobalStyle;
