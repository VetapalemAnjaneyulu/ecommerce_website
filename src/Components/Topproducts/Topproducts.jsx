import React from 'react';
import Img1 from "../../assets/Shirt/shirt.png";
import Img2 from "../../assets/Shirt/shirt2.png";
import Img3 from "../../assets/Shirt/shirt3.png";
import { FaStar } from "react-icons/fa"


const ProductData = [
    {
      id: 1,
      img: Img1,
      title: "Casual Wear",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: Img2,
      title: "Printed shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: Img3,
      title: "Women shirt",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

function Topproducts({handleOrderPopup}) {
  return (
    <div>
        <div className='container'>
            {/* Header section */}
            <div className='text-left mb-24'>
                <p className='text-sm text-secondary'>Top Rated Products for you</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Top Best Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit asperiories modi obcaecati!
                </p>
            </div>
            {/* Body Section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
                {
                     ProductData.map((data)=>(
                        <div key={data.id} data-aos='zoom-in' className='rounded-3xl bg-white dark:bg-gray-800 
                        hover:bg-black/80 dark:hover:bg-secondary hover:text-white
                         relative shadow-xl duration-300 group max-w-[300px]'>
                            {/* image section */}
                            <div className='h-[100px]'>
                                <img src={data.img} alt="" 
                                className='max-w-[140px] block mx-auto transform -translate-y-20
                                group-hover:scale-105 duration-300 drop-shadow-md'
                                />
                             </div> 
                             {/* details section */}
                             <div className='p-4 text-center'>
                                {/* star rating */}
                                <div className='w-full flex items-center justify-center gap-1'>
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                </div>
                                <h1 className='text-xl font-bold'>{data.title}</h1>
                                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                                <button
                                     className="bg-secondary group-hover:bg-white group-hover:text-secondary
                                     hover:scale-105 duration-300 text-white py-1 px-4 mt-4 rounded-full "
                                    onClick={handleOrderPopup} >Order Now</button>
                            </div>
                        </div>
                     ))
                }
            </div>

        </div>
    </div>
  )
}

export default Topproducts
