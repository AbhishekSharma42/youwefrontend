import { loadStripe } from '@stripe/stripe-js'
const stripePromise = loadStripe('pk_test_51QRQf7IWr0tdfziPZMkeWugFToRyMJZpxAEtPCQB0I2BDdpWgAAW71ZFY8nVvVR1N5ud9sDisHQYVTRa39PlJiGR00hA3HbjR9');

const PayMent2 = async (Product) => {
    console.log(Product);

    try {
        const stripe = await stripePromise;

        const res = fetch(`${process.env.REACT_APP_API_URL}/orders`, {
            method: "POST",
            headers: {
                "Content-typeccc": "application/json"
            },
            mode: "cors",
            body: JSON.stringify({ Product })
        })

        

        stripe.redirectToCheckout({
            lineItems: Product,
            mode: "payment",
            sessionId: res?.data?.stripeSession?.id,
            successUrl: "http://localhost:3000/Success",
            cancelUrl: "http://localhost:3000/PayFail",
        }).then(result => {
            if (result.error) {
                alert(result.error.message);
            }
        })

    } catch (error) {
        console.log(error);
    }
};

PayMent2();


// *********************************************************************
// *********************************************************************
// const stripePromise = loadStripe(
//     "pk_test_eOTMlr8usx1ctymXqrik0ls700lQCsX2UB"
// );
const PayMent = async (Product) => {
    try {
        const stripe = await stripePromise;
        const res = await fetch(`${process.env.REACT_APP_API_URL}/orders`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            mode: "cors",
            body: JSON.stringify({ Product })
        })
        await stripe.redirectToCheckout({
            lineItems: Product,
            mode: "payment",
            sessionId: res?.data?.stripeSession?.id,
        });

    } catch (err) {
        console.log(err);
    }
};

export default PayMent;