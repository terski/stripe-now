import { PaymentRequest } from '@stripe/stripe-js';
import {
    useStripe,
    useElements,
    PaymentRequestButtonElement,
} from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/core';

const PaymentButton = () => {
    const [paymentRequest, setPaymentRequest] = useState<PaymentRequest>(null);
    const [canMakePayment, setCanMakePayment] = useState<boolean>(false);
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        if (!stripe || !elements) {
            return;
        }

        if (!paymentRequest) {
            const request = stripe.paymentRequest({
                country: 'US',
                currency: 'usd',
                total: {
                    label: 'Muffin total',
                    amount: 1900,
                },
            });

            request.on('token', ({ complete, token, ...data }) => {
                console.log(`complete = ${complete}, token = ${token}`);
            });

            setPaymentRequest(request);

            const checkCanMakePayment = async () => {
                const result = await request.canMakePayment();
                console.log(`canMakePayment: ${JSON.stringify(result)}`);
                setCanMakePayment(result?.applePay || false);
            };
            checkCanMakePayment();
        }
    });

    return (
        <>
            {canMakePayment && (
                <Box mt={4}>
                    <PaymentRequestButtonElement options={{ paymentRequest }} />
                </Box>
            )}
        </>
    );
};

export default PaymentButton;
