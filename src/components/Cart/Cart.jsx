import React, { useContext } from 'react'
import CartTitleBar from './CartTitleBar'
import MainCart from './MainCart'
import { Context } from '../../Utils/Context'
import { loadStripe } from '@stripe/stripe-js'

const Cart = () => {

    const { getCartProduct, getCartCount } = useContext(Context);


    // const makepayment = () => { baseUrl: "http://localhost:1337/api/" }


    const stripePromis = loadStripe("pk_test_51QRQf7IWr0tdfziPZMkeWugFToRyMJZpxAEtPCQB0I2BDdpWgAAW71ZFY8nVvVR1N5ud9sDisHQYVTRa39PlJiGR00hA3HbjR9");

    const handlePayment = async () => {
        try {

            const stripe = await stripePromis;
            const res = await fetch("http://localhost:1337/api/orders");
            const resData = await res.json();
            console.log(resData);

            await stripe.redirectToCheckout({
                sessionId: resData?.data[0]?.id
            })
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className='p-3 pt-9 md:pt-14 md:p-5 md:w-[80%] mx-auto'>
                <div className="grid md:grid-flow-col shadow-md">
                    <div className='grid-cols-12 bg-white '>
                        <div className='flex justify-between mt-8 '>
                            <span className='font-bold md:text-xl mx-5 md:px-10'>Shopping Cart</span>
                            <span className='font-bold md:text-xl mx-5 md:px-10'>{getCartCount} items</span>
                        </div>
                        {/* <div className='h-1 w-auto bg-slate-400'></div> */}
                        <hr className='w-[90%] h-2 mx-auto md:mt-8 ' />

                        <div className='hidden md:block'>
                            <CartTitleBar />
                        </div>

                        {/*item's cart's */}
                        <div className='mx-auto w-[90%] flex-col my-5'>

                            {
                                getCartProduct?.map((items) => (
                                    <div key={items?.slug}>
                                        <MainCart renders={`/product/${items?.slug}`} thum={items?.Thumbnail[0]?.url} realPrice={items?.Price} Qty={items?.quantity} sData={items} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className='grid-rows-2 bg-gray-200 mt-8'>
                        <span className='font-bold md:text-xl mx-5 md:mx-10'>Order Summary</span>
                        <hr className='w-[90%] h-[3px] bg-slate-300 mx-auto mt-3 md:mt-8' />
                        <div className='flex justify-between mx-5 md:mx-8'>
                            <span>Items {getCartCount}</span>
                            <span className='uppercase'>Total &#x20B9;0</span>
                        </div>
                        <hr className='w-[90%] h-[3px] bg-slate-300 mx-auto mt-3 md:mt-8' />
                        <div className='flex justify-center bottom-5'>
                            <button className='uppercase bg-blue-800 hover:bg-red-600 rounded-sm h-11 w-40 m-3 text-white mx-auto' onClick={handlePayment}>Checkout</button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Cart
