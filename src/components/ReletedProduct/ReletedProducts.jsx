import React, { useContext, useEffect, useState } from 'react'
import FlaseDeal from '../FlaseDealCard/FlaseDeal'
import { Context } from '../../Utils/Context'
import { Link } from 'react-router-dom';


const ReletedProducts = () => {

    const [getData, setData] = useState();
    const { getReletedSlug } = useContext(Context);

    // this method for releted product show into product detele 
    const GetProductByCategory = async () => {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/products?filters[categories][slug]=${getReletedSlug}&pagination[start]=0&pagination[limit]=10&populate=*`);

        const resData = await res.json();

        setData(resData);
    }

    useEffect(() => {
        GetProductByCategory();
    }, [getReletedSlug]);


    return (
        <div>
            <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-5 gap-x-14 mt-5 mb-5'>
                {
                    getData?.data?.map((item) => (
                        <Link to={`/product/${item?.slug}`} key={item.id}>
                            <FlaseDeal thum={item?.Thumbnail[0]?.url} titles={item?.Title} lessPrice={item.orignal_price} price={item?.Price} />
                        </Link>
                    ))
                    ||
                    <div>
                        Loading...
                    </div>

                }
            </div>
        </div>
    )
}

export default ReletedProducts
