import { ChakraProvider } from '@chakra-ui/react';
import '@pathofdev/react-tag-input/src/styles/index.scss';
import { AppProps } from 'next/app';
import '../styles/tailwind.css';
import theme from '../styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
