import React, { useContext } from 'react'
import CartTitleBar from './CartTitleBar'
import MainCart from './MainCart'
import { Context } from '../../Utils/Context'
import PayMent from '../../PayMent'

const Cart = () => {

    const { getCartProduct, getCartCount} = useContext(Context);
    // console.log(getCartProduct)

    // getCartProduct?.map((items) => (
    //     // count = + items.quantity
    //     console.log(count = + items.quantity)
    // ))
    // setCartCount(count)

    // let count;
    // for (let index = 0; index < getCartProduct?.length; index++) {
    //     const item = getCartProduct[index].quantity;
    //     console.log(count =+item)
        // count = +item?.quantity;
    // }
    // console.log(count);

    return (
        <>
            {getCartProduct ?
                <div className='p-3 pt-9 md:pt-14 md:p-5 md:w-[80%] mx-auto'>
                    <div className="grid md:grid-flow-col shadow-md">
                        <div className='grid-cols-12 bg-white '>
                            <div className='flex justify-between mt-8 '>
                                <span className='font-bold md:text-xl mx-5 md:px-10'>Shopping Cart</span>
                                <span className='font-bold md:text-xl mx-5 md:px-10'>{getCartProduct.length} items</span>
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
                                <span>Items {getCartCount} </span>
                                <span className='uppercase'>Total &#x20B9;0</span>
                            </div>
                            <hr className='w-[90%] h-[3px] bg-slate-300 mx-auto mt-3 md:mt-8' />
                            <div className='flex justify-center bottom-5'>
                                <button className='uppercase bg-blue-800 hover:bg-red-600 rounded-sm h-11 w-40 m-3 text-white mx-auto' onClick={() => { PayMent(getCartProduct) }}>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div >
                :
                "no product"
            }
        </>
    )
}

export default Cart
