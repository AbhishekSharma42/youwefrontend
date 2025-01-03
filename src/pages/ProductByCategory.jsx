import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import FlaseDeal from '../components/FlaseDealCard/FlaseDeal';
import Spinner from '../components/Spinner/Spinner';

const ProductByCategory = () => {
    const { str } = useParams();

    const [getCategoryData, setCategoryData] = useState([]);

    const getCategory = async () => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/products?populate=*&&[filters][categories][slug]=${str}`);
        const resData = await res?.json();
        setCategoryData(resData);
    }

    getCategory();

    useEffect(() => {
    }, [getCategoryData])

    return (
        <>

            <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-5 gap-x-14 mt-5 mb-5'>
                {
                    getCategoryData?.data?.map((item) => (
                        <Link to={`/product/${item?.slug}`} key={item.id}>
                            <FlaseDeal thum={item?.Thumbnail[0]?.url} titles={item?.Title} lessPrice={item?.orignal_price} price={item?.Price} />
                        </Link>
                    ))
                    ||
                    <Spinner/>
                }
            </div>
        </>
    )
}

export default ProductByCategory
