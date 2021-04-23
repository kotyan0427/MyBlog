import { ChakraProvider } from "@chakra-ui/react";
import "@pathofdev/react-tag-input/src/styles/index.scss";
import "../styles/tailwind.css";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
