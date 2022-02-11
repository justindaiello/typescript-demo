import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import GlobalStyle from '../../styles/GlobalStyle.styled';
import JSButton from '../../components/JSButton/JSButton';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <JSButton>Monthly</JSButton>
    </ThemeProvider>
  );
}

export default App;
