import React, { useContext } from 'react'
import { Context } from '../Utils/Context'
import CatagresCard from '../components/CatagrresCard/CatagresCard';
import { Link } from 'react-router-dom';

const Catageries = () => {
    const { getAllCategory } = useContext(Context);

    return (
        <>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 md:w-[85%] mx-auto">
                {
                    getAllCategory?.data?.map((item) => (
                        <Link to={`/product-category/${item?.attributes?.slug}`} key={item.id} className='hover:scale-105 w-fit h-fit md:my-4 cursor-pointer'>
                            <CatagresCard thum={item?.attributes?.Thumbnail?.data?.attributes?.url} />
                        </Link>
                    ))
                }
            </div>

        </>
    )
}

export default Catageries