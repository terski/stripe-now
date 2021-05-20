import { NowRequest, NowResponse } from '@now/node';
import { Stripe } from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-03-02',
});

export default async (req: NowRequest, res: NowResponse) => {
    if (req.method !== 'POST') {
        res.status(405).end(`Method ${req.method} not allowed`);
        return;
    }
    const { payment_method, email } = req.body;

    if (!payment_method) {
        res.status(400).end(`No payment_method specified`);
    }
    if (!email) {
        res.status(400).end(`No email specified`);
    }

    const customer = await stripe.customers.create({
        payment_method,
        email,
        invoice_settings: {
            default_payment_method: payment_method,
        },
    });

    const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: 'plan_GkpnkH8QQVmLbb' }],
        expand: ['latest_invoice.payment_intent'],
    });

    res.json({ subscription });
};
