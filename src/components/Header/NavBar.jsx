import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaShoppingCart, FaBars, FaUserAlt } from 'react-icons/fa'
import { RxCross1 } from "react-icons/rx";
import { Context } from '../../Utils/Context';

function NavBar() {

    const { appName, getCartCount } = useContext(Context);

    const [openNav, SetNav] = useState(false);
    const [getProfile, SetProfile] = useState(false);


    const OpenNavBar = () => {
        if (openNav === false) { SetNav(true); }
        else { SetNav(false); }
    }

    const OpenProfile = () => {
        if (getProfile === false) { SetProfile(true); }
        else { SetProfile(false); }
    }


    return (
        <>
            <div className='main-header z-30 sticky top-0 h-14 items-center backdrop-blur-sm flex justify-around sm:justify-around md:justify-around  text-white bg-cyan-950 shadow '>
                <div className='left text-emerald-50'>
                    <ul className='hover:text-red-500 text-2xl md:hidden sm:hidden cursor-pointer' onClick={OpenNavBar}>
                        <li>{openNav ? <RxCross1 /> : <FaBars />}</li>
                    </ul>

                    <ul className={`absolute bg-cyan-950 ${openNav ? 'block z-40 transition-all duration-200  -ml-7 mt-4 h-fit p-3 rounded-br-md rounded-bl-md' : 'hidden'} h-[10rem] flex flex-col transition-all duration-100 sm:mt-[0rem] sm:relative sm:main-header sm:h-12 sm:items-center sm:backdrop-blur-sm sm:flex sm:flex-row sm:justify-around sm:space-x-5`}>
                        <Link to="/" className='hover:bg-red-500  md:rounded-xl p-1 cursor-pointer'>Home</Link>
                        <Link to="contact" className='hover:bg-red-500  md:rounded-xl p-1 cursor-pointer'>Contact</Link>
                        <Link to="customize" className='hover:bg-red-500 md:rounded-xl p-1 cursor-pointer'>Customize</Link>
                        <Link to="catagres" className='hover:bg-red-500 md:rounded-xl p-1 cursor-pointer'>Categoryes</Link>
                    </ul>
                </div>

                <div className=" text-2xl cursor-pointer first-line:font-bold md:center md:text-2xl sm:text-xl "><Link to="/">{appName}</Link> </div>
                <div>
                    <ul className="text-lg gap-2 flex md:text-xl md:gap-1 md:space-x-5 sm:space-x-2 md:items-center ">
                        <Link to="/serach" className={`rounded-xl p-1 cursor-pointer`} ><FaSearch /></Link>
                        <Link to="cart" className='hover:text-red-500 rounded-xl p-1 cursor-pointer ' ><FaShoppingCart />
                            <div className='absolute top-3 pl-5 text-red-600 text-sm font-extrabold'>
                                {getCartCount}
                            </div>
                        </Link>
                        <Link onClick={OpenProfile} className='hover:text-red-500 rounded-2xl p-1 cursor-pointer border'><FaUserAlt /></Link>
                    </ul>
                </div>

            </div>

            <div className={`z-40 ${getProfile ? " top-12 " : "top-[-13rem]"}  fixed right-[-40px] md:right-0 bg-cyan-950 h-fit w-32 flex flex-col p-5 rounded-b-md mr-10 transition-all duration-200`} >

                {/* Some featurese */}
                <Link className={`text-white hover:cursor-pointer hover:text-red-400 `} >My Account</Link>
                <Link className='text-white hover:cursor-pointer hover:text-red-400'>My Wishlist</Link>
                <Link className='text-white hover:cursor-pointer hover:text-red-400'>My Orders</Link>

                {/* Authantication */}
                <Link to="LogIn" className='text-white hover:cursor-pointer hover:text-red-400'>LogIn</Link>
                <Link to="/" className='text-white hover:cursor-pointer hover:text-red-400'>Logout</Link>
                <Link to="/SingUp" className='text-white hover:cursor-pointer hover:text-red-400'>SingUp</Link>

            </div>
        </>
    )
}

export default NavBar