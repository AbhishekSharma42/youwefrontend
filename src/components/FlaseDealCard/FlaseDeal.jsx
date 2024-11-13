import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function FlaseDeal(props) {

    return (
        <>
            <div className='bg-white my-5 h-80  w-44 shadow-sm shadow-slate-500 rounded-md md:w-48 md:h-80'>

                {/* product thumlain */}
                <div className='flex h-[85%] w-full rounded-md justify-center '>
                    <LazyLoadImage alt='' className='rounded-t-md h-full w-full' effect='blur' src={props.thum} />
                </div>

                {/* Product title */}
                <div className='font-normal pl-2 capitalize overflow-ellipsis whitespace-nowrap overflow-hidden'>
                    {props.titles}
                </div>

                {/* product price */}
                <div className='font-normal pl-2 capitalize text-lg h-[20%]'>
                    <del className='text-red-400 '>&#8377;{props.lessPrice}</del><span className='px-2 text-base text-blue-500'>&#8377;{props.price}</span>
                </div>
            </div>
        </>
    )
}

export default FlaseDeal