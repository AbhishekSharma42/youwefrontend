import React, { useContext } from 'react'
import { FaTrash } from "react-icons/fa6";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { Context } from '../../Utils/Context';

const MainCart = (props) => {


    const { handleQtyToCart, handleRemoveToCart } = useContext(Context);

    return (
        <>
            <div className=' h-40 md:h-24 w-full my-4 grid grid-flow-col justify-between items-center shadow-md'>
                <Link to={props.renders} className='w-20'>
                    <LazyLoadImage effect='blur' src={props.thum} className='w-20 h-[6rem]' alt="" />
                </Link>

                <div className='flex items-center w-20 justify-center pl-10 '>
                    <button className='text-3xl px-4 h-8 flex items-center cursor-pointer font-bold hover:bg-red-300 hover:text-white border-2' onClick={() => handleQtyToCart("dec", props.sData)}>-</button>

                    <span className='text-xl border-2 px-3 border-gray-600'>{props.Qty}</span>

                    <button className='text-3xl px-4 h-8 flex items-center cursor-pointer font-bold hover:bg-green-300 hover:text-white border-2' onClick={() => handleQtyToCart("inc", props.sData)}>+</button>
                </div>
                <div>&#8377; {props.realPrice}</div>
                <div>&#8377; {props.Qty * props.realPrice}</div>
                <div className='text-red-500 hover:text-red-800 hover:cursor-pointer items-center pr-3' onClick={() => handleRemoveToCart(props.sData)}>
                    <FaTrash />
                </div>
            </div>
        </>
    )
}

export default MainCart
