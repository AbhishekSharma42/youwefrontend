import React from 'react'

const Informations = (props) => {
    return (
        <>
            <div className='bg-white shadow shadow-slate-400 h-60 w-72 mx-auto md:h-64 md:w-72 rounded-md flex flex-col my-auto pt-2 px-2 gap-3'>
                <div className='mx-auto h-20 w-20 md:w-15 md:h-25 shadow shadow-slate-300 rounded-full bg-gray-200 flex items-center'>
                    <img className='mx-auto w-15 h-15' src={props.thum} alt="" />
                </div>
                <div className='mx-auto text-black capitalize pb-2 font-semibold text-xl'>{props.title}</div>
                <div className='text-center text-gray-500 mx-auto w-[89%]'>{props.desc}</div>
            </div>
        </>
    )
}

export default Informations
