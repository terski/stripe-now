import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button, Box, Flex } from '@chakra-ui/core';
import { SyntheticEvent } from 'react';
import PaymentButton from './payment-button';

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
            const response = await fetch('/api/membership', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: 'foo@foo.com',
                    payment_method: paymentMethod.id,
                }),
            });
            console.log(await response.json());
        }
    };

    return (
        <Box width="100%" maxW={500} p={4} mt={4} borderWidth="1px">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '18px',
                            },
                        },
                    }}
                />

                <Button
                    type="submit"
                    width="100%"
                    mt={4}
                    variantColor="green"
                    isDisabled={!stripe}
                >
                    Pay with Card
                </Button>
                <PaymentButton />
            </form>
        </Box>
    );
};

export default Checkout;
