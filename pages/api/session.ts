import { NowRequest, NowResponse } from '@now/node';
import { Stripe } from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27',
});

export default async (req: NowRequest, res: NowResponse) => {
    if (req.method !== 'POST') {
        res.status(405).end(`Method ${req.method} not allowed`);
        return;
    }
    const { priceId } = req.body;

    if (!priceId) {
        res.status(400).end(`No priceId specified`);
    }

    try {
        const session = await stripe.checkout.sessions.create({
            mode: 'subscription',
            payment_method_types: [
                // 'acss_debit',
                // 'afterpay_clearpay',
                // 'alipay',
                // 'bacs_debit',
                // 'bancontact',
                'card',
                // 'eps',
                // 'fpx',
                // 'giropay',
                // 'grabpay',
                // 'ideal',
                // 'p24',
                // 'sepa_debit',
                // 'sofort',
            ],
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            // customer: 'cus_JPzdzGBv3VucQJ',
            success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}/checkout`,
        });

        res.json({ ...session });
    } catch (e) {
        console.error(e);
        res.status(500).end(e.message);
    }
};
