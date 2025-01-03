import React, { useContext } from 'react'
import { IoCall, IoMailOutline } from 'react-icons/io5'
import { Context } from '../../Utils/Context'
import { Link } from 'react-router-dom';

const Footer = () => {

    const { FooteText, Phone, mail } = useContext(Context);
    return (<>
        <div className="bg-[#014990] md:h-60 md:w-full text-white grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
            <div>
                <div className='text-red-400 font-bold text-xl md:text-2xl text-center md:my-2'>YouWe Fashion</div>
                <div className='md:px-5'>
                    {FooteText}
                </div>
            </div>

            <div className='flex flex-col gap-2 '>
                <div className='text-white font-bold text-xl md:text-2xl md:my-2'>About Us</div>
                <Link to="Privacy-Policy" className='cursor-pointer hover:text-red-400 w-fit'>Privacy Policy </Link>
                <Link to="Privacy-Policy" className='cursor-pointer hover:text-red-400 w-fit'>Shipping Policy</Link>
                {/* <Link to="galary" className='cursor-pointer hover:text-red-400 w-fit'>Galary</Link> */}
            </div>

            <div className='flex flex-col gap-2'>
                <div className=' text-white font-bold text-xl md:text-2xl md:my-2 '>Customer Care</div>
                <Link to="/Custumer" className='cursor-pointer hover:text-red-400 w-fit'>Return & Refund Policy </Link>
                <Link to="/contact" className='cursor-pointer hover:text-red-400 w-fit'>How to Buy</Link>
            </div>

            <div className='flex flex-col gap-2'>
                <div className='text-white font-bold text-xl md:text-2xl md:my-2'>Contact Us</div>

                <div className='flex items-center gap-2 hover:text-red-400 w-fit cursor-pointer'> <IoCall /><a href={`tel:${Phone}`}>{Phone}</a></div>

                <div className='flex items-center gap-2 hover:text-red-400 w-fit cursor-pointer'>   <IoMailOutline size={20} /><a href={`mailto:${mail}`}>Contact with mail</a>
                </div>
            </div>
            
        </div>
    </>
    );
}

export default Footer
