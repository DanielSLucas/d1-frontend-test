import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/GlobalStyles";
import defaultTheme from "../styles/themes/default";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
}

export default MyApp;
