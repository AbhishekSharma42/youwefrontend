import React from 'react'
import { FaGift } from 'react-icons/fa'

const NewArrivalTitle = () => {
    return (
        <>
            <div className='flex justify-between items-center mx-auto w-[88%]'>
                <div className='flex md:gap-5 md:items-center'>
                    <div className='text-red-600'> <FaGift size={30} /></div>
                    <p className='text-xl md:text-3xl font-bold'>New Arrivals</p>
                </div>
            </div>
        </>
    )
}

export default NewArrivalTitle
