import React, { useContext } from 'react'
import FlaseDeal from '../FlaseDealCard/FlaseDeal'
import { Link } from 'react-router-dom'
import { Context } from '../../Utils/Context'

function ProductsCard() {

    const { pruducts } = useContext(Context);

    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
                {
                    pruducts?.data?.map((item) => (
                        <Link to={`/product/${item?.attributes?.slug}`} key={item.id} className='hover:scale-105 w-fit h-fit md:my-4'>
                            <FlaseDeal thum={item?.attributes?.Thumbnail?.data?.attributes?.url} titles={item?.attributes?.Title} price={item?.attributes?.Price} lessPrice={item?.attributes?.orignal_price} />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default ProductsCard