import { AppProps } from 'next/app';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Elements stripe={stripePromise}>
            <ThemeProvider>
                <CSSReset />
                <Component {...pageProps} />
            </ThemeProvider>
        </Elements>
    );
};

export default App;
