import React from 'react'

const CartTitleBar = () => {
    return (
        <>
            <div className='mx-8'>
                <div className='text-base grid grid-flow-col '>
                    <span className='grid-cols-7'>Product Details</span>
                    <span className='grid-cols-10'>Quantity</span>
                    <span className='grid-cols-2'>Price</span>
                    <span className='grid-cols-2'>Total</span>
                    <span className='grid-cols-1'>Action</span>
                </div>
            </div>
        </>
    )
}

export default CartTitleBar
