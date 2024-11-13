import React, { useContext, useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Context } from '../../../Utils/Context'
import { BiSearch } from 'react-icons/bi'
import FlaseDeal from '../../FlaseDealCard/FlaseDeal.jsx'


const SearchBar = () => {
    const { SearchBarHendle } = useContext(Context);
    const [getvlaue, setvalue] = useState("");
    const [getProduct, setProduct] = useState([]);

    const onchange = (e) => {
        setvalue(e.target.value);
    }

    const SearchProduct = async () => {
        let res = await fetch(`http://localhost:1337/api/listings?filters[Title][$contains]=${getvlaue}&populate=*`);
        let resData = await res.json();

        setProduct(resData);
        if (!getvlaue.length) {
            resData = null
        }
    }

    useEffect(() => {
        SearchProduct();
    }, [getvlaue])


    return (
        <>
            <div className='bg-cyan-950 h-[90vh] w-full py-2 gap-2 flex flex-col'>
                <div className='flex mx-auto items-center justify-center z-10'>
                    <input className='h-12 rounded-l-full pl-5 md:w-96' type="text" placeholder='Search product here...' onChange={onchange} />
                    <div className='h-12 items-center bg-white justify-center flex rounded-r-full w-14 '>
                        <BiSearch size={20} />
                    </div>
                </div>

                <div className="container text-white mx-auto w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 overflow-y-scroll">

                    {
                        getProduct?.data?.map((item) => (
                            <FlaseDeal thum={item?.attributes?.Thumbnail?.data?.attributes?.formats?.thumbnail?.url} titles={item?.attributes?.titles} lessPrice={item.attributes.orignal_price} price={item?.attributes?.Price} />
                        ))
                    }

                </div>

                <div className=' float-right text-2xl bg-white w-fit p-2 rounded-full hover:bg-red-600 hover:text-white mx-auto shadow-md ' onClick={SearchBarHendle}>
                    <FaTimes />
                </div>
            </div>
        </>
    )
}

export default SearchBar;