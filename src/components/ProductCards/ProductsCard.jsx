import React, { useContext } from 'react'
import FlaseDeal from '../FlaseDealCard/FlaseDeal'
import { Link } from 'react-router-dom'
import { Context } from '../../Utils/Context'
import Spinner from '../Spinner/Spinner';


function ProductsCard() {

    const { pruducts } = useContext(Context);

    return (
        <>
            <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-5 gap-x-14 mt-5 mb-5">
                {
                    pruducts?.data?.map((item) => (
                        <Link to={`/product/${item?.slug}`} key={item.id} className='hover:scale-105 w-fit h-fit md:my-4'>
                            <FlaseDeal thum={item?.Thumbnail[0]?.url} titles={item?.Title} price={item?.Price} lessPrice={item?.orignal_price} />
                        </Link>
                    )) ||
                    <Spinner />
                }
            </div>
        </>
    )
}

export default ProductsCard