import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import SideBar from '../components/SideBar';

import GlobalStyles, { Container } from '../styles/GlobalStyles';
import defaultTheme from '../styles/themes/default';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyles />
        <Container>
          <SideBar />
          <Component {...pageProps} />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default MyApp;
