import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Context } from '../Utils/Context';
import { BiSearch } from 'react-icons/bi';
import FlaseDeal from '../components/FlaseDealCard/FlaseDeal';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    const { SearchBarHendle } = useContext(Context);
    const [getvlaue, setvalue] = useState(null);
    const [getProduct, setProduct] = useState([]);

    const onchange = (e) => {
        setvalue(e.target.value);
    }

    const SearchProduct = async () => {
        try {
            let res = await fetch(`${process.env.REACT_APP_API_URL}/products?filters[Title][$contains]=${getvlaue}&populate=*`);
            let resData = await res.json();

            setProduct(resData);
            if (!getvlaue.length) {
                resData = null
            }
        } catch (error) {
            return;
        }
    }

    useEffect(() => {
        SearchProduct();
    })


    return (
        <>
            <div className='flex mx-auto items-center justify-center sticky top-0 bg-slate-700 py-4 z-30'>
                <input className='h-12 rounded-l-full pl-5 md:w-96' type="text" placeholder='Search product here...' onChange={onchange} />
                <div className='h-12 items-center bg-white justify-center flex rounded-r-full w-14 '>
                    <BiSearch size={20} />
                </div>
            </div>

            <div className={`w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5`}>
                {
                    getProduct?.data?.map((item) => (
                        <Link to={`/product/${item?.slug}`} key={item.id} onClick={SearchBarHendle}>
                            <FlaseDeal thum={item?.Thumbnail[0]?.url} titles={item?.Title} lessPrice={item.orignal_price} price={item?.Price} />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}
export default SearchBar
