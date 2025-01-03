import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function CatagresCard(props) {
    return (
        <>
            <div className='bg-white h-48 p-2 w-44 shadow-sm shadow-slate-500 rounded-md md:w-52 md:h-52'>

                {/* product thumlain */}
                <div className='flex h-full w-full rounded-md justify-center '>
                    <LazyLoadImage alt='' className='rounded-t-md h-full w-full' effect='blur' src={props.thum} />
                </div>
            </div>
        </>
    )}

export default CatagresCard