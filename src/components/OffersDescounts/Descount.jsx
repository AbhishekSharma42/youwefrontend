import React, { useContext } from 'react'
import { Context } from '../../Utils/Context'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Descount() {

    const { TopBannerHeading, TopBannerParagraph, TopBannerImg } = useContext(Context)

    return (<>
        <div className='flex flex-col-reverse sm:grid sm:grid-flow-col'>
            <div className="left h-full md:py-0 md:justify-items-center md:flex md:flex-col md:gap-5 md:items-center md:justify-center">

                <h1 className='text-3xl sm:text-3xl md:text-4xl xl:text-5xl font-bold py-2 font-serif capitalize  md:text-center'>{TopBannerHeading}</h1>

                <p className='font-sans md:text-xl md:text-center'>{TopBannerParagraph}</p>

                <button className='bg-red-500 hover:bg-red-600 text-white font-semibold p-2 px-3 rounded-2xl my-3 text-lg capitalize'>visit collections</button>
            </div>
            <div className='right flex justify-center'>
                <div className="sm:order-2 h-80 w-80 md:h-96 md:w-96 justify-center">
                    <LazyLoadImage effect="blur" className='h-80 ' src={`http://127.0.0.1:8000${TopBannerImg}`} alt="img tag" />
                </div>
            </div>
        </div>
    </>
    )
}

export default Descount
