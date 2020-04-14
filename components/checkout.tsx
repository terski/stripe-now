import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button, Box, Flex } from '@chakra-ui/core';
import { SyntheticEvent } from 'react';

const Checkout = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.error(error);
        } else {
            console.log(paymentMethod);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box m={4} h={8} w={300} >
                <CardElement />
            </Box>

            <Button type="submit" variantColor="green" isDisabled={!stripe}>
                Pay
            </Button>
        </form>
    );
};

export default Checkout;
