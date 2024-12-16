import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Utils/Context'
import CatagresCard from '../components/CatagrresCard/CatagresCard';
import { Link } from 'react-router-dom';

const Catageries = () => {
    const { getAllCategory } = useContext(Context);

    const [getdata, setdata] = useState([]);


    {
        getdata?.data?.map((item) => {
            console.log(item);
        })
    }


    useEffect(() => {
        setdata(getAllCategory);
    }, [getAllCategory])

    return (
        <>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 md:w-[85%] mx-auto">
                {
                    getdata?.data?.map((item) => (
                        <Link to={`/product-category/${item?.slug}`} key={item.id} className='hover:scale-105 w-fit h-fit md:my-4 cursor-pointer'>
                            <CatagresCard thum={item?.Image?.url} />
                        </Link>
                    ))
                }
            </div>

        </>
    )
}

export default Catageries