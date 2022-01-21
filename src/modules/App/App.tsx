import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import GlobalStyle from '../../styles/GlobalStyle.styled';
import RadioButtonGroup from '../../components/RadioButtonGroup';

// import JSButton from '../../components/JSButton/JSButton';

function App() {
  const radioOptions = [
    { label: 'Daily', value: 'daily' },
    { label: 'Weekly', value: 'weekly' },
    { label: 'Monthly', value: 'monthly' },
    { label: 'Yearly', value: 'yearly' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RadioButtonGroup
        options={radioOptions}
        preselectedOption={radioOptions[0].value}
        handleChange={() => {}}
      />
    </ThemeProvider>
  );
}

export default App;
