import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import FlaseDeal from '../components/FlaseDealCard/FlaseDeal';

const ProductByCategory = () => {
    const { str } = useParams();

    const [getCategoryData, setCategoryData] = useState([]);

    const getCategory = async () => {
        const res = await fetch(`http://localhost:1337/api/listings?populate=*&&[filters][categories][slug]=${str}`);
        const resData = await res?.json();
        setCategoryData(resData);

    }

    getCategory();

    useEffect(() => {
    }, [str])

    return (
        <>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 md:w-[85%] mx-auto h-[80vh]">
                {
                    getCategoryData?.data?.map((item) => (
                        <Link to={`/product/${item?.attributes?.slug}`} key={item.id}>
                            <FlaseDeal thum={item?.attributes?.Thumbnail?.data?.attributes?.formats?.thumbnail?.url} titles={item?.attributes?.Title} lessPrice={item.attributes.orignal_price} price={item?.attributes?.Price} />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default ProductByCategory
