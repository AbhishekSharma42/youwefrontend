import React, { useContext } from 'react'
import Slider from 'react-slick';
import BestSallingCard from './BestSallingCard';
import { Context } from '../../Utils/Context';
import { Link } from 'react-router-dom';

const Carousel = () => {
    const { PhoneCrouselCardSize, bestsallings } = useContext(Context);

    var settings = {
        infinite: true,
        slidesToShow: 5,
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
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        <Slider {...settings}>
            {
                bestsallings?.data?.map((item) => (
                    <Link to={`product/${item?.attributes?.slug}`} key={item.id} className='w-60'>
                        <BestSallingCard thum={item?.attributes?.Thumbnail?.data?.attributes?.url} />
                    </Link>
                ))
            }
        </Slider>
    );
}

export default Carousel
