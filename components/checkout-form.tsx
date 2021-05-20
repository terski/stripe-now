import { Box, Button } from '@chakra-ui/react';
import getStripe from '../utils/get-stripe';

const createCheckoutSession = async () => {
    const response = await fetch('/api/session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            priceId: 'price_1IlH4KCLbbNSrDjC5tZ314Sv',
        }),
    });

    if (response.ok) {
        return response.json();
    } else {
        console.error(response.statusText);
    }
};

const subscribe = async () => {
    const session = await createCheckoutSession();
    if (session) {
        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout({
            sessionId: session.id,
        });
        console.warn(error);
    }
};

const CheckoutForm = () => {
    return (
        <Box my={4}>
            <Button colorScheme="green" onClick={subscribe}>
                Subscribe
            </Button>
        </Box>
    );
};

export default CheckoutForm;
