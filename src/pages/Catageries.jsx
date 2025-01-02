import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Utils/Context'
import CatagresCard from '../components/CatagrresCard/CatagresCard';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';

const Catageries = () => {
    const { getAllCategory } = useContext(Context);

    const [getdata, setdata] = useState([]);

    useEffect(() => {
        setdata(getAllCategory);
    }, [getAllCategory])

    return (
        <>
            <div className='capitalize container text-lg mx-auto w-[95%] sm:w-[80%] md:w-[80%] lg:w-[60%] p-2 bg-white mt-4 shadow-md'>Home / Catagres</div>
            <div className="w-fit mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center justify-center gap-y-3 gap-x-3 mt-5 mb-5">
                {
                    getdata?.data?.map((item) => (
                        <Link to={`/product-category/${item?.slug}`} key={item.id} className='hover:scale-105 w-fit h-fit md:my-4 cursor-pointer'>
                            <CatagresCard thum={item?.Image?.url} />
                        </Link>
                    ))
                    ||
                    <Spinner />
                }
            </div>

        </>
    )
}

export default Catageries