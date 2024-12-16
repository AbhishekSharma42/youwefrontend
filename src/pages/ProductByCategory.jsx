import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import FlaseDeal from '../components/FlaseDealCard/FlaseDeal';

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

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 md:w-[85%] mx-auto h-[80vh]">
                {
                    getCategoryData?.data?.map((item) => (
                        <Link to={`/product/${item?.slug}`} key={item.id}>
                            <FlaseDeal thum={item?.Thumbnail[0]?.url} titles={item?.Title} lessPrice={item?.orignal_price} price={item?.Price} />
                        </Link>
                    ))
                    ||

                    <div>
                        Loading...
                    </div>
                }
            </div>
        </>
    )
}

export default ProductByCategory
