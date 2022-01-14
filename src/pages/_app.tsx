import { useCallback, useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import SideBar from '../components/SideBar';

import GlobalStyles, { Container } from '../styles/GlobalStyles';
import defaultTheme from '../styles/themes/default';
import darkTheme from '../styles/themes/dark';

const themes = {
  default: defaultTheme,
  dark: darkTheme,
};

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(defaultTheme);

  const toogleTheme = useCallback(() => {
    setTheme(state =>
      state.name === themes.default.name ? themes.dark : themes.default,
    );
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Container>
          <SideBar toogleTheme={toogleTheme} />
          <Component {...pageProps} />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default MyApp;
