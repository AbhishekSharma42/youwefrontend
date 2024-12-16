import React, { useContext, useEffect } from 'react'
import OffersDescount from '../components/OffersDescounts/OffersDescount';
import ProductsCard from '../components/ProductCards/ProductsCard';
import { FcFlashOn } from 'react-icons/fc'
import BestSellingTitle from '../components/BestSelling/BestSellingTitle';
import Carousel from '../components/BestSelling/Carousel';
import NewArrivalTitle from '../components/NewArrival/NewArrivalTitle';
import NewArrivalCarousel from '../components/NewArrival/NewArrivalCarousel';
import { Context } from '../Utils/Context';
import { Link } from 'react-router-dom';
import Informations from '../components/InformationCard/Informations';
import FlaseDeal from '../components/FlaseDealCard/FlaseDeal';

function Index() {
  const { getTranding } = useContext(Context);

  useEffect(() => {
    document.title = "YouWe Fashion"
  }, [])

  return (
    <>
      {/* Top Header productes card */}
      <div className=''>
        <OffersDescount />
      </div>

      {/* Flase deal productes cards*/}
      <span className='text-2xl font-bold font-sans capitalize p-2 flex items-center'><span className='text-yellow-800 border-none'><FcFlashOn size={35} /></span>Flash deals</span>
      <div className='mx-auto w-full'>
        <ProductsCard />
      </div>

      {/* Trandding categories */}
      <div>
        {/* <TrandingCategoriesTitle /> */}
        <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-5 gap-x-14 mt-5 mb-5'>
          {
            getTranding?.data?.map((item) => (
              <Link to={`product/${item?.slug}`} key={item.id} >
                <FlaseDeal thum={item?.Thumbnail[0]?.url} titles={item?.Title} price={item?.Price} lessPrice={item?.orignal_price} />
              </Link>
            )) ||
            <div >
              Loading...
            </div>
          }
        </div>
      </div>
      {/* ################################################ */}
      {/* </div> */}

      {/* Bast Selling */}
      <BestSellingTitle />
      <div className='w-[80%] mx-auto my-5'>
        <Carousel />
      </div>
      {/* ################################################ */}

      {/* ################################################ */}
      <NewArrivalTitle />
      <div className='w-[80%] mx-auto py-9'>
        <NewArrivalCarousel />
      </div>

      <div className='w-[90%] h-full mx-auto flex flex-wrap gap-10'>
        <Informations thum="icons8-delivery-50.png" title="worldwide Delivery" desc="we offer competitive price on our 100 million plus product any range." />
        <Informations thum="icons8-payment-50.png" title="Safe payment" desc="we offer competitive price on our 100 million plus product any range." />
        <Informations thum="icons8-self-confidence-64.png" title="shop with confidence " desc="we offer competitive price on our 100 million plus product any range." />
        <Informations thum="icons8-online-support-50.png" title="24/7 Support" desc="we offer competitive price on our 100 million plus product any range." />
      </div>
    </>
  )
}

export default Index