import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../Utils/Context';
import Goto from '../GoToUp';
import ReletedProducts from '../components/ReletedProduct/ReletedProducts';
import { FaStar, FaStarHalfAlt, FaCartPlus } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

function ProductDetailCard() {

    const { handleAddToCart, SetReletedSlug } = useContext(Context)

    // product details
    const { str } = useParams();

    const [thum, setThum] = useState();
    const [ptitle, setPtitle] = useState();
    const [Prices, setPrices] = useState();
    const [orignalPrices, setOrignalPrices] = useState();
    const [cartData, setCartData] = useState();
    const [images, setImages] = useState();
    // const [resSize, setResSize] = useState(0);
    const [sizeValue, setSizeValue] = useState("");
    const [getDesc, setDesc] = useState("");
    const [getPID, setPID] = useState("");


    // this method for product detele into the single page 
    const GetProductDetail = async () => {

        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/products?filters[slug][$eq]=${str}&populate=*`);
            const resData = await res.json();

            setThum(resData?.data[0]?.Thumbnail[0]?.url);
            setImages(resData?.data[0]?.Image)

            setCartData(resData?.data[0])

            setPID(resData?.data[0]?.id)

            setDesc(resData?.data[0]?.Description);

            setPtitle(resData?.data[0]?.Title);
            setPrices(resData?.data[0]?.Price);
            setOrignalPrices(resData?.data[0]?.orignal_price);

            SetReletedSlug(resData?.data[0]?.categories[0]?.slug);


        } catch (error) {
            return;
        }
    }

    const handleChange = (e) => {
        setSizeValue(e.target.value);
    };


    function changeImage(src) {
        document.getElementById('mainImage').src = src;
    }
    GetProductDetail();

    useEffect(() => {
        Goto();
    }, [str])


    return (
        <>
            <div className="container flex justify-center">
                <div className=" sm:w-[80%] justify-center flex">
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-1/2 px-4 mb-8 mx-auto">
                                <div className='flex justify-items-center justify-center md:w-96 bg-white mx-auto h-96 rounded-lg shadow-md mb-4'>
                                    <LazyLoadImage src={thum} alt="Product" className="m-2 flex justify-center " id="mainImage" />
                                </div>

                                <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                                    {images?.map((item) => (
                                        <LazyLoadImage key={item?.id} src={item?.url} alt={item?.url}
                                            className="w-fit h-24 p-2 flex justify-center bg-white sm:size-18 object-cover rounded-md cursor-pointer hover:opacity-100 transition duration-300 border-2 shadow-md"
                                            onClick={() => changeImage(item?.url)}
                                        />
                                    )) ||
                                        <div>
                                            <LazyLoadImage src={""} />
                                            <LazyLoadImage src={""} />
                                            <LazyLoadImage src={""} />
                                        </div>
                                    }
                                </div>
                            </div>

                            <div className="mx-2 w-full sm:mx-0 md:w-1/2 px-4 bg-white shadow-md rounded-md py-2">
                                <h2 className={`text-lg md:text-xl font-semibold text-gray-900 mb-2 w-full ${ptitle ? '' : "animate-pulse w-full h-3 rounded-md bg-gray-300"}`} >{ptitle}</h2>
                                <p className={`font-semibold text-gray-900 mb-4 `}>Product Id:- #{getPID}</p>
                                <div className="mb-4">
                                    <span className="text-2xl font-bold mr-2"> &#x20b9;
                                        {Prices}</span>
                                    <span className="line-through ">&#x20b9;{orignalPrices}</span>
                                </div>
                                {/* show Ratings */}
                                <div className="flex items-center mb-4">
                                    <FaStar color='orange' />
                                    <FaStar color='orange' />
                                    <FaStar color='orange' />
                                    <FaStar color='orange' />
                                    <FaStarHalfAlt color='orange' />
                                    <p className="flex px-2 font-semibold text-gray-900"> 4.5 (120 reviews)</p>
                                </div>

                                {/* Desc cription */}
                                <div></div>
                                <ReactMarkdown className={`prose prose-h1:text-4xl prose-h1:text-green prose-p:text-base prose-strong:text-blue prose-ul:list-decimal prose-ul:text-dark`}>
                                    {getDesc}
                                </ReactMarkdown>


                                {/* <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-2">Color:</h3>
                                    <div className="flex space-x-2">
                                        <button
                                            className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                                        <button
                                            className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                                        <button
                                            className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
                                    </div>
                                </div> */}

                                <div className="mb-6">
                                    <label htmlFor="quantity" className="block text-xl font-semibold text-gray-700 mb-1">Quantity:</label>
                                    <input type="number" id="quantity" name="quantity" min="1" value="1" onChange={handleChange}
                                        className="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                </div>

                                <div className=" h-fit p-5 hover:bg-red-500 bg-blue-600 shadow-lg rounded-2xl float-right md:float-left" onClick={() => { handleAddToCart(cartData, "red", 1) }}>
                                    <FaCartPlus color='white' size={40} />
                                </div>

                                {/* <div>
                                    <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                                    <ul className="list-disc list-inside text-gray-700">
                                        <li>Industry-leading noise cancellation</li>
                                        <li>30-hour battery life</li>
                                        <li>Touch sensor controls</li>
                                        <li>Speak-to-chat technology</li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ReletedProducts />
        </>
    )
}

export default ProductDetailCard