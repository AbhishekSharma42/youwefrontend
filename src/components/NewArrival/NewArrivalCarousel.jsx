import React, { useContext } from 'react'
import { Context } from '../../Utils/Context';
import Slider from 'react-slick';
import NewArrival from './NewArrival';
import { Link } from 'react-router-dom';

const NewArrivalCarousel = () => {

  const { PhoneCrouselCardSize, getNewArrival } = useContext(Context);

  var settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 100,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: PhoneCrouselCardSize,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <>
      <Slider {...settings}>
        {
          getNewArrival?.data?.map((item) => (
            <Link to={`product/${item?.attributes?.slug}`} key={item.id} className='h-40 w-36 md:h-56 md:w-48'>
              <NewArrival thum={item?.attributes?.Thumbnail?.data?.attributes?.url} />
            </Link>
          ))
        }
      </Slider>

    </>
  )
}

export default NewArrivalCarousel

