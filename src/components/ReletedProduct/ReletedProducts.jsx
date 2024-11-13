import React, { useContext, useEffect, useState } from 'react'
import FlaseDeal from '../FlaseDealCard/FlaseDeal'
import { Context } from '../../Utils/Context'
import { Link } from 'react-router-dom';


const ReletedProducts = () => {

    const [getData, setData] = useState();
    const { getReletedProduct, getReletedSlug } = useContext(Context);

    // this method for releted product show into product detele 
    const GetProductByCategory = async () => {
        const res = await fetch(`http://localhost:1337/api/listings?filters[categories][name]=${getReletedProduct}&pagination[start]=0&pagination[limit]=10&populate=*`);



        const resData = await res.json();
        setData(await resData);
    }

    useEffect(() => {
        GetProductByCategory();
    }, [getReletedProduct]);


    return (
        <div>
            <div className="grid grid-cols-2 sm:w-[95%] md:w-[90%] mx-auto sm:grid-cols-3 md:grid-cols-5">
                {
                    getData?.data?.map((item) => (
                        <Link to={`/product/${item?.attributes?.slug}`} key={item.id}>
                            <FlaseDeal thum={item?.attributes?.Thumbnail?.data?.attributes?.formats?.thumbnail?.url} titles={item?.attributes?.Title} lessPrice={item.attributes.orignal_price} price={item?.attributes?.Price} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default ReletedProducts
