import React, { useContext, useEffect } from 'react'
import OffersDescount from '../components/OffersDescounts/OffersDescount';
import ProductsCard from '../components/ProductCards/ProductsCard';
import { FcFlashOn } from 'react-icons/fc'
import { TrandingCategoriesTitle } from '../components/Tranding/TrandingCategoriesTitle';
import TrandingCategiesCard from '../components/Tranding/TrandingCategiesCard';
import BestSellingTitle from '../components/BestSelling/BestSellingTitle';
import Carousel from '../components/BestSelling/Carousel';
import NewArrivalTitle from '../components/NewArrival/NewArrivalTitle';
import NewArrivalCarousel from '../components/NewArrival/NewArrivalCarousel';
import { Context } from '../Utils/Context';
import { Link } from 'react-router-dom';
import Informations from '../components/InformationCard/Informations';

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
      <div className='mx-auto md:w-[95%]'>
        <ProductsCard />
      </div>

      {/* Bast Selling */}
      <BestSellingTitle />
      <div className='w-[80%] mx-auto my-5'>
        <Carousel />
      </div>
      {/* ################################################ */}

      {/* Trandding categories */}
      <div>
        <TrandingCategoriesTitle />
        <div className='w-[100%] md:w-[95%] xl:w-[90%] mx-auto mt-2 h-full my-5 border-2 '>
          <div className='grid gap-2 md:gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6 h-fit'>
            {
              getTranding?.data?.map((item) => (
                <Link to={`product/${item?.attributes?.slug}`} key={item.id} className='h-40 w-36 md:h-56 md:w-48'>
                  <TrandingCategiesCard thum={item?.attributes?.Thumbnail?.data?.attributes?.url} />
                </Link>
              ))
            }
          </div>
        </div>
        {/* ################################################ */}
      </div>

      <NewArrivalTitle />
      <div className='w-[100%] md:w-[95%] xl:w-[90%] mx-auto mt-2 h-full my-5'>
        <div className='grid gap-2 md:gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6'>
        </div>
      </div>
      {/* ################################################ */}
      <div className='w-[80%] mx-auto my-5'>
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