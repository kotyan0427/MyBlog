import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from "recoil";
import { AppProps } from 'next/app';
import '../styles/tailwind.css';
import theme from '../styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  );
};

export default MyApp;
