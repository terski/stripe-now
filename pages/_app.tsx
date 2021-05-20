import { AppProps } from 'next/app';
import { Elements } from '@stripe/react-stripe-js';
import getStripe from '../utils/get-stripe';
import { ChakraProvider } from '@chakra-ui/react';

const stripePromise = getStripe();

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Elements stripe={stripePromise}>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </Elements>
    );
};

export default App;
