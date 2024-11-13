import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const TrandingCategiesCard = (props) => {
    return (
        <>
            <div className='cursor-pointer h-40 w-36 md:h-56 md:w-48 rounded-md flex gap-5 hover:scale-105 transition-all z-10 duration-150 md:shadow-sm'>
                <LazyLoadImage effect='blur' className='h-full w-fit mx-auto' src={props.thum} />
            </div>
        </>
    )
}

export default TrandingCategiesCard
