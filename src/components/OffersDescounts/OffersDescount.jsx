import React, { useEffect, useState } from 'react'
import Descount from './Descount'

const OffersDescount = () => {

  const [getTopProduct, setTopProduct] = useState([]);

  const FindTopPRoduct = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/products?populate=*&[filters][ShowInHeader]=true`);
    const resData = await res.json();
     
    setTopProduct(resData);
  }

  useEffect(() => {
    FindTopPRoduct();
  }, []);

  return (
    <div className='bg-white md:h-[50vh] m-1 p-2 rounded-md md:grid-flow-row flex border-red-500 '>
      {getTopProduct?.data?.[0] ? 
      ( // Check if data exists at index 0
        <Descount
          thum={getTopProduct.data[0]?.Thumbnail?.[0]?.url} // Use optional chaining throughout
          title={getTopProduct.data[0]?.ShowInHeaderTitle}
          parag={getTopProduct.data[0]?.ShowInHeaderDesc}
          visiteLink={getTopProduct.data[0]?.slug}
        />
      ) : (
        // Render a loading indicator or placeholder
        <div className='animate-pulse w-full bg-slate-800/25'></div> // Or <p>No product found</p> or other appropriate feedback.
      )}
    </div>
  )
}

export default OffersDescount;