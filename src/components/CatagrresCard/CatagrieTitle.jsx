import React from 'react'
import { FaBorderAll, FaCaretRight } from "react-icons/fa";

function CatagrieTitle() {
    return (
        <>
            <div className='flex justify-between items-center mx-auto w-[88%]'>
                <div className='flex md:gap-5 md:items-center md:py-2'>
                    <div className='text-red-600'><FaBorderAll size={30} /></div>
                    <p className='text-xl md:text-3xl font-bold'>Top Categories</p>
                </div>

                <div className=' mx-5 text-[18px] md:text-xl flex items-center text-gray-600 cursor-pointer'>
                    View all <FaCaretRight />
                </div>
            </div>
        </>
    )
}

export default CatagrieTitle;